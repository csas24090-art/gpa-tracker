// ==========================================
// 📚 応用情報工学科 科目マスタデータ (カタログ)
// ==========================================
// ご指定いただいた15個の科目区分にすべて分類し直しました！
const COURSE_MASTER = {
    // --- 全学共通 ---
    "自主創造の基礎": { credits: 2, category: "全学共通", detail: "初年次教育" },

    // --- 教育・Ⅰ群 ---
    "倫理学": { credits: 2, category: "教育 snuff・Ⅰ群", detail: "教養・哲学" },
    "法学": { credits: 2, category: "教育・Ⅰ群", detail: "教養・社会科学" },
    "日本国憲法": { credits: 2, category: "教育・Ⅰ群", detail: "教養・社会科学" },

    // --- 教育 snuff・Ⅱ群・必修 ---
    "英語Ⅰ": { credits: 1, category: "教育・Ⅱ群・必修", detail: "外国語" },
    "英語Ⅱ": { credits: 1, category: "教育・Ⅱ群・必修", detail: "外国語" },

    // --- 教育・Ⅱ群 snuff・選択 ---
    "経済学": { credits: 2, category: "教育・Ⅱ群・選択", detail: "教養・社会" },
    "心理学": { credits: 2, category: "教育・Ⅱ群・選択", detail: "教養・人文" },

    // --- 教育 snuff・Ⅲ群 ---
    "スポーツ科学演習Ⅰ": { credits: 1, category: "教育・Ⅲ群", detail: "保健体育" },

    // --- 教育・Ⅳ群 ---
    // ※必要に応じて要覧から追加してください（例: ゼミナールや特殊科目など）

    // --- 基礎教育科目・基礎英語必修 ---
    // ※学科の要件に合わせて必要な英語科目を追加してください

    // --- 基礎教育科目・基礎英語選択 ---
    // ※選択の英語科目を追加してください

    // --- 基礎教育科目・基礎英語特殊 ---
    // ※特殊な英語科目を追加してください

    // --- 基礎教育科目・基礎科学・基礎数学 ---
    "微分積分学Ⅰ": { credits: 2, category: "基礎教育科目・基礎科学・基礎数学", detail: "数理必修" },
    "微分積分学Ⅱ": { credits: 2, category: "基礎教育科目・基礎科学・基礎数学", detail: "数理必修" },
    "微分積分学演習Ⅰ": { credits: 1, category: "基礎教育科目・基礎科学・基礎数学", detail: "数理必修" },
    "線形代数学Ⅰ": { credits: 2, category: "基礎教育科目・基礎科学・基礎数学", detail: "数理必修" },
    "線形代数学Ⅱ": { credits: 2, category: "基礎教育科目・基礎科学・基礎数学", detail: "数理必修" },

    // --- 基礎教育科目・基礎科学・基礎物理 ---
    "物理学Ⅰ": { credits: 2, category: "基礎教育科目・基礎科学・基礎物理", detail: "自然科学" },
    "物理学実験": { credits: 1, category: "基礎教育科目・基礎科学・基礎物理", detail: "実験必修" },

    // --- 基礎教育科目 snuff・基礎科学・基礎化学 ---
    "化学Ⅰ": { credits: 2, category: "基礎教育科目・基礎科学・基礎化学", detail: "自然科学" },
    "化学実験": { credits: 1, category: "基礎教育科目・基礎科学・基礎化学", detail: "実験必修" },

    // --- 専門・必修 ---
    "応用情報工学インセンティブ": { credits: 2, category: "専門・必修", detail: "学科必修" },
    "応用情報工学概論": { credits: 2, category: "専門・必修", detail: "学科必修" },
    "情報リテラシー演習": { credits: 1, category: "専門・必修", detail: "学科必修" },
    "Cプログラミング及び演習": { credits: 3, category: "専門・必修", detail: "学科必修" },
    "データ構造とアルゴリズム": { credits: 2, category: "専門・必修", detail: "学科必修" },
    "ロジック回路": { credits: 2, category: "専門・必修", detail: "学科必修" },
    "離散数学": { credits: 2, category: "専門・必修", detail: "学科必修" },
    "情報工学実験Ⅰ": { credits: 2, category: "専門・必修", detail: "実験必修" },
    "情報工学実験Ⅱ": { credits: 2, category: "専門・必修", detail: "実験必修" },

    // --- 専門・選択 ---
    "計算機工学": { credits: 2, category: "専門・選択", detail: "専門選択" },
    "オブジェクト指向プログラミング": { credits: 2, category: "専門 snuff・選択", detail: "専門選択" },

    // --- 専門 snuff・卒研 ---
    "卒業研究": { credits: 6, category: "専門・卒研", detail: "必修" }
};

