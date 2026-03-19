const initialDeck = [
  {
    "id": "word_1",
    "kanji": "出会う",
    "reading": "であう",
    "pos": "第一類動詞 (五段)",
    "meaning": "相遇、相逢",
    "source": "`W1D1-5`"
  },
  {
    "id": "word_2",
    "kanji": "届ける",
    "reading": "とどける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "送到、遞送或報案",
    "source": "`W1D1-7`"
  },
  {
    "id": "word_3",
    "kanji": "向かう",
    "reading": "むかう",
    "pos": "第一類動詞 (五段)",
    "meaning": "朝向、前往、面對",
    "source": "`W1D1-11`"
  },
  {
    "id": "word_4",
    "kanji": "アイデア",
    "reading": "",
    "pos": "名詞",
    "meaning": "主意、點子",
    "source": "`W1D2-17`"
  },
  {
    "id": "word_5",
    "kanji": "チャンス",
    "reading": "",
    "pos": "名詞",
    "meaning": "機會",
    "source": "`W1D2-17`"
  },
  {
    "id": "word_6",
    "kanji": "バランス",
    "reading": "",
    "pos": "名詞",
    "meaning": "平衡",
    "source": "`W1D2-17`"
  },
  {
    "id": "word_7",
    "kanji": "テーマ",
    "reading": "",
    "pos": "名詞",
    "meaning": "主題",
    "source": "`W1D2-17`"
  },
  {
    "id": "word_8",
    "kanji": "ところどころ",
    "reading": "",
    "pos": "副詞 / 名詞",
    "meaning": "處處、有些地方",
    "source": "`W1D2-20`"
  },
  {
    "id": "word_9",
    "kanji": "すべて",
    "reading": "",
    "pos": "副詞 / 名詞",
    "meaning": "全部、所有",
    "source": "`W1D2-20`"
  },
  {
    "id": "word_10",
    "kanji": "まあまあ",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "馬馬虎虎、還算可以",
    "source": "`W1D2-20`"
  },
  {
    "id": "word_11",
    "kanji": "次々",
    "reading": "つぎつぎ",
    "pos": "副詞",
    "meaning": "接連不斷地、相繼",
    "source": "`W1D2-20`"
  },
  {
    "id": "word_12",
    "kanji": "要る",
    "reading": "いる",
    "pos": "第一類動詞 (五段)",
    "meaning": "要、需要",
    "source": "`W1D2-22`"
  },
  {
    "id": "word_13",
    "kanji": "得意",
    "reading": "とくい",
    "pos": "な形容詞",
    "meaning": "擅長、拿手；得意",
    "source": "`W1D2-23`"
  },
  {
    "id": "word_14",
    "kanji": "上手",
    "reading": "じょうず",
    "pos": "な形容詞",
    "meaning": "高明的、擅長的",
    "source": "`W1D2-23`"
  },
  {
    "id": "word_15",
    "kanji": "空く",
    "reading": "あく",
    "pos": "第一類動詞 (五段)",
    "meaning": "空、空出、騰出",
    "source": "`W1D2-26`"
  },
  {
    "id": "word_16",
    "kanji": "残る",
    "reading": "のこる",
    "pos": "第一類動詞 (五段)",
    "meaning": "剩餘、殘留",
    "source": "`W1D2-26`"
  },
  {
    "id": "word_17",
    "kanji": "すく",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "空、稀疏",
    "source": "`W1D2-26`"
  },
  {
    "id": "word_18",
    "kanji": "余る",
    "reading": "あまる",
    "pos": "第一類動詞 (五段)",
    "meaning": "剩餘、過多",
    "source": "`W1D2-26`"
  },
  {
    "id": "word_19",
    "kanji": "宿題",
    "reading": "しゅくだい",
    "pos": "名詞",
    "meaning": "作業、功課",
    "source": "`W1D2-28`"
  },
  {
    "id": "word_20",
    "kanji": "後ほど",
    "reading": "のちほど",
    "pos": "副詞",
    "meaning": "過一會兒",
    "source": "`W1D3-32`"
  },
  {
    "id": "word_21",
    "kanji": "間もなく",
    "reading": "まもなく",
    "pos": "副詞",
    "meaning": "不久、很快",
    "source": "`W1D3-32`"
  },
  {
    "id": "word_22",
    "kanji": "しばらく",
    "reading": "",
    "pos": "副詞",
    "meaning": "一會兒、片刻",
    "source": "`W1D3-32`"
  },
  {
    "id": "word_23",
    "kanji": "先に",
    "reading": "さきに",
    "pos": "副詞 / 名詞",
    "meaning": "先、之前",
    "source": "`W1D3-32`"
  },
  {
    "id": "word_24",
    "kanji": "あちこち",
    "reading": "",
    "pos": "代名詞 / 副詞",
    "meaning": "到處、各處",
    "source": "`W1D3-35`"
  },
  {
    "id": "word_25",
    "kanji": "卒業式",
    "reading": "そつぎょうしき",
    "pos": "名詞",
    "meaning": "畢業典禮",
    "source": "`W1D3-37`"
  },
  {
    "id": "word_26",
    "kanji": "落ち着く",
    "reading": "おちつく",
    "pos": "第一類動詞 (五段)",
    "meaning": "平靜、冷靜下來",
    "source": "`W1D3-38`"
  },
  {
    "id": "word_27",
    "kanji": "思いつく",
    "reading": "おもいつく",
    "pos": "第一類動詞 (五段)",
    "meaning": "想出來、想起",
    "source": "`W1D3-38`"
  },
  {
    "id": "word_28",
    "kanji": "張り切る",
    "reading": "はりきる",
    "pos": "第一類動詞 (五段)",
    "meaning": "幹勁十足",
    "source": "`W1D3-38`"
  },
  {
    "id": "word_29",
    "kanji": "見直す",
    "reading": "みなおす",
    "pos": "第一類動詞 (五段)",
    "meaning": "重看、重新認識",
    "source": "`W1D3-38`"
  },
  {
    "id": "word_30",
    "kanji": "飛び出す",
    "reading": "とびだす",
    "pos": "第一類動詞 (五段)",
    "meaning": "突然出現；衝出",
    "source": "`W1D3-39`"
  },
  {
    "id": "word_31",
    "kanji": "詳しい",
    "reading": "くわしい",
    "pos": "い形容詞",
    "meaning": "詳細的",
    "source": "`W1D3-41`"
  },
  {
    "id": "word_32",
    "kanji": "險しい",
    "reading": "けわしい",
    "pos": "い形容詞",
    "meaning": "險峻的",
    "source": "`W1D3-41`"
  },
  {
    "id": "word_33",
    "kanji": "授業",
    "reading": "じゅぎょう",
    "pos": "名詞 / (～する)",
    "meaning": "授課、課業",
    "source": "`W1D3-43`"
  },
  {
    "id": "word_34",
    "kanji": "転ぶ",
    "reading": "ころぶ",
    "pos": "第一類動詞 (五段)",
    "meaning": "跌倒",
    "source": "`W1D3-44`"
  },
  {
    "id": "word_35",
    "kanji": "落ちる",
    "reading": "おちる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "落下、掉落",
    "source": "`W1D3-44`"
  },
  {
    "id": "word_36",
    "kanji": "倒れる",
    "reading": "たおれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "倒塌、倒下",
    "source": "`W1D3-44`"
  },
  {
    "id": "word_37",
    "kanji": "つぶれる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "壓壞、垮掉",
    "source": "`W1D3-44`"
  },
  {
    "id": "word_38",
    "kanji": "約束",
    "reading": "やくそく",
    "pos": "名詞 / (～する)",
    "meaning": "約定、承諾",
    "source": "`W1D4-46`"
  },
  {
    "id": "word_39",
    "kanji": "末っ子",
    "reading": "すえっこ",
    "pos": "名詞",
    "meaning": "老么",
    "source": "`W1D4-47`"
  },
  {
    "id": "word_40",
    "kanji": "生",
    "reading": "なま",
    "pos": "名詞",
    "meaning": "生的、未加工的",
    "source": "`W1D4-50`"
  },
  {
    "id": "word_41",
    "kanji": "むく",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "剝、削（皮）",
    "source": "`W1D4-50`"
  },
  {
    "id": "word_42",
    "kanji": "煮る",
    "reading": "にる",
    "pos": "第二類動詞 (上一段)",
    "meaning": "煮、燉",
    "source": "`W1D4-50`"
  },
  {
    "id": "word_43",
    "kanji": "ゆでる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "燙、水煮",
    "source": "`W1D4-50`"
  },
  {
    "id": "word_44",
    "kanji": "スニーカー",
    "reading": "",
    "pos": "名詞",
    "meaning": "運動鞋",
    "source": "`W1D4-53`"
  },
  {
    "id": "word_45",
    "kanji": "結ぶ",
    "reading": "むすぶ",
    "pos": "第一類動詞 (五段)",
    "meaning": "繫、連結、打結",
    "source": "`W1D4-53`"
  },
  {
    "id": "word_46",
    "kanji": "ほどける",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "鬆開、解開",
    "source": "`W1D4-53`"
  },
  {
    "id": "word_47",
    "kanji": "くっ付ける",
    "reading": "くっつける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "黏上、貼上",
    "source": "`W1D4-53`"
  },
  {
    "id": "word_48",
    "kanji": "抜く",
    "reading": "ぬく",
    "pos": "第一類動詞 (五段)",
    "meaning": "拔、抽出；超越",
    "source": "`W1D4-53`"
  },
  {
    "id": "word_49",
    "kanji": "縫う",
    "reading": "ぬう",
    "pos": "第一類動詞 (五段)",
    "meaning": "縫、縫紉",
    "source": "`W1D4-53`"
  },
  {
    "id": "word_50",
    "kanji": "渡る",
    "reading": "わたる",
    "pos": "第一類動詞 (五段)",
    "meaning": "渡過、經過",
    "source": "`W1D4-55`"
  },
  {
    "id": "word_51",
    "kanji": "散らかる",
    "reading": "ちらかる",
    "pos": "第一類動詞 (五段)",
    "meaning": "凌亂、亂七八糟",
    "source": "`W1D4-59`"
  },
  {
    "id": "word_52",
    "kanji": "片付ける",
    "reading": "かたづける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "整頓、收拾",
    "source": "`W1D4-59`"
  },
  {
    "id": "word_53",
    "kanji": "汚れる",
    "reading": "よごれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "髒、污染",
    "source": "`W1D4-59`"
  },
  {
    "id": "word_54",
    "kanji": "細かい",
    "reading": "こまかい",
    "pos": "い形容詞",
    "meaning": "細小的、零碎的",
    "source": "`W1D5-61`"
  },
  {
    "id": "word_55",
    "kanji": "細い",
    "reading": "ほそい",
    "pos": "い形容詞",
    "meaning": "細的、纖細的",
    "source": "`W1D5-61`"
  },
  {
    "id": "word_56",
    "kanji": "売り上げ",
    "reading": "うりあげ",
    "pos": "名詞",
    "meaning": "營業額",
    "source": "`W1D5-62`"
  },
  {
    "id": "word_57",
    "kanji": "売り場",
    "reading": "うりば",
    "pos": "名詞",
    "meaning": "賣場、售票處",
    "source": "`W1D5-62`"
  },
  {
    "id": "word_58",
    "kanji": "売り切れ",
    "reading": "うりきれ",
    "pos": "名詞",
    "meaning": "售完、賣光",
    "source": "`W1D5-62`"
  },
  {
    "id": "word_59",
    "kanji": "売り出し",
    "reading": "うりだし",
    "pos": "名詞",
    "meaning": "出清、上市",
    "source": "`W1D5-62`"
  },
  {
    "id": "word_60",
    "kanji": "ひげ",
    "reading": "",
    "pos": "名詞",
    "meaning": "鬍鬚",
    "source": "`W1D5-68`"
  },
  {
    "id": "word_61",
    "kanji": "ひじ",
    "reading": "",
    "pos": "名詞",
    "meaning": "手肘",
    "source": "`W1D5-68`"
  },
  {
    "id": "word_62",
    "kanji": "はげ",
    "reading": "",
    "pos": "名詞",
    "meaning": "禿頭",
    "source": "`W1D5-68`"
  },
  {
    "id": "word_63",
    "kanji": "かび",
    "reading": "",
    "pos": "名詞",
    "meaning": "霉菌",
    "source": "`W1D5-68`"
  },
  {
    "id": "word_64",
    "kanji": "再来週",
    "reading": "さらいしゅう",
    "pos": "名詞",
    "meaning": "下下週",
    "source": "`W1D5-73`"
  },
  {
    "id": "word_65",
    "kanji": "君",
    "reading": "きみ",
    "pos": "代名詞",
    "meaning": "你、君",
    "source": "`W1D6-76`"
  },
  {
    "id": "word_66",
    "kanji": "ほがらか",
    "reading": "な",
    "pos": "な形容詞",
    "meaning": "爽朗的、舒暢的",
    "source": "`W1D6-80`"
  },
  {
    "id": "word_67",
    "kanji": "あわただしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "匆忙的、慌張的",
    "source": "`W1D6-80`"
  },
  {
    "id": "word_68",
    "kanji": "おとなしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "老實的、溫順的",
    "source": "`W1D6-80`"
  },
  {
    "id": "word_69",
    "kanji": "まぶしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "耀眼的、刺眼的",
    "source": "`W1D6-80`"
  },
  {
    "id": "word_70",
    "kanji": "券",
    "reading": "けん",
    "pos": "名詞",
    "meaning": "券、票",
    "source": "`W1D6-83`"
  },
  {
    "id": "word_71",
    "kanji": "賃",
    "reading": "ちん",
    "pos": "名詞 / 接尾詞",
    "meaning": "費用、租金",
    "source": "`W1D6-83`"
  },
  {
    "id": "word_72",
    "kanji": "方向",
    "reading": "ほうこう",
    "pos": "名詞",
    "meaning": "方向",
    "source": "`W1D6-89`"
  },
  {
    "id": "word_73",
    "kanji": "土地",
    "reading": "とち",
    "pos": "名詞",
    "meaning": "土地",
    "source": "`W1D6-89`"
  },
  {
    "id": "word_74",
    "kanji": "向き",
    "reading": "むき",
    "pos": "名詞 / 接尾詞",
    "meaning": "方向、朝向；適合",
    "source": "`W1D6-89`"
  },
  {
    "id": "word_75",
    "kanji": "地方",
    "reading": "ちほう",
    "pos": "名詞",
    "meaning": "地方、地區",
    "source": "`W1D6-89`"
  },
  {
    "id": "word_76",
    "kanji": "地域",
    "reading": "ちいき",
    "pos": "名詞",
    "meaning": "地區、區域",
    "source": "`W1D6-89`"
  },
  {
    "id": "word_77",
    "kanji": "遅れる",
    "reading": "おくれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "遲、過時",
    "source": "`W1D7-97`"
  },
  {
    "id": "word_78",
    "kanji": "あきらめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "死心、放棄",
    "source": "`W1D7-106`"
  },
  {
    "id": "word_79",
    "kanji": "あきれる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "吃驚、愣住、無言",
    "source": "`W1D7-106`"
  },
  {
    "id": "word_80",
    "kanji": "あきる",
    "reading": "",
    "pos": "第二類動詞 (上一段)",
    "meaning": "厭煩、膩了",
    "source": "`W1D7-106`"
  },
  {
    "id": "word_81",
    "kanji": "三角",
    "reading": "さんかく",
    "pos": "名詞",
    "meaning": "三角形",
    "source": "`W1D7-121`"
  },
  {
    "id": "word_82",
    "kanji": "イメージ",
    "reading": "",
    "pos": "名詞",
    "meaning": "形象 (Image)",
    "source": "`W2D1-127`"
  },
  {
    "id": "word_83",
    "kanji": "レベル",
    "reading": "",
    "pos": "名詞",
    "meaning": "層次、級別 (Level)",
    "source": "`W2D1-127`"
  },
  {
    "id": "word_84",
    "kanji": "テンポ",
    "reading": "",
    "pos": "名詞",
    "meaning": "節奏 (Tempo)",
    "source": "`W2D1-127`"
  },
  {
    "id": "word_85",
    "kanji": "サイン",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "簽名 (Sign)",
    "source": "`W2D1-127`"
  },
  {
    "id": "word_86",
    "kanji": "ぶらぶら",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "閒逛、無所事事",
    "source": "`W2D1-130`"
  },
  {
    "id": "word_87",
    "kanji": "そろそろ",
    "reading": "",
    "pos": "副詞",
    "meaning": "快要、就要",
    "source": "`W2D1-130`"
  },
  {
    "id": "word_88",
    "kanji": "のろのろ",
    "reading": "",
    "pos": "副詞",
    "meaning": "慢吞吞、緩慢地",
    "source": "`W2D1-130`"
  },
  {
    "id": "word_89",
    "kanji": "どんどん",
    "reading": "",
    "pos": "副詞",
    "meaning": "順利進行、接連不斷",
    "source": "`W2D1-130`"
  },
  {
    "id": "word_90",
    "kanji": "ぺこぺこ",
    "reading": "",
    "pos": "な形容詞 / 副詞",
    "meaning": "肚子餓；點頭哈腰",
    "source": "`W2D1-133`"
  },
  {
    "id": "word_91",
    "kanji": "ふらふら",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "搖晃、頭暈",
    "source": "`W2D1-133`"
  },
  {
    "id": "word_92",
    "kanji": "ぴかぴか",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "閃閃發亮",
    "source": "`W2D1-133`"
  },
  {
    "id": "word_93",
    "kanji": "ぺらぺら",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "流利地；薄的",
    "source": "`W2D1-133`"
  },
  {
    "id": "word_94",
    "kanji": "物語",
    "reading": "ものがたり",
    "pos": "名詞",
    "meaning": "故事、傳說",
    "source": "`W2D1-136`"
  },
  {
    "id": "word_95",
    "kanji": "書物",
    "reading": "しょもつ",
    "pos": "名詞",
    "meaning": "書籍",
    "source": "`W2D1-136`"
  },
  {
    "id": "word_96",
    "kanji": "汚い",
    "reading": "きたない",
    "pos": "い形容詞",
    "meaning": "骯髒的",
    "source": "`W2D1-138`"
  },
  {
    "id": "word_97",
    "kanji": "汚す",
    "reading": "よごす",
    "pos": "第一類動詞 (他動詞)",
    "meaning": "弄髒、玷汙",
    "source": "`W2D1-138`"
  },
  {
    "id": "word_98",
    "kanji": "みにくい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "難看的、醜陋的",
    "source": "`W2D1-139`"
  },
  {
    "id": "word_99",
    "kanji": "つらい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "痛苦的、難受的",
    "source": "`W2D1-139`"
  },
  {
    "id": "word_100",
    "kanji": "苦い",
    "reading": "にがい",
    "pos": "い形容詞",
    "meaning": "苦的",
    "source": "`W2D1-139`"
  },
  {
    "id": "word_101",
    "kanji": "苦しむ",
    "reading": "くるしむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "受苦、痛苦、煩惱",
    "source": "`W2D1-139`"
  },
  {
    "id": "word_102",
    "kanji": "反對",
    "reading": "はんたい",
    "pos": "名詞 / (～する)",
    "meaning": "相反、反對",
    "source": "`W2D2-141`"
  },
  {
    "id": "word_103",
    "kanji": "量る",
    "reading": "はかる",
    "pos": "第一類動詞 (五段)",
    "meaning": "測量、稱重",
    "source": "`W2D2-145`"
  },
  {
    "id": "word_104",
    "kanji": "落とす",
    "reading": "おとす",
    "pos": "第一類動詞 (五段)",
    "meaning": "弄丟、使掉落",
    "source": "`W2D2-145`"
  },
  {
    "id": "word_105",
    "kanji": "もったいない",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "浪費的、可惜的",
    "source": "`W2D2-148`"
  },
  {
    "id": "word_106",
    "kanji": "贅沢",
    "reading": "ぜいたく",
    "pos": "な形容詞",
    "meaning": "奢侈的、豪華的",
    "source": "`W2D2-148`"
  },
  {
    "id": "word_107",
    "kanji": "貧乏",
    "reading": "びんぼう",
    "pos": "な形容詞",
    "meaning": "貧窮的",
    "source": "`W2D2-148`"
  },
  {
    "id": "word_108",
    "kanji": "貝",
    "reading": "かい",
    "pos": "名詞",
    "meaning": "貝、貝類、貝殼",
    "source": "`W2D2-150`"
  },
  {
    "id": "word_109",
    "kanji": "だらしない",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "邋遢的、散漫的",
    "source": "`W2D2-151`"
  },
  {
    "id": "word_110",
    "kanji": "くだらない",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "無聊的、無價值的",
    "source": "`W2D2-151`"
  },
  {
    "id": "word_111",
    "kanji": "困る",
    "reading": "こまる",
    "pos": "第一類動詞 (五段)",
    "meaning": "困擾、為難",
    "source": "`W2D2-153`"
  },
  {
    "id": "word_112",
    "kanji": "教わる",
    "reading": "おそわる",
    "pos": "第一類動詞 (五段)",
    "meaning": "向～學習、受教",
    "source": "`W2D2-154`"
  },
  {
    "id": "word_113",
    "kanji": "襲う",
    "reading": "おそう",
    "pos": "第一類動詞 (五段)",
    "meaning": "襲擊、侵襲",
    "source": "`W2D2-154`"
  },
  {
    "id": "word_114",
    "kanji": "學ぶ",
    "reading": "まなぶ",
    "pos": "第一類動詞 (五段)",
    "meaning": "學習",
    "source": "`W2D2-154`"
  },
  {
    "id": "word_115",
    "kanji": "主な",
    "reading": "おモな",
    "pos": "連體詞",
    "meaning": "主要的",
    "source": "`W2D3-157`"
  },
  {
    "id": "word_116",
    "kanji": "大した",
    "reading": "たいした",
    "pos": "連體詞",
    "meaning": "了不起的、大不了的",
    "source": "`W2D3-157`"
  },
  {
    "id": "word_117",
    "kanji": "製品",
    "reading": "せいひん",
    "pos": "名詞",
    "meaning": "製品、產品",
    "source": "`W2D3-159`"
  },
  {
    "id": "word_118",
    "kanji": "行き",
    "reading": "ゆき",
    "pos": "名詞",
    "meaning": "前往、開往",
    "source": "`W2D3-160`"
  },
  {
    "id": "word_119",
    "kanji": "打ち合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "事前商議、商討",
    "source": "`W2D3-163`"
  },
  {
    "id": "word_120",
    "kanji": "待ち合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "會合、集合、碰面",
    "source": "`W2D3-163`"
  },
  {
    "id": "word_121",
    "kanji": "組み合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "組合、搭配",
    "source": "`W2D3-163`"
  },
  {
    "id": "word_122",
    "kanji": "問い合わせ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "詢問、查詢",
    "source": "`W2D3-163`"
  },
  {
    "id": "word_123",
    "kanji": "とにかく",
    "reading": "",
    "pos": "副詞",
    "meaning": "總之、無論如何",
    "source": "`W2D3-166`"
  },
  {
    "id": "word_124",
    "kanji": "いきなり",
    "reading": "",
    "pos": "副詞",
    "meaning": "突然地、冷不防地",
    "source": "`W2D3-166`"
  },
  {
    "id": "word_125",
    "kanji": "せっかく",
    "reading": "",
    "pos": "副詞",
    "meaning": "難得、好不容易",
    "source": "`W2D3-166`"
  },
  {
    "id": "word_126",
    "kanji": "語り合う",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "彼此交談、傾訴",
    "source": "`W2D3-169`"
  },
  {
    "id": "word_127",
    "kanji": "しゃべる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "聊天、說話",
    "source": "`W2D3-169`"
  },
  {
    "id": "word_128",
    "kanji": "言い合う",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "爭論、爭吵",
    "source": "`W2D3-169`"
  },
  {
    "id": "word_129",
    "kanji": "話しかける",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "搭話、攀談",
    "source": "`W2D3-169`"
  },
  {
    "id": "word_130",
    "kanji": "参った",
    "reading": "まいった",
    "pos": "動詞活用",
    "meaning": "受不了、沒轍了",
    "source": "`W2D3-補充`"
  },
  {
    "id": "word_131",
    "kanji": "焦った",
    "reading": "あせった",
    "pos": "動詞活用",
    "meaning": "焦急、慌張",
    "source": "`W2D3-補充`"
  },
  {
    "id": "word_132",
    "kanji": "詰まった",
    "reading": "",
    "pos": "動詞活用",
    "meaning": "塞住、堵塞",
    "source": "`W2D3-補充`"
  },
  {
    "id": "word_133",
    "kanji": "様子",
    "reading": "ようす",
    "pos": "名詞",
    "meaning": "情況、情形、樣子",
    "source": "`W2D4-172`"
  },
  {
    "id": "word_134",
    "kanji": "態度",
    "reading": "たいど",
    "pos": "名詞",
    "meaning": "態度",
    "source": "`W2D4-172`"
  },
  {
    "id": "word_135",
    "kanji": "格好",
    "reading": "かっこう",
    "pos": "名詞",
    "meaning": "打扮、樣子、適合",
    "source": "`W2D4-172`"
  },
  {
    "id": "word_136",
    "kanji": "工夫",
    "reading": "くふう",
    "pos": "名詞 / (～する)",
    "meaning": "鑽研、下功夫",
    "source": "`W2D4-175`"
  },
  {
    "id": "word_137",
    "kanji": "ちっとも",
    "reading": "",
    "pos": "副詞",
    "meaning": "一點也不（後接否定）",
    "source": "`W2D4-179`"
  },
  {
    "id": "word_138",
    "kanji": "実現",
    "reading": "じつげん",
    "pos": "名詞 / (～する)",
    "meaning": "實現、達成",
    "source": "`W2D4-180`"
  },
  {
    "id": "word_139",
    "kanji": "現実",
    "reading": "げんじつ",
    "pos": "名詞",
    "meaning": "現實、實際",
    "source": "`W2D4-180`"
  },
  {
    "id": "word_140",
    "kanji": "実験",
    "reading": "じっけん",
    "pos": "名詞 / (～する)",
    "meaning": "實驗、試驗",
    "source": "`W2D4-180`"
  },
  {
    "id": "word_141",
    "kanji": "論文",
    "reading": "ろんぶん",
    "pos": "名詞",
    "meaning": "論文",
    "source": "`W2D4-183`"
  },
  {
    "id": "word_142",
    "kanji": "こう",
    "reading": "",
    "pos": "副詞",
    "meaning": "這樣地、如此",
    "source": "`W2D4-185`"
  },
  {
    "id": "word_143",
    "kanji": "メモ",
    "reading": "",
    "pos": "名詞 / (～する)",
    "meaning": "筆記、紀錄",
    "source": "`W2D5-187`"
  },
  {
    "id": "word_144",
    "kanji": "プリント",
    "reading": "",
    "pos": "名詞",
    "meaning": "講義、印刷品",
    "source": "`W2D5-187`"
  },
  {
    "id": "word_145",
    "kanji": "さわがしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "吵鬧的、喧鬧的",
    "source": "`W2D5-190`"
  },
  {
    "id": "word_146",
    "kanji": "はげしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "激烈、猛烈",
    "source": "`W2D5-190`"
  },
  {
    "id": "word_147",
    "kanji": "ずうずうしい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "厚臉皮、厚顏無恥",
    "source": "`W2D5-190`"
  },
  {
    "id": "word_148",
    "kanji": "雇う",
    "reading": "やとう",
    "pos": "第一類動詞 (五段)",
    "meaning": "雇用",
    "source": "`W2D5-193`"
  },
  {
    "id": "word_149",
    "kanji": "勤める",
    "reading": "つとめる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "工作、任職",
    "source": "`W2D5-193`"
  },
  {
    "id": "word_150",
    "kanji": "混ぜる",
    "reading": "まぜる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "混合、攪拌",
    "source": "`W2D5-193`"
  },
  {
    "id": "word_151",
    "kanji": "預ける",
    "reading": "あずける",
    "pos": "第二類動詞 (下一段)",
    "meaning": "寄放、委託",
    "source": "`W2D5-193`"
  },
  {
    "id": "word_152",
    "kanji": "折る",
    "reading": "おる",
    "pos": "第一類動詞 (五段)",
    "meaning": "折疊、折斷",
    "source": "`W2D5-195`"
  },
  {
    "id": "word_153",
    "kanji": "折り曲げる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "折彎、摺疊",
    "source": "`W2D5-195`"
  },
  {
    "id": "word_154",
    "kanji": "祈り",
    "reading": "いのり",
    "pos": "名詞",
    "meaning": "祈禱、祝願",
    "source": "`W2D5-195`"
  },
  {
    "id": "word_155",
    "kanji": "税",
    "reading": "ぜい",
    "pos": "名詞",
    "meaning": "稅、稅金",
    "source": "`W2D5-195`"
  },
  {
    "id": "word_156",
    "kanji": "祝い",
    "reading": "いわい",
    "pos": "名詞",
    "meaning": "慶祝、祝賀",
    "source": "`W2D5-195`"
  },
  {
    "id": "word_157",
    "kanji": "表",
    "reading": "おもて",
    "pos": "名詞",
    "meaning": "正面、表面",
    "source": "`W2D5-198`"
  },
  {
    "id": "word_158",
    "kanji": "裏",
    "reading": "うら",
    "pos": "名詞",
    "meaning": "反面、背面",
    "source": "`W2D5-198`"
  },
  {
    "id": "word_159",
    "kanji": "まとめ",
    "reading": "",
    "pos": "名詞",
    "meaning": "總結、整理、彙整",
    "source": "`W2D5-200`"
  },
  {
    "id": "word_160",
    "kanji": "王子",
    "reading": "おうじ",
    "pos": "名詞",
    "meaning": "王子",
    "source": "`W2D6-201`"
  },
  {
    "id": "word_161",
    "kanji": "冷える",
    "reading": "ひえる",
    "pos": "第二類動詞 (自動)",
    "meaning": "物體變冷、感覺冷",
    "source": "`W2D6-202`"
  },
  {
    "id": "word_162",
    "kanji": "冷める",
    "reading": "さめる",
    "pos": "第二類動詞 (自動)",
    "meaning": "變涼（熱的東西）",
    "source": "`W2D6-202`"
  },
  {
    "id": "word_163",
    "kanji": "凍る",
    "reading": "こおる",
    "pos": "第一類動詞 (五段)",
    "meaning": "凍結、結冰",
    "source": "`W2D6-202`"
  },
  {
    "id": "word_164",
    "kanji": "うっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "不留神、不小心",
    "source": "`W2D6-205`"
  },
  {
    "id": "word_165",
    "kanji": "がっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "失望、沮喪",
    "source": "`W2D6-205`"
  },
  {
    "id": "word_166",
    "kanji": "すっかり",
    "reading": "",
    "pos": "副詞",
    "meaning": "完全、全部",
    "source": "`W2D6-205`"
  },
  {
    "id": "word_167",
    "kanji": "しっかり",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "好好地、牢固地",
    "source": "`W2D6-205`"
  },
  {
    "id": "word_168",
    "kanji": "重ねる",
    "reading": "かさねる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "堆疊",
    "source": "`W2D6-211`"
  },
  {
    "id": "word_169",
    "kanji": "広げる",
    "reading": "ひろげる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "擴大、展開",
    "source": "`W2D6-211`"
  },
  {
    "id": "word_170",
    "kanji": "たたむ",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "疊、折",
    "source": "`W2D6-211`"
  },
  {
    "id": "word_171",
    "kanji": "縮める",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "縮短、縮小",
    "source": "`W2D6-211`"
  },
  {
    "id": "word_172",
    "kanji": "登山",
    "reading": "とざん",
    "pos": "名詞 / (～する)",
    "meaning": "登山",
    "source": "`W2D6-213`"
  },
  {
    "id": "word_173",
    "kanji": "都合",
    "reading": "つごう",
    "pos": "名詞",
    "meaning": "方便、合適",
    "source": "`W2D6-214`"
  },
  {
    "id": "word_174",
    "kanji": "具合",
    "reading": "ぐあい",
    "pos": "名詞",
    "meaning": "狀態、健康情況",
    "source": "`W2D6-214`"
  },
  {
    "id": "word_175",
    "kanji": "症状",
    "reading": "しょうじょう",
    "pos": "名詞",
    "meaning": "症狀",
    "source": "`W2D7-230`"
  },
  {
    "id": "word_176",
    "kanji": "しつこい",
    "reading": "",
    "pos": "い形容詞",
    "meaning": "執拗的；油膩的",
    "source": "`W2D7-236`"
  },
  {
    "id": "word_177",
    "kanji": "怪しい",
    "reading": "あやしい",
    "pos": "い形容詞",
    "meaning": "可疑的、奇怪的",
    "source": "`W2D7-236`"
  },
  {
    "id": "word_178",
    "kanji": "教育",
    "reading": "きょういく",
    "pos": "名詞 / (～する)",
    "meaning": "教育",
    "source": "`W2D7-240`"
  },
  {
    "id": "word_179",
    "kanji": "縮む",
    "reading": "ちぢむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "縮小、收縮",
    "source": "`W2D7-248`"
  },
  {
    "id": "word_180",
    "kanji": "黙る",
    "reading": "だまる",
    "pos": "第一類動詞 (五段)",
    "meaning": "沉默、不說話",
    "source": "`W2D7-249`"
  },
  {
    "id": "word_181",
    "kanji": "交差点",
    "reading": "",
    "pos": "名詞",
    "meaning": "交叉路口",
    "source": "`W3D1-251`"
  },
  {
    "id": "word_182",
    "kanji": "平気",
    "reading": "へいき",
    "pos": "な形容詞",
    "meaning": "不在乎、沒事",
    "source": "`W3D1-252`"
  },
  {
    "id": "word_183",
    "kanji": "求人",
    "reading": "きゅうじん",
    "pos": "名詞",
    "meaning": "徵人、招聘",
    "source": "`W3D2-266`"
  },
  {
    "id": "word_184",
    "kanji": "廣告",
    "reading": "こうこく",
    "pos": "名詞 / (～する)",
    "meaning": "廣告",
    "source": "`W3D2-266`"
  },
  {
    "id": "word_185",
    "kanji": "まとめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "整理、彙總、歸納",
    "source": "`W3D2-267`"
  },
  {
    "id": "word_186",
    "kanji": "あつめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "集合、收集",
    "source": "`W3D2-267`"
  },
  {
    "id": "word_187",
    "kanji": "うめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "埋、填",
    "source": "`W3D2-267`"
  },
  {
    "id": "word_188",
    "kanji": "ふくめる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "包含、包括",
    "source": "`W3D2-267`"
  },
  {
    "id": "word_189",
    "kanji": "がらがら",
    "reading": "",
    "pos": "副詞 / な形容詞",
    "meaning": "空蕩蕩的",
    "source": "`W3D2-270`"
  },
  {
    "id": "word_190",
    "kanji": "うろうろ",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "徘徊、不知所措",
    "source": "`W3D2-270`"
  },
  {
    "id": "word_191",
    "kanji": "断る",
    "reading": "ことわる",
    "pos": "第一類動詞 (五段)",
    "meaning": "拒絕、事先通知",
    "source": "`W3D2-272`"
  },
  {
    "id": "word_192",
    "kanji": "たまに",
    "reading": "",
    "pos": "副詞",
    "meaning": "偶爾、稀少",
    "source": "`W3D2-273`"
  },
  {
    "id": "word_193",
    "kanji": "ついに",
    "reading": "",
    "pos": "副詞",
    "meaning": "終於",
    "source": "`W3D2-273`"
  },
  {
    "id": "word_194",
    "kanji": "わりに",
    "reading": "",
    "pos": "副詞",
    "meaning": "比較地、相當",
    "source": "`W3D2-273`"
  },
  {
    "id": "word_195",
    "kanji": "まず",
    "reading": "",
    "pos": "副詞",
    "meaning": "首先",
    "source": "`W3D2-273`"
  },
  {
    "id": "word_196",
    "kanji": "飛び込む",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "跳入、跳進",
    "source": "`W3D2-276`"
  },
  {
    "id": "word_197",
    "kanji": "通り過ぎる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "走過、經過",
    "source": "`W3D2-276`"
  },
  {
    "id": "word_198",
    "kanji": "通りかかる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "路過、碰巧經過",
    "source": "`W3D2-276`"
  },
  {
    "id": "word_199",
    "kanji": "散る",
    "reading": "ちる",
    "pos": "第一類動詞 (五段)",
    "meaning": "凋謝、散落",
    "source": "`W3D2-279`"
  },
  {
    "id": "word_200",
    "kanji": "枯れる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "枯萎",
    "source": "`W3D2-279`"
  },
  {
    "id": "word_201",
    "kanji": "きちんと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "整齊地、好好的、確實地",
    "source": "`W3D3-282`"
  },
  {
    "id": "word_202",
    "kanji": "しいんと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "靜悄悄地",
    "source": "`W3D3-282`"
  },
  {
    "id": "word_203",
    "kanji": "わざと",
    "reading": "",
    "pos": "副詞",
    "meaning": "故意地",
    "source": "`W3D3-282`"
  },
  {
    "id": "word_204",
    "kanji": "そっと",
    "reading": "",
    "pos": "副詞 / (～する)",
    "meaning": "輕輕地、悄悄地",
    "source": "`W3D3-282`"
  },
  {
    "id": "word_205",
    "kanji": "詰める",
    "reading": "つめる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "塞、裝、填滿",
    "source": "`W3D3-285`"
  },
  {
    "id": "word_206",
    "kanji": "包む",
    "reading": "つつむ",
    "pos": "第一類動詞 (五段)",
    "meaning": "包裹",
    "source": "`W3D3-285`"
  },
  {
    "id": "word_207",
    "kanji": "積もる",
    "reading": "つもる",
    "pos": "第一類動詞 (五段)",
    "meaning": "堆積",
    "source": "`W3D3-285`"
  },
  {
    "id": "word_208",
    "kanji": "生意氣",
    "reading": "なまいき",
    "pos": "な形容詞",
    "meaning": "傲慢的、狂妄的、厚臉皮",
    "source": "`W3D3-291`"
  },
  {
    "id": "word_209",
    "kanji": "意地悪",
    "reading": "いじわる",
    "pos": "な形容詞 / 名詞",
    "meaning": "壞心腸",
    "source": "`W3D3-291`"
  },
  {
    "id": "word_210",
    "kanji": "下品",
    "reading": "げひん",
    "pos": "な形容詞",
    "meaning": "粗俗",
    "source": "`W3D3-291`"
  },
  {
    "id": "word_211",
    "kanji": "呑氣",
    "reading": "のんき",
    "pos": "な形容詞",
    "meaning": "無憂無慮、悠哉",
    "source": "`W3D3-291`"
  },
  {
    "id": "word_212",
    "kanji": "経済",
    "reading": "けいざい",
    "pos": "名詞 / な形容詞",
    "meaning": "經濟",
    "source": "`W3D3-293`"
  },
  {
    "id": "word_213",
    "kanji": "嫌う",
    "reading": "きらう",
    "pos": "第一類動詞 (五段)",
    "meaning": "討厭、厭惡",
    "source": "`W3D3-294`"
  },
  {
    "id": "word_214",
    "kanji": "嫌がる",
    "reading": "いやがる",
    "pos": "第一類動詞 (五段)",
    "meaning": "感到討厭",
    "source": "`W3D3-294`"
  },
  {
    "id": "word_215",
    "kanji": "付き合う",
    "reading": "つきあう",
    "pos": "第一類動詞 (五段)",
    "meaning": "交往、陪伴",
    "source": "`W3D3-294`"
  },
  {
    "id": "word_216",
    "kanji": "稼ぐ",
    "reading": "かせぐ",
    "pos": "第一類動詞 (五段)",
    "meaning": "賺取(勞動所得)",
    "source": "`W3D6-327`"
  },
  {
    "id": "word_217",
    "kanji": "もうかる",
    "reading": "",
    "pos": "第一類動詞 (五段/自動)",
    "meaning": "賺錢、得利",
    "source": "`W3D6-327`"
  },
  {
    "id": "word_218",
    "kanji": "おごる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "請客",
    "source": "`W3D6-327`"
  },
  {
    "id": "word_219",
    "kanji": "震える",
    "reading": "ふるえる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "震動、發抖",
    "source": "`W3D6-333`"
  },
  {
    "id": "word_220",
    "kanji": "揺れる",
    "reading": "ゆれる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "擺動、搖動",
    "source": "`W3D6-333`"
  },
  {
    "id": "word_221",
    "kanji": "撫でる",
    "reading": "なでる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "撫摸、輕撫",
    "source": "`W3D6-333`"
  },
  {
    "id": "word_222",
    "kanji": "舐める",
    "reading": "なめる",
    "pos": "第二類動詞 (下一段)",
    "meaning": "舔、舐",
    "source": "`W3D6-333`"
  },
  {
    "id": "word_223",
    "kanji": "鳴く",
    "reading": "なく",
    "pos": "第一類動詞 (五段)",
    "meaning": "鳴叫(動物)",
    "source": "`W3D6-335`"
  },
  {
    "id": "word_224",
    "kanji": "泣く",
    "reading": "なく",
    "pos": "第一類動詞 (五段)",
    "meaning": "哭泣(人類)",
    "source": "`W3D6-335`"
  },
  {
    "id": "word_225",
    "kanji": "擦る",
    "reading": "こする",
    "pos": "第一類動詞 (五段)",
    "meaning": "摩擦、揉",
    "source": "`W3D6-336`"
  },
  {
    "id": "word_226",
    "kanji": "捻る",
    "reading": "ひねる",
    "pos": "第一類動詞 (五段)",
    "meaning": "扭、轉",
    "source": "`W3D6-336`"
  },
  {
    "id": "word_227",
    "kanji": "解く",
    "reading": "ほどく",
    "pos": "第一類動詞 (五段)",
    "meaning": "解開、解除",
    "source": "`W3D6-336`"
  },
  {
    "id": "word_228",
    "kanji": "厚い",
    "reading": "あつい",
    "pos": "い形容詞",
    "meaning": "厚的",
    "source": "`W3D6-338`"
  },
  {
    "id": "word_229",
    "kanji": "深い",
    "reading": "ふかい",
    "pos": "い形容詞",
    "meaning": "深的",
    "source": "`W3D6-338`"
  },
  {
    "id": "word_230",
    "kanji": "もてる",
    "reading": "",
    "pos": "第二類動詞 (下一段)",
    "meaning": "受歡迎(異性)",
    "source": "`W3D6-330`"
  },
  {
    "id": "word_231",
    "kanji": "ふる",
    "reading": "",
    "pos": "第一類動詞 (五段)",
    "meaning": "拒絕、甩掉",
    "source": "`W3D6-330`"
  },
  {
    "id": "word_232",
    "kanji": "惜しい",
    "reading": "おしい",
    "pos": "い形容詞",
    "meaning": "可惜的、遺憾的",
    "source": "`W3D6-339`"
  },
  {
    "id": "word_233",
    "kanji": "いいかげんにしなさい",
    "reading": "",
    "pos": "適可而止、差不多一點！",
    "meaning": "`W1D7-94`",
    "source": ""
  },
  {
    "id": "word_234",
    "kanji": "頭にくる（あたまにくる） / 腹が立つ",
    "reading": "はらがたつ",
    "pos": "生氣、發怒",
    "meaning": "`W1D6-77` `W1D7-112`",
    "source": "同：怒（おこ）っている"
  },
  {
    "id": "word_235",
    "kanji": "大したことがない",
    "reading": "たいしたことがない",
    "pos": "沒什麼大礙、算不了什麼",
    "meaning": "`W1D4-56`",
    "source": ""
  },
  {
    "id": "word_236",
    "kanji": "いいかげんな",
    "reading": "",
    "pos": "敷衍的、適當的、馬馬虎虎的",
    "meaning": "`W1D4-56`",
    "source": ""
  },
  {
    "id": "word_237",
    "kanji": "気の毒",
    "reading": "きのどく",
    "pos": "可憐的",
    "meaning": "`W1D4-56`",
    "source": "お気の毒に：可憐或覺得遺憾，深感同情之意"
  },
  {
    "id": "word_238",
    "kanji": "口を利く",
    "reading": "くちをきく",
    "pos": "說話",
    "meaning": "`W1D6-77`",
    "source": "同：話す"
  },
  {
    "id": "word_239",
    "kanji": "口にする",
    "reading": "くちにする",
    "pos": "吃進嘴裡、說到",
    "meaning": "`W1D6-77`",
    "source": "同：食べる / 話をする"
  },
  {
    "id": "word_240",
    "kanji": "耳にする",
    "reading": "みみにする",
    "pos": "聽見",
    "meaning": "`W1D6-77`",
    "source": "同：聞く"
  },
  {
    "id": "word_241",
    "kanji": "耳が遠い",
    "reading": "みみがとおい",
    "pos": "重聽、聽力差",
    "meaning": "`W1D6-77`",
    "source": "同：耳がよく聞こえない"
  },
  {
    "id": "word_242",
    "kanji": "どういう意味",
    "reading": "いみ",
    "pos": "是什麼意思",
    "meaning": "`W2D7-245`",
    "source": ""
  },
  {
    "id": "word_243",
    "kanji": "都合",
    "reading": "つごう",
    "pos": "挪出時間、設法安排",
    "meaning": "`W2D6-214`",
    "source": ""
  },
  {
    "id": "word_244",
    "kanji": "気に入る",
    "reading": "きにいる",
    "pos": "中意、滿意、喜歡",
    "meaning": "`W2D4-181`",
    "source": ""
  },
  {
    "id": "word_245",
    "kanji": "気にする",
    "reading": "",
    "pos": "介意、擔心",
    "meaning": "`W2D4-181`",
    "source": ""
  },
  {
    "id": "word_246",
    "kanji": "気になる",
    "reading": "",
    "pos": "掛念、在意",
    "meaning": "`W2D4-181`",
    "source": ""
  },
  {
    "id": "word_247",
    "kanji": "気にかける",
    "reading": "",
    "pos": "關心",
    "meaning": "`W2D4-181`",
    "source": ""
  },
  {
    "id": "word_248",
    "kanji": "とんでもない",
    "reading": "",
    "pos": "哪裡的話、沒那回事、不敢當",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_249",
    "kanji": "しょうがない",
    "reading": "",
    "pos": "沒辦法",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_250",
    "kanji": "おかげさま",
    "reading": "",
    "pos": "託您的福",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_251",
    "kanji": "もうしわけない",
    "reading": "申し訳ない",
    "pos": "對不起、抱歉、過意不去",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_252",
    "kanji": "ご存知です / ご存知じゃありません",
    "reading": "",
    "pos": "(您) 知道 / (您) 不知道",
    "meaning": "`W2D6-212`",
    "source": ""
  },
  {
    "id": "word_253",
    "kanji": "存じております / 存じません",
    "reading": "",
    "pos": "(我) 知道 / (我) 不知道",
    "meaning": "`W2D6-212`",
    "source": ""
  },
  {
    "id": "word_254",
    "kanji": "どういう意味",
    "reading": "いみ",
    "pos": "是什麼意思",
    "meaning": "`W2D7-245`",
    "source": ""
  },
  {
    "id": "word_255",
    "kanji": "とんでもない",
    "reading": "",
    "pos": "哪裡的話、沒那回事",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_256",
    "kanji": "しょうがない",
    "reading": "",
    "pos": "沒辦法",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_257",
    "kanji": "おかげさま",
    "reading": "",
    "pos": "託您的福",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_258",
    "kanji": "申し訳ない",
    "reading": "",
    "pos": "對不起、過意不去",
    "meaning": "`W3D1-255`",
    "source": ""
  },
  {
    "id": "word_259",
    "kanji": "得をする",
    "reading": "とくをする",
    "pos": "得到、獲利",
    "meaning": "`W3D6-327`",
    "source": ""
  },
  {
    "id": "word_260",
    "kanji": "損をする",
    "reading": "そんをする",
    "pos": "虧損、受損",
    "meaning": "`W3D6-327`",
    "source": ""
  },
  {
    "id": "word_261",
    "kanji": "気がある",
    "reading": "きがある",
    "pos": "有興趣、有意思",
    "meaning": "`W3D6-330`",
    "source": ""
  },
  {
    "id": "word_262",
    "kanji": "ついている",
    "reading": "",
    "pos": "幸運、運氣好",
    "meaning": "`W3D6-339`",
    "source": ""
  },
  {
    "id": "word_263",
    "kanji": "ましになる",
    "reading": "",
    "pos": "好轉、變好一點",
    "meaning": "`W3D6-339`",
    "source": ""
  }
];
