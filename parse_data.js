const fs = require('fs');

const mdPath = 'd:\\小儀工作區\\5.切版區\\5.小程式\\N3日文單字\\日文單字整理表 (新日檢完勝500題).md';
const outPath = 'd:\\小儀工作區\\5.切版區\\5.小程式\\N3日文單字\\code\\data.js';

const content = fs.readFileSync(mdPath, 'utf8');
const lines = content.split('\n');

const data = [];
let currentSection = '';

lines.forEach(line => {
    line = line.trim();
    if (line.startsWith('## ')) {
        currentSection = line.substring(3).trim();
    }
    
    if (!line.startsWith('|') || line.includes('---') || line.includes('漢字') || line.includes('中文意思')) {
        return;
    }
    
    const parts = line.split('|').slice(1, -1).map(s => s.trim());
    let kanji = parts[0];
    let reading = "";
    
    const match = kanji.match(/(.+)[（(](.+)[）)]/);
    if (match) {
        kanji = match[1].trim();
        reading = match[2].trim();
    }
    
    if (currentSection === '單字' && parts.length >= 3) {
        data.push({
            id: 'word_' + (data.length + 1),
            kanji: kanji,
            reading: reading,
            pos: parts[1] || '',
            meaning: parts[2] || ''
        });
    } else if (currentSection === '慣用語' && parts.length >= 2) {
        data.push({
            id: 'word_' + (data.length + 1),
            kanji: kanji,
            reading: reading,
            pos: '慣用語',
            meaning: parts[1] || ''
        });
    }
});

const jsContent = `const initialDeck = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(outPath, jsContent, 'utf8');
console.log('Saved ' + data.length + ' words to data.js');