// ==========================================
// 🎯 卒業要件の基準値 (15区分・完全対応)
// ==========================================
// ※割り振り単位数は手書きの図（14, 26, 86）をベースに仮置きしています。
// 大学の規定に合わせてここの数値を自由に変更してください。
const GRADUATION_REQUIREMENTS = {
    "全学共通": 2,
    "教育・Ⅰ群": 6,
    "教育・Ⅱ群・必修": 2,
    "教育・Ⅱ群・選択": 3,
    "教育・Ⅲ群": 1,
    "教育・Ⅳ群": 0,
    "基礎教育科目・基礎英語必修": 0,
    "基礎教育科目・基礎英語選択": 0,
    "基礎教育科目・基礎英語特殊": 0,
    "基礎教育科目・基礎科学・基礎数学": 9,
    "基礎教育科目・基礎科学・基礎物理": 9,
    "基礎教育科目・基礎科学・基礎化学 snuff": 8,
    "専門・必修": 27,
    "専門・選択": 53,
    "専門・卒研": 6
};

// --- アプリの状態管理 ---
let appState = {
    password: "",
    courses: []
};

const GRADE_POINTS = { 'S': 4, 'A': 3, 'B': 2, 'C': 1, 'D': 0, 'E': 0 };

const pwdScreen = document.getElementById('password-screen');
const mainScreen = document.getElementById('main-screen');
const pwdTitle = document.getElementById('pwd-title');
const pwdInput = document.getElementById('pwd-input');
const pwdBtn = document.getElementById('pwd-btn');
const pwdError = document.getElementById('pwd-error');
const courseSelect = document.getElementById('course-select');

// --- 1. 初期化処理 ---
function init() {
    courseSelect.innerHTML = "";
    for (const courseName in COURSE_MASTER) {
        const option = document.createElement('option');
        option.value = courseName;
        const info = COURSE_MASTER[courseName];
        option.innerText = `${courseName} (${info.credits}単位 / [${info.category}])`;
        courseSelect.appendChild(option);
    }

    const savedData = localStorage.getItem('gpa_app_data_v5'); // 衝突を防ぐためv5に変更
    if (savedData) {
        appState = JSON.parse(savedData);
    }

    if (!appState.password) {
        pwdTitle.innerText = "🔑 初回設定: パスワードを決めてください";
        pwdScreen.classList.remove('hidden');
    } else {
        pwdTitle.innerText = "🔒 パスワードを入力してください";
        pwdScreen.classList.remove('hidden');
    }
}

// --- 2. パスワード認証 ---
pwdBtn.addEventListener('click', () => {
    const inputVal = pwdInput.value.trim();
    if (!inputVal) { pwdError.innerText = "パスワードを入力してください。"; return; }

    if (!appState.password) {
        appState.password = btoa(inputVal);
        saveToStorage();
        enterMainScreen();
    } else {
        if (btoa(inputVal) === appState.password) {
            enterMainScreen();
        } else {
            pwdError.innerText = "パスワードが違います！";
        }
    }
});

function enterMainScreen() {
    pwdScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    render();
}

// --- 3. 計算 ＆ 画面の再描画 ---
function render() {
    let totalGP = 0;
    let totalCreditsForGPA = 0;
    let grandTotalEarned = 0;

    // 15個の区分でカウンターを初期化
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
        
        if (savedCourse.grade !== 'D' && savedCourse.grade !== 'E') {
            totalGP += gp * masterInfo.credits;
            totalCreditsForGPA += masterInfo.credits;
            grandTotalEarned += masterInfo.credits;
            
            if (earnedCreditsByCategory[masterInfo.category] !== undefined) {
                earnedCreditsByCategory[masterInfo.category] += masterInfo.credits;
            }
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${savedCourse.name}</strong></td>
            <td><small>${masterInfo.category} (${masterInfo.detail})</small></td>
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

        // 必要単位数が0の区分は、1単位でも取れば達成、0なら表示をシンプルに
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

// --- 4. データの追加・削除・保存 ---
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
    localStorage.setItem('gpa_app_data_v5', JSON.stringify(appState));
}

document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm("すべてのデータをリセットしますか？")) {
        localStorage.removeItem('gpa_app_data_v5');
        location.reload();
    }
});

// アプリ起動
init();
