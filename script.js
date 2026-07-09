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
    "データベース": { credits:
