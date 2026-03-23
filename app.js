// === DOM 元素 ===
const views = {
    dashboard: document.getElementById('view-dashboard'),
    study: document.getElementById('view-study'),
    done: document.getElementById('view-done')
};
const els = {
    dTotal: document.getElementById('d-total'),
    dDue: document.getElementById('d-due'),
    startBtn: document.getElementById('start-btn'),
    resetBtn: document.getElementById('reset-btn'),
    homeBtn: document.getElementById('home-btn'),
    reviewCount: document.getElementById('stat-reviewCount'),

    progressFill: document.getElementById('study-progress'),
    progressText: document.getElementById('study-progress-text'),

    card: document.getElementById('flashcard'),
    kanjiFront: document.getElementById('card-kanji-front'),
    kanjiBack: document.getElementById('card-kanji-back'),
    reading: document.getElementById('card-reading'),
    meaning: document.getElementById('card-meaning'),
    pos: document.getElementById('card-pos'),

    actionPanel: document.getElementById('action-panel'),
    timeHard: document.getElementById('time-hard'),
    timeGood: document.getElementById('time-good'),
    timeEasy: document.getElementById('time-easy'),

    actionBtns: document.querySelectorAll('.action-btn')
};

// === 狀態管理 ===
let deck = []; // 所有單字卡
let todayQueue = []; // 今日要複習的清單
let currentCardIndex = 0;
let isFlipped = false;
const MAX_DAILY_CARDS = 30;

// === 初始化 ===
function init() {
    loadData();
    generateTodayQueue();
    renderDashboard();
    setupEventListeners();
}

function loadData() {
    // 嘗試從 localStorage 讀取
    const stored = localStorage.getItem('n3_vocab_deck');
    if (stored) {
        deck = JSON.parse(stored);

        let isUpdated = false;
        initialDeck.forEach(word => {
            const existingIdx = deck.findIndex(c => c.id === word.id);
            if (existingIdx === -1) {
                deck.push({
                    ...word,
                    status: 'New',
                    interval: 0,
                    lapses: 0,
                    isLeech: false,
                    playCount: 0,
                    nextReviewDate: null
                });
                isUpdated = true;
            } else {
                const exist = deck[existingIdx];
                if (exist.kanji !== word.kanji || exist.meaning !== word.meaning || exist.reading !== word.reading || exist.pos !== word.pos) {
                    exist.kanji = word.kanji;
                    exist.reading = word.reading;
                    exist.meaning = word.meaning;
                    exist.pos = word.pos;
                    isUpdated = true;
                }
                if (exist.isImportant !== word.isImportant) {
                    exist.isImportant = word.isImportant;
                    isUpdated = true;
                }
            }
        });

        if (isUpdated) saveData();
    } else {
        // 如果沒有，從 initialDeck (data.js 匯入) 建立
        deck = initialDeck.map(word => ({
            ...word,
            status: 'New', // 'New', 'Learning', 'Review'
            interval: 0, // 在複習間隔中的天數
            lapses: 0, // 忘記次數
            isLeech: false,
            playCount: 0,
            nextReviewDate: null // null 表示尚未開始學習
        }));
        saveData();
    }
}

function saveData() {
    localStorage.setItem('n3_vocab_deck', JSON.stringify(deck));
}

