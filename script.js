// ==========================================
// 📚 応用情報工学科 科目マスタデータ (カタログ)
// ==========================================
const COURSE_MASTER = {
    // --- 全学共通 ---
    "自主創造の基礎": { credits: 2, categories: ["全学共通"], detail: "全学共通" },

    // --- 教育科目 ＆ Ⅰ群 ---
    "倫理学": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "歴史学": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "文学": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "法学": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "社会学": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "経済学": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "日本国憲法": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "ことばと文化": { credits: 2, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "ドイツ語Ⅰ": { credits: 1, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "ドイツ語Ⅱ": { credits: 1, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "フランス語Ⅰ": { credits: 1, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "フランス語Ⅱ": { credits: 1, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "中国語Ⅰ": { credits: 1, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    "中国語Ⅱ": { credits: 1, categories: ["教育科目", "Ⅰ群"], detail: "教養・Ⅰ群" },
    
    // --- 教育科目 ＆ Ⅱ群 ---
    "哲学": { credits: 2, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    "日本語表現の基礎": { credits: 1, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    "クリティカル・シンキング": { credits: 1, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    "感性芸術学": { credits: 2, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    "心理学": { credits: 2, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    "スポーツⅡ": { credits: 1, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    "健康の科学": { credits: 1, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    "スポーツⅢ": { credits: 1, categories: ["教育科目", "Ⅱ群"], detail: "教養・Ⅱ群" },
    
    // --- 教育科目 ＆ Ⅱ群 ＆ 必修 ---
    "スポーツⅠ": { credits: 1, categories: ["教育科目", "Ⅱ群", "Ⅱ群必修"], detail: "教養・Ⅱ群必修" },
    
    // --- 教育科目 ＆ Ⅲ群 ---
    "技術者倫理": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "科学技術と人間": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "科学技術と経済": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "知的財産権論": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "科学技術史": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "現代物理学": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "地球環境化学": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "自然環境論": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    "地理学": { credits: 2, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅲ群" },
    
    // --- 教育科目 ＆ Ⅳ群 ---
    "総合講座": { credits: 2, categories: ["教育科目", "Ⅳ群"], detail: "教養・Ⅳ群" },
    "教養基礎ゼミナール": { credits: 1, categories: ["教育科目", "Ⅲ群"], detail: "教養・Ⅳ群" },
    
    // --- 基礎教育科目 ＆ 基礎英語必修 ---
    "英語ⅠA": { credits: 1, categories: ["基礎教育科目", "基礎英語必修"], detail: "英語必修" },
    "英語ⅠB": { credits: 1, categories: ["基礎教育科目", "基礎英語必修"], detail: "英語必修" },
    "英語ⅡA": { credits: 1, categories: ["基礎教育科目", "基礎英語必修"], detail: "英語必修" },
    "英語ⅡB": { credits: 1, categories: ["基礎教育科目", "基礎英語必修"], detail: "英語必修" },

    // --- 基礎教育科目 ＆ 基礎英語選択 ---
    "英語ⅢA": { credits: 1, categories: ["基礎教育科目", "基礎英語選択"], detail: "英語選択" },
    "英語ⅢB": { credits: 1, categories: ["基礎教育科目", "基礎英語選択"], detail: "英語選択" },
    "English Communication Ⅰ": { credits: 1, categories: ["基礎教育科目", "基礎英語選択"], detail: "英語選択" },
    "English Communication Ⅱ": { credits: 1, categories: ["基礎教育科目", "基礎英語選択"], detail: "英語選択" },

    // --- 基礎教育科目 ＆ 基礎英語特殊 ---
    "英語特殊講義A": { credits: 1, categories: ["基礎教育科目", "基礎英語特殊"], detail: "英語特殊" },
    "英語特殊講義B": { credits: 1, categories: ["基礎教育科目", "基礎英語特殊"], detail: "英語特殊" },

    // --- 基礎教育科目 ＆ 基礎科学 ＆ 各科学 ---
    "微分積分学Ⅰ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },
    "微分積分学Ⅱ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },
    "線形代数学Ⅰ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },
    "線形代数学Ⅱ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },
    "関数論Ⅰ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },
    "微分方程式Ⅰ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },
    "数理統計学Ⅰ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },
    "数理統計学Ⅱ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎数学"], detail: "基礎数学" },

    "物理学Ⅰ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎物理"], detail: "基礎物理" },
    "物理学Ⅱ": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎物理"], detail: "基礎物理" },
    "物理学Ⅰ演習": { credits: 1, categories: ["基礎教育科目", "基礎科学","基礎物理"], detail: "基礎物理" },
    "物理学Ⅱ演習": { credits: 1, categories: ["基礎教育科目", "基礎科学","基礎物理"], detail: "基礎物理" },
    "基礎物理学実験": { credits: 2, categories: ["基礎教育科目", "基礎科学","基礎物理"], detail: "基礎物理" },

    "物質の構造と状態": { credits: 2, categories: ["基礎教育科目", "基礎科学", "基礎化学"], detail: "基礎化学" },
    
    // --- 専門科目 ＆ 必修 ---
    "情報工学実験Ⅰ": { credits: 2, categories: ["専門科目", "専門必修"], detail: "1年前期必修" },
    "応用情報工学インセンティブ": { credits: 2, categories: ["専門科目", "専門必修"], detail: "1年前期必修" },
    "Cプログラム及び演習": { credits: 3, categories: ["専門科目", "専門必修"], detail: "1年前期必修" },
    "回路理論Ⅰ": { credits: 2, categories: ["専門科目", "専門必修"], detail: "1年前期必修" },
    "回路理論Ⅱ": { credits: 2, categories: ["専門科目", "専門必修"], detail: "1年後期必修" },
    "情報工学実験Ⅱ": { credits: 4, categories: ["専門科目", "専門必修"], detail: "2年通年必修" },
    "情報数学": { credits: 2, categories: ["専門科目", "専門必修"], detail: "2年前期必修" },
    "離散数学": { credits: 2, categories: ["専門科目", "専門必修"], detail: "2年後期必修" },
    "情報工学実験Ⅲ": { credits: 4, categories: ["専門科目", "専門必修"], detail: "3年通年必修" },
    "応用情報工学キャリアデザイン": { credits: 1, categories: ["専門科目", "専門必修"], detail: "3年後期必修" },
    "応用情報工学総合演習": { credits: 1, categories: ["専門科目", "専門必修"], detail: "3年後期必修" },
    "応用数学": { credits: 2, categories: ["専門科目", "専門必修"], detail: "3年前期必修" },
         
    // --- 専門科目 ＆ 選択 ---
    "情報基礎演習Ⅰ": { credits: 1, categories: ["専門科目", "専門選択"], detail: "1年前期学科選択" },
    "情報基礎演習Ⅱ": { credits: 1, categories: ["専門科目", "専門選択"], detail: "1年学科選択" },
    "論理回路": { credits: 2, categories: ["専門科目", "専門選択"], detail: "1年学科選択" },
    "計算機工学Ⅰ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "1年学科選択" },
    "計算機工学Ⅱ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "電気物理": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "数値解析": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "数値計算法": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "信号理論": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "キャリアデザイン入門": { credits: 1, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "代数概論Ⅰ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "代数概論Ⅱ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "幾何概論Ⅰ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "幾科学概論Ⅱ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "情報社会と倫理": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "情報職業論": { credits: 2, categories: ["専門科目", "専門選択"], detail: "学科選択" },
    "オブジェクト指向プログラミング": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "Javaプログラミング": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "データ構造とアルゴリズム及び演習": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "情報セキュリティ基礎": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "情報ネットワーク基礎": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "組込回路Ⅰ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "組込回路Ⅱ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "情報デバイス": { credits: 2, categories: ["専門科目", "専門選択"], detail: "2年学科選択" },
    "情報理論": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "ソフトウェア工学": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "マネジメント工学": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "インターンシップ": { credits: 1, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "応用統計": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "画像処理": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "パターン認識": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "シミュレーション工学": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "データベース": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "ネットワークシステム": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "通信システム基礎": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "人工知能": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "組込システムⅠ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "オペレーティングシステム": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "制御理論": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "システム工学": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "ディジタル信号処理": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "計測システム": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "オプトエレクトロニクス": { credits: 2, categories: ["専門科目", "専門選択"], detail: "3年学科選択" },
    "オートマトン": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "交通情報システム": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "環境情報": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "プロジェクト実習": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "データマイニング": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "マルチメディア": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "コンピュータグラフィックス": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "情報通信システム": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "特殊無線概論": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "組込システムⅡ": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    "ロボット工学": { credits: 2, categories: ["専門科目", "専門選択"], detail: "4年学科選択" },
    
    // --- 専門科目 ＆ 卒論 ---
    "卒業研究": { credits: 6, categories: ["専門科目", "卒論"], detail: "卒論" }
};

// ==========================================
// 🎯 卒業要件の基準値
// ==========================================
const GRADUATION_REQUIREMENTS = {
    "全学共通": 2,
    "教育科目": 16,
    "Ⅰ群": 6,
    "Ⅱ群": 4,
    "Ⅱ群必修": 1,
    "Ⅲ群": 4,
    "Ⅳ群": 0,
    "基礎教育科目": 22,
    "基礎英語必修": 4,
    "基礎英語選択": 2,
    "基礎英語特殊": 1,
    "基礎科学": 10,
    "基礎物理": 2,
    "基礎化学": 2,
    "専門科目": 86,
    "専門必修": 27,
    "専門選択": 53,
    "卒論": 6
};

// --- アプリの状態管理 ---
let appState = {
    courses: []
};

const GRADE_POINTS = { 'S': 4, 'A': 3, 'B': 2, 'C': 1, 'D': 0, 'E': 0 };

const courseSelect = document.getElementById('course-select');
const mainScreen = document.getElementById('main-screen');
const pwdScreen = document.getElementById('password-screen');

// --- 1. 初期化処理 ---
function init() {
    courseSelect.innerHTML = "";
    for (const courseName in COURSE_MASTER) {
        const option = document.createElement('option');
        option.value = courseName;
        const info = COURSE_MASTER[courseName];
        option.innerText = `${courseName} (${info.credits}単位 / ${info.detail})`;
        courseSelect.appendChild(option);
    }

    const savedData = localStorage.getItem('gpa_app_data_v9');
    if (savedData) {
        appState = JSON.parse(savedData);
    }

    // 【修正点】鍵画面をふたたび有効化（メイン画面は最初は隠す）
    if (pwdScreen) pwdScreen.classList.remove('hidden');
    if (mainScreen) mainScreen.classList.add('hidden');
    
    render();
}

// 【修正点】鍵機能（パスワード認証）のロジックを再実装
if (document.getElementById('login-btn')) {
    document.getElementById('login-btn').addEventListener('click', checkPassword);
}
if (document.getElementById('password-input')) {
    document.getElementById('password-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
}

function checkPassword() {
    const input = document.getElementById('password-input').value;
    if (input === "1234") { // パスワードは「1234」
        if (pwdScreen) pwdScreen.classList.add('hidden');
        if (mainScreen) mainScreen.classList.remove('hidden');
    } else {
        alert("パスワードが違います。");
    }
}

// --- 2. 計算 ＆ 画面の再描画 ---
function render() {
    let totalGP = 0;
    let totalCreditsForGPA = 0;
    let grandTotalEarned = 0;

    let earnedCreditsByCategory = {};
    for (const category in GRADUATION_REQUIREMENTS) {
        earnedCreditsByCategory[category] = 0;
    }

    const tbody = document.getElementById('course-list');
    tbody.innerHTML = "";

    appState.courses.forEach((savedCourse, index) => {
        const masterInfo = COURSE_MASTER[savedCourse.name];
        if (!masterInfo) return;

        const gp = GRADE_POINTS[savedCourse.grade];
        
        totalGP += gp * masterInfo.credits;
        totalCreditsForGPA += masterInfo.credits;

        if (savedCourse.grade !== 'D' && savedCourse.grade !== 'E') {
            grandTotalEarned += masterInfo.credits;
            
            if (masterInfo.categories && Array.isArray(masterInfo.categories)) {
                masterInfo.categories.forEach(cat => {
                    if (earnedCreditsByCategory[cat] !== undefined) {
                        earnedCreditsByCategory[cat] += masterInfo.credits;
                    }
                });
            }
        }

        const catListText = masterInfo.categories ? masterInfo.categories.join(', ') : '';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${savedCourse.name}</strong></td>
            <td><small>${catListText} (${masterInfo.detail})</small></td>
            <td>${masterInfo.credits}</td>
            <td><span style="font-weight:bold;">${savedCourse.grade}</span></td>
            <td><button class="delete-btn" onclick="deleteCourse(${index})">削除</button></td>
        `;
        tbody.appendChild(tr);
    });

    const gpa = totalCreditsForGPA > 0 ? (totalGP / totalCreditsForGPA).toFixed(2) : "0.00";
    const totalRemaining = Math.max(0, 126 - grandTotalEarned);

    document.getElementById('gpa-display').innerHTML = `
        ${gpa} 
        <span style="font-size: 14px; color: #555; font-weight: normal; margin-left: 15px;">
            (総修得単位: <strong>${grandTotalEarned}</strong> / 126 単位 ➔ あと <strong>${totalRemaining}</strong> 単位)
        </span>
    `;

    const summaryDiv = document.getElementById('category-summary');
    summaryDiv.innerHTML = "";

    for (const category in GRADUATION_REQUIREMENTS) {
        const required = GRADUATION_REQUIREMENTS[category];
        const earned = earnedCreditsByCategory[category];
        const remaining = Math.max(0, required - earned);

        let statusText = "";
        if (required === 0) {
            statusText = earned > 0 
                ? `<span style="color: #0f9d58; font-weight:bold;">✅ プラスα修得！</span>` 
                : `<span style="color: #888;">(任意選択)</span>`;
        } else {
            statusText = remaining === 0 
                ? `<span style="color: #0f9d58; font-weight:bold;">✅ 達成！</span>` 
                : `(あと <strong style="color: #d93025;">${remaining}</strong> 単位不足)`;
        }

        const item = document.createElement('div');
        item.style.padding = "6px 0";
        item.style.borderBottom = "1px dashed #eee";
        item.innerHTML = `
            <strong>${category}</strong>: 
            修得済 <span style="color:#1a73e8; font-weight:bold;">${earned}</span> / 必要 ${required} 単位 
            ${statusText}
        `;
        summaryDiv.appendChild(item);
    }
}

// --- 3. データの追加・削除・保存 ---
document.getElementById('add-btn').addEventListener('click', () => {
    const name = courseSelect.value;
    const grade = document.getElementById('course-grade').value;

    if (!name) return;

    appState.courses.push({ name, grade });
    saveToStorage();
    render();
});

window.deleteCourse = function(index) {
    appState.courses.splice(index, 1);
    saveToStorage();
    render();
};

function saveToStorage() {
    localStorage.setItem('gpa_app_data_v9', JSON.stringify(appState));
}

document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm("すべてのデータをリセットしますか？")) {
        localStorage.removeItem('gpa_app_data_v9');
        location.reload();
    }
});

// アプリ起動
init();
