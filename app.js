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
    } else {
        // 如果沒有，從 initialDeck (data.js 匯入) 建立
        deck = initialDeck.map(word => ({
            ...word,
            status: 'New', // 'New', 'Learning', 'Review'
            interval: 0, // 在複習間隔中的天數
            lapses: 0, // 忘記次數
            isLeech: false, 
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
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 取當天 00:00:00 比較
    
    // 1. 先找出到期該複習的卡片 (Review/Learning 中且 nextReviewDate <= 今日)
    let dueCards = deck.filter(card => {
        if (!card.nextReviewDate) return false;
        const reviewDate = new Date(card.nextReviewDate);
        return reviewDate <= today;
    });
    
    // 2. 找出全新的卡片
    let newCards = deck.filter(card => card.status === 'New');
    
    // 3. 組合每日清單 (優先複習舊卡，再塞新卡，湊滿 MAX_DAILY_CARDS)
    todayQueue = [...dueCards];
    const newCardsNeed = Math.max(0, MAX_DAILY_CARDS - dueCards.length);
    if (newCardsNeed > 0) {
        todayQueue = [...todayQueue, ...newCards.slice(0, newCardsNeed)];
    }
    
    // 隨機打亂佇列
    todayQueue.sort(() => Math.random() - 0.5);
    currentCardIndex = 0;
}

// === 視圖切換與渲染 ===
function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    Object.values(views).forEach(v => v.classList.add('hidden'));
    
    views[viewName].classList.remove('hidden');
    views[viewName].classList.add('active');
}

function renderDashboard() {
    els.dTotal.textContent = deck.length;
    els.dDue.textContent = todayQueue.length;
    els.reviewCount.textContent = todayQueue.length;
    
    if (todayQueue.length === 0) {
        els.startBtn.textContent = '今日任務已完成';
        els.startBtn.disabled = true;
        els.startBtn.style.opacity = 0.5;
    } else {
        els.startBtn.textContent = '開始複習';
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
    const progress = Math.min(100, Math.max(0, ((MAX_DAILY_CARDS - remaining) / MAX_DAILY_CARDS) * 100));
    els.progressFill.style.width = `${progress}%`;
    els.progressText.textContent = `待複習: ${remaining} 張卡片`;
    els.reviewCount.textContent = remaining;
    
    // 渲染卡片內容
    els.kanjiFront.textContent = card.kanji || '無漢字';
    els.kanjiBack.textContent = card.kanji || '無漢字';
    els.reading.textContent = card.reading || '';
    els.meaning.textContent = card.meaning || '';
    els.pos.textContent = card.pos || '';
    
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
    let intv = card.interval || 0;
    if (card.status === 'New' || card.status === 'Learning') {
        if (rating === 'Hard') return 1;
        if (rating === 'Good') return 3;
        if (rating === 'Easy') return 5;
        return 1;
    }
    
    if (rating === 'Hard') return Math.max(1, Math.round(intv * 1.2));
    if (rating === 'Good') return Math.max(3, Math.round((intv || 1) * 2.5));
    if (rating === 'Easy') return Math.max(5, Math.round((intv || 1) * 4));
    return 1;
}

// 格式化間隔顯示
function formatInterval(days) {
    if (days === 0) return '< 1分';
    if (days < 30) return `${days}天`;
    if (days < 365) return `${Math.floor(days/30)}月`;
    return `${Math.floor(days/365)}年`;
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
    
    let nextIntv = calcInterval(originalCard, rating);
    originalCard.status = 'Review';
    originalCard.interval = nextIntv;
    
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + (nextIntv || 0));
    nextDate.setHours(0,0,0,0);
    originalCard.nextReviewDate = nextDate.toISOString();
    
    todayQueue.shift();
    saveData();
    
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
        if(confirm('確定要清除所有進度並重置回到全新狀態嗎？')) {
            localStorage.removeItem('n3_vocab_deck');
            location.reload();
        }
    });
}

// 啟動
document.addEventListener('DOMContentLoaded', init);