// 產生今日複習佇列
function generateTodayQueue() {
    const todayStr = new Date().toDateString();
    const queueDate = localStorage.getItem('n3_vocab_queueDate');
    let pendingQuota = parseInt(localStorage.getItem('n3_vocab_pendingQuota') || '0', 10);

    if (queueDate === todayStr) {
        const storedQueue = localStorage.getItem('n3_vocab_todayQueue');
        if (storedQueue) {
            let queueIds = JSON.parse(storedQueue);
            todayQueue = queueIds.map(id => deck.find(c => c.id === id)).filter(Boolean);
        } else {
            todayQueue = [];
        }
    } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 處理跨日累積配額
        let diffDays = 1;
        if (queueDate) {
            const lastDate = new Date(queueDate);
            diffDays = Math.max(1, Math.round((today - lastDate) / 86400000));
        } else {
            // 第一天使用
            diffDays = 0;
            pendingQuota = 30;
        }
        if (diffDays > 0) {
            pendingQuota += diffDays * 30;
        }
        localStorage.setItem('n3_vocab_pendingQuota', pendingQuota.toString());

        let dueCards = deck.filter(card => {
            if (card.status === 'Completed') return false;
            if (!card.nextReviewDate) return false;
            const reviewDate = new Date(card.nextReviewDate);
            return reviewDate <= today;
        });

        let newCards = deck.filter(card => card.status === 'New');

        todayQueue = [...dueCards];
        const newCardsNeed = Math.max(0, pendingQuota - dueCards.length);
        if (newCardsNeed > 0) {
            todayQueue = [...todayQueue, ...newCards.slice(0, newCardsNeed)];
        }

        todayQueue.sort(() => Math.random() - 0.5);

        localStorage.setItem('n3_vocab_queueDate', todayStr);
        localStorage.setItem('n3_vocab_initialQueueSize', todayQueue.length.toString());
        saveQueueData();
    }
    currentCardIndex = 0;
}

function saveQueueData() {
    const queueIds = todayQueue.map(c => c.id);
    localStorage.setItem('n3_vocab_todayQueue', JSON.stringify(queueIds));
}

// === 視圖切換與渲染 ===
function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    Object.values(views).forEach(v => v.classList.add('hidden'));

    views[viewName].classList.remove('hidden');
    views[viewName].classList.add('active');
}

function renderDashboard() {
    els.dCompleted = document.getElementById('d-completed');
    els.dNew = document.getElementById('footer-new-count');

    let totalCards = deck.length;
    let completedCount = deck.filter(c => c.status === 'Completed').length;

    els.dTotal.textContent = totalCards;
    els.dDue.textContent = todayQueue.length;
    
    if (els.dCompleted) els.dCompleted.textContent = completedCount;
    if (els.dNew) els.dNew.textContent = `未練習數量: ${Math.max(0, totalCards - completedCount)}`;
    
    els.reviewCount.textContent = todayQueue.length;

    if (todayQueue.length === 0) {
        els.startBtn.textContent = '今日已完成，請明天再來';
        els.startBtn.disabled = true;
        els.startBtn.style.opacity = 0.5;
    } else {
        els.startBtn.textContent = '開始練習';
        els.startBtn.disabled = false;
        els.startBtn.style.opacity = 1;
    }
}

// === 學習核心邏輯 ===
function startReview() {
    if (todayQueue.length === 0) return;
    switchView('study');
    showCard();
}

function showCard() {
    if (todayQueue.length === 0) {
        // 完成
        els.reviewCount.textContent = '0';
        switchView('done');
        return;
    }

    isFlipped = false;
    els.card.classList.remove('is-flipped');
    els.actionPanel.classList.remove('visible');

    const card = todayQueue[0];

    // 更新進度條
    const remaining = todayQueue.length;
    const maxCards = parseInt(localStorage.getItem('n3_vocab_initialQueueSize') || remaining.toString() || '30', 10);
    const progress = maxCards > 0 ? Math.min(100, Math.max(0, ((maxCards - remaining) / maxCards) * 100)) : 100;
    els.progressFill.style.width = `${progress}%`;
    els.progressText.textContent = `待練習: ${remaining} 張卡片`;
    els.reviewCount.textContent = remaining;

    // 渲染卡片內容
    els.kanjiFront.textContent = card.kanji || '無漢字';
    els.kanjiBack.textContent = card.kanji || '無漢字';
    els.reading.textContent = card.reading || '';
    els.meaning.textContent = card.meaning || '';
    els.pos.textContent = card.pos || '';

    // 星號處理
    els.starFront = document.getElementById('card-star-front');
    els.starBack = document.getElementById('card-star-back');
    if (card.isImportant) {
        if (els.starFront) els.starFront.classList.remove('hidden');
        if (els.starBack) els.starBack.classList.remove('hidden');
    } else {
        if (els.starFront) els.starFront.classList.add('hidden');
        if (els.starBack) els.starBack.classList.add('hidden');
    }

    // 預先計算四個按鈕的間隔提示（模擬此處運算）
    const intHard = calcInterval(card, 'Hard');
    const intGood = calcInterval(card, 'Good');
    const intEasy = calcInterval(card, 'Easy');

    els.timeHard.textContent = formatInterval(intHard);
    els.timeGood.textContent = formatInterval(intGood);
    els.timeEasy.textContent = formatInterval(intEasy);
}

