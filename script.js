// ==========================================
// 📚 応用情報工学科 科目マスタデータ (カタログ)
// ==========================================
// 授業名を選択したときに、単位数・科目区分・群が自動で引き出されます。
const COURSE_MASTER = {
    // --- 全学共通・教養教育科目 ---
    "自主創造の基礎": { credits: 2, category: "全学共通・教養教育科目", detail: "全学共通・必修" },
    "倫理学": { credits: 2, category: "全学共通・教養教育科目", detail: "教養・Ⅰ群" },
    "法学": { credits: 2, category: "全学共通・教養教育科目", detail: "教養・Ⅰ群" },
    "経済学": { credits: 2, category: "全学共通・教養教育科目", detail: "教養 snuff・Ⅱ群" },
    "英語Ⅰ": { credits: 1, category: "全学共通・教養教育科目", detail: "外国語・必修" },
    "英語Ⅱ": { credits: 1, category: "全学共通・教養教育科目", detail: "外国語・必修" },

    // --- 基礎教育科目 ---
    "微分積分学Ⅰ": { credits: 2, category: "基礎教育科目", detail: "数理・必修" },
    "微分積分学Ⅱ": { credits: 2, category: "基礎教育科目", detail: "数理・必修" },
    "線形代数学Ⅰ": { credits: 2, category: "基礎教育科目", detail: "数理・必修" },
    "物理学実験": { credits: 1, category: "基礎教育科目", detail: "実験・必修" },
    "化学実験": { credits: 1, category: "基礎教育科目", detail: "実験・必修" },

    // --- 専門教育科目 ---
    "応用情報工学概論": { credits: 2, category: "専門教育科目", detail: "専門・必修" },
    "Cプログラミング及び演習": { credits: 3, category: "専門教育科目", detail: "専門・必修" },
    "データ構造とアルゴリズム": { credits: 2, category: "専門教育科目", detail: "専門・必修" },
    "計算機工学": { credits: 2, category: "専門教育科目", detail: "専門・選択必修" },
    "情報工学実験Ⅰ": { credits: 2, category: "専門教育科目", detail: "実験・必修" },
    "卒業研究": { credits: 6, category: "専門教育科目", detail: "専門・必修" }
};

// ==========================================
// 🎯 卒業要件の基準値 (最低必要単位数)
// ==========================================
const GRADUATION_REQUIREMENTS = {
    "全学共通・教養教育科目": 14,
    "基礎教育科目": 20,
    "専門教育科目": 90
};

// --- アプリの状態管理 ---
let appState = {
    password: "",
    courses: [] // 保存されるデータ: { name, grade } だけ！(他はマスタから自動取得)
};

// --- GP（グレードポイント）の変換 ---
const GRADE_POINTS = { 'S': 4, 'A': 3, 'B': 2, 'C': 1, 'D': 0, 'E': 0 };

// --- 画面要素の取得 ---
const pwdScreen = document.getElementById('password-screen');
const mainScreen = document.getElementById('main-screen');
const pwdTitle = document.getElementById('pwd-title');
const pwdInput = document.getElementById('pwd-input');
const pwdBtn = document.getElementById('pwd-btn');
const pwdError = document.getElementById('pwd-error');
const courseSelect = document.getElementById('course-select');

// --- 1. 初期化処理 ---
function init() {
    // ドロップダウンにマスタデータの科目を詰め込む
    courseSelect.innerHTML = "";
    for (const courseName in COURSE_MASTER) {
        const option = document.createElement('option');
        option.value = courseName;
        // 画面で見やすいように「授業名 (単位数・区分)」の形式で表示
        const info = COURSE_MASTER[courseName];
        option.innerText = `${courseName} (${info.credits}単位 / ${info.detail})`;
        courseSelect.appendChild(option);
    }

    // LocalStorageからデータを読み込む
    const savedData = localStorage.getItem('gpa_app_data_v2'); // バージョン2として保存
    if (savedData) {
        appState = JSON.parse(savedData);
    }

    // パスワード画面の分岐
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

// --- 3. 計算 ＆ 画面の再描画 (マスタデータ連動・自動集計版) ---
function render() {
    let totalGP = 0;
    let totalCreditsForGPA = 0;

    // 各区分の「現在の修得単位数」を数えるためのカウンターを初期化
    let earnedCreditsByCategory = {
        "全学共通・教養教育科目": 0,
        "基礎教育科目": 0,
        "専門教育科目": 0
    };

    const tbody = document.getElementById('course-list');
    tbody.innerHTML = "";

    // ユーザーが追加した履修リストを1つずつ処理
    appState.courses.forEach((savedCourse, index) => {
        // 授業名をもとに、マスタデータから単位数や区分を「引き出す」
        const masterInfo = COURSE_MASTER[savedCourse.name];
        
        // もしマスタデータに存在しない古いデータがあればスキップ
        if (!masterInfo) return;

        const gp = GRADE_POINTS[savedCourse.grade];
        
        // 合格（D, E以外）の場合の処理
        if (savedCourse.grade !== 'D' && savedCourse.grade !== 'E') {
            totalGP += gp * masterInfo.credits;
            totalCreditsForGPA += masterInfo.credits;
            
            // 対応する科目の区分に、マスタデータの単位数を加算！
            if (earnedCreditsByCategory[masterInfo.category] !== undefined) {
                earnedCreditsByCategory[masterInfo.category] += masterInfo.credits;
            }
        }

        // テーブルに行を追加
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

    // ① 通算GPAの算出
    const gpa = totalCreditsForGPA > 0 ? (totalGP / totalCreditsForGPA).toFixed(2) : "0.00";
    document.getElementById('gpa-display').innerText = gpa;

    // ② 【新機能】科目区分ごとの充足状況エリアの描画
    const summaryDiv = document.getElementById('category-summary');
    summaryDiv.innerHTML = "";

    for (const category in GRADUATION_REQUIREMENTS) {
        const required = GRADUATION_REQUIREMENTS[category];
        const earned = earnedCreditsByCategory[category];
        const remaining = Math.max(0, required - earned); // 不足単位数

        // 見た目をわかりやすくするためのテキスト色判定
        const statusText = remaining === 0 
            ? `<span style="color: #0f9d58; font-weight:bold;">✅ 達成！</span>` 
            : `(あと <strong style="color: #d93025;">${remaining}</strong> 単位不足)`;

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

    // 配列には「授業名」と「成績」の最小限だけを保存する
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
    localStorage.setItem('gpa_app_data_v2', JSON.stringify(appState));
}

document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm("すべてのデータをリセットしますか？")) {
        localStorage.removeItem('gpa_app_data_v2');
        location.reload();
    }
});

// アプリ起動
init();
