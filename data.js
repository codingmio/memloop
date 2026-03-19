const initialDeck = [
  {
    "id": "word_1",
    "kanji": "出会う",
    "reading": "であう",
    "pos": "第一類動詞 (五段)",
    "meaning": "相遇、相逢"
  },
  {
    "id": "word_2",
    "kanji": "届ける",
    "reading": "とどける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "送到、遞送或報案"
  },
  {
    "id": "word_3",
    "kanji": "向かう",
    "reading": "むかう",
    "pos": "第一類動詞 (五段)",
    "meaning": "朝向、前往、面對"
  },
  {
    "id": "word_4",
    "kanji": "アイデア",
    "reading": "",
    "pos": "名詞",
    "meaning": "主意、點子"
  },
  {
    "id": "word_5",
    "kanji": "チャンス",
    "reading": "",
    "pos": "名詞",
    "meaning": "機會"
  },
  {
    "id": "word_6",
    "kanji": "バランス",
    "reading": "",
    "pos": "名詞",
    "meaning": "平衡"
  },
  {
    "id": "word_7",
    "kanji": "テーマ",
    "reading": "",
    "pos": "名詞",
    "meaning": "主題"
  },
  {
    "id": "word_8",
    "kanji": "ところどころ",
    "reading": "",
    "pos": "副詞 / 名詞",
    "meaning": "處處、有些地方"
  },
  {
    "id": "word_9",
    "kanji": "すべて",
    "reading": "",
    "pos": "副詞 / 名詞",
    "meaning": "全部、所有"
  },
  {
    "id": "word_10",
    "kanji": "まあまあ",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "馬馬虎虎、還算可以"
  },
  {
    "id": "word_11",
    "kanji": "次々",
    "reading": "つぎつぎ",
    "pos": "副詞",
    "meaning": "接連不斷地、相繼"
  },
  {
    "id": "word_12",
    "kanji": "要る",
    "reading": "いる",
    "pos": "第一類動詞 (五段)",
    "meaning": "要、需要"
  },
  {
    "id": "word_13",
    "kanji": "得意",
    "reading": "とくい",
    "pos": "な形容詞",
    "meaning": "擅長、拿手；得意"
  },
  {
    "id": "word_14",
    "kanji": "上手",
    "reading": "じょうず",
    "pos": "な形容詞",
    "meaning": "高明的、擅長的"
  },
  {
    "id": "word_15",
    "kanji": "空く",
    "reading": "あく",
    "pos": "第一類動詞 (五段)",
    "meaning": "空、空出、騰出"
  },
  {
    "id": "word_16",
    "kanji": "残る",
    "reading": "のこる",
    "pos": "第一類動詞 (五段)",
    "meaning": "剩餘、殘留"
  },
  {
    "id": "word_17",
    "kanji": "すく",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "空、稀疏"
  },
  {
    "id": "word_18",
    "kanji": "余る",
    "reading": "あまる",
    "pos": "第一類動詞 (五段)",
    "meaning": "剩餘、過多"
  },
  {
    "id": "word_19",
    "kanji": "宿題",
    "reading": "しゅくだい",
    "pos": "名詞",
    "meaning": "作業、功課"
  },
  {
    "id": "word_20",
    "kanji": "後ほど",
    "reading": "のちほど",
    "pos": "副詞",
    "meaning": "過一會兒"
  },
  {
    "id": "word_21",
    "kanji": "間もなく",
    "reading": "まもなく",
    "pos": "副詞",
    "meaning": "不久、很快"
  },
  {
    "id": "word_22",
    "kanji": "しばらく",
    "reading": "",
    "pos": "副詞",
    "meaning": "一會兒、片刻"
  },
  {
    "id": "word_23",
    "kanji": "先に",
    "reading": "さきに",
    "pos": "副詞 / 名詞",
    "meaning": "先、之前"
  },
  {
    "id": "word_24",
    "kanji": "あちこち",
    "reading": "",
    "pos": "代名詞 / 副詞",
    "meaning": "到處、各處"
  },
  {
    "id": "word_25",
    "kanji": "卒業式",
    "reading": "そつぎょうしき",
    "pos": "名詞",
    "meaning": "畢業典禮"
  },
  {
    "id": "word_26",
    "kanji": "落ち着く",
    "reading": "おちつく",
    "pos": "第一類動詞 (五段)",
    "meaning": "平靜、冷靜下來"
  },
  {
    "id": "word_27",
    "kanji": "思いつく",
    "reading": "おもいつく",
    "pos": "第一類動詞 (五段)",
    "meaning": "想出來、想起"
  },
  {
    "id": "word_28",
    "kanji": "張り切る",
    "reading": "はりきる",
    "pos": "第一類動詞 (五段)",
    "meaning": "幹勁十足"
  },
  {
    "id": "word_29",
    "kanji": "見直す",
    "reading": "みなおす",
    "pos": "第一類動詞 (五段)",
    "meaning": "重看、重新認識"
  },
  {
    "id": "word_30",
    "kanji": "飛び出す",
    "reading": "とびだす",
    "pos": "第一類動詞 (五段)",
    "meaning": "突然出現；衝出"
  },
  {
    "id": "word_31",
    "kanji": "詳しい",
    "reading": "くわしい",
    "pos": "い形容詞",
    "meaning": "詳細的"
  },
  {
    "id": "word_32",
    "kanji": "險しい",
    "reading": "けわしい",
    "pos": "い形容詞",
    "meaning": "險峻的"
  },
  {
    "id": "word_33",
    "kanji": "授業",
    "reading": "じゅぎょう",
    "pos": "名詞 / (～する)",
    "meaning": "授課、課業"
  },
  {
    "id": "word_34",
    "kanji": "転ぶ",
    "reading": "ころぶ",
    "pos": "第一類動詞 (五段)",
    "meaning": "跌倒"
  },
  {
    "id": "word_35",
    "kanji": "落ちる",
    "reading": "おちる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "落下、掉落"
  },
  {
    "id": "word_36",
    "kanji": "倒れる",
    "reading": "たおれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "倒塌、倒下"
  },
  {
    "id": "word_37",
    "kanji": "つぶれる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "壓壞、垮掉"
  },
  {
    "id": "word_38",
    "kanji": "約束",
    "reading": "やくそく",
    "pos": "名詞 / (～する)",
    "meaning": "約定、承諾"
  },
  {
    "id": "word_39",
    "kanji": "末っ子",
    "reading": "すえっこ",
    "pos": "名詞",
    "meaning": "老么"
  },
  {
    "id": "word_40",
    "kanji": "生",
    "reading": "なま",
    "pos": "名詞",
    "meaning": "生的、未加工的"
  },
  {
    "id": "word_41",
    "kanji": "むく",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "剝、削（皮）"
  },
  {
    "id": "word_42",
    "kanji": "煮る",
    "reading": "にる",
    "pos": "第二類動詞 (上一段)",
    "meaning": "煮、燉"
  },
  {
    "id": "word_43",
    "kanji": "ゆでる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "燙、水煮"
  },
  {
    "id": "word_44",
    "kanji": "スニーカー",
    "reading": "",
    "pos": "名詞",
    "meaning": "運動鞋"
  },
  {
    "id": "word_45",
    "kanji": "結ぶ",
    "reading": "むすぶ",
    "pos": "第一類動詞 (五段)",
    "meaning": "繫、連結、打結"
  },
  {
    "id": "word_46",
    "kanji": "ほどける",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "鬆開、解開"
  },
  {
    "id": "word_47",
    "kanji": "くっ付ける",
    "reading": "くっつける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "黏上、貼上"
  },
  {
    "id": "word_48",
    "kanji": "抜く",
    "reading": "ぬく",
    "pos": "第一類動詞 (五段)",
    "meaning": "拔、抽出；超越"
  },
  {
    "id": "word_49",
    "kanji": "縫う",
    "reading": "ぬう",
    "pos": "第一類動詞 (五段)",
    "meaning": "縫、縫紉"
  },
  {
    "id": "word_50",
    "kanji": "渡る",
    "reading": "わたる",
    "pos": "第一類動詞 (五段)",
    "meaning": "渡過、經過"
  },
  {
    "id": "word_51",
    "kanji": "散らかる",
    "reading": "ちらかる",
    "pos": "第一類動詞 (五段)",
    "meaning": "凌亂、亂七八糟"
  },
  {
    "id": "word_52",
    "kanji": "片付ける",
    "reading": "かたづける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "整頓、收拾"
  },
  {
    "id": "word_53",
    "kanji": "汚れる",
    "reading": "よごれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "髒、污染"
  },
  {
    "id": "word_54",
    "kanji": "細かい",
    "reading": "こまかい",
    "pos": "い形容詞",
    "meaning": "細小的、零碎的"
  },
  {
    "id": "word_55",
    "kanji": "細い",
    "reading": "ほそい",
    "pos": "い形容詞",
    "meaning": "細的、纖細的"
  },
  {
    "id": "word_56",
    "kanji": "売り上げ",
    "reading": "うりあげ",
    "pos": "名詞",
    "meaning": "營業額"
  },
  {
    "id": "word_57",
    "kanji": "売り場",
    "reading": "うりば",
    "pos": "名詞",
    "meaning": "賣場、售票處"
  },
  {
    "id": "word_58",
    "kanji": "売り切れ",
    "reading": "うりきれ",
    "pos": "名詞",
    "meaning": "售完、賣光"
  },
  {
    "id": "word_59",
    "kanji": "売り出し",
    "reading": "うりだし",
    "pos": "名詞",
    "meaning": "出清、上市"
  },
  {
    "id": "word_60",
    "kanji": "ひげ",
    "reading": "",
    "pos": "名詞",
    "meaning": "鬍鬚"
  },
  {
    "id": "word_61",
    "kanji": "ひじ",
    "reading": "",
    "pos": "名詞",
    "meaning": "手肘"
  },
  {
    "id": "word_62",
    "kanji": "はげ",
    "reading": "",
    "pos": "名詞",
    "meaning": "禿頭"
  },
  {
    "id": "word_63",
    "kanji": "かび",
    "reading": "",
    "pos": "名詞",
    "meaning": "霉菌"
  },
  {
    "id": "word_64",
    "kanji": "再来週",
    "reading": "さらいしゅう",
    "pos": "名詞",
    "meaning": "下下週"
  },
  {
    "id": "word_65",
    "kanji": "君",
    "reading": "きみ",
    "pos": "代名詞",
    "meaning": "你、君"
  },
  {
    "id": "word_66",
    "kanji": "ほがらか",
    "reading": "な",
    "pos": "な形容詞",
    "meaning": "爽朗的、舒暢的"
  },
  {
    "id": "word_67",
    "kanji": "あわただしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "匆忙的、慌張的"
  },
  {
    "id": "word_68",
    "kanji": "おとなしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "老實的、溫順的"
  },
  {
    "id": "word_69",
    "kanji": "まぶしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "耀眼的、刺眼的"
  },
  {
    "id": "word_70",
    "kanji": "券",
    "reading": "けん",
    "pos": "名詞",
    "meaning": "券、票"
  },
  {
    "id": "word_71",
    "kanji": "賃",
    "reading": "ちん",
    "pos": "名詞 / 接尾詞",
    "meaning": "費用、租金"
  },
  {
    "id": "word_72",
    "kanji": "方向",
    "reading": "ほうこう",
    "pos": "名詞",
    "meaning": "方向"
  },
  {
    "id": "word_73",
    "kanji": "土地",
    "reading": "とち",
    "pos": "名詞",
    "meaning": "土地"
  },
  {
    "id": "word_74",
    "kanji": "向き",
    "reading": "むき",
    "pos": "名詞 / 接尾詞",
    "meaning": "方向、朝向；適合"
  },
  {
    "id": "word_75",
    "kanji": "地方",
    "reading": "ちほう",
    "pos": "名詞",
    "meaning": "地方、地區"
  },
  {
    "id": "word_76",
    "kanji": "地域",
    "reading": "ちいき",
    "pos": "名詞",
    "meaning": "地區、區域"
  },
  {
    "id": "word_77",
    "kanji": "遅れる",
    "reading": "おくれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "遲、過時"
  },
  {
    "id": "word_78",
    "kanji": "あきらめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "死心、放棄"
  },
  {
    "id": "word_79",
    "kanji": "あきれる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "吃驚、愣住、無言"
  },
  {
    "id": "word_80",
    "kanji": "あきる",
    "reading": "",
    "pos": "第二類動詞 (上一段)",
    "meaning": "厭煩、膩了"
  },
  {
    "id": "word_81",
    "kanji": "三角",
    "reading": "さんかく",
    "pos": "名詞",
    "meaning": "三角形"
  },
  {
    "id": "word_82",
    "kanji": "イメージ",
    "reading": "",
    "pos": "名詞",
    "meaning": "形象 (Image)"
  },
  {
    "id": "word_83",
    "kanji": "レベル",
    "reading": "",
    "pos": "名詞",
    "meaning": "層次、級別 (Level)"
  },
  {
    "id": "word_84",
    "kanji": "テンポ",
    "reading": "",
    "pos": "名詞",
    "meaning": "節奏 (Tempo)"
  },
  {
    "id": "word_85",
    "kanji": "サイン",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "簽名 (Sign)"
  },
  {
    "id": "word_86",
    "kanji": "ぶらぶら",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "閒逛、無所事事"
  },
  {
    "id": "word_87",
    "kanji": "そろそろ",
    "reading": "",
    "pos": "副詞",
    "meaning": "快要、就要"
  },
  {
    "id": "word_88",
    "kanji": "のろのろ",
    "reading": "",
    "pos": "副詞",
    "meaning": "慢吞吞、緩慢地"
  },
  {
    "id": "word_89",
    "kanji": "どんどん",
    "reading": "",
    "pos": "副詞",
    "meaning": "順利進行、接連不斷"
  },
  {
    "id": "word_90",
    "kanji": "ぺこぺこ",
    "reading": "",
    "pos": "な形容詞 / 副詞",
    "meaning": "肚子餓；點頭哈腰"
  },
  {
    "id": "word_91",
    "kanji": "ふらふら",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "搖晃、頭暈"
  },
  {
    "id": "word_92",
    "kanji": "ぴかぴか",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "閃閃發亮"
  },
  {
    "id": "word_93",
    "kanji": "ぺらぺら",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "流利地；薄的"
  },
  {
    "id": "word_94",
    "kanji": "物語",
    "reading": "ものがたり",
    "pos": "名詞",
    "meaning": "故事、傳說"
  },
  {
    "id": "word_95",
    "kanji": "書物",
    "reading": "しょもつ",
    "pos": "名詞",
    "meaning": "書籍"
  },
  {
    "id": "word_96",
    "kanji": "汚い",
    "reading": "きたない",
    "pos": "い形容詞",
    "meaning": "骯髒的"
  },
  {
    "id": "word_97",
    "kanji": "汚す",
    "reading": "よごす",
    "pos": "第一類動詞 (他動詞)",
    "meaning": "弄髒、玷汙"
  },
  {
    "id": "word_98",
    "kanji": "みにくい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "難看的、醜陋的"
  },
  {
    "id": "word_99",
    "kanji": "つらい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "痛苦的、難受的"
  },
  {
    "id": "word_100",
    "kanji": "苦い",
    "reading": "にがい",
    "pos": "い形容詞",
    "meaning": "苦的"
  },
  {
    "id": "word_101",
    "kanji": "苦しむ",
    "reading": "くるしむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "受苦、痛苦、煩惱"
  },
  {
    "id": "word_102",
    "kanji": "反對",
    "reading": "はんたい",
    "pos": "名詞 / (～する)",
    "meaning": "相反、反對"
  },
  {
    "id": "word_103",
    "kanji": "量る",
    "reading": "はかる",
    "pos": "第一類動詞 (五段)",
    "meaning": "測量、稱重"
  },
  {
    "id": "word_104",
    "kanji": "落とす",
    "reading": "おとす",
    "pos": "第一類動詞 (五段)",
    "meaning": "弄丟、使掉落"
  },
  {
    "id": "word_105",
    "kanji": "もったいない",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "浪費的、可惜的"
  },
  {
    "id": "word_106",
    "kanji": "贅沢",
    "reading": "ぜいたく",
    "pos": "な形容詞",
    "meaning": "奢侈的、豪華的"
  },
  {
    "id": "word_107",
    "kanji": "貧乏",
    "reading": "びんぼう",
    "pos": "な形容詞",
    "meaning": "貧窮的"
  },
  {
    "id": "word_108",
    "kanji": "貝",
    "reading": "かい",
    "pos": "名詞",
    "meaning": "貝、貝類、貝殼"
  },
  {
    "id": "word_109",
    "kanji": "だらしない",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "邋遢的、散漫的"
  },
  {
    "id": "word_110",
    "kanji": "くだらない",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "無聊的、無價值的"
  },
  {
    "id": "word_111",
    "kanji": "困る",
    "reading": "こまる",
    "pos": "第一類動詞 (五段)",
    "meaning": "困擾、為難"
  },
  {
    "id": "word_112",
    "kanji": "教わる",
    "reading": "おそわる",
    "pos": "第一類動詞 (五段)",
    "meaning": "向～學習、受教"
  },
  {
    "id": "word_113",
    "kanji": "襲う",
    "reading": "おそう",
    "pos": "第一類動詞 (五段)",
    "meaning": "襲擊、侵襲"
  },
  {
    "id": "word_114",
    "kanji": "學ぶ",
    "reading": "まなぶ",
    "pos": "第一類動詞 (五段)",
    "meaning": "學習"
  },
  {
    "id": "word_115",
    "kanji": "主な",
    "reading": "おモな",
    "pos": "連體詞",
    "meaning": "主要的"
  },
  {
    "id": "word_116",
    "kanji": "大した",
    "reading": "たいした",
    "pos": "連體詞",
    "meaning": "了不起的、大不了的"
  },
  {
    "id": "word_117",
    "kanji": "製品",
    "reading": "せいひん",
    "pos": "名詞",
    "meaning": "製品、產品"
  },
  {
    "id": "word_118",
    "kanji": "行き",
    "reading": "ゆき",
    "pos": "名詞",
    "meaning": "前往、開往"
  },
  {
    "id": "word_119",
    "kanji": "打ち合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "事前商議、商討"
  },
  {
    "id": "word_120",
    "kanji": "待ち合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "會合、集合、碰面"
  },
  {
    "id": "word_121",
    "kanji": "組み合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "組合、搭配"
  },
  {
    "id": "word_122",
    "kanji": "問い合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "詢問、查詢"
  },
  {
    "id": "word_123",
    "kanji": "とにかく",
    "reading": "",
    "pos": "副詞",
    "meaning": "總之、無論如何"
  },
  {
    "id": "word_124",
    "kanji": "いきなり",
    "reading": "",
    "pos": "副詞",
    "meaning": "突然地、冷不防地"
  },
  {
    "id": "word_125",
    "kanji": "せっかく",
    "reading": "",
    "pos": "副詞",
    "meaning": "難得、好不容易"
  },
  {
    "id": "word_126",
    "kanji": "語り合う",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "彼此交談、傾訴"
  },
  {
    "id": "word_127",
    "kanji": "しゃべる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "聊天、說話"
  },
  {
    "id": "word_128",
    "kanji": "言い合う",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "爭論、爭吵"
  },
  {
    "id": "word_129",
    "kanji": "話しかける",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "搭話、攀談"
  },
  {
    "id": "word_130",
    "kanji": "参った",
    "reading": "まいった",
    "pos": "動詞活用",
    "meaning": "受不了、沒轍了"
  },
  {
    "id": "word_131",
    "kanji": "焦った",
    "reading": "あせった",
    "pos": "動詞活用",
    "meaning": "焦急、慌張"
  },
  {
    "id": "word_132",
    "kanji": "詰まった",
    "reading": "",
    "pos": "動詞活用",
    "meaning": "塞住、堵塞"
  },
  {
    "id": "word_133",
    "kanji": "様子",
    "reading": "ようす",
    "pos": "名詞",
    "meaning": "情況、情形、樣子"
  },
  {
    "id": "word_134",
    "kanji": "態度",
    "reading": "たいど",
    "pos": "名詞",
    "meaning": "態度"
  },
  {
    "id": "word_135",
    "kanji": "格好",
    "reading": "かっこう",
    "pos": "名詞",
    "meaning": "打扮、樣子、適合"
  },
  {
    "id": "word_136",
    "kanji": "工夫",
    "reading": "くふう",
    "pos": "名詞 / (～する)",
    "meaning": "鑽研、下功夫"
  },
  {
    "id": "word_137",
    "kanji": "ちっとも",
    "reading": "",
    "pos": "副詞",
    "meaning": "一點也不（後接否定）"
  },
  {
    "id": "word_138",
    "kanji": "実現",
    "reading": "じつげん",
    "pos": "名詞 / (～する)",
    "meaning": "實現、達成"
  },
  {
    "id": "word_139",
    "kanji": "現実",
    "reading": "げんじつ",
    "pos": "名詞",
    "meaning": "現實、實際"
  },
  {
    "id": "word_140",
    "kanji": "実験",
    "reading": "じっけん",
    "pos": "名詞 / (～する)",
    "meaning": "實驗、試驗"
  },
  {
    "id": "word_141",
    "kanji": "論文",
    "reading": "ろんぶん",
    "pos": "名詞",
    "meaning": "論文"
  },
  {
    "id": "word_142",
    "kanji": "こう",
    "reading": "",
    "pos": "副詞",
    "meaning": "這樣地、如此"
  },
  {
    "id": "word_143",
    "kanji": "メモ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "筆記、紀錄"
  },
  {
    "id": "word_144",
    "kanji": "プリント",
    "reading": "",
    "pos": "名詞",
    "meaning": "講義、印刷品"
  },
  {
    "id": "word_145",
    "kanji": "さわがしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "吵鬧的、喧鬧的"
  },
  {
    "id": "word_146",
    "kanji": "はげしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "激烈、猛烈"
  },
  {
    "id": "word_147",
    "kanji": "ずうずうしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "厚臉皮、厚顏無恥"
  },
  {
    "id": "word_148",
    "kanji": "雇う",
    "reading": "やとう",
    "pos": "第一類動詞 (五段)",
    "meaning": "雇用"
  },
  {
    "id": "word_149",
    "kanji": "勤める",
    "reading": "つとめる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "工作、任職"
  },
  {
    "id": "word_150",
    "kanji": "混ぜる",
    "reading": "まぜる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "混合、攪拌"
  },
  {
    "id": "word_151",
    "kanji": "預ける",
    "reading": "あずける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "寄放、委託"
  },
  {
    "id": "word_152",
    "kanji": "折る",
    "reading": "おる",
    "pos": "第一類動詞 (五段)",
    "meaning": "折疊、折斷"
  },
  {
    "id": "word_153",
    "kanji": "折り曲げる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "折彎、摺疊"
  },
  {
    "id": "word_154",
    "kanji": "祈り",
    "reading": "いのり",
    "pos": "名詞",
    "meaning": "祈禱、祝願"
  },
  {
    "id": "word_155",
    "kanji": "税",
    "reading": "ぜい",
    "pos": "名詞",
    "meaning": "稅、稅金"
  },
  {
    "id": "word_156",
    "kanji": "祝い",
    "reading": "いわい",
    "pos": "名詞",
    "meaning": "慶祝、祝賀"
  },
  {
    "id": "word_157",
    "kanji": "表",
    "reading": "おもて",
    "pos": "名詞",
    "meaning": "正面、表面"
  },
  {
    "id": "word_158",
    "kanji": "裏",
    "reading": "うら",
    "pos": "名詞",
    "meaning": "反面、背面"
  },
  {
    "id": "word_159",
    "kanji": "まとめ",
    "reading": "",
    "pos": "名詞",
    "meaning": "總結、整理、彙整"
  },
  {
    "id": "word_160",
    "kanji": "王子",
    "reading": "おうじ",
    "pos": "名詞",
    "meaning": "王子"
  },
  {
    "id": "word_161",
    "kanji": "冷える",
    "reading": "ひえる",
    "pos": "第二類動詞 (自動)",
    "meaning": "物體變冷、感覺冷"
  },
  {
    "id": "word_162",
    "kanji": "冷める",
    "reading": "さめる",
    "pos": "第二類動詞 (自動)",
    "meaning": "變涼（熱的東西）"
  },
  {
    "id": "word_163",
    "kanji": "凍る",
    "reading": "こおる",
    "pos": "第一類動詞 (五段)",
    "meaning": "凍結、結冰"
  },
  {
    "id": "word_164",
    "kanji": "うっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "不留神、不小心"
  },
  {
    "id": "word_165",
    "kanji": "がっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "失望、沮喪"
  },
  {
    "id": "word_166",
    "kanji": "すっかり",
    "reading": "",
    "pos": "副詞",
    "meaning": "完全、全部"
  },
  {
    "id": "word_167",
    "kanji": "しっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "好好地、牢固地"
  },
  {
    "id": "word_168",
    "kanji": "重ねる",
    "reading": "かさねる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "堆疊"
  },
  {
    "id": "word_169",
    "kanji": "広げる",
    "reading": "ひろげる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "擴大、展開"
  },
  {
    "id": "word_170",
    "kanji": "たたむ",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "疊、折"
  },
  {
    "id": "word_171",
    "kanji": "縮める",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "縮短、縮小"
  },
  {
    "id": "word_172",
    "kanji": "登山",
    "reading": "とざん",
    "pos": "名詞 / (～する)",
    "meaning": "登山"
  },
  {
    "id": "word_173",
    "kanji": "都合",
    "reading": "つごう",
    "pos": "名詞",
    "meaning": "方便、合適"
  },
  {
    "id": "word_174",
    "kanji": "具合",
    "reading": "ぐあい",
    "pos": "名詞",
    "meaning": "狀態、健康情況"
  },
  {
    "id": "word_175",
    "kanji": "症状",
    "reading": "しょうじょう",
    "pos": "名詞",
    "meaning": "症狀"
  },
  {
    "id": "word_176",
    "kanji": "しつこい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "執拗的；油膩的"
  },
  {
    "id": "word_177",
    "kanji": "怪しい",
    "reading": "あやしい",
    "pos": "い形容詞",
    "meaning": "可疑的、奇怪的"
  },
  {
    "id": "word_178",
    "kanji": "教育",
    "reading": "きょういく",
    "pos": "名詞 / (～する)",
    "meaning": "教育"
  },
  {
    "id": "word_179",
    "kanji": "縮む",
    "reading": "ちぢむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "縮小、收縮"
  },
  {
    "id": "word_180",
    "kanji": "黙る",
    "reading": "だまる",
    "pos": "第一類動詞 (五段)",
    "meaning": "沉默、不說話"
  },
  {
    "id": "word_181",
    "kanji": "交差点",
    "reading": "",
    "pos": "名詞",
    "meaning": "交叉路口"
  },
  {
    "id": "word_182",
    "kanji": "平気",
    "reading": "へいき",
    "pos": "な形容詞",
    "meaning": "不在乎、沒事"
  },
  {
    "id": "word_183",
    "kanji": "求人",
    "reading": "きゅうじん",
    "pos": "名詞",
    "meaning": "徵人、招聘"
  },
  {
    "id": "word_184",
    "kanji": "廣告",
    "reading": "こうこく",
    "pos": "名詞 / (～する)",
    "meaning": "廣告"
  },
  {
    "id": "word_185",
    "kanji": "まとめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "整理、彙總、歸納"
  },
  {
    "id": "word_186",
    "kanji": "あつめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "集合、收集"
  },
  {
    "id": "word_187",
    "kanji": "うめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "埋、填"
  },
  {
    "id": "word_188",
    "kanji": "ふくめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "包含、包括"
  },
  {
    "id": "word_189",
    "kanji": "がらがら",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "空蕩蕩的"
  },
  {
    "id": "word_190",
    "kanji": "うろうろ",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "徘徊、不知所措"
  },
  {
    "id": "word_191",
    "kanji": "断る",
    "reading": "ことわる",
    "pos": "第一類動詞 (五段)",
    "meaning": "拒絕、事先通知"
  },
  {
    "id": "word_192",
    "kanji": "たまに",
    "reading": "",
    "pos": "副詞",
    "meaning": "偶爾、稀少"
  },
  {
    "id": "word_193",
    "kanji": "ついに",
    "reading": "",
    "pos": "副詞",
    "meaning": "終於"
  },
  {
    "id": "word_194",
    "kanji": "わりに",
    "reading": "",
    "pos": "副詞",
    "meaning": "比較地、相當"
  },
  {
    "id": "word_195",
    "kanji": "まず",
    "reading": "",
    "pos": "副詞",
    "meaning": "首先"
  },
  {
    "id": "word_196",
    "kanji": "飛び込む",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "跳入、跳進"
  },
  {
    "id": "word_197",
    "kanji": "通り過ぎる",
    "reading": "とおりすぎる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "走過、經過"
  },
  {
    "id": "word_198",
    "kanji": "通りかかる",
    "reading": "とおりかかる",
    "pos": "第一類動詞 (五段)",
    "meaning": "路過、碰巧經過"
  },
  {
    "id": "word_199",
    "kanji": "散る",
    "reading": "ちる",
    "pos": "第一類動詞 (五段)",
    "meaning": "凋謝、散落"
  },
  {
    "id": "word_200",
    "kanji": "枯れる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "枯萎"
  },
  {
    "id": "word_201",
    "kanji": "きちんと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "整齊地、好好的、確實地"
  },
  {
    "id": "word_202",
    "kanji": "しいんと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "靜悄悄地"
  },
  {
    "id": "word_203",
    "kanji": "わざと",
    "reading": "",
    "pos": "副詞",
    "meaning": "故意地"
  },
  {
    "id": "word_204",
    "kanji": "そっと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "輕輕地、悄悄地"
  },
  {
    "id": "word_205",
    "kanji": "詰める",
    "reading": "つめる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "塞、裝、填滿"
  },
  {
    "id": "word_206",
    "kanji": "包む",
    "reading": "つつむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "包裹"
  },
  {
    "id": "word_207",
    "kanji": "積もる",
    "reading": "つもる",
    "pos": "第一類動詞 (五段)",
    "meaning": "堆積"
  },
  {
    "id": "word_208",
    "kanji": "生意氣",
    "reading": "なまいき",
    "pos": "な形容詞",
    "meaning": "傲慢的、狂妄的、厚臉皮"
  },
  {
    "id": "word_209",
    "kanji": "意地悪",
    "reading": "いじわる",
    "pos": "な形容詞 / 名詞",
    "meaning": "壞心腸"
  },
  {
    "id": "word_210",
    "kanji": "下品",
    "reading": "げひん",
    "pos": "な形容詞",
    "meaning": "粗俗"
  },
  {
    "id": "word_211",
    "kanji": "呑氣",
    "reading": "のんき",
    "pos": "な形容詞",
    "meaning": "無憂無慮、悠哉"
  },
  {
    "id": "word_212",
    "kanji": "嫌う",
    "reading": "きらう",
    "pos": "第一類動詞 (五段)",
    "meaning": "討厭、厭惡"
  },
  {
    "id": "word_213",
    "kanji": "嫌がる",
    "reading": "いやがる",
    "pos": "第一類動詞 (五段)",
    "meaning": "感到討厭"
  },
  {
    "id": "word_214",
    "kanji": "付き合う",
    "reading": "つきあう",
    "pos": "第一類動詞 (五段)",
    "meaning": "交往、陪伴"
  },
  {
    "id": "word_215",
    "kanji": "稼ぐ",
    "reading": "かせぐ",
    "pos": "第一類動詞 (五段)",
    "meaning": "賺取(勞動所得)"
  },
  {
    "id": "word_216",
    "kanji": "もうかる",
    "reading": "",
    "pos": "第一類動詞 (五段/自動)",
    "meaning": "賺錢、得利"
  },
  {
    "id": "word_217",
    "kanji": "おごる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "請客"
  },
  {
    "id": "word_218",
    "kanji": "震える",
    "reading": "ふるえる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "震動、發抖"
  },
  {
    "id": "word_219",
    "kanji": "揺れる",
    "reading": "ゆれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "擺動、搖動"
  },
  {
    "id": "word_220",
    "kanji": "撫でる",
    "reading": "なでる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "撫摸、輕撫"
  },
  {
    "id": "word_221",
    "kanji": "舐める",
    "reading": "なめる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "舔、舐"
  },
  {
    "id": "word_222",
    "kanji": "鳴く",
    "reading": "なく",
    "pos": "第一類動詞 (五段)",
    "meaning": "鳴叫(動物)"
  },
  {
    "id": "word_223",
    "kanji": "泣く",
    "reading": "なく",
    "pos": "第一類動詞 (五段)",
    "meaning": "哭泣(人類)"
  },
  {
    "id": "word_224",
    "kanji": "擦る",
    "reading": "こする",
    "pos": "第一類動詞 (五段)",
    "meaning": "摩擦、揉"
  },
  {
    "id": "word_225",
    "kanji": "捻る",
    "reading": "ひねる",
    "pos": "第一類動詞 (五段)",
    "meaning": "扭、轉"
  },
  {
    "id": "word_226",
    "kanji": "解く",
    "reading": "ほどく",
    "pos": "第一類動詞 (五段)",
    "meaning": "解開、解除"
  },
  {
    "id": "word_227",
    "kanji": "厚い",
    "reading": "あつい",
    "pos": "い形容詞",
    "meaning": "厚的"
  },
  {
    "id": "word_228",
    "kanji": "深い",
    "reading": "ふかい",
    "pos": "い形容詞",
    "meaning": "深的"
  },
  {
    "id": "word_229",
    "kanji": "もてる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "受歡迎(異性)"
  },
  {
    "id": "word_230",
    "kanji": "ふる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "(男女關係)拒絕、甩掉"
  },
  {
    "id": "word_231",
    "kanji": "惜しい",
    "reading": "おしい",
    "pos": "い形容詞",
    "meaning": "可惜的、遺憾的"
  },
  {
    "id": "word_232",
    "kanji": "毛糸",
    "reading": "けいと",
    "pos": "名詞",
    "meaning": "毛線"
  },
  {
    "id": "word_233",
    "kanji": "我儘",
    "reading": "わがまま",
    "pos": "な形容詞 / 名詞",
    "meaning": "任性、自私、為所欲為"
  },
  {
    "id": "word_234",
    "kanji": "不平",
    "reading": "ふへい",
    "pos": "な形容詞 / 名詞",
    "meaning": "不平、不滿"
  },
  {
    "id": "word_235",
    "kanji": "種",
    "reading": "たね",
    "pos": "名詞",
    "meaning": "種、種子／原因、根源／素材、材料 ／新聞題材"
  },
  {
    "id": "word_236",
    "kanji": "草",
    "reading": "くさ",
    "pos": "名詞",
    "meaning": "草"
  },
  {
    "id": "word_237",
    "kanji": "根",
    "reading": "ね",
    "pos": "名詞",
    "meaning": "根源、根本"
  },
  {
    "id": "word_238",
    "kanji": "豆",
    "reading": "まめ",
    "pos": "名詞",
    "meaning": "豆、豆子"
  },
  {
    "id": "word_239",
    "kanji": "つながる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "指電話接通、聯繫上"
  },
  {
    "id": "word_240",
    "kanji": "届く",
    "reading": "とどく",
    "pos": "第一類動詞 (五段)",
    "meaning": "送到"
  },
  {
    "id": "word_241",
    "kanji": "戻る",
    "reading": "もどる",
    "pos": "第一類動詞 (五段)",
    "meaning": "返回"
  },
  {
    "id": "word_242",
    "kanji": "そろう",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "齊全"
  },
  {
    "id": "word_243",
    "kanji": "戦う",
    "reading": "たたかう",
    "pos": "第一類動詞 (五段)",
    "meaning": "戰鬥、奮戰、鬥爭、對抗"
  },
  {
    "id": "word_244",
    "kanji": "さっぱり",
    "reading": "",
    "pos": "副詞",
    "meaning": "完全、徹底／清爽、爽快"
  },
  {
    "id": "word_245",
    "kanji": "あっさり",
    "reading": "",
    "pos": "副詞",
    "meaning": "清淡、簡單／個性乾脆、爽快"
  },
  {
    "id": "word_246",
    "kanji": "こっそり",
    "reading": "",
    "pos": "副詞",
    "meaning": "悄悄、偷偷"
  },
  {
    "id": "word_247",
    "kanji": "求める",
    "reading": "もとめる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "追求、尋求、要求"
  },
  {
    "id": "word_248",
    "kanji": "済む",
    "reading": "すむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "解決、結束"
  },
  {
    "id": "word_249",
    "kanji": "住む",
    "reading": "すむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "居住"
  },
  {
    "id": "word_250",
    "kanji": "當たり前",
    "reading": "あたりまえ",
    "pos": "な形容詞",
    "meaning": "理所當然"
  },
  {
    "id": "word_251",
    "kanji": "積もる",
    "reading": "つもる",
    "pos": "第一類動詞 (五段)",
    "meaning": "堆積"
  },
  {
    "id": "word_252",
    "kanji": "包む",
    "reading": "つつむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "包裹"
  },
  {
    "id": "word_253",
    "kanji": "済む",
    "reading": "すむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "結束、完成"
  },
  {
    "id": "word_254",
    "kanji": "済ませる",
    "reading": "すませる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "使～完成、做完（工作或雜事）"
  },
  {
    "id": "word_255",
    "kanji": "真っ暗な",
    "reading": "まっくらな",
    "pos": "な形容詞",
    "meaning": "黑漆漆的"
  },
  {
    "id": "word_256",
    "kanji": "真っ黒な",
    "reading": "まっくろな",
    "pos": "な形容詞",
    "meaning": "黝黑的"
  },
  {
    "id": "word_257",
    "kanji": "真っ青な",
    "reading": "まっさおな",
    "pos": "な形容詞",
    "meaning": "深藍的、臉色鐵青"
  },
  {
    "id": "word_258",
    "kanji": "真っ赤な",
    "reading": "まっかな",
    "pos": "な形容詞",
    "meaning": "鮮紅的"
  },
  {
    "id": "word_259",
    "kanji": "薄暗い",
    "reading": "うすぐらい",
    "pos": "い形容詞",
    "meaning": "光線昏暗、陰暗"
  },
  {
    "id": "word_260",
    "kanji": "くり返す",
    "reading": "くりかえす",
    "pos": "第一類動詞 (五段)",
    "meaning": "反覆、重複"
  },
  {
    "id": "word_261",
    "kanji": "当たり前",
    "reading": "あたりまえ",
    "pos": "な形容詞",
    "meaning": "理所當然"
  },
  {
    "id": "word_262",
    "kanji": "支度",
    "reading": "したく",
    "pos": "名詞 / する動詞",
    "meaning": "準備(餐點或旅行)"
  },
  {
    "id": "word_263",
    "kanji": "仕上がり",
    "reading": "しあがり",
    "pos": "名詞",
    "meaning": "完成、結束、成品狀態"
  },
  {
    "id": "word_264",
    "kanji": "片付け",
    "reading": "かたづけ",
    "pos": "名詞 / する動詞",
    "meaning": "整理、打掃"
  },
  {
    "id": "word_265",
    "kanji": "用事",
    "reading": "ようじ",
    "pos": "名詞",
    "meaning": "事情、任務"
  },
  {
    "id": "word_266",
    "kanji": "防ぐ",
    "reading": "ふせぐ",
    "pos": "第一類動詞 (五段)",
    "meaning": "阻止、防禦"
  },
  {
    "id": "word_267",
    "kanji": "刻む",
    "reading": "きざむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "切碎、刻畫、雕刻"
  },
  {
    "id": "word_268",
    "kanji": "剥く",
    "reading": "むく",
    "pos": "第一類動詞 (五段)",
    "meaning": "剝皮"
  },
  {
    "id": "word_269",
    "kanji": "蒸す",
    "reading": "むす",
    "pos": "第一類動詞 (五段)",
    "meaning": "蒸、悶"
  },
  {
    "id": "word_270",
    "kanji": "炒める",
    "reading": "いためる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "炒"
  },
  {
    "id": "word_271",
    "kanji": "炊く",
    "reading": "たく",
    "pos": "第一類動詞 (五段)",
    "meaning": "炊（飯）、煮（飯）"
  },
  {
    "id": "word_272",
    "kanji": "沸かす",
    "reading": "わかす",
    "pos": "第一類動詞 (五段)",
    "meaning": "使（水）沸騰、燒（開水）"
  },
  {
    "id": "word_273",
    "kanji": "うるさい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "吵雜的、煩人的、囉唆的"
  },
  {
    "id": "word_274",
    "kanji": "険しい",
    "reading": "けわしい",
    "pos": "い形容詞",
    "meaning": "山路險峻的、表情嚴肅(厲)"
  },
  {
    "id": "word_275",
    "kanji": "馬鹿らしい",
    "reading": "ばからしい",
    "pos": "い形容詞",
    "meaning": "愚蠢的、荒謬的、無聊的"
  },
  {
    "id": "word_276",
    "kanji": "いいかげんにしなさい",
    "reading": "",
    "pos": "慣用語",
    "meaning": "適可而止、差不多一點！"
  },
  {
    "id": "word_277",
    "kanji": "頭にくる（あたまにくる） / 腹が立つ",
    "reading": "はらがたつ",
    "pos": "慣用語",
    "meaning": "生氣、發怒"
  },
  {
    "id": "word_278",
    "kanji": "大したことがない",
    "reading": "たいしたことがない",
    "pos": "慣用語",
    "meaning": "沒什麼大礙、算不了什麼"
  },
  {
    "id": "word_279",
    "kanji": "いいかげんな",
    "reading": "",
    "pos": "慣用語",
    "meaning": "敷衍的、適當的、馬馬虎虎的"
  },
  {
    "id": "word_280",
    "kanji": "気の毒",
    "reading": "きのどく",
    "pos": "慣用語",
    "meaning": "可憐的"
  },
  {
    "id": "word_281",
    "kanji": "口を利く",
    "reading": "くちをきく",
    "pos": "慣用語",
    "meaning": "說話"
  },
  {
    "id": "word_282",
    "kanji": "口にする",
    "reading": "くちにする",
    "pos": "慣用語",
    "meaning": "吃進嘴裡、說到"
  },
  {
    "id": "word_283",
    "kanji": "耳にする",
    "reading": "みみにする",
    "pos": "慣用語",
    "meaning": "聽見"
  },
  {
    "id": "word_284",
    "kanji": "耳が遠い",
    "reading": "みみがとおい",
    "pos": "慣用語",
    "meaning": "重聽、聽力差"
  },
  {
    "id": "word_285",
    "kanji": "どういう意味",
    "reading": "いみ",
    "pos": "慣用語",
    "meaning": "是什麼意思"
  },
  {
    "id": "word_286",
    "kanji": "都合",
    "reading": "つごう",
    "pos": "慣用語",
    "meaning": "挪出時間、設法安排"
  },
  {
    "id": "word_287",
    "kanji": "気に入る",
    "reading": "きにいる",
    "pos": "慣用語",
    "meaning": "中意、滿意、喜歡"
  },
  {
    "id": "word_288",
    "kanji": "気にする",
    "reading": "",
    "pos": "慣用語",
    "meaning": "介意、擔心"
  },
  {
    "id": "word_289",
    "kanji": "気になる",
    "reading": "",
    "pos": "慣用語",
    "meaning": "掛念、在意"
  },
  {
    "id": "word_290",
    "kanji": "気にかける",
    "reading": "",
    "pos": "慣用語",
    "meaning": "關心"
  },
  {
    "id": "word_291",
    "kanji": "とんでもない",
    "reading": "",
    "pos": "慣用語",
    "meaning": "哪裡的話、沒那回事、不敢當"
  },
  {
    "id": "word_292",
    "kanji": "しょうがない",
    "reading": "",
    "pos": "慣用語",
    "meaning": "沒辦法"
  },
  {
    "id": "word_293",
    "kanji": "おかげさま",
    "reading": "",
    "pos": "慣用語",
    "meaning": "託您的福"
  },
  {
    "id": "word_294",
    "kanji": "もうしわけない",
    "reading": "申し訳ない",
    "pos": "慣用語",
    "meaning": "對不起、抱歉、過意不去"
  },
  {
    "id": "word_295",
    "kanji": "ご存知です / ご存知じゃありません",
    "reading": "",
    "pos": "慣用語",
    "meaning": "(您) 知道 / (您) 不知道"
  },
  {
    "id": "word_296",
    "kanji": "存じております / 存じません",
    "reading": "",
    "pos": "慣用語",
    "meaning": "(我) 知道 / (我) 不知道"
  },
  {
    "id": "word_297",
    "kanji": "どういう意味",
    "reading": "いみ",
    "pos": "慣用語",
    "meaning": "是什麼意思"
  },
  {
    "id": "word_298",
    "kanji": "とんでもない",
    "reading": "",
    "pos": "慣用語",
    "meaning": "哪裡的話、沒那回事"
  },
  {
    "id": "word_299",
    "kanji": "しょうがない",
    "reading": "",
    "pos": "慣用語",
    "meaning": "沒辦法"
  },
  {
    "id": "word_300",
    "kanji": "おかげさま",
    "reading": "",
    "pos": "慣用語",
    "meaning": "託您的福"
  },
  {
    "id": "word_301",
    "kanji": "申し訳ない",
    "reading": "",
    "pos": "慣用語",
    "meaning": "對不起、過意不去"
  },
  {
    "id": "word_302",
    "kanji": "得をする",
    "reading": "とくをする",
    "pos": "慣用語",
    "meaning": "得到、獲利"
  },
  {
    "id": "word_303",
    "kanji": "損をする",
    "reading": "そんをする",
    "pos": "慣用語",
    "meaning": "虧損、受損"
  },
  {
    "id": "word_304",
    "kanji": "気がある",
    "reading": "きがある",
    "pos": "慣用語",
    "meaning": "有興趣、有意思"
  },
  {
    "id": "word_305",
    "kanji": "ついている",
    "reading": "",
    "pos": "慣用語",
    "meaning": "幸運、運氣好"
  },
  {
    "id": "word_306",
    "kanji": "ましになる",
    "reading": "",
    "pos": "慣用語",
    "meaning": "好轉、變好一點"
  },
  {
    "id": "word_307",
    "kanji": "文句",
    "reading": "もんく",
    "pos": "慣用語",
    "meaning": "抱怨、發牢騷"
  },
  {
    "id": "word_308",
    "kanji": "損",
    "reading": "そん",
    "pos": "慣用語",
    "meaning": "受損、吃虧"
  },
  {
    "id": "word_309",
    "kanji": "損",
    "reading": "そん",
    "pos": "慣用語",
    "meaning": "受損、吃虧"
  },
  {
    "id": "word_310",
    "kanji": "文句",
    "reading": "もんく",
    "pos": "慣用語",
    "meaning": "抱怨、發牢騷"
  },
  {
    "id": "word_311",
    "kanji": "損",
    "reading": "そん",
    "pos": "慣用語",
    "meaning": "受損、吃虧"
  },
  {
    "id": "word_312",
    "kanji": "損",
    "reading": "そん",
    "pos": "慣用語",
    "meaning": "受損、吃虧"
  },
  {
    "id": "word_313",
    "kanji": "為になる",
    "reading": "ためになる",
    "pos": "慣用語",
    "meaning": "有益、有幫助"
  },
  {
    "id": "word_314",
    "kanji": "役に立つ",
    "reading": "やくにたつ",
    "pos": "慣用語",
    "meaning": "有用、派上用場"
  },
  {
    "id": "word_315",
    "kanji": "癖になる",
    "reading": "くせになる",
    "pos": "慣用語",
    "meaning": "變成習慣、上癮"
  },
  {
    "id": "word_316",
    "kanji": "お構いなく",
    "reading": "おかまいなく",
    "pos": "慣用語",
    "meaning": "請別費心、不用招待"
  },
  {
    "id": "word_317",
    "kanji": "うるさく言う",
    "reading": "",
    "pos": "慣用語",
    "meaning": "嘮叨、囉唆個不停"
  },
  {
    "id": "word_318",
    "kanji": "うるさい通り",
    "reading": "",
    "pos": "慣用語",
    "meaning": "吵雜的街道"
  }
];