function flipCard() {
    if (isFlipped) return;
    isFlipped = true;
    els.card.classList.add('is-flipped');
    els.actionPanel.classList.add('visible');
}

// 計算給定評分後的間隔天數（不儲存，純預覽）
function calcInterval(card, rating) {
    if (rating === 'Hard') return 1;
    if (rating === 'Good') return 3;
    if (rating === 'Easy') {
        if ((card.playCount || 0) + 1 >= 8) return -1;
        return 5;
    }
    return 1;
}

// 格式化間隔顯示
function formatInterval(days) {
    if (days === -1) return '不再出現';
    if (days === 0) return '< 1分';
    if (days < 30) return `${days}天`;
    if (days < 365) return `${Math.floor(days / 30)}月`;
    return `${Math.floor(days / 365)}年`;
}

// 提交評分
function handleRating(rating) {
    if (!isFlipped) return; // 防止重複點擊
    isFlipped = false;

    // 1. 先將卡片蓋回
    els.card.classList.remove('is-flipped');
    els.actionPanel.classList.remove('visible');

    // 2. 處理資料變更
    const cardRef = todayQueue[0];
    const originalCard = deck.find(c => c.id === cardRef.id);

    originalCard.playCount = (originalCard.playCount || 0) + 1;
    let nextIntv = calcInterval(originalCard, rating);
    originalCard.interval = nextIntv;

    if (nextIntv === -1) {
        originalCard.status = 'Completed';
        originalCard.nextReviewDate = null;
    } else {
        originalCard.status = 'Review';
        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + nextIntv);
        nextDate.setHours(0, 0, 0, 0);
        originalCard.nextReviewDate = nextDate.toISOString();
    }

    todayQueue.shift();
    
    let pendingQuota = parseInt(localStorage.getItem('n3_vocab_pendingQuota') || '0', 10);
    pendingQuota = Math.max(0, pendingQuota - 1);
    localStorage.setItem('n3_vocab_pendingQuota', pendingQuota.toString());
    
    saveData();
    saveQueueData();

    // 3. 延遲執行下一題的渲染，等卡片確實翻回來之後再換字（動畫預設為 0.6s，但視角上 0.3s 出現正面）
    setTimeout(() => {
        showCard();
    }, 400); // 延遲約 400ms 換牌
}

// === 事件綁定 ===
function setupEventListeners() {
    els.startBtn.addEventListener('click', startReview);

    els.card.addEventListener('click', flipCard);

    els.actionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!isFlipped) return;
            const rating = e.currentTarget.dataset.rating;
            handleRating(rating);
        });
    });

    els.homeBtn.addEventListener('click', () => {
        generateTodayQueue();
        renderDashboard();
        switchView('dashboard');
    });

    els.resetBtn.addEventListener('click', () => {
        if (confirm('確定要清除所有進度並重置回到全新狀態嗎？')) {
            localStorage.removeItem('n3_vocab_queueDate');
            localStorage.removeItem('n3_vocab_todayQueue');
            localStorage.removeItem('n3_vocab_deck');
            localStorage.removeItem('n3_vocab_pendingQuota');
            localStorage.removeItem('n3_vocab_initialQueueSize');
            location.reload();
        }
    });
}

// 啟動
document.addEventListener('DOMContentLoaded', init);
