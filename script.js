// --- 状態管理用オブジェクト（データ構造） ---
let appState = {
    password: "",
    courses: [],
    requiredCredits: 124
};

// --- GP（グレードポイント）の変換マッピング ---
const GRADE_POINTS = { 'S': 4, 'A': 3, 'B': 2, 'C': 1, 'D': 0, 'E': 0 };

// --- 画面要素の取得 ---
const pwdScreen = document.getElementById('password-screen');
const mainScreen = document.getElementById('main-screen');
const pwdTitle = document.getElementById('pwd-title');
const pwdInput = document.getElementById('pwd-input');
const pwdBtn = document.getElementById('pwd-btn');
const pwdError = document.getElementById('pwd-error');

// --- 1. 初期化処理 (アプリ起動時に走る) ---
function init() {
    // LocalStorageからデータを読み込む
    const savedData = localStorage.getItem('gpa_app_data');
    if (savedData) {
        appState = JSON.parse(savedData);
    }

    // パスワードが設定されているかどうかで画面を分岐
    if (!appState.password) {
        pwdTitle.innerText = "🔑 初回設定: パスワードを決めてください";
        pwdScreen.classList.remove('hidden');
    } else {
        pwdTitle.innerText = "🔒 パスワードを入力してください";
        pwdScreen.classList.remove('hidden');
    }
}

// --- 2. パスワード認証・設定処理 ---
pwdBtn.addEventListener('click', () => {
    const inputVal = pwdInput.value.trim();
    if (!inputVal) {
        pwdError.innerText = "パスワードを入力してください。";
        return;
    }

    if (!appState.password) {
        // 初回登録時
        appState.password = btoa(inputVal); // 簡易的なエンコードをして保存
        saveToStorage();
        enterMainScreen();
    } else {
        // 2回目以降の認証時
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
    document.getElementById('req-credits-input').value = appState.requiredCredits;
    render();
}

// --- 3. 計算 ＆ 画面の再描画 ---
function render() {
    let totalGP = 0;
    let totalCreditsForGPA = 0; // GPA計算の分母用（D, Eは除外）
    let totalEarnedCredits = 0; // 修得済み単位数（S, A, B, C）

    const tbody = document.getElementById('course-list');
    tbody.innerHTML = ""; // 一旦リストを空にする

    appState.courses.forEach((course, index) => {
        const gp = GRADE_POINTS[course.grade];
        
        // GPA計算用の集計（D, E評価は分母・分子ともに含めない制約）
        if (course.grade !== 'D' && course.grade !== 'E') {
            totalGP += gp * course.credits;
            totalCreditsForGPA += course.credits;
            totalEarnedCredits += course.credits; // 合格なので修得単位に加算
        }

        // テーブルに行を追加
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${course.name}</td>
            <td>${course.credits}</td>
            <td>${course.grade}</td>
            <td><button class="delete-btn" onclick="deleteCourse(${index})">削除</button></td>
        `;
        tbody.appendChild(tr);
    });

    // GPAの算出 (分母が0のときは0.00にする)
    const gpa = totalCreditsForGPA > 0 ? (totalGP / totalCreditsForGPA).toFixed(2) : "0.00";
    
    // 不足単位数の算出（マイナスにならないよう Math.max を使用）
    const remainingCredits = Math.max(0, appState.requiredCredits - totalEarnedCredits);

    // 画面の数値を更新
    document.getElementById('gpa-display').innerText = gpa;
    document.getElementById('earned-display').innerText = totalEarnedCredits;
    document.getElementById('remaining-display').innerText = remainingCredits;
}

// --- 4. データの追加・削除・保存機能 ---
document.getElementById('add-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('course-name');
    const creditsInput = document.getElementById('course-credits');
    const gradeInput = document.getElementById('course-grade');

    const name = nameInput.value.trim() || "未設定の授業";
    const credits = parseInt(creditsInput.value) || 0;
    const grade = gradeInput.value;

    if (credits <= 0) {
        alert("単位数は1以上を入力してください。");
        return;
    }

    // 配列に新しい授業を追加
    appState.courses.push({ name, credits, grade });
    saveToStorage();
    render();

    // 入力欄をクリア
    nameInput.value = "";
    creditsInput.value = "";
});

// 特定の授業を削除する関数
window.deleteCourse = function(index) {
    appState.courses.splice(index, 1);
    saveToStorage();
    render();
};

// 必要単位数が変更された時の処理
document.getElementById('req-credits-input').addEventListener('input', (e) => {
    appState.requiredCredits = parseInt(e.target.value) || 0;
    saveToStorage();
    render();
});

// LocalStorageへのデータ自動保存
function saveToStorage() {
    localStorage.setItem('gpa_app_data', JSON.stringify(appState));
}

// --- 5. データの一括リセット機能 ---
document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm("本当にすべてのデータを削除して初期化しますか？\nこの操作は取り消せません。")) {
        localStorage.removeItem('gpa_app_data');
        location.reload(); // ページを再読み込みして初期状態に戻す
    }
});

// アプリの起動
init();
