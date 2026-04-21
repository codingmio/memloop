const initialDeck = [
  {
    "id": "word_1",
    "kanji": "声",
    "reading": "こえ",
    "pos": "名詞",
    "meaning": "聲音",
    "isImportant": false
  },
  {
    "id": "word_2",
    "kanji": "仕事",
    "reading": "しごと",
    "pos": "名詞",
    "meaning": "工作",
    "isImportant": true
  },
  {
    "id": "word_3",
    "kanji": "自動車",
    "reading": "じどうしゃ",
    "pos": "名詞",
    "meaning": "汽車",
    "isImportant": false
  },
  {
    "id": "word_4",
    "kanji": "家族",
    "reading": "かぞく",
    "pos": "名詞",
    "meaning": "家人、家族",
    "isImportant": true
  },
  {
    "id": "word_5",
    "kanji": "事故",
    "reading": "じこ",
    "pos": "名詞",
    "meaning": "事故、意外",
    "isImportant": true
  },
  {
    "id": "word_6",
    "kanji": "波",
    "reading": "なみ",
    "pos": "名詞",
    "meaning": "波浪",
    "isImportant": false
  },
  {
    "id": "word_7",
    "kanji": "雲",
    "reading": "くも",
    "pos": "名詞",
    "meaning": "雲",
    "isImportant": false
  },
  {
    "id": "word_8",
    "kanji": "雷",
    "reading": "かみなり",
    "pos": "名詞",
    "meaning": "雷、閃電",
    "isImportant": false
  },
  {
    "id": "word_9",
    "kanji": "港",
    "reading": "みなと",
    "pos": "名詞",
    "meaning": "港口",
    "isImportant": false
  },
  {
    "id": "word_10",
    "kanji": "池",
    "reading": "いけ",
    "pos": "名詞",
    "meaning": "池塘",
    "isImportant": false
  },
  {
    "id": "word_11",
    "kanji": "湖",
    "reading": "みずうみ",
    "pos": "名詞",
    "meaning": "湖泊",
    "isImportant": false
  },
  {
    "id": "word_12",
    "kanji": "地震",
    "reading": "じしん",
    "pos": "名詞",
    "meaning": "地震",
    "isImportant": true
  },
  {
    "id": "word_13",
    "kanji": "恋人",
    "reading": "こいびと",
    "pos": "名詞",
    "meaning": "戀人",
    "isImportant": true
  },
  {
    "id": "word_14",
    "kanji": "本人",
    "reading": "ほんにん",
    "pos": "名詞",
    "meaning": "本人",
    "isImportant": false
  },
  {
    "id": "word_15",
    "kanji": "友人",
    "reading": "ゆうじん",
    "pos": "名詞",
    "meaning": "朋友",
    "isImportant": false
  },
  {
    "id": "word_16",
    "kanji": "畑",
    "reading": "はたけ",
    "pos": "名詞",
    "meaning": "旱田、農地",
    "isImportant": false
  },
  {
    "id": "word_17",
    "kanji": "漁師",
    "reading": "りょうし",
    "pos": "名詞",
    "meaning": "漁夫",
    "isImportant": false
  },
  {
    "id": "word_18",
    "kanji": "合い鍵",
    "reading": "あいかぎ",
    "pos": "名詞",
    "meaning": "備用鑰匙",
    "isImportant": false
  },
  {
    "id": "word_19",
    "kanji": "合図",
    "reading": "あいず",
    "pos": "名詞",
    "meaning": "信號、暗號",
    "isImportant": false
  },
  {
    "id": "word_20",
    "kanji": "空き地",
    "reading": "あきち",
    "pos": "名詞",
    "meaning": "空地",
    "isImportant": false
  },
  {
    "id": "word_21",
    "kanji": "名刺",
    "reading": "めいし",
    "pos": "名詞",
    "meaning": "名片",
    "isImportant": true
  },
  {
    "id": "word_22",
    "kanji": "欠点",
    "reading": "けってん",
    "pos": "名詞",
    "meaning": "缺點",
    "isImportant": true
  },
  {
    "id": "word_23",
    "kanji": "短気",
    "reading": "たんき",
    "pos": "名詞 / な形容詞",
    "meaning": "急躁、性急",
    "isImportant": true
  },
  {
    "id": "word_24",
    "kanji": "留守",
    "reading": "るす",
    "pos": "名詞",
    "meaning": "（外出）不在家",
    "isImportant": true
  },
  {
    "id": "word_25",
    "kanji": "努力",
    "reading": "どりょく",
    "pos": "名詞 / (～する)",
    "meaning": "努力",
    "isImportant": true
  },
  {
    "id": "word_26",
    "kanji": "制服",
    "reading": "せいふく",
    "pos": "名詞",
    "meaning": "制服",
    "isImportant": true
  },
  {
    "id": "word_27",
    "kanji": "犯人",
    "reading": "はんにん",
    "pos": "名詞",
    "meaning": "犯人",
    "isImportant": false
  },
  {
    "id": "word_28",
    "kanji": "交通",
    "reading": "こうつう",
    "pos": "名詞",
    "meaning": "交通",
    "isImportant": false
  },
  {
    "id": "word_29",
    "kanji": "責任",
    "reading": "せきにん",
    "pos": "名詞",
    "meaning": "責任",
    "isImportant": true
  },
  {
    "id": "word_30",
    "kanji": "目的",
    "reading": "もくてき",
    "pos": "名詞",
    "meaning": "目的",
    "isImportant": true
  },
  {
    "id": "word_31",
    "kanji": "理由",
    "reading": "りゆう",
    "pos": "名詞",
    "meaning": "理由",
    "isImportant": true
  },
  {
    "id": "word_32",
    "kanji": "解決",
    "reading": "かいけつ",
    "pos": "名詞 / (～する)",
    "meaning": "解決",
    "isImportant": true
  },
  {
    "id": "word_33",
    "kanji": "感動",
    "reading": "かんどう",
    "pos": "名詞 / (～する)",
    "meaning": "感動",
    "isImportant": true
  },
  {
    "id": "word_34",
    "kanji": "経験",
    "reading": "けいけん",
    "pos": "名詞 / (～する)",
    "meaning": "經驗",
    "isImportant": true
  },
  {
    "id": "word_35",
    "kanji": "失敗",
    "reading": "しっぱい",
    "pos": "名詞 / (～する)",
    "meaning": "失敗",
    "isImportant": true
  },
  {
    "id": "word_36",
    "kanji": "成功",
    "reading": "せいこう",
    "pos": "名詞 / (～する)",
    "meaning": "成功",
    "isImportant": true
  },
  {
    "id": "word_37",
    "kanji": "注意",
    "reading": "ちゅうい",
    "pos": "名詞 / (～する)",
    "meaning": "注意、警告",
    "isImportant": true
  },
  {
    "id": "word_38",
    "kanji": "遅刻",
    "reading": "ちこく",
    "pos": "名詞 / (～する)",
    "meaning": "遲到",
    "isImportant": true
  },
  {
    "id": "word_39",
    "kanji": "登山",
    "reading": "とざん",
    "pos": "名詞 / (～する)",
    "meaning": "登山",
    "isImportant": true
  },
  {
    "id": "word_40",
    "kanji": "工夫",
    "reading": "くふう",
    "pos": "名詞 / (～する)",
    "meaning": "鑽研、下功夫",
    "isImportant": true
  },
  {
    "id": "word_41",
    "kanji": "授業",
    "reading": "じゅぎょう",
    "pos": "名詞 / (～する)",
    "meaning": "授課、上課",
    "isImportant": true
  },
  {
    "id": "word_42",
    "kanji": "約束",
    "reading": "やくそく",
    "pos": "名詞 / (～する)",
    "meaning": "約定、承諾",
    "isImportant": true
  },
  {
    "id": "word_43",
    "kanji": "反対",
    "reading": "はんたい",
    "pos": "名詞 / (～する)",
    "meaning": "相反、反對",
    "isImportant": true
  },
  {
    "id": "word_44",
    "kanji": "教育",
    "reading": "きょういく",
    "pos": "名詞 / (～する)",
    "meaning": "教育",
    "isImportant": false
  },
  {
    "id": "word_45",
    "kanji": "広告",
    "reading": "こうこく",
    "pos": "名詞 / (～する)",
    "meaning": "廣告",
    "isImportant": true
  },
  {
    "id": "word_46",
    "kanji": "実現",
    "reading": "じつげん",
    "pos": "名詞 / (～する)",
    "meaning": "實現、達成",
    "isImportant": true
  },
  {
    "id": "word_47",
    "kanji": "実験",
    "reading": "じっけん",
    "pos": "名詞 / (～する)",
    "meaning": "實驗、試驗",
    "isImportant": false
  },
  {
    "id": "word_48",
    "kanji": "支度",
    "reading": "したく",
    "pos": "名詞 / (～する)",
    "meaning": "準備（餐點或旅行）",
    "isImportant": true
  },
  {
    "id": "word_49",
    "kanji": "片付け",
    "reading": "かたづけ",
    "pos": "名詞 / (～する)",
    "meaning": "整理、打掃",
    "isImportant": false
  },
  {
    "id": "word_50",
    "kanji": "メモ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "筆記、記錄 (memo)",
    "isImportant": false
  },
  {
    "id": "word_51",
    "kanji": "打ち合わせ",
    "reading": "うちあわせ",
    "pos": "名詞 / (～する)",
    "meaning": "事前商議、協商",
    "isImportant": true
  },
  {
    "id": "word_52",
    "kanji": "待ち合わせ",
    "reading": "まちあわせ",
    "pos": "名詞 / (～する)",
    "meaning": "會合、碰面",
    "isImportant": true
  },
  {
    "id": "word_53",
    "kanji": "組み合わせ",
    "reading": "くみあわせ",
    "pos": "名詞 / (～する)",
    "meaning": "組合、搭配",
    "isImportant": false
  },
  {
    "id": "word_54",
    "kanji": "問い合わせ",
    "reading": "といあわせ",
    "pos": "名詞 / (～する)",
    "meaning": "詢問、查詢",
    "isImportant": true
  },
  {
    "id": "word_55",
    "kanji": "纏め",
    "reading": "まとめ",
    "pos": "名詞",
    "meaning": "總結、整理、彙整",
    "isImportant": false
  },
  {
    "id": "word_56",
    "kanji": "末っ子",
    "reading": "すえっこ",
    "pos": "名詞",
    "meaning": "老么",
    "isImportant": false
  },
  {
    "id": "word_57",
    "kanji": "生",
    "reading": "なま",
    "pos": "名詞",
    "meaning": "生的、未加工的；生啤酒",
    "isImportant": false
  },
  {
    "id": "word_58",
    "kanji": "売り上げ",
    "reading": "うりあげ",
    "pos": "名詞",
    "meaning": "營業額",
    "isImportant": false
  },
  {
    "id": "word_59",
    "kanji": "売り場",
    "reading": "うりば",
    "pos": "名詞",
    "meaning": "賣場、售票處",
    "isImportant": false
  },
  {
    "id": "word_60",
    "kanji": "売り切れ",
    "reading": "うりきれ",
    "pos": "名詞",
    "meaning": "售完、賣光",
    "isImportant": true
  },
  {
    "id": "word_61",
    "kanji": "売り出し",
    "reading": "うりだし",
    "pos": "名詞",
    "meaning": "出清、上市",
    "isImportant": false
  },
  {
    "id": "word_62",
    "kanji": "髭",
    "reading": "ひげ",
    "pos": "名詞",
    "meaning": "鬍鬚",
    "isImportant": false
  },
  {
    "id": "word_63",
    "kanji": "肘",
    "reading": "ひじ",
    "pos": "名詞",
    "meaning": "手肘",
    "isImportant": false
  },
  {
    "id": "word_64",
    "kanji": "禿",
    "reading": "はげ",
    "pos": "名詞",
    "meaning": "禿頭",
    "isImportant": false
  },
  {
    "id": "word_65",
    "kanji": "黴",
    "reading": "かび",
    "pos": "名詞",
    "meaning": "霉菌",
    "isImportant": false
  },
  {
    "id": "word_66",
    "kanji": "再来週",
    "reading": "さらいしゅう",
    "pos": "名詞",
    "meaning": "下下週",
    "isImportant": false
  },
  {
    "id": "word_67",
    "kanji": "君",
    "reading": "きみ",
    "pos": "代名詞",
    "meaning": "你、君（對下輩或親密者）",
    "isImportant": false
  },
  {
    "id": "word_68",
    "kanji": "券",
    "reading": "けん",
    "pos": "名詞",
    "meaning": "券、票",
    "isImportant": false
  },
  {
    "id": "word_69",
    "kanji": "賃",
    "reading": "ちん",
    "pos": "名詞 / 接尾詞",
    "meaning": "費用、租金（運賃、家賃等）",
    "isImportant": true
  },
  {
    "id": "word_70",
    "kanji": "方向",
    "reading": "ほうこう",
    "pos": "名詞",
    "meaning": "方向",
    "isImportant": true
  },
  {
    "id": "word_71",
    "kanji": "土地",
    "reading": "とち",
    "pos": "名詞",
    "meaning": "土地",
    "isImportant": false
  },
  {
    "id": "word_72",
    "kanji": "向き",
    "reading": "むき",
    "pos": "名詞 / 接尾詞",
    "meaning": "方向、朝向；適合～用途",
    "isImportant": true
  },
  {
    "id": "word_73",
    "kanji": "地方",
    "reading": "ちほう",
    "pos": "名詞",
    "meaning": "地方、地區（非都市的地方）",
    "isImportant": true
  },
  {
    "id": "word_74",
    "kanji": "地域",
    "reading": "ちいき",
    "pos": "名詞",
    "meaning": "地區、區域",
    "isImportant": false
  },
  {
    "id": "word_75",
    "kanji": "三角",
    "reading": "さんかく",
    "pos": "名詞",
    "meaning": "三角形",
    "isImportant": false
  },
  {
    "id": "word_76",
    "kanji": "物語",
    "reading": "ものがたり",
    "pos": "名詞",
    "meaning": "故事、傳說",
    "isImportant": false
  },
  {
    "id": "word_77",
    "kanji": "書物",
    "reading": "しょもつ",
    "pos": "名詞",
    "meaning": "書籍",
    "isImportant": false
  },
  {
    "id": "word_78",
    "kanji": "貝",
    "reading": "かい",
    "pos": "名詞",
    "meaning": "貝、貝類、貝殼",
    "isImportant": false
  },
  {
    "id": "word_79",
    "kanji": "製品",
    "reading": "せいひん",
    "pos": "名詞",
    "meaning": "製品、產品",
    "isImportant": false
  },
  {
    "id": "word_80",
    "kanji": "行き",
    "reading": "ゆき",
    "pos": "名詞",
    "meaning": "往～方向、前往(行く的書面用語)",
    "isImportant": false
  },
  {
    "id": "word_81",
    "kanji": "様子",
    "reading": "ようす",
    "pos": "名詞",
    "meaning": "情況、情形、樣子",
    "isImportant": true
  },
  {
    "id": "word_82",
    "kanji": "態度",
    "reading": "たいど",
    "pos": "名詞",
    "meaning": "態度",
    "isImportant": true
  },
  {
    "id": "word_83",
    "kanji": "格好",
    "reading": "かっこう",
    "pos": "名詞",
    "meaning": "打扮、外表樣子；適合",
    "isImportant": true
  },
  {
    "id": "word_384",
    "kanji": "プリント",
    "reading": "",
    "pos": "名詞",
    "meaning": "講義、印刷品 (print)",
    "isImportant": false
  },
  {
    "id": "word_85",
    "kanji": "現実",
    "reading": "げんじつ",
    "pos": "名詞",
    "meaning": "現實、實際",
    "isImportant": true
  },
  {
    "id": "word_86",
    "kanji": "論文",
    "reading": "ろんぶん",
    "pos": "名詞",
    "meaning": "論文",
    "isImportant": false
  },
  {
    "id": "word_87",
    "kanji": "王子",
    "reading": "おうじ",
    "pos": "名詞",
    "meaning": "王子",
    "isImportant": false
  },
  {
    "id": "word_88",
    "kanji": "都合",
    "reading": "つごう",
    "pos": "名詞",
    "meaning": "方便、合適；狀況安排",
    "isImportant": true
  },
  {
    "id": "word_89",
    "kanji": "具合",
    "reading": "ぐあい",
    "pos": "名詞",
    "meaning": "狀態、健康情況",
    "isImportant": true
  },
  {
    "id": "word_90",
    "kanji": "表",
    "reading": "おもて",
    "pos": "名詞",
    "meaning": "正面、表面",
    "isImportant": false
  },
  {
    "id": "word_91",
    "kanji": "裏",
    "reading": "うら",
    "pos": "名詞",
    "meaning": "反面、背面；內幕",
    "isImportant": true
  },
  {
    "id": "word_92",
    "kanji": "祈り",
    "reading": "いのり",
    "pos": "名詞",
    "meaning": "祈禱、祝願",
    "isImportant": false
  },
  {
    "id": "word_93",
    "kanji": "税",
    "reading": "ぜい",
    "pos": "名詞",
    "meaning": "稅、稅金",
    "isImportant": false
  },
  {
    "id": "word_94",
    "kanji": "祝い",
    "reading": "いわい",
    "pos": "名詞",
    "meaning": "慶祝、祝賀",
    "isImportant": false
  },
  {
    "id": "word_95",
    "kanji": "症状",
    "reading": "しょうじょう",
    "pos": "名詞",
    "meaning": "症狀",
    "isImportant": false
  },
  {
    "id": "word_96",
    "kanji": "交差点",
    "reading": "こうさてん",
    "pos": "名詞",
    "meaning": "交叉路口",
    "isImportant": true
  },
  {
    "id": "word_97",
    "kanji": "求人",
    "reading": "きゅうじん",
    "pos": "名詞",
    "meaning": "徵人、招聘",
    "isImportant": false
  },
  {
    "id": "word_98",
    "kanji": "種",
    "reading": "たね",
    "pos": "名詞",
    "meaning": "種子；原因、根源；素材、材料",
    "isImportant": false
  },
  {
    "id": "word_99",
    "kanji": "草",
    "reading": "くさ",
    "pos": "名詞",
    "meaning": "草",
    "isImportant": false
  },
  {
    "id": "word_100",
    "kanji": "根",
    "reading": "ね",
    "pos": "名詞",
    "meaning": "根源、根本",
    "isImportant": false
  },
  {
    "id": "word_101",
    "kanji": "豆",
    "reading": "まめ",
    "pos": "名詞",
    "meaning": "豆子",
    "isImportant": false
  },
  {
    "id": "word_102",
    "kanji": "毛糸",
    "reading": "けいと",
    "pos": "名詞",
    "meaning": "毛線",
    "isImportant": false
  },
  {
    "id": "word_103",
    "kanji": "仕上がり",
    "reading": "しあがり",
    "pos": "名詞",
    "meaning": "完成狀態、成品",
    "isImportant": false
  },
  {
    "id": "word_104",
    "kanji": "用事",
    "reading": "ようじ",
    "pos": "名詞",
    "meaning": "事情、任務、要事",
    "isImportant": true
  },
  {
    "id": "word_105",
    "kanji": "卒業式",
    "reading": "そつぎょうしき",
    "pos": "名詞",
    "meaning": "畢業典禮",
    "isImportant": false
  },
  {
    "id": "word_106",
    "kanji": "宿題",
    "reading": "しゅくだい",
    "pos": "名詞",
    "meaning": "作業、功課",
    "isImportant": false
  },
  {
    "id": "word_423",
    "kanji": "布団",
    "reading": "ふとん",
    "pos": "名詞",
    "meaning": "棉被",
    "isImportant": false
  },
  {
    "id": "word_424",
    "kanji": "真似",
    "reading": "まね",
    "pos": "名詞",
    "meaning": "模仿、效法、仿效",
    "isImportant": false
  },
  {
    "id": "word_425",
    "kanji": "手入れ",
    "reading": "ていれ",
    "pos": "名詞",
    "meaning": "修繕、修整、整理、修剪（樹木）、保養",
    "isImportant": false
  },
  {
    "id": "word_426",
    "kanji": "自然",
    "reading": "しぜん",
    "pos": "名詞",
    "meaning": "自然",
    "isImportant": true
  },
  {
    "id": "word_427",
    "kanji": "快速",
    "reading": "かいそく",
    "pos": "名詞",
    "meaning": "快速",
    "isImportant": false
  },
  {
    "id": "word_428",
    "kanji": "習慣",
    "reading": "しゅうかん",
    "pos": "名詞",
    "meaning": "習慣",
    "isImportant": false
  },
  {
    "id": "word_429",
    "kanji": "週刊",
    "reading": "しゅうかん",
    "pos": "名詞",
    "meaning": "週刊雜誌",
    "isImportant": false
  },
  {
    "id": "word_579",
    "kanji": "裏返し",
    "reading": "うらがえし",
    "pos": "名詞",
    "meaning": "翻面、反面／內幕",
    "isImportant": false
  },
  {
    "id": "word_580",
    "kanji": "調味料",
    "reading": "ちょうみりょう",
    "pos": "名詞",
    "meaning": "調味料",
    "isImportant": false
  },
  {
    "id": "word_581",
    "kanji": "居間",
    "reading": "いま",
    "pos": "名詞",
    "meaning": "起居室（客廳）",
    "isImportant": false
  },
  {
    "id": "word_582",
    "kanji": "日当たり",
    "reading": "ひあたり",
    "pos": "名詞",
    "meaning": "採光、日照、向陽／日曬情況",
    "isImportant": false
  },
  {
    "id": "word_583",
    "kanji": "湯飲み",
    "reading": "ゆのみ",
    "pos": "名詞",
    "meaning": "茶杯",
    "isImportant": false
  },
  {
    "id": "word_584",
    "kanji": "毛布",
    "reading": "もうふ",
    "pos": "名詞",
    "meaning": "毛毯",
    "isImportant": false
  },
  {
    "id": "word_585",
    "kanji": "大きめ",
    "reading": "おおきめ",
    "pos": "名詞 / な形容詞",
    "meaning": "偏大、稍大",
    "isImportant": false
  },
  {
    "id": "word_586",
    "kanji": "負んぶ",
    "reading": "おんぶ",
    "pos": "名詞 / (～する)",
    "meaning": "背在背上、揹、背負",
    "isImportant": false
  },
  {
    "id": "word_587",
    "kanji": "抱っこ",
    "reading": "だっこ",
    "pos": "名詞 / (～する)",
    "meaning": "抱抱、擁抱",
    "isImportant": false
  },
  {
    "id": "word_596",
    "kanji": "速達",
    "reading": "そくたつ",
    "pos": "名詞",
    "meaning": "快遞、限時專送",
    "isImportant": true
  },
  {
    "id": "word_597",
    "kanji": "窓口",
    "reading": "まどぐち",
    "pos": "名詞",
    "meaning": "窗口",
    "isImportant": true
  },
  {
    "id": "word_598",
    "kanji": "通帳",
    "reading": "つうちょう",
    "pos": "名詞",
    "meaning": "存摺",
    "isImportant": true
  },
  {
    "id": "word_599",
    "kanji": "駐車",
    "reading": "ちゅうしゃ",
    "pos": "名詞 / (～する)",
    "meaning": "停車、泊車",
    "isImportant": true
  },
  {
    "id": "word_600",
    "kanji": "免許証",
    "reading": "めんきょしょう",
    "pos": "名詞",
    "meaning": "執照、駕照",
    "isImportant": true
  },
  {
    "id": "word_601",
    "kanji": "先日",
    "reading": "せんじつ",
    "pos": "名詞",
    "meaning": "前幾天",
    "isImportant": true
  },
  {
    "id": "word_602",
    "kanji": "精算・清算",
    "reading": "せいさん",
    "pos": "名詞 / (～する)",
    "meaning": "「精」確計算、結算（補票、報帳）；「清」理計算、結算（分手、還債、公司倒閉）",
    "isImportant": true
  },
  {
    "id": "word_603",
    "kanji": "宿泊",
    "reading": "しゅくはく",
    "pos": "名詞 / (～する)",
    "meaning": "住宿、投宿",
    "isImportant": true
  },
  {
    "id": "word_604",
    "kanji": "上り",
    "reading": "のぼり",
    "pos": "名詞",
    "meaning": "上升、前往「首都、城市」的方向（反意：下り（くだり））",
    "isImportant": true
  },
  {
    "id": "word_605",
    "kanji": "改札口",
    "reading": "かいさつぐち",
    "pos": "名詞",
    "meaning": "剪票口",
    "isImportant": true
  },
  {
    "id": "word_606",
    "kanji": "乗り換え",
    "reading": "のりかえ",
    "pos": "名詞 / (～する)",
    "meaning": "轉乘、換車、換乘；更換、替換",
    "isImportant": true
  },
  {
    "id": "word_607",
    "kanji": "停留所",
    "reading": "ていりゅうじょ",
    "pos": "名詞",
    "meaning": "停靠站",
    "isImportant": true
  },
  {
    "id": "word_608",
    "kanji": "仕送り",
    "reading": "しおくり",
    "pos": "名詞",
    "meaning": "匯款、寄錢；資助、供養",
    "isImportant": true
  },
  {
    "id": "word_609",
    "kanji": "振り込み",
    "reading": "ふりこみ",
    "pos": "名詞",
    "meaning": "匯款、轉帳、劃撥",
    "isImportant": true
  },
  {
    "id": "word_610",
    "kanji": "交際",
    "reading": "こうさい",
    "pos": "名詞 / (～する)",
    "meaning": "交際、交往、社交",
    "isImportant": true
  },
  {
    "id": "word_611",
    "kanji": "仲直り",
    "reading": "なかなおり",
    "pos": "名詞 / (～する)",
    "meaning": "和好、和解、重修舊好",
    "isImportant": true
  },
  {
    "id": "word_612",
    "kanji": "眉毛",
    "reading": "まゆげ",
    "pos": "名詞",
    "meaning": "眉毛",
    "isImportant": false
  },
  {
    "id": "word_613",
    "kanji": "ドライヤー",
    "reading": "",
    "pos": "名詞",
    "meaning": "吹風機 (dryer)",
    "isImportant": false
  },
  {
    "id": "word_614",
    "kanji": "行列",
    "reading": "ぎょうれつ",
    "pos": "名詞",
    "meaning": "隊伍、行列；矩陣",
    "isImportant": true
  },
  {
    "id": "word_615",
    "kanji": "お代わり",
    "reading": "おかわり",
    "pos": "名詞",
    "meaning": "再來一份、續杯；代替、替換",
    "isImportant": true
  },
  {
    "id": "word_616",
    "kanji": "水割り",
    "reading": "みずわり",
    "pos": "名詞",
    "meaning": "用水稀釋酒精飲料的飲品（通常使用蒸餾酒，如威士忌、燒酎）",
    "isImportant": false
  },
  {
    "id": "word_617",
    "kanji": "お摘み",
    "reading": "おつまみ",
    "pos": "名詞",
    "meaning": "下酒菜、小菜",
    "isImportant": false
  },
  {
    "id": "word_618",
    "kanji": "お勘定",
    "reading": "おかんじょう",
    "pos": "名詞",
    "meaning": "帳單、結帳",
    "isImportant": true
  },
  {
    "id": "word_619",
    "kanji": "熱中",
    "reading": "ねっちゅう",
    "pos": "名詞 / (～する)",
    "meaning": "熱衷",
    "isImportant": true
  },
  {
    "id": "word_636",
    "kanji": "出席",
    "reading": "しゅっせき",
    "pos": "名詞 / (～する)",
    "meaning": "出席",
    "isImportant": true
  },
  {
    "id": "word_637",
    "kanji": "定規",
    "reading": "じょうぎ",
    "pos": "名詞",
    "meaning": "尺",
    "isImportant": false
  },
  {
    "id": "word_638",
    "kanji": "提出",
    "reading": "ていしゅつ",
    "pos": "名詞 / (～する)",
    "meaning": "提出、遞交",
    "isImportant": true
  },
  {
    "id": "word_639",
    "kanji": "初心者",
    "reading": "しょしんしゃ",
    "pos": "名詞",
    "meaning": "初學者、新手、初心者",
    "isImportant": false
  },
  {
    "id": "word_640",
    "kanji": "居眠り",
    "reading": "いねむり",
    "pos": "名詞 / (～する)",
    "meaning": "打瞌睡、打盹",
    "isImportant": true
  },
  {
    "id": "word_641",
    "kanji": "単位",
    "reading": "たんい",
    "pos": "名詞",
    "meaning": "單位（単位を落とす：沒拿到學分（被當掉））",
    "isImportant": true
  },
  {
    "id": "word_642",
    "kanji": "記入",
    "reading": "きにゅう",
    "pos": "名詞 / (～する)",
    "meaning": "記入、填寫、登記",
    "isImportant": true
  },
  {
    "id": "word_643",
    "kanji": "下書き",
    "reading": "したがき",
    "pos": "名詞 / (～する)",
    "meaning": "草稿、底稿、打草稿",
    "isImportant": false
  },
  {
    "id": "word_644",
    "kanji": "チェック",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "檢查、確認 (check)",
    "isImportant": true
  },
  {
    "id": "word_645",
    "kanji": "添付",
    "reading": "てんぷ",
    "pos": "名詞 / (～する)",
    "meaning": "附加、附上、附件",
    "isImportant": true
  },
  {
    "id": "word_646",
    "kanji": "入力",
    "reading": "にゅうりょく",
    "pos": "名詞 / (～する)",
    "meaning": "輸入",
    "isImportant": true
  },
  {
    "id": "word_647",
    "kanji": "やり取り",
    "reading": "やりとり",
    "pos": "名詞 / (～する)",
    "meaning": "往來、互動（メールのやり取り（郵件往來））",
    "isImportant": true
  },
  {
    "id": "word_648",
    "kanji": "調査",
    "reading": "ちょうさ",
    "pos": "名詞 / (～する)",
    "meaning": "調查",
    "isImportant": true
  },
  {
    "id": "word_649",
    "kanji": "高級",
    "reading": "こうきゅう",
    "pos": "名詞 / な形容詞",
    "meaning": "高級、高檔",
    "isImportant": true
  },
  {
    "id": "word_650",
    "kanji": "遠慮",
    "reading": "えんりょ",
    "pos": "名詞 / (～する)",
    "meaning": "客氣、顧慮；節制、自制；婉拒、謝絕（肯定拒絕；否定盡情做）",
    "isImportant": true
  },
  {
    "id": "word_651",
    "kanji": "ゲップ",
    "reading": "",
    "pos": "名詞",
    "meaning": "打嗝 (belch / げっぷ)",
    "isImportant": false
  },
  {
    "id": "word_652",
    "kanji": "ストレス",
    "reading": "",
    "pos": "名詞",
    "meaning": "壓力 (stress)",
    "isImportant": true
  },
  {
    "id": "word_107",
    "kanji": "受ける",
    "reading": "うける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "接受、承受；應試",
    "isImportant": true
  },
  {
    "id": "word_108",
    "kanji": "走る",
    "reading": "はしる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "跑步、行駛",
    "isImportant": true
  },
  {
    "id": "word_109",
    "kanji": "止まる",
    "reading": "とまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "停止、停下",
    "isImportant": true
  },
  {
    "id": "word_110",
    "kanji": "閉まる",
    "reading": "しまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "（門、店）關閉（自動詞）",
    "isImportant": true
  },
  {
    "id": "word_430",
    "kanji": "溜まる・貯まる",
    "reading": "たまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "累積、堆積；積壓（壓力、文件等/ 溜まる）；積存、累積、儲存(常用於金錢或資產/ 貯まる)",
    "isImportant": true
  },
  {
    "id": "word_112",
    "kanji": "決まる",
    "reading": "きまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "（事情）決定、定下來",
    "isImportant": true
  },
  {
    "id": "word_113",
    "kanji": "乗る",
    "reading": "のる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "乘坐、搭乘",
    "isImportant": true
  },
  {
    "id": "word_114",
    "kanji": "迷う",
    "reading": "まよう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "迷路、迷失；猶豫不決",
    "isImportant": true
  },
  {
    "id": "word_115",
    "kanji": "増える",
    "reading": "ふえる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "增加",
    "isImportant": true
  },
  {
    "id": "word_116",
    "kanji": "減る",
    "reading": "へる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "減少",
    "isImportant": true
  },
  {
    "id": "word_117",
    "kanji": "勝つ",
    "reading": "かつ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "獲勝、贏",
    "isImportant": false
  },
  {
    "id": "word_118",
    "kanji": "負ける",
    "reading": "まける",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "輸、落敗",
    "isImportant": true
  },
  {
    "id": "word_119",
    "kanji": "起きる",
    "reading": "おきる",
    "pos": "第二類動詞 (上一段/自)",
    "meaning": "起床；發生（事件）",
    "isImportant": true
  },
  {
    "id": "word_120",
    "kanji": "寝る",
    "reading": "ねる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "睡覺",
    "isImportant": false
  },
  {
    "id": "word_121",
    "kanji": "付ける",
    "reading": "つける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "附加、裝上；塗抹；開（電器）",
    "isImportant": true
  },
  {
    "id": "word_122",
    "kanji": "掛ける",
    "reading": "かける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "戴上、花費、撥打（電話）、懸掛、乘（法）、覆蓋、澆、撒、讓您過目（謙讓：お目にかける）、耗費（時間、金錢、勞力）",
    "isImportant": true
  },
  {
    "id": "word_123",
    "kanji": "決める",
    "reading": "きめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "決定、確定",
    "isImportant": true
  },
  {
    "id": "word_124",
    "kanji": "上げる",
    "reading": "あげる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "提高、舉起；給（晚輩）",
    "isImportant": true
  },
  {
    "id": "word_125",
    "kanji": "下げる",
    "reading": "さげる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "降低、放下",
    "isImportant": true
  },
  {
    "id": "word_126",
    "kanji": "開ける",
    "reading": "あける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "打開（他動詞）",
    "isImportant": true
  },
  {
    "id": "word_127",
    "kanji": "閉める",
    "reading": "しめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "關閉（他動詞）",
    "isImportant": true
  },
  {
    "id": "word_128",
    "kanji": "入れる",
    "reading": "いれる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "放入、裝入",
    "isImportant": true
  },
  {
    "id": "word_129",
    "kanji": "出す",
    "reading": "だす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "拿出、交出；寄出；端上",
    "isImportant": true
  },
  {
    "id": "word_130",
    "kanji": "覚える",
    "reading": "おぼえる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "記住、背誦；感覺到",
    "isImportant": true
  },
  {
    "id": "word_131",
    "kanji": "忘れる",
    "reading": "わすれる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "忘記",
    "isImportant": true
  },
  {
    "id": "word_132",
    "kanji": "断る",
    "reading": "ことわる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "拒絕；事先告知（無法出席等）",
    "isImportant": true
  },
  {
    "id": "word_133",
    "kanji": "落ち着く",
    "reading": "おちつく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "平靜、冷靜下來；穩定",
    "isImportant": true
  },
  {
    "id": "word_134",
    "kanji": "防ぐ",
    "reading": "ふせぐ",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "阻止、防禦、防止、預防",
    "isImportant": true
  },
  {
    "id": "word_135",
    "kanji": "汚す",
    "reading": "よごす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "弄髒、玷汙",
    "isImportant": true
  },
  {
    "id": "word_136",
    "kanji": "配る",
    "reading": "くばる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "分發、分配",
    "isImportant": true
  },
  {
    "id": "word_137",
    "kanji": "届く",
    "reading": "とどく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "送達、到達；（手、聲音）能及",
    "isImportant": true
  },
  {
    "id": "word_138",
    "kanji": "伝える",
    "reading": "つたえる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "傳達、傳遞",
    "isImportant": true
  },
  {
    "id": "word_139",
    "kanji": "役立つ",
    "reading": "やくだつ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "有用、派上用場",
    "isImportant": false
  },
  {
    "id": "word_140",
    "kanji": "近付く",
    "reading": "ちかづく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "接近、靠近",
    "isImportant": false
  },
  {
    "id": "word_141",
    "kanji": "着替える",
    "reading": "きがえる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "換衣服、更衣",
    "isImportant": false
  },
  {
    "id": "word_142",
    "kanji": "渡る",
    "reading": "わたる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "渡過、過（橋/馬路）；傳到",
    "isImportant": true
  },
  {
    "id": "word_143",
    "kanji": "出会う",
    "reading": "であう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "相遇、相逢",
    "isImportant": false
  },
  {
    "id": "word_144",
    "kanji": "届ける",
    "reading": "とどける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "送到、遞送；（向警方）報案",
    "isImportant": true
  },
  {
    "id": "word_145",
    "kanji": "向かう",
    "reading": "むかう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "朝向、前往、面對",
    "isImportant": true
  },
  {
    "id": "word_146",
    "kanji": "要る",
    "reading": "いる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "要、需要",
    "isImportant": true
  },
  {
    "id": "word_147",
    "kanji": "空く",
    "reading": "あく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "空出、騰出；（肚子）餓",
    "isImportant": true
  },
  {
    "id": "word_148",
    "kanji": "残る",
    "reading": "のこる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "剩餘、殘留",
    "isImportant": true
  },
  {
    "id": "word_149",
    "kanji": "透く",
    "reading": "すく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "稀疏、人少",
    "isImportant": false
  },
  {
    "id": "word_150",
    "kanji": "余る",
    "reading": "あまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "剩餘、過多",
    "isImportant": false
  },
  {
    "id": "word_151",
    "kanji": "思いつく",
    "reading": "おもいつく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "想出來、想到（點子）",
    "isImportant": true
  },
  {
    "id": "word_152",
    "kanji": "張り切る",
    "reading": "はりきる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "幹勁十足、充滿鬥志",
    "isImportant": false
  },
  {
    "id": "word_153",
    "kanji": "見直す",
    "reading": "みなおす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "重看、重新評估；改變看法",
    "isImportant": false
  },
  {
    "id": "word_154",
    "kanji": "飛び出す",
    "reading": "とびだす",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "衝出、突然跳出",
    "isImportant": false
  },
  {
    "id": "word_155",
    "kanji": "転ぶ",
    "reading": "ころぶ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "跌倒",
    "isImportant": false
  },
  {
    "id": "word_156",
    "kanji": "落ちる",
    "reading": "おちる",
    "pos": "第二類動詞 (上一段/自)",
    "meaning": "落下、掉落；（考試）不合格",
    "isImportant": true
  },
  {
    "id": "word_157",
    "kanji": "倒れる",
    "reading": "たおれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "倒塌、倒下；病倒",
    "isImportant": false
  },
  {
    "id": "word_158",
    "kanji": "潰れる",
    "reading": "つぶれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "壓壞；（公司）倒閉",
    "isImportant": false
  },
  {
    "id": "word_159",
    "kanji": "剥く",
    "reading": "むく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "剝皮、削皮",
    "isImportant": true
  },
  {
    "id": "word_160",
    "kanji": "煮る",
    "reading": "にる",
    "pos": "第二類動詞 (上一段/他)",
    "meaning": "煮、燉",
    "isImportant": false
  },
  {
    "id": "word_161",
    "kanji": "茹でる",
    "reading": "ゆでる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "燙、水煮",
    "isImportant": false
  },
  {
    "id": "word_162",
    "kanji": "結ぶ",
    "reading": "むすぶ",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "繫、打結、連結",
    "isImportant": true
  },
  {
    "id": "word_163",
    "kanji": "解ける",
    "reading": "ほどける",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "鬆開、解開",
    "isImportant": false
  },
  {
    "id": "word_164",
    "kanji": "くっ付ける",
    "reading": "くっつける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "黏上、貼上",
    "isImportant": false
  },
  {
    "id": "word_165",
    "kanji": "抜く",
    "reading": "ぬく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "拔、抽出；超越",
    "isImportant": false
  },
  {
    "id": "word_166",
    "kanji": "縫う",
    "reading": "ぬう",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "縫、縫紉",
    "isImportant": false
  },
  {
    "id": "word_167",
    "kanji": "散らかる",
    "reading": "ちらかる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "凌亂、亂七八糟",
    "isImportant": false
  },
  {
    "id": "word_168",
    "kanji": "片付ける",
    "reading": "かたづける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "整頓、收拾",
    "isImportant": true
  },
  {
    "id": "word_169",
    "kanji": "汚れる",
    "reading": "よごれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "變髒、被污染",
    "isImportant": true
  },
  {
    "id": "word_170",
    "kanji": "遅れる",
    "reading": "おくれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "遲到、落後",
    "isImportant": true
  },
  {
    "id": "word_620",
    "kanji": "あきらめる",
    "reading": "諦める",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "死心、放棄",
    "isImportant": true
  },
  {
    "id": "word_172",
    "kanji": "呆れる",
    "reading": "あきれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "吃驚、傻眼、無言、愕然、目瞪口呆",
    "isImportant": false
  },
  {
    "id": "word_621",
    "kanji": "あきる",
    "reading": "飽きる",
    "pos": "第二類動詞 (上一段/自)",
    "meaning": "厭煩、膩了",
    "isImportant": true
  },
  {
    "id": "word_174",
    "kanji": "苦しむ",
    "reading": "くるしむ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "受苦、痛苦、煩惱",
    "isImportant": false
  },
  {
    "id": "word_175",
    "kanji": "量る",
    "reading": "はかる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "測量、稱重",
    "isImportant": false
  },
  {
    "id": "word_176",
    "kanji": "落とす",
    "reading": "おとす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "弄丟、使掉落；去除（汙漬）",
    "isImportant": true
  },
  {
    "id": "word_177",
    "kanji": "困る",
    "reading": "こまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "困擾、為難、傷腦筋",
    "isImportant": true
  },
  {
    "id": "word_178",
    "kanji": "教わる",
    "reading": "おそわる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "向～學習、受教",
    "isImportant": true
  },
  {
    "id": "word_179",
    "kanji": "襲う",
    "reading": "おそう",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "襲擊、侵襲；繼承、承襲",
    "isImportant": false
  },
  {
    "id": "word_180",
    "kanji": "学ぶ",
    "reading": "まなぶ",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "學習",
    "isImportant": true
  },
  {
    "id": "word_181",
    "kanji": "語り合う",
    "reading": "かたりあう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "彼此交談、傾訴",
    "isImportant": false
  },
  {
    "id": "word_182",
    "kanji": "喋る",
    "reading": "しゃべる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "聊天、說話",
    "isImportant": false
  },
  {
    "id": "word_183",
    "kanji": "言い合う",
    "reading": "いいあう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "爭論、爭吵",
    "isImportant": false
  },
  {
    "id": "word_184",
    "kanji": "話しかける",
    "reading": "はなしかける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "搭話、攀談",
    "isImportant": true
  },
  {
    "id": "word_185",
    "kanji": "纏める",
    "reading": "まとめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "整理、彙總、歸納",
    "isImportant": true
  },
  {
    "id": "word_186",
    "kanji": "集める",
    "reading": "あつめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "集合、收集",
    "isImportant": false
  },
  {
    "id": "word_187",
    "kanji": "埋める",
    "reading": "うめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "埋、填滿",
    "isImportant": false
  },
  {
    "id": "word_188",
    "kanji": "含める",
    "reading": "ふくめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "包含、包括",
    "isImportant": false
  },
  {
    "id": "word_189",
    "kanji": "求める",
    "reading": "もとめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "追求、尋求、要求",
    "isImportant": true
  },
  {
    "id": "word_190",
    "kanji": "冷える",
    "reading": "ひえる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "物體變冷、感覺寒冷",
    "isImportant": true
  },
  {
    "id": "word_191",
    "kanji": "冷める",
    "reading": "さめる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "涼掉、冷掉（常用於食物變涼：冷めないうちに）",
    "isImportant": true
  },
  {
    "id": "word_192",
    "kanji": "凍る",
    "reading": "こおる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "凍結、結冰",
    "isImportant": false
  },
  {
    "id": "word_653",
    "kanji": "晴れる",
    "reading": "はれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "放晴",
    "isImportant": true
  },
  {
    "id": "word_193",
    "kanji": "重ねる",
    "reading": "かさねる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "堆疊、重複累積",
    "isImportant": true
  },
  {
    "id": "word_194",
    "kanji": "広げる",
    "reading": "ひろげる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "擴大、展開",
    "isImportant": false
  },
  {
    "id": "word_622",
    "kanji": "たたむ",
    "reading": "畳む",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "折疊、疊好",
    "isImportant": false
  },
  {
    "id": "word_196",
    "kanji": "縮める",
    "reading": "ちぢめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "縮短、縮小",
    "isImportant": false
  },
  {
    "id": "word_197",
    "kanji": "雇う",
    "reading": "やとう",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "雇用",
    "isImportant": false
  },
  {
    "id": "word_198",
    "kanji": "勤める",
    "reading": "つとめる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "工作、任職於",
    "isImportant": true
  },
  {
    "id": "word_199",
    "kanji": "混ぜる",
    "reading": "まぜる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "混合、攪拌",
    "isImportant": false
  },
  {
    "id": "word_200",
    "kanji": "預ける",
    "reading": "あずける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "寄放、寄放(委託他人看管)",
    "isImportant": true
  },
  {
    "id": "word_201",
    "kanji": "折る",
    "reading": "おる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "折疊、折斷",
    "isImportant": false
  },
  {
    "id": "word_202",
    "kanji": "折り曲げる",
    "reading": "おりまげる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "折彎、摺疊",
    "isImportant": false
  },
  {
    "id": "word_203",
    "kanji": "縮む",
    "reading": "ちぢむ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "縮小、收縮",
    "isImportant": false
  },
  {
    "id": "word_204",
    "kanji": "黙る",
    "reading": "だまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "沉默、不說話",
    "isImportant": true
  },
  {
    "id": "word_205",
    "kanji": "飛び込む",
    "reading": "とびこむ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "跳入、跳進",
    "isImportant": false
  },
  {
    "id": "word_206",
    "kanji": "通り過ぎる",
    "reading": "とおりすぎる",
    "pos": "第二類動詞 (上一段/自)",
    "meaning": "走過、經過",
    "isImportant": false
  },
  {
    "id": "word_207",
    "kanji": "通りかかる",
    "reading": "とおりかかる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "路過、碰巧經過",
    "isImportant": false
  },
  {
    "id": "word_208",
    "kanji": "散る",
    "reading": "ちる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "凋謝、散落",
    "isImportant": false
  },
  {
    "id": "word_209",
    "kanji": "枯れる",
    "reading": "かれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "枯萎",
    "isImportant": true
  },
  {
    "id": "word_210",
    "kanji": "詰める",
    "reading": "つめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "塞、裝、填滿；縮短（距離）",
    "isImportant": true
  },
  {
    "id": "word_211",
    "kanji": "包む",
    "reading": "つつむ",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "包裹、包住",
    "isImportant": true
  },
  {
    "id": "word_212",
    "kanji": "積もる",
    "reading": "つもる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "堆積（雪、灰塵等）",
    "isImportant": false
  },
  {
    "id": "word_213",
    "kanji": "嫌う",
    "reading": "きらう",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "討厭、厭惡、嫌棄",
    "isImportant": false
  },
  {
    "id": "word_214",
    "kanji": "嫌がる",
    "reading": "いやがる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "感到討厭、表現出不情願",
    "isImportant": true
  },
  {
    "id": "word_215",
    "kanji": "付き合う",
    "reading": "つきあう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "交往（男女）；陪伴",
    "isImportant": true
  },
  {
    "id": "word_630",
    "kanji": "つながる",
    "reading": "繋がる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "電話接通；連接上",
    "isImportant": true
  },
  {
    "id": "word_217",
    "kanji": "戻る",
    "reading": "もどる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "返回、回到",
    "isImportant": true
  },
  {
    "id": "word_631",
    "kanji": "そろう",
    "reading": "揃う",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "齊全、聚齊",
    "isImportant": false
  },
  {
    "id": "word_219",
    "kanji": "戦う",
    "reading": "たたかう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "戰鬥、奮戰、對抗",
    "isImportant": false
  },
  {
    "id": "word_220",
    "kanji": "繰り返す",
    "reading": "くりかえす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "反覆、重複",
    "isImportant": true
  },
  {
    "id": "word_221",
    "kanji": "刻む",
    "reading": "きざむ",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "切碎；刻畫、雕刻",
    "isImportant": false
  },
  {
    "id": "word_222",
    "kanji": "蒸す",
    "reading": "むす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "蒸、悶",
    "isImportant": false
  },
  {
    "id": "word_223",
    "kanji": "炒める",
    "reading": "いためる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "炒",
    "isImportant": false
  },
  {
    "id": "word_224",
    "kanji": "炊く",
    "reading": "たく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "炊（飯）、煮（飯）",
    "isImportant": false
  },
  {
    "id": "word_225",
    "kanji": "沸かす",
    "reading": "わかす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "使水沸騰、燒開水",
    "isImportant": false
  },
  {
    "id": "word_226",
    "kanji": "稼ぐ",
    "reading": "かせぐ",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "賺取（勞動所得）",
    "isImportant": false
  },
  {
    "id": "word_632",
    "kanji": "儲かる",
    "reading": "もうかる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "賺錢、獲利",
    "isImportant": false
  },
  {
    "id": "word_228",
    "kanji": "奢る",
    "reading": "おごる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "請客",
    "isImportant": false
  },
  {
    "id": "word_229",
    "kanji": "震える",
    "reading": "ふるえる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "震動、發抖",
    "isImportant": false
  },
  {
    "id": "word_230",
    "kanji": "揺れる",
    "reading": "ゆれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "擺動、搖動；猶豫",
    "isImportant": false
  },
  {
    "id": "word_231",
    "kanji": "撫でる",
    "reading": "なでる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "撫摸、輕撫",
    "isImportant": false
  },
  {
    "id": "word_232",
    "kanji": "舐める",
    "reading": "なめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "舔；輕視、小看",
    "isImportant": true
  },
  {
    "id": "word_233",
    "kanji": "鳴く・泣く",
    "reading": "なく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "鳴叫（動物、鳥類 / 鳴く）；哭泣（人類 / 泣く）",
    "isImportant": true
  },
  {
    "id": "word_235",
    "kanji": "擦る",
    "reading": "こする",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "摩擦、揉",
    "isImportant": false
  },
  {
    "id": "word_236",
    "kanji": "捻る",
    "reading": "ひねる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "扭、捻、轉動",
    "isImportant": false
  },
  {
    "id": "word_237",
    "kanji": "解く",
    "reading": "ほどく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "解開、解除",
    "isImportant": false
  },
  {
    "id": "word_238",
    "kanji": "持てる",
    "reading": "もてる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "受（異性）歡迎；能拿、能持有",
    "isImportant": false
  },
  {
    "id": "word_239",
    "kanji": "振る",
    "reading": "ふる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "甩掉（感情）、拒絕（告白）",
    "isImportant": true
  },
  {
    "id": "word_633",
    "kanji": "済む・住む",
    "reading": "すむ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "完結、結束（済む）；居住（住む）",
    "isImportant": true
  },
  {
    "id": "word_241",
    "kanji": "済ませる",
    "reading": "すませる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "做完、完成（雜事）",
    "isImportant": true
  },
  {
    "id": "word_243",
    "kanji": "譲る",
    "reading": "ゆずる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "禮讓、讓出；轉讓",
    "isImportant": true
  },
  {
    "id": "word_244",
    "kanji": "渡す",
    "reading": "わたす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "傳給、交給；渡（船）",
    "isImportant": true
  },
  {
    "id": "word_245",
    "kanji": "回す",
    "reading": "まわす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "轉動、傳遞",
    "isImportant": false
  },
  {
    "id": "word_246",
    "kanji": "繋ぐ",
    "reading": "つなぐ",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "連接、串起、牽住",
    "isImportant": false
  },
  {
    "id": "word_247",
    "kanji": "浴びる",
    "reading": "あびる",
    "pos": "第二類動詞 (上一段/他)",
    "meaning": "沖澡、淋；曝曬（日光浴）",
    "isImportant": true
  },
  {
    "id": "word_248",
    "kanji": "退ける",
    "reading": "どける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "移開、挪開（他動詞）",
    "isImportant": true
  },
  {
    "id": "word_249",
    "kanji": "退く",
    "reading": "どく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "躲開、讓開（自動詞）",
    "isImportant": true
  },
  {
    "id": "word_250",
    "kanji": "外す",
    "reading": "はずす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "取下、解開；避開；錯過；離席",
    "isImportant": true
  },
  {
    "id": "word_251",
    "kanji": "崩す",
    "reading": "くずす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "瓦解、打亂；換零錢",
    "isImportant": false
  },
  {
    "id": "word_252",
    "kanji": "建てる",
    "reading": "たてる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "建築、蓋（房子）、豎立",
    "isImportant": false
  },
  {
    "id": "word_253",
    "kanji": "切る",
    "reading": "きる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "切、斷開；做完（接尾詞）",
    "isImportant": true
  },
  {
    "id": "word_254",
    "kanji": "終える",
    "reading": "おえる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "結束、完成",
    "isImportant": false
  },
  {
    "id": "word_431",
    "kanji": "任せる",
    "reading": "まかせる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "交付、託付、委託",
    "isImportant": false
  },
  {
    "id": "word_432",
    "kanji": "効く",
    "reading": "きく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "見效、奏效",
    "isImportant": false
  },
  {
    "id": "word_433",
    "kanji": "甘やかす",
    "reading": "あまやかす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "溺愛、寵溺、驕縱",
    "isImportant": false
  },
  {
    "id": "word_434",
    "kanji": "甘える",
    "reading": "あまえる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "撒嬌",
    "isImportant": false
  },
  {
    "id": "word_435",
    "kanji": "可愛がる",
    "reading": "かわいがる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "疼愛、寵愛、愛護",
    "isImportant": false
  },
  {
    "id": "word_436",
    "kanji": "躾ける",
    "reading": "しつける",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "管教、教養、訓練",
    "isImportant": false
  },
  {
    "id": "word_437",
    "kanji": "湿らせる",
    "reading": "しめらせる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "使潮濕、弄濕",
    "isImportant": false
  },
  {
    "id": "word_438",
    "kanji": "湿る",
    "reading": "しめる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "潮濕、受潮",
    "isImportant": false
  },
  {
    "id": "word_439",
    "kanji": "濡らす",
    "reading": "ぬらす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "弄濕、浸濕、沾濕",
    "isImportant": false
  },
  {
    "id": "word_440",
    "kanji": "ぬれる",
    "reading": "",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "淋濕",
    "isImportant": false
  },
  {
    "id": "word_441",
    "kanji": "乾かす",
    "reading": "かわかす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "弄乾、曬乾、使乾燥",
    "isImportant": false
  },
  {
    "id": "word_442",
    "kanji": "乾く",
    "reading": "かわく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "乾涸、口乾、乾燥、變乾",
    "isImportant": true
  },
  {
    "id": "word_443",
    "kanji": "怠ける",
    "reading": "なまける",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "懶惰、偷懶、懈怠、怠惰",
    "isImportant": false
  },
  {
    "id": "word_445",
    "kanji": "省く",
    "reading": "はぶく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "節省、省略、刪減",
    "isImportant": false
  },
  {
    "id": "word_446",
    "kanji": "減らす",
    "reading": "へらす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "減少",
    "isImportant": false
  },
  {
    "id": "word_447",
    "kanji": "吊す",
    "reading": "つるす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "懸掛、吊",
    "isImportant": false
  },
  {
    "id": "word_448",
    "kanji": "固める",
    "reading": "かためる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "使～凝固、固定",
    "isImportant": false
  },
  {
    "id": "word_449",
    "kanji": "溢れる",
    "reading": "あふれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "溢出、滿溢、氾濫",
    "isImportant": false
  },
  {
    "id": "word_450",
    "kanji": "零れる",
    "reading": "こぼれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "液體灑出、流出、灑落",
    "isImportant": false
  },
  {
    "id": "word_451",
    "kanji": "沸く",
    "reading": "わく",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "水燒開、沸騰",
    "isImportant": false
  },
  {
    "id": "word_452",
    "kanji": "被せる",
    "reading": "かぶせる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "蓋上、覆蓋、罩上",
    "isImportant": false
  },
  {
    "id": "word_453",
    "kanji": "干す",
    "reading": "ほす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "晾、曬",
    "isImportant": true
  },
  {
    "id": "word_454",
    "kanji": "暴れる",
    "reading": "あばれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "亂鬧、胡搞、撒野、鬧事、發狂、暴動",
    "isImportant": false
  },
  {
    "id": "word_455",
    "kanji": "酔っ払う",
    "reading": "よっぱらう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "喝醉、酒醉、醉倒",
    "isImportant": false
  },
  {
    "id": "word_456",
    "kanji": "盛り上がる",
    "reading": "もりあがる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "熱鬧起來、興奮起來、氣氛熱烈、情緒高漲",
    "isImportant": false
  },
  {
    "id": "word_457",
    "kanji": "溶ける",
    "reading": "とける",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "融化、溶解（自動詞）",
    "isImportant": false
  },
  {
    "id": "word_458",
    "kanji": "溶く",
    "reading": "とく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "溶解、化開、攪散",
    "isImportant": false
  },
  {
    "id": "word_459",
    "kanji": "崩れる",
    "reading": "くずれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "崩塌、瓦解、倒塌",
    "isImportant": false
  },
  {
    "id": "word_460",
    "kanji": "加える",
    "reading": "くわえる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "增加、加入、添加",
    "isImportant": false
  },
  {
    "id": "word_462",
    "kanji": "数える",
    "reading": "かぞえる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "計算、點數",
    "isImportant": true
  },
  {
    "id": "word_463",
    "kanji": "捲る",
    "reading": "めくる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "掀起、翻轉（頁、月曆、牌）",
    "isImportant": true
  },
  {
    "id": "word_464",
    "kanji": "捲る",
    "reading": "まくる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "向上捲起、收摺（袖子等）",
    "isImportant": false
  },
  {
    "id": "word_465",
    "kanji": "潰す",
    "reading": "つぶす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "弄破、擠壓；浪費（時間）",
    "isImportant": true
  },
  {
    "id": "word_466",
    "kanji": "梳かす・溶かす",
    "reading": "とかす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "梳理（梳かす）；使融化、溶解（溶かす）",
    "isImportant": true
  },
  {
    "id": "word_467",
    "kanji": "絞る",
    "reading": "しぼる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "擰、絞；榨、擠；縮小、限定",
    "isImportant": true
  },
  {
    "id": "word_468",
    "kanji": "流行る",
    "reading": "はやる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "流行、盛行",
    "isImportant": true
  },
  {
    "id": "word_469",
    "kanji": "集まる",
    "reading": "あつまる",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "集合、聚集",
    "isImportant": true
  },
  {
    "id": "word_470",
    "kanji": "預かる",
    "reading": "あずかる",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "代為保管、寄託、代為照顧",
    "isImportant": true
  },
  {
    "id": "word_471",
    "kanji": "育てる",
    "reading": "そだてる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "養育、扶養、培育",
    "isImportant": true
  },
  {
    "id": "word_472",
    "kanji": "与える",
    "reading": "あたえる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "給予、授予",
    "isImportant": true
  },
  {
    "id": "word_473",
    "kanji": "捨てる",
    "reading": "すてる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "丟棄、拋棄",
    "isImportant": true
  },
  {
    "id": "word_474",
    "kanji": "拾う",
    "reading": "ひろう",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "撿起、收留",
    "isImportant": true
  },
  {
    "id": "word_475",
    "kanji": "得る",
    "reading": "える",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "得到、獲取",
    "isImportant": true
  },
  {
    "id": "word_476",
    "kanji": "過ごす",
    "reading": "すごす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "過（日子）、度過",
    "isImportant": true
  },
  {
    "id": "word_477",
    "kanji": "慣れる",
    "reading": "なれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "習慣、熟悉",
    "isImportant": true
  },
  {
    "id": "word_588",
    "kanji": "敷く",
    "reading": "しく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "鋪設、鋪墊（棉被或墊子）",
    "isImportant": false
  },
  {
    "id": "word_589",
    "kanji": "磨く",
    "reading": "みがく",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "磨、刷（牙）",
    "isImportant": false
  },
  {
    "id": "word_590",
    "kanji": "こぼす",
    "reading": "",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "灑落、流落",
    "isImportant": false
  },
  {
    "id": "word_623",
    "kanji": "下ろす",
    "reading": "おろす",
    "pos": "第一類動詞 (五段/他)",
    "meaning": "卸下、放下；提取（金錢）",
    "isImportant": true
  },
  {
    "id": "word_624",
    "kanji": "切れる",
    "reading": "きれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "（資源）用盡、耗盡；斷掉、過期、售罄；鋒利",
    "isImportant": true
  },
  {
    "id": "word_625",
    "kanji": "込む",
    "reading": "こむ",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "進入、插進；擁擠（人車多）",
    "isImportant": true
  },
  {
    "id": "word_626",
    "kanji": "憧れる",
    "reading": "あこがれる",
    "pos": "第二類動詞 (下一段/自)",
    "meaning": "憧憬、嚮往",
    "isImportant": true
  },
  {
    "id": "word_627",
    "kanji": "嵌める",
    "reading": "はめる",
    "pos": "第二類動詞 (下一段/他)",
    "meaning": "嵌入、鑲嵌（放入凹處）；戴上（指戒指、手套等）；陷害、誘騙",
    "isImportant": true
  },
  {
    "id": "word_628",
    "kanji": "似合う",
    "reading": "にあう",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "適合、相稱",
    "isImportant": true
  },
  {
    "id": "word_478",
    "kanji": "恋しい",
    "reading": "こいしい",
    "pos": "い形容詞",
    "meaning": "懷念的、想念的（對人或地方）",
    "isImportant": true
  },
  {
    "id": "word_479",
    "kanji": "そそっかしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "粗心的、冒失的、魯莽的",
    "isImportant": true
  },
  {
    "id": "word_480",
    "kanji": "懐っこい",
    "reading": "なつっこい",
    "pos": "い形容詞",
    "meaning": "親人的、黏人的、容易親近的",
    "isImportant": false
  },
  {
    "id": "word_255",
    "kanji": "広い",
    "reading": "ひろい",
    "pos": "い形容詞",
    "meaning": "廣闊、寬敞",
    "isImportant": false
  },
  {
    "id": "word_256",
    "kanji": "強い",
    "reading": "つよい",
    "pos": "い形容詞",
    "meaning": "強、堅強",
    "isImportant": true
  },
  {
    "id": "word_257",
    "kanji": "親しい",
    "reading": "したしい",
    "pos": "い形容詞",
    "meaning": "親密、親近",
    "isImportant": true
  },
  {
    "id": "word_258",
    "kanji": "激しい",
    "reading": "はげしい",
    "pos": "い形容詞",
    "meaning": "激烈、猛烈",
    "isImportant": true
  },
  {
    "id": "word_259",
    "kanji": "遅い",
    "reading": "おそい",
    "pos": "い形容詞",
    "meaning": "慢、遲；（時間）晚",
    "isImportant": true
  },
  {
    "id": "word_260",
    "kanji": "眩しい",
    "reading": "まぶしい",
    "pos": "い形容詞",
    "meaning": "耀眼的、炫目的、刺眼的",
    "isImportant": true
  },
  {
    "id": "word_261",
    "kanji": "美味い",
    "reading": "うまい",
    "pos": "い形容詞",
    "meaning": "好吃、美味；擅長的、高明的",
    "isImportant": true
  },
  {
    "id": "word_262",
    "kanji": "弱い",
    "reading": "よわい",
    "pos": "い形容詞",
    "meaning": "弱、虛弱",
    "isImportant": false
  },
  {
    "id": "word_263",
    "kanji": "難しい",
    "reading": "むずかしい",
    "pos": "い形容詞",
    "meaning": "困難、難解",
    "isImportant": true
  },
  {
    "id": "word_264",
    "kanji": "蒸し暑い",
    "reading": "むしあつい",
    "pos": "い形容詞",
    "meaning": "悶熱、又濕又熱",
    "isImportant": false
  },
  {
    "id": "word_265",
    "kanji": "憎らしい",
    "reading": "にくらしい",
    "pos": "い形容詞",
    "meaning": "可恨的、令人討厭的",
    "isImportant": false
  },
  {
    "id": "word_266",
    "kanji": "温い",
    "reading": "ぬるい",
    "pos": "い形容詞",
    "meaning": "微溫、不夠熱；不夠嚴格（引申）",
    "isImportant": false
  },
  {
    "id": "word_267",
    "kanji": "詳しい",
    "reading": "くわしい",
    "pos": "い形容詞",
    "meaning": "詳細的；（人）熟悉某領域",
    "isImportant": true
  },
  {
    "id": "word_268",
    "kanji": "険しい",
    "reading": "けわしい",
    "pos": "い形容詞",
    "meaning": "山路險峻；表情嚴肅、嚴厲",
    "isImportant": true
  },
  {
    "id": "word_269",
    "kanji": "細かい",
    "reading": "こまかい",
    "pos": "い形容詞",
    "meaning": "細小的、零碎的；小額的；細心(看細節、程度上)",
    "isImportant": true
  },
  {
    "id": "word_270",
    "kanji": "細い",
    "reading": "ほそい",
    "pos": "い形容詞",
    "meaning": "細的、纖細的(看外形、物理上)",
    "isImportant": true
  },
  {
    "id": "word_481",
    "kanji": "慌ただしい",
    "reading": "あわただしい",
    "pos": "い形容詞",
    "meaning": "匆忙的、慌張的",
    "isImportant": false
  },
  {
    "id": "word_482",
    "kanji": "大人しい",
    "reading": "おとなしい",
    "pos": "い形容詞",
    "meaning": "老實的、溫順的、穩重的、溫順的、文靜的、老實的",
    "isImportant": true
  },
  {
    "id": "word_273",
    "kanji": "汚い",
    "reading": "きたない",
    "pos": "い形容詞",
    "meaning": "骯髒的、不潔的",
    "isImportant": false
  },
  {
    "id": "word_274",
    "kanji": "醜い",
    "reading": "みにくい",
    "pos": "い形容詞",
    "meaning": "難看的、醜陋的",
    "isImportant": false
  },
  {
    "id": "word_275",
    "kanji": "辛い",
    "reading": "つらい",
    "pos": "い形容詞",
    "meaning": "痛苦的、難受的；辛苦的",
    "isImportant": true
  },
  {
    "id": "word_276",
    "kanji": "苦い",
    "reading": "にがい",
    "pos": "い形容詞",
    "meaning": "苦的；（表情）苦澀難看",
    "isImportant": false
  },
  {
    "id": "word_277",
    "kanji": "勿体ない",
    "reading": "もったいない",
    "pos": "い形容詞",
    "meaning": "浪費的、可惜的",
    "isImportant": true
  },
  {
    "id": "word_278",
    "kanji": "だらしない",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "邋遢的、散漫的、鬆散的",
    "isImportant": true
  },
  {
    "id": "word_279",
    "kanji": "下らない",
    "reading": "くだらない",
    "pos": "い形容詞",
    "meaning": "無聊的、無價值的",
    "isImportant": false
  },
  {
    "id": "word_280",
    "kanji": "しつこい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "執拗的、糾纏不休的；油膩的",
    "isImportant": true
  },
  {
    "id": "word_281",
    "kanji": "怪しい",
    "reading": "あやしい",
    "pos": "い形容詞",
    "meaning": "可疑的、奇怪的",
    "isImportant": true
  },
  {
    "id": "word_282",
    "kanji": "煩い",
    "reading": "うるさい",
    "pos": "い形容詞",
    "meaning": "吵雜的；煩人的、囉唆的",
    "isImportant": true
  },
  {
    "id": "word_283",
    "kanji": "馬鹿らしい",
    "reading": "ばからしい",
    "pos": "い形容詞",
    "meaning": "愚蠢的、荒謬的、無聊的",
    "isImportant": false
  },
  {
    "id": "word_284",
    "kanji": "厚い",
    "reading": "あつい",
    "pos": "い形容詞",
    "meaning": "厚的",
    "isImportant": false
  },
  {
    "id": "word_285",
    "kanji": "深い",
    "reading": "ふかい",
    "pos": "い形容詞",
    "meaning": "深的",
    "isImportant": true
  },
  {
    "id": "word_286",
    "kanji": "惜しい",
    "reading": "おしい",
    "pos": "い形容詞",
    "meaning": "可惜的、遺憾的；差一點就～；吝嗇、小氣",
    "isImportant": true
  },
  {
    "id": "word_287",
    "kanji": "きつい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "辛苦的、吃力的；緊繃的；嚴厲的",
    "isImportant": true
  },
  {
    "id": "word_634",
    "kanji": "騒がしい",
    "reading": "さわがしい",
    "pos": "い形容詞",
    "meaning": "吵鬧的、喧鬧的(口語、一般用)",
    "isImportant": false
  },
  {
    "id": "word_289",
    "kanji": "ずうずうしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "厚臉皮的、厚顏無恥的",
    "isImportant": false
  },
  {
    "id": "word_290",
    "kanji": "薄暗い",
    "reading": "うすぐらい",
    "pos": "い形容詞",
    "meaning": "光線昏暗、陰暗",
    "isImportant": false
  },
  {
    "id": "word_629",
    "kanji": "騒々しい",
    "reading": "そうぞうしい",
    "pos": "い形容詞",
    "meaning": "吵鬧、喧囂、嘈雜(較強調、誇張語氣)",
    "isImportant": true
  },
  {
    "id": "word_483",
    "kanji": "簡単な",
    "reading": "かんたんな",
    "pos": "な形容詞",
    "meaning": "簡單",
    "isImportant": true
  },
  {
    "id": "word_484",
    "kanji": "安全な",
    "reading": "あんぜんな",
    "pos": "名詞 / な形容詞",
    "meaning": "安全",
    "isImportant": true
  },
  {
    "id": "word_485",
    "kanji": "危険な",
    "reading": "きけんな",
    "pos": "名詞 / な形容詞",
    "meaning": "危險",
    "isImportant": true
  },
  {
    "id": "word_486",
    "kanji": "新鮮な",
    "reading": "しんせんな",
    "pos": "な形容詞",
    "meaning": "新鮮",
    "isImportant": false
  },
  {
    "id": "word_487",
    "kanji": "豊かな",
    "reading": "ゆたかな",
    "pos": "な形容詞",
    "meaning": "豐富、富裕",
    "isImportant": false
  },
  {
    "id": "word_488",
    "kanji": "得意な",
    "reading": "とくいな",
    "pos": "な形容詞",
    "meaning": "擅長、拿手；得意",
    "isImportant": true
  },
  {
    "id": "word_489",
    "kanji": "上手な",
    "reading": "じょうずな",
    "pos": "な形容詞",
    "meaning": "高明的、擅長的",
    "isImportant": true
  },
  {
    "id": "word_635",
    "kanji": "朗らかな",
    "reading": "ほがらかな",
    "pos": "な形容詞",
    "meaning": "爽朗的、開朗的",
    "isImportant": false
  },
  {
    "id": "word_491",
    "kanji": "平気な",
    "reading": "へいきな",
    "pos": "な形容詞",
    "meaning": "不在乎的、沒事的",
    "isImportant": true
  },
  {
    "id": "word_300",
    "kanji": "まあまあ",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "馬馬虎虎、還算可以（勉強合格）、還好",
    "isImportant": false
  },
  {
    "id": "word_492",
    "kanji": "贅沢な",
    "reading": "ぜいたくな",
    "pos": "な形容詞",
    "meaning": "奢侈的、豪華的",
    "isImportant": false
  },
  {
    "id": "word_493",
    "kanji": "貧乏な",
    "reading": "びんぼうな",
    "pos": "な形容詞",
    "meaning": "貧窮的",
    "isImportant": false
  },
  {
    "id": "word_494",
    "kanji": "生意気な",
    "reading": "なまいきな",
    "pos": "な形容詞",
    "meaning": "傲慢的、自以為是的、厚臉皮",
    "isImportant": false
  },
  {
    "id": "word_495",
    "kanji": "意地悪な",
    "reading": "いじわるな",
    "pos": "な形容詞 / 名詞",
    "meaning": "壞心腸、故意刁難人",
    "isImportant": true
  },
  {
    "id": "word_496",
    "kanji": "下品な",
    "reading": "げひんな",
    "pos": "な形容詞",
    "meaning": "粗俗、低俗",
    "isImportant": false
  },
  {
    "id": "word_497",
    "kanji": "呑気な",
    "reading": "のんきな",
    "pos": "な形容詞",
    "meaning": "無憂無慮、悠哉",
    "isImportant": false
  },
  {
    "id": "word_498",
    "kanji": "我儘な",
    "reading": "わがままな",
    "pos": "な形容詞 / 名詞",
    "meaning": "任性、自私、為所欲為",
    "isImportant": true
  },
  {
    "id": "word_499",
    "kanji": "不平な",
    "reading": "ふへいな",
    "pos": "な形容詞 / 名詞",
    "meaning": "不平、不滿、牢騷",
    "isImportant": false
  },
  {
    "id": "word_500",
    "kanji": "当たり前な",
    "reading": "あたりまえな",
    "pos": "な形容詞",
    "meaning": "理所當然",
    "isImportant": true
  },
  {
    "id": "word_501",
    "kanji": "真っ暗な",
    "reading": "まっくらな",
    "pos": "な形容詞",
    "meaning": "黑漆漆的",
    "isImportant": false
  },
  {
    "id": "word_502",
    "kanji": "真っ黒な",
    "reading": "まっくろな",
    "pos": "な形容詞",
    "meaning": "黝黑的",
    "isImportant": false
  },
  {
    "id": "word_503",
    "kanji": "真っ青な",
    "reading": "まっさおな",
    "pos": "な形容詞",
    "meaning": "深藍的；（臉色）鐵青",
    "isImportant": true
  },
  {
    "id": "word_504",
    "kanji": "真っ赤な",
    "reading": "まっかな",
    "pos": "な形容詞",
    "meaning": "鮮紅的；（完全的）謊言（真っ赤な嘘）",
    "isImportant": true
  },
  {
    "id": "word_314",
    "kanji": "スマート",
    "reading": "",
    "pos": "な形容詞",
    "meaning": "聰明的、苗條的 (smart)",
    "isImportant": false
  },
  {
    "id": "word_315",
    "kanji": "ハンサム",
    "reading": "",
    "pos": "な形容詞",
    "meaning": "英俊、帥氣 (handsome)",
    "isImportant": false
  },
  {
    "id": "word_316",
    "kanji": "ユニーク",
    "reading": "",
    "pos": "な形容詞",
    "meaning": "獨特的 (unique)",
    "isImportant": false
  },
  {
    "id": "word_505",
    "kanji": "楽な",
    "reading": "らくな",
    "pos": "な形容詞",
    "meaning": "輕鬆的、安樂的",
    "isImportant": true
  },
  {
    "id": "word_506",
    "kanji": "曖昧な",
    "reading": "あいまいな",
    "pos": "な形容詞",
    "meaning": "曖昧、含糊、模糊、不明確、模稜兩可",
    "isImportant": false
  },
  {
    "id": "word_507",
    "kanji": "出鱈目な",
    "reading": "でたらめな",
    "pos": "な形容詞 / 名詞",
    "meaning": "胡說八道、隨便亂說、胡亂、馬虎、隨便",
    "isImportant": false
  },
  {
    "id": "word_508",
    "kanji": "確かな",
    "reading": "たしかな",
    "pos": "な形容詞",
    "meaning": "的確、確實的",
    "isImportant": true
  },
  {
    "id": "word_509",
    "kanji": "不安な",
    "reading": "ふあんな",
    "pos": "な形容詞",
    "meaning": "不安的、擔心的",
    "isImportant": true
  },
  {
    "id": "word_510",
    "kanji": "利口な",
    "reading": "りこうな",
    "pos": "な形容詞",
    "meaning": "聰明的、機靈的",
    "isImportant": true
  },
  {
    "id": "word_511",
    "kanji": "正直な",
    "reading": "しょうじきな",
    "pos": "な形容詞",
    "meaning": "正直的、坦白的、老實的",
    "isImportant": true
  },
  {
    "id": "word_512",
    "kanji": "素直な",
    "reading": "すなおな",
    "pos": "な形容詞",
    "meaning": "坦率的、不扭捏、直率的／順從的、聽話的",
    "isImportant": true
  },
  {
    "id": "word_513",
    "kanji": "適当な",
    "reading": "てきとうな",
    "pos": "な形容詞",
    "meaning": "適當的；（口語）隨便的、敷衍的",
    "isImportant": true
  },
  {
    "id": "word_514",
    "kanji": "真面目な",
    "reading": "まじめな",
    "pos": "な形容詞",
    "meaning": "認真的、嚴肅的、正派的",
    "isImportant": true
  },
  {
    "id": "word_318",
    "kanji": "主な",
    "reading": "おもな",
    "pos": "連體詞",
    "meaning": "主要的",
    "isImportant": false
  },
  {
    "id": "word_319",
    "kanji": "大した",
    "reading": "たいした",
    "pos": "連體詞",
    "meaning": "了不起的；（後接否定）沒什麼大不了的",
    "isImportant": true
  },
  {
    "id": "word_320",
    "kanji": "必ず",
    "reading": "かならず",
    "pos": "副詞",
    "meaning": "一定、必定（比きっと更強的肯定）",
    "isImportant": true
  },
  {
    "id": "word_321",
    "kanji": "再三",
    "reading": "さいさん",
    "pos": "副詞",
    "meaning": "再三、多次、反覆",
    "isImportant": false
  },
  {
    "id": "word_322",
    "kanji": "忽ち",
    "reading": "たちまち",
    "pos": "副詞",
    "meaning": "立刻、頓時、一下子就",
    "isImportant": false
  },
  {
    "id": "word_323",
    "kanji": "のんびり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "悠閒地、輕鬆地",
    "isImportant": false
  },
  {
    "id": "word_324",
    "kanji": "所々",
    "reading": "ところどころ",
    "pos": "副詞 / 名詞",
    "meaning": "處處、到處有些地方",
    "isImportant": false
  },
  {
    "id": "word_325",
    "kanji": "全て",
    "reading": "すべて",
    "pos": "副詞 / 名詞",
    "meaning": "全部、所有",
    "isImportant": true
  },
  {
    "id": "word_515",
    "kanji": "次々（つぎつぎ）に",
    "reading": "",
    "pos": "副詞",
    "meaning": "接連不斷地、相繼",
    "isImportant": false
  },
  {
    "id": "word_327",
    "kanji": "後ほど",
    "reading": "のちほど",
    "pos": "副詞",
    "meaning": "過一會兒（比あとで正式）",
    "isImportant": true
  },
  {
    "id": "word_328",
    "kanji": "間もなく",
    "reading": "まもなく",
    "pos": "副詞",
    "meaning": "不久、很快",
    "isImportant": true
  },
  {
    "id": "word_329",
    "kanji": "暫く",
    "reading": "しばらく",
    "pos": "副詞",
    "meaning": "一會兒、暫時",
    "isImportant": true
  },
  {
    "id": "word_330",
    "kanji": "先に",
    "reading": "さきに",
    "pos": "副詞 / 名詞",
    "meaning": "先走；之前",
    "isImportant": false
  },
  {
    "id": "word_331",
    "kanji": "あちこち",
    "reading": "",
    "pos": "代名詞 / 副詞",
    "meaning": "到處、各處",
    "isImportant": false
  },
  {
    "id": "word_332",
    "kanji": "ぶらぶら",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "閒逛、無所事事；搖晃",
    "isImportant": false
  },
  {
    "id": "word_333",
    "kanji": "そろそろ",
    "reading": "",
    "pos": "副詞",
    "meaning": "快要、就要、差不多該～",
    "isImportant": true
  },
  {
    "id": "word_334",
    "kanji": "のろのろ",
    "reading": "",
    "pos": "副詞",
    "meaning": "慢吞吞、緩慢地",
    "isImportant": false
  },
  {
    "id": "word_335",
    "kanji": "どんどん",
    "reading": "",
    "pos": "副詞",
    "meaning": "順利進行、接連不斷；越來越",
    "isImportant": true
  },
  {
    "id": "word_336",
    "kanji": "ぺこぺこ",
    "reading": "",
    "pos": "な形容詞 / 副詞",
    "meaning": "肚子餓；（對人）點頭哈腰",
    "isImportant": false
  },
  {
    "id": "word_337",
    "kanji": "ふらふら",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "搖晃、頭暈；無所適從",
    "isImportant": false
  },
  {
    "id": "word_654",
    "kanji": "ピカピカ(ぴかぴか)",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "閃閃發光、亮晶晶；嶄新、光亮",
    "isImportant": false
  },
  {
    "id": "word_339",
    "kanji": "ぺらぺら",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "流利地；薄的；喋喋不休",
    "isImportant": true
  },
  {
    "id": "word_340",
    "kanji": "兎に角",
    "reading": "とにかく",
    "pos": "副詞",
    "meaning": "總之、無論如何",
    "isImportant": true
  },
  {
    "id": "word_341",
    "kanji": "いきなり",
    "reading": "",
    "pos": "副詞",
    "meaning": "突然地、冷不防地",
    "isImportant": true
  },
  {
    "id": "word_342",
    "kanji": "折角",
    "reading": "せっかく",
    "pos": "副詞",
    "meaning": "難得、好不容易（語氣帶惋惜或珍惜）",
    "isImportant": true
  },
  {
    "id": "word_343",
    "kanji": "ちっとも",
    "reading": "",
    "pos": "副詞",
    "meaning": "一點也不（後接否定）",
    "isImportant": true
  },
  {
    "id": "word_344",
    "kanji": "こう",
    "reading": "",
    "pos": "副詞",
    "meaning": "這樣地、如此",
    "isImportant": false
  },
  {
    "id": "word_345",
    "kanji": "うっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "不留神、不小心、一不注意",
    "isImportant": true
  },
  {
    "id": "word_346",
    "kanji": "がっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "失望、沮喪",
    "isImportant": true
  },
  {
    "id": "word_347",
    "kanji": "すっかり",
    "reading": "",
    "pos": "副詞",
    "meaning": "完全、全部（強調徹底）",
    "isImportant": true
  },
  {
    "id": "word_348",
    "kanji": "しっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "好好地、牢固地；紮實地",
    "isImportant": true
  },
  {
    "id": "word_349",
    "kanji": "きちんと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "整齊地、好好地、確實地",
    "isImportant": true
  },
  {
    "id": "word_350",
    "kanji": "しいんと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "靜悄悄地、一片寂靜",
    "isImportant": false
  },
  {
    "id": "word_351",
    "kanji": "態と",
    "reading": "わざと",
    "pos": "副詞",
    "meaning": "故意地、有意地、刻意地",
    "isImportant": true
  },
  {
    "id": "word_352",
    "kanji": "そっと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "輕輕地、悄悄地",
    "isImportant": true
  },
  {
    "id": "word_353",
    "kanji": "さっぱり",
    "reading": "",
    "pos": "副詞",
    "meaning": "完全（後接否定）；清爽、爽快",
    "isImportant": true
  },
  {
    "id": "word_354",
    "kanji": "あっさり",
    "reading": "",
    "pos": "副詞",
    "meaning": "清淡、簡單；個性乾脆、爽快",
    "isImportant": true
  },
  {
    "id": "word_355",
    "kanji": "こっそり",
    "reading": "",
    "pos": "副詞",
    "meaning": "悄悄地、偷偷地",
    "isImportant": false
  },
  {
    "id": "word_356",
    "kanji": "偶に",
    "reading": "たまに",
    "pos": "副詞",
    "meaning": "偶爾、難得",
    "isImportant": true
  },
  {
    "id": "word_357",
    "kanji": "遂に",
    "reading": "ついに",
    "pos": "副詞",
    "meaning": "終於、最終",
    "isImportant": true
  },
  {
    "id": "word_358",
    "kanji": "割に",
    "reading": "わりに",
    "pos": "副詞",
    "meaning": "相當地、比預期～",
    "isImportant": true
  },
  {
    "id": "word_359",
    "kanji": "先ず",
    "reading": "まず",
    "pos": "副詞",
    "meaning": "首先、先",
    "isImportant": true
  },
  {
    "id": "word_360",
    "kanji": "がらがら",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "空蕩蕩的（人少、空位多）",
    "isImportant": true
  },
  {
    "id": "word_361",
    "kanji": "うろうろ",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "徘徊、不知所措地到處走",
    "isImportant": true
  },
  {
    "id": "word_362",
    "kanji": "苛々",
    "reading": "いらいら",
    "pos": "副詞 / (～する)",
    "meaning": "煩躁、焦躁、急躁不安",
    "isImportant": true
  },
  {
    "id": "word_363",
    "kanji": "どきどき",
    "reading": "ドキドキ",
    "pos": "副詞 / (～する)",
    "meaning": "心動、緊張、心跳加速",
    "isImportant": true
  },
  {
    "id": "word_364",
    "kanji": "ぎりぎり",
    "reading": "ギリギリ",
    "pos": "副詞 / な形容詞",
    "meaning": "極限、勉強趕上、好不容易",
    "isImportant": true
  },
  {
    "id": "word_516",
    "kanji": "ぐっすり",
    "reading": "",
    "pos": "副詞",
    "meaning": "熟睡地、睡得很沉",
    "isImportant": true
  },
  {
    "id": "word_517",
    "kanji": "すっきり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "清爽、舒暢、神清氣爽",
    "isImportant": true
  },
  {
    "id": "word_518",
    "kanji": "びっしょり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "濕透地、濕淋淋地",
    "isImportant": true
  },
  {
    "id": "word_519",
    "kanji": "態々",
    "reading": "わざわざ",
    "pos": "副詞",
    "meaning": "特地、特意",
    "isImportant": true
  },
  {
    "id": "word_520",
    "kanji": "ぜひ",
    "reading": "",
    "pos": "副詞",
    "meaning": "一定、務必（用於強調）",
    "isImportant": false
  },
  {
    "id": "word_521",
    "kanji": "とたんに",
    "reading": "",
    "pos": "副詞",
    "meaning": "正當～時，突然（＝急に）",
    "isImportant": false
  },
  {
    "id": "word_522",
    "kanji": "じっと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "安靜地、一動不動地忍耐、凝神地、隱忍地",
    "isImportant": false
  },
  {
    "id": "word_523",
    "kanji": "ざっと",
    "reading": "",
    "pos": "副詞",
    "meaning": "粗略地、大致地",
    "isImportant": false
  },
  {
    "id": "word_524",
    "kanji": "きっと",
    "reading": "",
    "pos": "副詞",
    "meaning": "一定、必定",
    "isImportant": false
  },
  {
    "id": "word_525",
    "kanji": "ますます",
    "reading": "",
    "pos": "副詞",
    "meaning": "更加、益發、越來越～",
    "isImportant": false
  },
  {
    "id": "word_526",
    "kanji": "もう",
    "reading": "",
    "pos": "副詞",
    "meaning": "已經／再（多用於數量）",
    "isImportant": false
  },
  {
    "id": "word_527",
    "kanji": "さらに",
    "reading": "",
    "pos": "副詞",
    "meaning": "更進一步（偏書面）",
    "isImportant": false
  },
  {
    "id": "word_528",
    "kanji": "全く",
    "reading": "まったく",
    "pos": "副詞",
    "meaning": "完全、全然（全く～ない：一點也不～）",
    "isImportant": false
  },
  {
    "id": "word_529",
    "kanji": "決して",
    "reading": "けっして",
    "pos": "副詞",
    "meaning": "絕對（不）（決して～ない：決不～）",
    "isImportant": false
  },
  {
    "id": "word_530",
    "kanji": "滅多に",
    "reading": "めったに",
    "pos": "副詞",
    "meaning": "很少、難得、不常（めったに～ない：不常～、很少～）",
    "isImportant": false
  },
  {
    "id": "word_531",
    "kanji": "絶対に",
    "reading": "ぜったいに",
    "pos": "副詞",
    "meaning": "絕對地（絶対に～ない：絕對不～）",
    "isImportant": false
  },
  {
    "id": "word_532",
    "kanji": "とうとう",
    "reading": "",
    "pos": "副詞",
    "meaning": "最後、終究（用於經過一段時間後，發生不好的結果）",
    "isImportant": false
  },
  {
    "id": "word_533",
    "kanji": "やっと",
    "reading": "",
    "pos": "副詞",
    "meaning": "終於（用於努力後達成正面的結果）",
    "isImportant": false
  },
  {
    "id": "word_656",
    "kanji": "一遍に",
    "reading": "いっぺんに",
    "pos": "副詞",
    "meaning": "一下子、一次、同時（＝一度に）",
    "isImportant": false
  },
  {
    "id": "word_592",
    "kanji": "不図",
    "reading": "ふと",
    "pos": "副詞",
    "meaning": "突然、忽然、不經意地",
    "isImportant": false
  },
  {
    "id": "word_593",
    "kanji": "そっくり",
    "reading": "",
    "pos": "副詞",
    "meaning": "完全一樣、一模一樣",
    "isImportant": false
  },
  {
    "id": "word_594",
    "kanji": "ものすごく",
    "reading": "",
    "pos": "副詞",
    "meaning": "非常、十分地（凄く/すごく的強調說法）",
    "isImportant": false
  },
  {
    "id": "word_595",
    "kanji": "みたいな",
    "reading": "",
    "pos": "副詞",
    "meaning": "像是、好像",
    "isImportant": false
  },
  {
    "id": "word_365",
    "kanji": "アルバイト",
    "reading": "",
    "pos": "名詞",
    "meaning": "打工 (Arbeit)",
    "isImportant": true
  },
  {
    "id": "word_366",
    "kanji": "インタビュー",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "採訪、訪談 (interview)",
    "isImportant": false
  },
  {
    "id": "word_367",
    "kanji": "エネルギー",
    "reading": "",
    "pos": "名詞",
    "meaning": "能源、精力 (Energie)",
    "isImportant": false
  },
  {
    "id": "word_368",
    "kanji": "オーバー",
    "reading": "",
    "pos": "名詞 / な形容詞",
    "meaning": "超過、過度；大衣 (over)",
    "isImportant": true
  },
  {
    "id": "word_369",
    "kanji": "カウンター",
    "reading": "",
    "pos": "名詞",
    "meaning": "櫃台 (counter)",
    "isImportant": false
  },
  {
    "id": "word_370",
    "kanji": "サイン",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "簽名 (sign)",
    "isImportant": true
  },
  {
    "id": "word_371",
    "kanji": "スケジュール",
    "reading": "",
    "pos": "名詞",
    "meaning": "行程、時程表 (schedule)",
    "isImportant": true
  },
  {
    "id": "word_372",
    "kanji": "チャンス",
    "reading": "",
    "pos": "名詞",
    "meaning": "機會 (chance)",
    "isImportant": true
  },
  {
    "id": "word_373",
    "kanji": "デート",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "約會 (date)",
    "isImportant": false
  },
  {
    "id": "word_374",
    "kanji": "レベル",
    "reading": "",
    "pos": "名詞",
    "meaning": "程度、水準、等級 (level)",
    "isImportant": true
  },
  {
    "id": "word_375",
    "kanji": "アイスクリーム",
    "reading": "",
    "pos": "名詞",
    "meaning": "冰淇淋 (ice cream)",
    "isImportant": false
  },
  {
    "id": "word_376",
    "kanji": "ジョギング",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "慢跑 (jogging)",
    "isImportant": false
  },
  {
    "id": "word_377",
    "kanji": "ルームサービス",
    "reading": "",
    "pos": "名詞",
    "meaning": "客房服務 (room service)",
    "isImportant": false
  },
  {
    "id": "word_378",
    "kanji": "アイデア",
    "reading": "",
    "pos": "名詞",
    "meaning": "主意、點子 (idea)",
    "isImportant": true
  },
  {
    "id": "word_379",
    "kanji": "バランス",
    "reading": "",
    "pos": "名詞",
    "meaning": "平衡 (balance)",
    "isImportant": true
  },
  {
    "id": "word_380",
    "kanji": "テーマ",
    "reading": "",
    "pos": "名詞",
    "meaning": "主題 (Thema)",
    "isImportant": true
  },
  {
    "id": "word_381",
    "kanji": "スニーカー",
    "reading": "",
    "pos": "名詞",
    "meaning": "運動鞋 (sneaker)",
    "isImportant": false
  },
  {
    "id": "word_382",
    "kanji": "イメージ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "形象、印象 (image)",
    "isImportant": true
  },
  {
    "id": "word_383",
    "kanji": "テンポ",
    "reading": "",
    "pos": "名詞",
    "meaning": "節奏、速度 (tempo)",
    "isImportant": false
  },
  {
    "id": "word_385",
    "kanji": "ファッション",
    "reading": "",
    "pos": "名詞",
    "meaning": "時尚、流行 (fashion)",
    "isImportant": false
  },
  {
    "id": "word_534",
    "kanji": "サボる",
    "reading": "",
    "pos": "第一類動詞 (五段/自)",
    "meaning": "怠工、曠工、翹班、偷懶（外來語：sabotage / さぼって）",
    "isImportant": true
  },
  {
    "id": "word_535",
    "kanji": "掃除",
    "reading": "そうじ",
    "pos": "名詞 / (～する)",
    "meaning": "打掃、清掃",
    "isImportant": true
  },
  {
    "id": "word_536",
    "kanji": "清掃",
    "reading": "せいそう",
    "pos": "名詞 / (～する)",
    "meaning": "清掃、打掃（較正式）",
    "isImportant": false
  },
  {
    "id": "word_537",
    "kanji": "削除",
    "reading": "さくじょ",
    "pos": "名詞 / (～する)",
    "meaning": "刪除、刪減",
    "isImportant": true
  },
  {
    "id": "word_538",
    "kanji": "宅配",
    "reading": "たくはい",
    "pos": "名詞 / (～する)",
    "meaning": "宅配、到府送貨",
    "isImportant": true
  },
  {
    "id": "word_539",
    "kanji": "準備",
    "reading": "じゅんび",
    "pos": "名詞 / (～する)",
    "meaning": "準備",
    "isImportant": true
  },
  {
    "id": "word_540",
    "kanji": "予定",
    "reading": "よてい",
    "pos": "名詞 / (～する)",
    "meaning": "預定、計畫",
    "isImportant": true
  },
  {
    "id": "word_541",
    "kanji": "計画",
    "reading": "けいかく",
    "pos": "名詞 / (～する)",
    "meaning": "計畫、規劃",
    "isImportant": true
  },
  {
    "id": "word_542",
    "kanji": "期待",
    "reading": "きたい",
    "pos": "名詞 / (～する)",
    "meaning": "期待、期望",
    "isImportant": true
  },
  {
    "id": "word_543",
    "kanji": "確認",
    "reading": "かくにん",
    "pos": "名詞 / (～する)",
    "meaning": "確認、核對",
    "isImportant": true
  },
  {
    "id": "word_544",
    "kanji": "相談",
    "reading": "そうだん",
    "pos": "名詞 / (～する)",
    "meaning": "商量、諮詢",
    "isImportant": true
  },
  {
    "id": "word_545",
    "kanji": "化粧",
    "reading": "けしょう",
    "pos": "名詞 / (～する)",
    "meaning": "化妝",
    "isImportant": true
  },
  {
    "id": "word_546",
    "kanji": "費用",
    "reading": "ひよう",
    "pos": "名詞",
    "meaning": "費用、花費",
    "isImportant": true
  },
  {
    "id": "word_547",
    "kanji": "代金",
    "reading": "だいきん",
    "pos": "名詞",
    "meaning": "貨款、代價",
    "isImportant": true
  },
  {
    "id": "word_548",
    "kanji": "料金",
    "reading": "りょうきん",
    "pos": "名詞",
    "meaning": "費用、規費、使用費",
    "isImportant": true
  },
  {
    "id": "word_549",
    "kanji": "原因",
    "reading": "げんいん",
    "pos": "名詞",
    "meaning": "原因",
    "isImportant": true
  },
  {
    "id": "word_550",
    "kanji": "価値",
    "reading": "かち",
    "pos": "名詞",
    "meaning": "價值",
    "isImportant": true
  },
  {
    "id": "word_551",
    "kanji": "程度",
    "reading": "ていど",
    "pos": "名詞",
    "meaning": "程度、水準",
    "isImportant": true
  },
  {
    "id": "word_552",
    "kanji": "質",
    "reading": "しつ",
    "pos": "名詞",
    "meaning": "品質、質量",
    "isImportant": true
  },
  {
    "id": "word_553",
    "kanji": "規則",
    "reading": "きそく",
    "pos": "名詞",
    "meaning": "規則、規定",
    "isImportant": true
  },
  {
    "id": "word_554",
    "kanji": "栄養",
    "reading": "えいよう",
    "pos": "名詞",
    "meaning": "營養",
    "isImportant": true
  },
  {
    "id": "word_555",
    "kanji": "アイロン",
    "reading": "",
    "pos": "名詞",
    "meaning": "熨斗 (iron)",
    "isImportant": true
  },
  {
    "id": "word_556",
    "kanji": "ヒント",
    "reading": "",
    "pos": "名詞",
    "meaning": "提示、線索 (hint)",
    "isImportant": true
  },
  {
    "id": "word_557",
    "kanji": "ルール",
    "reading": "",
    "pos": "名詞",
    "meaning": "規則、規矩 (rule)",
    "isImportant": true
  },
  {
    "id": "word_558",
    "kanji": "ふり",
    "reading": "",
    "pos": "名詞",
    "meaning": "佯裝、假裝",
    "isImportant": false
  },
  {
    "id": "word_559",
    "kanji": "それで",
    "reading": "",
    "pos": "接續詞",
    "meaning": "所以、因此",
    "isImportant": false
  },
  {
    "id": "word_560",
    "kanji": "あと",
    "reading": "＝そのほかに",
    "pos": "接續詞",
    "meaning": "另外、然後、還有",
    "isImportant": false
  },
  {
    "id": "word_561",
    "kanji": "それと",
    "reading": "＝それから",
    "pos": "接續詞",
    "meaning": "然後（口語用法）",
    "isImportant": false
  },
  {
    "id": "word_562",
    "kanji": "それとも",
    "reading": "",
    "pos": "接續詞",
    "meaning": "抑或、或是（＝あるいは，較生硬的用法）",
    "isImportant": false
  },
  {
    "id": "word_563",
    "kanji": "それなら",
    "reading": "",
    "pos": "接續詞",
    "meaning": "那樣的話、那麼（＝それでは／それじゃ）",
    "isImportant": false
  },
  {
    "id": "word_564",
    "kanji": "それに",
    "reading": "",
    "pos": "接續詞",
    "meaning": "而且、再加上（＝そのうえ／しかも）",
    "isImportant": false
  },
  {
    "id": "word_565",
    "kanji": "そういえば",
    "reading": "",
    "pos": "接續詞",
    "meaning": "這麼說來、經那麼一說（想到了～）",
    "isImportant": false
  },
  {
    "id": "word_566",
    "kanji": "その上",
    "reading": "そのうえ",
    "pos": "接續詞",
    "meaning": "而且、再加上（＝それに／しかも）",
    "isImportant": false
  },
  {
    "id": "word_567",
    "kanji": "そのため",
    "reading": "",
    "pos": "接續詞",
    "meaning": "因此（＝だから／それで／その結果）",
    "isImportant": false
  },
  {
    "id": "word_568",
    "kanji": "それなのに",
    "reading": "",
    "pos": "接續詞",
    "meaning": "儘管如此（＝けれど（も））",
    "isImportant": false
  },
  {
    "id": "word_569",
    "kanji": "それでも",
    "reading": "",
    "pos": "接續詞",
    "meaning": "即使、即便（＝それにもかかわらず）",
    "isImportant": false
  },
  {
    "id": "word_570",
    "kanji": "ところが",
    "reading": "",
    "pos": "接續詞",
    "meaning": "然而、但是（＝しかし）",
    "isImportant": false
  },
  {
    "id": "word_571",
    "kanji": "ですから",
    "reading": "",
    "pos": "接續詞",
    "meaning": "因此（比だから有禮貌，＝だから）",
    "isImportant": false
  },
  {
    "id": "word_572",
    "kanji": "ところで",
    "reading": "",
    "pos": "接續詞",
    "meaning": "對了（變換話題）",
    "isImportant": false
  },
  {
    "id": "word_573",
    "kanji": "嘘をつく",
    "reading": "うそをつく",
    "pos": "慣用語",
    "meaning": "說謊、撒謊",
    "isImportant": true
  },
  {
    "id": "word_386",
    "kanji": "いいかげんにしなさい",
    "reading": "",
    "pos": "慣用語",
    "meaning": "適可而止、差不多一點！",
    "isImportant": true
  },
  {
    "id": "word_387",
    "kanji": "いいかげんな",
    "reading": "",
    "pos": "慣用語",
    "meaning": "敷衍的、馬馬虎虎的；不認真的",
    "isImportant": true
  },
  {
    "id": "word_388",
    "kanji": "大したことがない",
    "reading": "たいしたことがない",
    "pos": "慣用語",
    "meaning": "沒什麼大礙、算不了什麼",
    "isImportant": true
  },
  {
    "id": "word_389",
    "kanji": "気の毒",
    "reading": "きのどく",
    "pos": "慣用語",
    "meaning": "可憐的、令人同情的",
    "isImportant": true
  },
  {
    "id": "word_390",
    "kanji": "頭にくる",
    "reading": "あたまにくる",
    "pos": "慣用語",
    "meaning": "生氣、惱火",
    "isImportant": true
  },
  {
    "id": "word_391",
    "kanji": "腹が立つ",
    "reading": "はらがたつ",
    "pos": "慣用語",
    "meaning": "生氣、發怒",
    "isImportant": true
  },
  {
    "id": "word_392",
    "kanji": "口を利く",
    "reading": "くちをきく",
    "pos": "慣用語",
    "meaning": "說話、開口說",
    "isImportant": false
  },
  {
    "id": "word_393",
    "kanji": "口にする",
    "reading": "くちにする",
    "pos": "慣用語",
    "meaning": "吃進嘴裡；說到、提及",
    "isImportant": true
  },
  {
    "id": "word_394",
    "kanji": "耳にする",
    "reading": "みみにする",
    "pos": "慣用語",
    "meaning": "聽見、耳聞",
    "isImportant": true
  },
  {
    "id": "word_395",
    "kanji": "耳が遠い",
    "reading": "みみがとおい",
    "pos": "慣用語",
    "meaning": "重聽、聽力差",
    "isImportant": false
  },
  {
    "id": "word_396",
    "kanji": "気に入る",
    "reading": "きにいる",
    "pos": "慣用語",
    "meaning": "中意、滿意、喜歡",
    "isImportant": true
  },
  {
    "id": "word_397",
    "kanji": "気にする",
    "reading": "きにする",
    "pos": "慣用語",
    "meaning": "介意、擔心",
    "isImportant": true
  },
  {
    "id": "word_398",
    "kanji": "気になる",
    "reading": "きになる",
    "pos": "慣用語",
    "meaning": "掛念、在意、引起興趣",
    "isImportant": true
  },
  {
    "id": "word_399",
    "kanji": "気にかける",
    "reading": "きにかける",
    "pos": "慣用語",
    "meaning": "關心、掛心",
    "isImportant": true
  },
  {
    "id": "word_400",
    "kanji": "どういう意味",
    "reading": "どういういみ",
    "pos": "慣用語",
    "meaning": "是什麼意思",
    "isImportant": true
  },
  {
    "id": "word_401",
    "kanji": "都合をつける",
    "reading": "つごうをつける",
    "pos": "慣用語",
    "meaning": "挪出時間、設法安排",
    "isImportant": true
  },
  {
    "id": "word_402",
    "kanji": "ご存知です",
    "reading": "ごぞんじです",
    "pos": "慣用語",
    "meaning": "（您）知道（尊敬語）",
    "isImportant": true
  },
  {
    "id": "word_403",
    "kanji": "存じております",
    "reading": "ぞんじております",
    "pos": "慣用語",
    "meaning": "（我）知道（謙讓語）",
    "isImportant": true
  },
  {
    "id": "word_404",
    "kanji": "参った",
    "reading": "まいった",
    "pos": "慣用語",
    "meaning": "受不了、沒轍了；認輸了",
    "isImportant": true
  },
  {
    "id": "word_405",
    "kanji": "焦った",
    "reading": "あせった",
    "pos": "慣用語",
    "meaning": "焦急、慌張",
    "isImportant": false
  },
  {
    "id": "word_406",
    "kanji": "詰まった",
    "reading": "つまった",
    "pos": "慣用語",
    "meaning": "塞住了；（比喻）陷入困境",
    "isImportant": false
  },
  {
    "id": "word_407",
    "kanji": "とんでもない",
    "reading": "",
    "pos": "慣用語",
    "meaning": "哪裡的話、沒那回事；不得了的",
    "isImportant": true
  },
  {
    "id": "word_408",
    "kanji": "しょうがない",
    "reading": "",
    "pos": "慣用語",
    "meaning": "沒辦法、無可奈何",
    "isImportant": true
  },
  {
    "id": "word_409",
    "kanji": "おかげさま",
    "reading": "",
    "pos": "慣用語",
    "meaning": "託您的福、多虧了您",
    "isImportant": true
  },
  {
    "id": "word_410",
    "kanji": "申し訳ない",
    "reading": "もうしわけない",
    "pos": "慣用語",
    "meaning": "對不起、過意不去、抱歉",
    "isImportant": true
  },
  {
    "id": "word_411",
    "kanji": "得をする",
    "reading": "とくをする",
    "pos": "慣用語",
    "meaning": "得到、獲利、佔到便宜",
    "isImportant": false
  },
  {
    "id": "word_412",
    "kanji": "損をする",
    "reading": "そんをする",
    "pos": "慣用語",
    "meaning": "虧損、受損、吃虧",
    "isImportant": true
  },
  {
    "id": "word_413",
    "kanji": "損になる",
    "reading": "そんになる",
    "pos": "慣用語",
    "meaning": "受損、吃虧",
    "isImportant": false
  },
  {
    "id": "word_414",
    "kanji": "気がある",
    "reading": "きがある",
    "pos": "慣用語",
    "meaning": "有興趣、有意思",
    "isImportant": true
  },
  {
    "id": "word_415",
    "kanji": "ついている",
    "reading": "",
    "pos": "慣用語",
    "meaning": "幸運、運氣好",
    "isImportant": false
  },
  {
    "id": "word_416",
    "kanji": "ましになる",
    "reading": "",
    "pos": "慣用語",
    "meaning": "好轉、變好一點",
    "isImportant": false
  },
  {
    "id": "word_417",
    "kanji": "文句を言う",
    "reading": "もんくをいう",
    "pos": "慣用語",
    "meaning": "抱怨、發牢騷",
    "isImportant": true
  },
  {
    "id": "word_418",
    "kanji": "為になる",
    "reading": "ためになる",
    "pos": "慣用語",
    "meaning": "有益、有幫助",
    "isImportant": true
  },
  {
    "id": "word_419",
    "kanji": "役に立つ",
    "reading": "やくにたつ",
    "pos": "慣用語",
    "meaning": "有用、派上用場、有幫助",
    "isImportant": true
  },
  {
    "id": "word_420",
    "kanji": "癖になる",
    "reading": "くせになる",
    "pos": "慣用語",
    "meaning": "變成習慣、上癮",
    "isImportant": true
  },
  {
    "id": "word_421",
    "kanji": "お構いなく",
    "reading": "おかまいなく",
    "pos": "慣用語",
    "meaning": "請別費心、不用招待",
    "isImportant": true
  },
  {
    "id": "word_422",
    "kanji": "うるさく言う",
    "reading": "",
    "pos": "慣用語",
    "meaning": "嘮叨、囉唆個不停",
    "isImportant": false
  },
  {
    "id": "word_574",
    "kanji": "手に入る",
    "reading": "てにはいる",
    "pos": "慣用語",
    "meaning": "到手、得到、獲得",
    "isImportant": true
  },
  {
    "id": "word_575",
    "kanji": "世話をする",
    "reading": "せわをする",
    "pos": "慣用語",
    "meaning": "照顧、照料",
    "isImportant": false
  },
  {
    "id": "word_576",
    "kanji": "世話になる",
    "reading": "せわになる",
    "pos": "慣用語",
    "meaning": "受（別人）關照",
    "isImportant": false
  },
  {
    "id": "word_577",
    "kanji": "礼儀正しい",
    "reading": "れいぎただしい",
    "pos": "慣用語",
    "meaning": "懂禮貌、守禮節、彬彬有禮的（整個人格特質）",
    "isImportant": false
  },
  {
    "id": "word_578",
    "kanji": "行儀（ぎょうぎ）がいい",
    "reading": "",
    "pos": "慣用語",
    "meaning": "有禮貌、舉止端正（表現出來的行為）",
    "isImportant": false
  },
  {
    "id": "word_655",
    "kanji": "鼾をかく",
    "reading": "いびきをかく",
    "pos": "慣用語",
    "meaning": "打鼾、打呼",
    "isImportant": false
  }
];