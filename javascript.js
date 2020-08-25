var CuisineType = [
    '台灣菜', '日本菜', '泰國菜', '港式', '中菜', '粵菜', '韓國菜', '亞洲菜', '意大利菜', '法國菜', '西餐',
    '中東菜', '地中海菜', '中南美菜', '多國菜'
]


var YuenLong = [
    '1523釗級廚房', '1987 Kitchen', 'Accro Coffee', 'Aello手調茶品', 'AquaBlue 伽藍生蠔', 'Beanlab 好豆製研究所',
    'BRO 3 FOOD', 'CoHee Studio', 'JaseLab Cookery', 'OneThird Coffee', 'Sora Cafe', 'Story Steak & Pasta', 'The Basic',
    '一素店 One Vegan Shop', '三多', '丼家和食', '亞玉冰室', '仨薑', '八百萬屋', '其奧 - 花生糖專門店', '勤記潮州食家',
    '古月聚台灣古早味美食', '嘆燒', '嘉兵衛KAHEE Japanese Restaurant', '大飯糖 Sweet Canteen', '小息時間 Chill Chew',
    '屏欣仔傾下計', '巴打小食 Food Brother', '彩aya', '悠 Leisure Cafe', '御麵', '旮旯 The Glock', '時時食',
    '有得餃 Ma Ma\'s Dumpling', '榴槤樂園 Durian Land', '水門泰式雞飯專門店', '法國小屋 Le Cafe Des Delices',
    '盛酌屋 Drinker House', '真台客', '神-火山石牛扒專門店', '老馮茶居', '豪記蔬果', '醋頭家 True Boss', '金糖滿屋 Golden Sweet House Dessert',
    '銘師傅潮州粉麵餐廳', '阿叔泰麵 ASOK Thai Noodles', '雞煲棧 Chicken Pot Hut', '香蕉仔 Banana Boy', '高哥一Cook',
    '魚一壽司', '麴町道場 Kojimachi Dojo', '麵屋．隱 Menya Kaku', '齊柏林熱狗店Zeppelin Hot Dog', '龍鳳店'
]

var TinShuiWai = [
    'Bello Dining Cafe', 'Bove', 'E.Tea茶星人', 'The Beast Feast', '冰山之國', '四川涼拌', '天天燒鵝皇', '御品味',
    '手作仔 Handmade Candies Room', '新北江麗江雲南米線', '森堡美食', '樂湖刀削麵', '櫻花樹下', '海南小廚川菜館',
    '漢堡佬 Rural Burgerism', '茶色生香', '萬有粉麵', '魚彩壽司及刺身專門店'
]

var SheungShui = [
    'ATMA', 'Homy Burger Cafe', '孖寶小館 Twins Bistro', '明記腸粉', '艾粒是叻I Love Snacks', '麵家山下 Menya Yamashita'
]

var Fanling = [
    'Bittersweet', 'Cafe Swan 咖啡灣', 'Cook House', 'Pezzi Bistro', 'T Cafe茶啡檔', 'What the Food Cafe',
    '大統領', '好滋味', '廣記粥店', '為食貓士多', '竹月亭 Taketsuki Pabirion', '闔府統請', '阿四車仔麵'
]

var Taipo = ['Beans荳子', 'Bulldog Hotdog', 'Homeland', 'Joe椰', 'Lecker\'s Kitchen', 'Oyster King 蠔王',
    'PARK Cafe', 'Pattern', 'TakEateasy X FirsTeǎ', '三多', '人民超市 People\'s Market', '八鯨料理', '加藤屋Katoya',
    '和拉麵', '多多車仔麵', '廣記粥店', '彩虹小食串燒專門店 Rainbow Covenant', '御千丼', '德川手握壽司專賣店',
    '撈一番', '暢和麵家', '泰國佬餐廳', '溏串小町', '滑嘟嘟', '牛一香港仔魚蛋粉專門店', '稻八日式火鍋炸物放題', '老馮茶居',
    '菓。紫龍', '賞茶', '豆腐花', 'Cafe Swan 咖啡灣'
]

var TuenMun = ['BYOB Coffee Roaster', 'Dear Sweets', 'E.Tea茶星人', 'FaFa Sweet', 'Fantasy Coffee',
    'Ken洋菓子工房 Ken Cake Factory', 'LC Tea', 'M&G Cakehouse', 'My Little Coffee', 'Popcorn Brother',
    'SoulGood Bar & Restarant', 'Sugar Ma Ma心太軟專門店', 'Taste Cafe & Dessert', 'tlcbbq_express',
    '串燒站', '仙桃居', '仨薑', '冰山一國', '加藤屋Katoya', '咖啡焢烘焙工作室', '嘆甜品', '威威美食', '安郴記',
    '寶島', '很得輝小食', '懞豬食品批發 MON CHU FOOD', '撈家', '智勝所小食店', '有料案內所 FuWa FuWa pancakes',
    '東喜茶 HEERETEA', '東屋台 Dan Yatai', '清山塾', '漁匠屋', '漢堡博士 Dr. Burger', '炻板燒', '盤子工房 By The Tray',
    '秋香 To Autumn', '聚CHILL', '聚福樓', '芝味屋', '花火洋食', '西麵 Westnoodle', '賞茶', '赤壽司刺身專門店',
    '金銘潮州粉麵 ', '銘師傅粥麵專家', '閨•家', '隱啡 Hidden Coffee & Roaster', '齊柏林熱狗店Zeppelin Hot Dog',
    '龍門冰室'
]

var TaiWai = ['友酒棧台式火鍋專門店', 'Dear Coffee & Bakery', '玖零後小食店 90s food shop', '風流居酒屋 FuRyu Izakaya',
    '媽咪雞蛋仔', '肆年八月米線專門店', '顯徑車仔麵', '美味軒燒味', '大飯糖 Sweet Canteen', '夏雪', '屋子空間',
    '屋子咖啡 Uchi Coffee', 'Four X Four'
]

var ShaTin = ['Cafe Koinonia', '仨薑', '賞茶', '18 Grams', 'Reactors Coffee', '山下菓子', '盛記盆菜&盛記麵家',
    '小甜將', '食神飲食文化', '清心齋', 'Beans荳子', '牧羊少年咖啡．慢遞館', 'KidsKiss Kingdom 親子主題餐廳',
    'Mimila'
]

var Fotan = [
    'GLOs Cafe by fooody伙食工業', '惠豐涼茶素食', '圓點工房 Canapes Room', 'Om Coffee N Holistic Lab',
    'Circle Bakery'
]

var ShekMun = ['蒸廬The Steam Hut', '覓茶活', '九份茶舍', '入麵 Entrance', '笠笠咖啡', 'Explorer Fusion Restaurant',
    '仨理圑 U3 grocery', '入素 Green Entrance', 'Supine', '阿四車仔麵', '上車車仔麵'
]

var MaOnShan = [
    '賞茶', '新東王正宗台灣牛肉麵', '味來喇沙專門店', 'Puzzle Dining & Cafe', '老爹茶居', 'All Day 我地',
    '屋子生活', 'Beans荳子'
]

var TsuenWan = ['光榮冰室', '迦南鍋', '巴巴站Baba\'s Station', '台茶小食', 'Cup Of...', '木衛二鑄茶所',
    '賞茶', '茶匠 Chashou', '茶半香初', '雪山咖啡館 Snow Cafe', 'Cafe Swan 咖啡灣', '留白 Blank Cafe',
    '叁叁咖啡工匠', 'Book B Kitchen Mealmeal', '小廚美食', '寶品Mayboshop', '團日式拉麵', '大丼家', '秘 Secret Chefs'
    , '豚道樂', '稻八日式火鍋炸物放題', '溢豐行花膠海味專門店', 'Seafood Great', '贊和豆品', '德發粥麵店', '德發粥品專家',
    '龍門冰室', '新記冰室', '孖寶車仔麵', 'Le Boule Chef', 'Ton\'s Pastry', 'ideas Dessert', '悦和醬園', '素食媽咪 Veggie Mami',
    '素悅軒', '天恩健康素食', 'Burger Land', 'Chroma', '王子廚房', 'Diff. cafe', 'TAP The Ale Project', '咖啡賞館Browny Cafe',
    'RETOLD coffee.tea.spirits', 'Return Coffee 362', '吾子果醬 Nggy Jam Jam', '轉角‧見 Kitchen Corner', '齊柏林熱狗店Zeppelin Hot Dog',
    'Beans荳子', 'Chroma', 'Aroma Dessert Cafe', 'Sogno Gelato', '森美餐廳', '越翠苑', '麥子啤酒', '美樂士多',
    '韓閣 Korean Loft Cafe', 'Chicken pocha', '公平點Fair Circle', '田嘢Tinyeah', '蘇媽.蘇媽 Semua Semua',
    '蝦麵店', '娘惹嫁到 Nyonya Coming'
]

var KwaiChung = ['龍川上海料理Long Chuan Shanghai Restaurant', 'VII Drip & Brew', 'Relax Coffee',
    '嘉寶漢堡Kabo Burger', '野菜咖喱事務所Curry Man', 'Jam Story果醬二三事', '新苑記粉麵茶室', '365小食部',
    'Oh! My Dog!', 'C for cake 私伙蛋糕', 'Cozy Cafe', 'Coffee Chemistry', '甘薯葉素食超市 Batata Greens',
    'Mars Wine Cellar'
]

var KwaiFong = ['繼光香香雞', '九份茶舍', '茶理史', '茶芝味', '丸·茶手作', '熊茶', '甜圓NaturalSweet',
    'Mexiroll墨西哥卷專門店', 'Waffle Corner', '味之樂', 'CHOK雞', '呦呦鹿鳴布丁燒', '問卷手卷專門店', '泰讚了',
    '吉壹野', '潮食閣Yummy Corner', '光榮美食', '合興隆', '牧羊少年咖啡'
]

var TseungKwanO = ['Beans Brekkie Room', '三木餅店', '大茶飯', '魚木日台美食', '賞茶', 'Coffee Art',
    '熊屋刺身料亭 SASHIMI KUMAYA', '隱居', '螢火蟲小食', '榕記車仔麵', '三才魚蛋火鍋食品店', '嚐糖', 'Sweet & Sour味之堂',
    '清心齋', 'Vortex American Snack Bar', '華記海鮮', 'Beans荳子', '牧羊少年咖啡', 'Chocolate Rain Forest',
    '#What The Food'
]

var SaiKung = ['小小串 SkewYou', 'Bakso 白鬚', 'N1 Coffee & Co.', 'Hush Hush Ice Cream Coffee',
    '柴太郎咖啡店Shiba Taro Café', 'Blacksmith Store', '蜜蜂仔仔 Jayden Bee', '西貢松記車仔麵 Chung Kee Noodle',
    '有利士多', '阿四糖水 Little Nat Desserts', 'Dot Taps', '一起果醬Let\'s Jam Bistro', 'Pan da Cafe', 'Little Cove Espresso',
    '三木餅店'
]

var Island = ['Corner 84', '南島書蟲 Bookworm cafe', '農舍 Green Cottage', 'Tai Ohhh 大噢', '渣哥一九九六',
    '金銘潮州粉麵', 'The Pink Pig', '到此一遊', '島中坊研', '開心食堂'
]

var KowloonCity = ['Gladys\' Estate Coffee', 'Rings Coffee', '嚐樂', '小方糖甜品', '慵懶生物Lazy Creatures',
    '泰金國', '漁吉海鮮丼專門店', '良辰吉時', '蟹仙海鮮蒸氣鍋', '黃珍珍泰國菜館'
]

var KowloonTong = ['Paper and Veggle', '賞茶', 'Black Sugar Coffee & Lifestyle', 'Top Blade Steak Lab',
    '丸·茶手作', '地道館車仔麵', '清玉'
]

var ToKwaWan = ['Ex Fullcup Bistro', 'Prime\'s Kitchen', 'Urban Space 都市空間', '大川滬', '小房子The Hut',
    '木槿韓國料理', '楚撚記大排檔', '甘露甜品', '肥媽小食店', '茶·原點Original Boba Tea', '開利小食', '食養 Wholesome',
    '點茶 Dim Tea'
]

var HungHom = ['Chacha Factory', 'Hidden Kitchen', '一豆花', '串噹噹', '丸·茶手作', '博多拉麵別天神',
    '小果籽', '拉麵天王Tenno Ramen', '時新漢堡飽', '歇腳亭Sharetea', '豚道樂', '龍門冰室'
]

var Jordan = ['Alternative Cafe', 'Cafe Revol', 'La Luz Coffee and Patisserie', 'MUM日常野菜料理 Mum veggie cafe',
    'Studio Caffeine', 'T4 清茶達人', 'Tony\'s Hell', '公平點Fair Circle', '李圓圓', '澳洲牛奶公司', '濃姐石磨腸粉',
    '無肉食 My Meat Run Buddy', '牛屋餐廳酒吧', '秘 Secret Chefs', '糖水雄', '紅伶飯店', '賞茶', '金撈老鴨湯刺身火鍋專門店'
]

var TaiKokTsui = ['Black Sugar Coffee & Lifestyle', 'Blendit by The Deli', 'Browny No.45', 'Craft coffee roasters',
    'Loft 7', 'Lost Stars Livehouse Bar & Eatery', 'Once You Go Craft', '二世祖Easy Joe', '小泰國',
    '御品千之味刺身壽司專門店', '木子甜品', '蔥仔越南包', '賞茶', '走肉·朋友', '車品品小食', '酒林', '金發麵包', '餃子店'
]

var PrinceEdward = ['Bound By Hillywood', 'Café Paradise', 'Hami Harmony', 'Impavid Fitness',
    'Jimmy\'s Coffee & Kitchen', 'Tea One 壹茶', 'Under Vacuum -慢煮工業', '兩姊妹涼皮有限公司',
    '包販子', '居廬晉家門炭燒工房', '新川美食', '東京街 Tokyo Street Limited', '東喜茶 HEERETEA',
    '潮州人Ciuzauese', '甘薯葉素食超市 Batata Greens', '芋圓圓', '茶理史', '賞茶', '青花亭', '飛龍咖啡'
]

var TsimShaTsui = ['18 Grams', 'Black Sugar Coffee & Lifestyle', 'Cat Garden', 'Cosmos Restaurant & Bar',
    'Courage Eighteen Specialty Coffee by PLAT', 'Hokahoka', 'HOOMAN By The Sea', 'Hygge bar', 'Just\'er Bar & Restaurant',
    'Layback Cafe & Bar', 'My Sweet Art HK', 'N1 Coffee & Co.', 'Oyster To Go', 'Rest Coffee Gin 唞唞.西九',
    'Séan Cafe', 'sensory ZERO 感味宮匠', 'Tea Express Bar By Jrink', 'Tipsy Tap', 'Urban Coffee Roaster',
    'Vesper', 'Weisley\'s Wardrobe Cafe Bar and Restaurant', 'Wine Peers', '一起果醬Let\'s Jam Bistro',
    '串酒里 Kebabeer', '九份茶舍', '光榮冰室', '六両三', '博多拉麵別天神', '只zi Cafe', '唇茶Tea Only', '嘉寶漢堡 Kabo Burger',
    '小糖鈕 Sweet Button', '小食糖', '小黑糖Baroness', '東京食堂', '梔子 Zi', '榴槤樂園 Durian Land', '沐白小農',
    '潮丸 Chiu Ball', '炎鳥羽', '焱丸水產', '燒魂一', '牧羊少年咖啡', '立濱 Sushi Tahama', '籽樂廚房 Sowergift Kitchen',
    '紅館 Private Corner', '綠野林．生．活．素餐廳 GreenWoods Raw Cafe', '美樂士多', '茶墨Tea Brush', '茶理史',
    '蜜庵本膳Mitsuan Honzen', '隨然有機玄米菜食料理', '麺処一家', '黑金堂', '龍門冰室'
]

var MongKok = ['9 3/4 cafe', '90s Lazy', 'A.T Field Cafe', 'Amour Corner', 'Angry Beer 怒啤',
    'Cafe Maidjikku Choco Pinky', 'Coffeezine', 'Cup Of...', 'Donut\'s Baba', 'Ice Puff', 'Joyful Dessert House',
    'Knockbox Coffee Company', 'Little Fresh and Bar', 'Live Cafe Rhythm', 'Lockeroom Dining',
    'Maid Planet', 'Morokok', 'My Little Coffee', 'Papillon帕比安紅茶書室', 'Rimi Café', 'Storerooms Cafe',
    'Urban Cafe', 'WOFT Tapas Bar & Restaurant', 'メイド喫茶A.T.Field Cafe', '一燒窰Ichi Shio Kama',
    '一生懸麵', '一鍋瘋粥底火鍋專門店', '丸·茶手作', '九份茶舍', '兄弟幫冰室。大排檔', '八福', '博多拉麵別天神',
    '合桃緣Walnut Dessert', '合發茶餐廳', '咖啡綠茶', '唇茶Tea Only', '嚐糖', '基隆茶餐廳', '基隆街五號 The Venue',
    '孖啡 Double Cafe', '安安燒 On On BBQ', '小念頭 Little Idea Cafe', '山下菓子', '平昌BBQ Pyeong Chang BBQ',
    '幸福堂', '康樂餐廳', '手卷駅', '日常料理 Mainchi', '日日蒸腸粉', '星嚼Starchew', '李圓圓', '果然 Fruit Master',
    '桔梗 Jie Genge', '棋吧 Odd Boardgame Bar and Cafe', '深宵食堂旺角店', '火鍋撚 Hot Pot Land', '為食仔海鮮火鍋專門店',
    '無肉食 My Meat Run Buddy', '申子居酒屋Shinko', '皇茶 Royaltea by Tea Circle', '神經餵飼Feed Your Nerves',
    '糖果工房', '美味故事', '老二花廳', '良亭雅敍', '花果山', '芳華絕代 Fong Waa Parlour', '茶滿滿 Moon Moon Cha',
    '茶理史', '貓店街 Cafe de Kitten', '贊和豆品', '辛安東元祖奶奶雞', '迷客夏Milksha', '開心餅店 Happy Roller',
    '阿木台灣麵', '陸陸雞煲火鍋66 Hot Pot', '雞蛋屋', '雲上舞咖啡漢堡', '點鍋'
]

var YauMaTei = ['MUM’s NOT HOME媽不在家', 'Raw Fruit 和富水果', 'Red Idea 紅煮意', '一豆花', '椰子日記',
    '金銘潮州粉麵'
]

var ShamShuiPo = ['Cafe Sausalito', 'Cafe Sausalito @ Campfire Home', 'Café Sausalito at SCAD',
    'COFFEE matters', 'Dog99 Coffee', 'HANA Soft Creamハナソフトクリーム', 'Openground', 'Tea Hub',
    'Years素年', '加藤屋Katoya', '吉寸串燒', '喇沙專門店', '圓圓Double Bubble', '媽咪雞蛋仔', '幸茶舍',
    '康瑞甜品', '得利正斗美食', '御品千之味刺身壽司專門店', '新記小食', '星嚼Starchew', '梅貴緣', '標記樂園潮州粉麵餐廳',
    '水見地瓜球', '水門泰式雞飯專門店', '泰基隆 Thai Ki Lung', '深深甜品', '混醬坊 Mixup', '添福小食', '清心齋',
    '清茶社', '灃美小食', '營業部', '牧羊少年咖啡', '生隆餅家', '番茄師兄', '第一郡Q1', '美樂士多', '蘇媽.蘇媽 Semua Semua',
    '金芝龍', '阿一豆花', '饗車仔麵'
]

var ShekKipMei = ['No Milkshake No Life', 'TOOLSS', '慢煮即食滑滑雞胸', '攪攪滑滑', '琉金穗月Cafe Golden'
]

var MeiFoo = ['CAVE Beer Point精釀啤酒專門店', 'E.Tea茶星人', 'CHOO CHOO', 'Food Garden', 'Food Monster美食速遞',
    'Hero\'s Friday', 'HOLLY BROWN Coffee Roasters', 'Little Break Coffee and Kitchen',
    'One Tenth Coffee', 'THAI-GER', '叁拾士多', '台站', '李圓圓', '東喜茶 HEERETEA', '王孖記果子', '程班長台灣美食',
    '阿土伯鹽水雞'
]

var CheungShaWan = ['Bottle Shock Cellar', 'Coffee Question', 'Fast Taste', 'Healing go yard 治癒羔羊',
    'Lucy Coffee n Food', 'Neighbor', 'Second bite', 'Try my Bread', '串爆里居酒屋 Explosion Skewer',
    '人民超市 People\'s Market', '仨薑', '元洲牛肉麵Bryan L Burger布萊恩.L食堂', '八川壽司',
    '四喜麵包西餅', '火滾肥牛海鮮火鍋專門店', '甜一刻 Sweet Moment', '甜記餃子', '白蘭樹下Perfume Trees Gin',
    '純粹 That’s it Vegan', '茶家宅養生茶 Health Tea Family', '趣意廚DK Pizza Cafe', '鰹烏冬'
]

var KwunTong = ['bakerie.c', 'Bánh Mì Kitchen', 'CallMeChef', 'Cling Juicery', 'Coffee Art', 'Coffee Slave',
    'Ever Green 嚐綠', 'Glory Coffee', 'Holam Bakery', 'HOW', 'Levin Wine LTD', 'Librarian', 'Manna。嗎哪',
    'Myflavorcoffee	', 'Nutmad', 'One Little Room', 'Parc古道具公園', 'QualiChef優廚食品', 'Saraton Patisserie',
    'Sinbad Coffee Roasters', 'T4 清茶達人', 'The Hunt Coffee & Roastery', 'The Vege Lab', '五餅二魚', '侘寂珈琲 WabiSabi Coffee',
    '六両三.台灣食堂', '叁拾士多', '味山田', '嚐賞', '土城日本料理', '在家 Dining at Home', '大湯家燉湯專門店	',
    '小伊甸Little Eden', '小時光 Scool', '峯日式料理', '廿一由八 Twenty One From Eight', '手日土咖啡室 Pinch Cafe',
    '梅子貓舍', '橫濱水手', '權哥火煱', '珠記冰室', '甜蜜故事', '米拉', '素街 Veggie Guy', '素食譜The Recipe',
    '船長泰國船麵工房', '豪隍點心工房', '釣魚船屋', '阿土伯鹽水雞', '阿比手造Abey Handmade', '韓家韓國料理 Han Ga Korean Restaurant',
    '鰹烏冬', '鳳鳴石磨腸粉'
]

var KowloonBay = ['35座車仔麵', 'LUNGO', 'Open Meal', 'Sipid Concept愉饌', 'The Espresso Room',
    '光榮冰室', '光榮美食', '大門食堂', '茶是故香.濃 T FOR THIRST', '語菓 Fortune Teller', '賞茶',
    '釜之魂', '阿土伯鹽水雞'
]

var LamTin = ['Heroes Beer Co', 'Sweet & Sour味之堂', '三木餅店', '芝C Sushi'
]

var NgauTauKok = ['29 Coffee Co', 'AGCoffee', 'Space Cafe & Kitchen', '一生懸麵', '合記飯店', '喵盒子MeowBox Cafe	',
    '膳心小館 Agape Garden', '茶理史'
]

var DiamondHill = ['山下菓子', '熨烤達人', '賞茶', '想甜嚐甜 Sweet Dreamer Dessert', '林記水果', '加藤屋Katoya',
    '孖寶薄餅屋', '小食•棠', '嵐屋ARASHI'
]

var SanPoKong = ['三和茶餐廳', 'Ampersand', 'Nuttea', 'PremiOne淳一品', 'Valérie', '享樂烘焙 LY Bakery',
    '友利坊', '嚐糖', '地道館車仔麵', '常溫餅店', '窩子', '肥仔銘茶餐廳', '蟹仙海鮮蒸氣鍋', '金寶冰廳',
    '陳師傅點心專門店', '鳳鳴石磨腸粉'
]

var SheungWan = ['18 GRAMS, COFFEE ROASTERY LAB', '3rd Space', 'Bad Ass Coffee', 'Barista Jam', 'Café Life Patisserie & Cafe',
    'Coffee & Laundry', 'CRAFTISSIMO', 'FabCafe', 'Halfway Coffee半路咖啡', 'LLB Bistro', 'Ohms cafe & bar順逆珈琲酒館',
    'Origin Roastery', 'Pizzeria Jacomax', 'Teakha茶家', 'The Corner Coffee', 'Triple King',
    'Viet Dating', 'Why 50', 'WINK', '水門泰式雞飯專門店', '窩心糖水站(泰之味)', '茶咖宅Congteakafe',
    '貘記Makee', '長龍食府', '麵尊'
]

var Central = ['Al Forno Pizzeria', 'Around Wellington', 'Avengers KITCHEN & BAR復仇者',
    'Banh Mi Kitchen', 'Bear\'s lab', 'Club 71', 'Common Ground', 'Cup of Joe by coffietics',
    'Ginger Whisky Bar', 'Got Beef', 'Hakawa Chocolate', 'HK Brewcraft', 'HOLLY BROWN Coffee Roasters',
    'Igloo Dessert Bar', 'Interval Coffee Bar', 'KALE', 'Kinship', 'Life?', 'Liz Coffee', 'Phoenix Sweets',
    'POP Vegan', 'S2 Kitchen', 'SHADY ACRES', 'Sogno Cafe', 'Super Bock', 'Trois Cafe', 'Watering Hole',
    'What to Eat吃什麼', 'Wingman', '三一餃子 Trinity Dumpling', '博多拉麵別天神', '喵一下 Garden Meow',
    '孖人廚房Twin\'s Kitchen', '慢煮兩餐', '火鍋撚 Hot Pot Land', '百里居 Thyme', '築地日本料理 (中環)',
    '金禾茶餐廳', 'Filters Lane', 'Tea Saloon by AnotherFineDay', '東方茶餐廳', '糖痴豆', '輝煌快餐店 Glorious Fast Food'
    , 'Angry Beer 怒啤', 'Just Shot Coffee', '仨薑', '森川弁当', '美樂小食', '龍門快餐店'
]

var KennedyTown = ['Beeger', 'Fish & Chick', '半糖主義', '想甜嚐甜 Sweet Dreamer Dessert', '海鮮角樂 Seafood Corner',
    '煮回家', '牧居酒屋', '花斑茶社 A Boutea', '萬家廚房', '齊柏林熱狗店 Zeppelin Hot Dog', '火鍋撚 Hot Pot Land'
]

var SaiWan = ['After Taste Coffee', 'Good Good', 'JMT Coffee', 'All Blue Coffee Promenade',
    'Artisan Butcher', 'Artisan Garden Cafe', 'BakeOut 手作麵包三文治', 'Bingaz Street Food',
    'C+ Burger', 'Cafe Talay', 'Coffee by ZION', 'Crispy Bistro', 'Electric Ave', 'Fish & Chick',
    'Gelat Etc', 'Happiness Single Coffee 幸福單品咖啡', 'JOMO Coffee & Cakes', 'LOCOFAMA',
    'My Sushi 神川日本料理', 'No Milkshake No Life', 'Opendoor Cafe + Courtyard', 'Pop Street', 'The Coffee Moment',
    'Tuckshop by Social Club', 'Usweet', '天天烘焙', '宜記甜品', '彩aya', '暢和麵家', '活一鮮', '澄居串燒料理'
    , '美味聯盟 Delicious Union', '茶咖里Congteakafe', '茶舍 Tea Cottage', '華爾登麵包餅店', '金祥排骨麵',
    '開檯食飯'
]

var PokFuLam = ['Sprouts in a Jar', 'Cafe Whale', '麗絲快餐店', 'AP Coffee', '三姐妹', '越大哥越式小廚',
    'sensory ZERO 感味宮匠', '糧心製作 Goodwill Production'
]

var NorthPoint = ['Brew Note Coffee Roaster', 'Cafe Gen 現', 'GOTTHARD BASE Restaurant & Lounge',
    'Villa Villa Cafe & Bar', '三葉屋', '人人和平小飯店 RenRen Heping Restaurant', '北豆 The Beans Bar & Grill	',
    '博多拉麵別天神', '古月', '大澳德發', '天鷲拉麵', '太平飯店Tai Ping Kitchen', '姨婆瑪麗', '活一鮮',
    '無肉食 My Meat Run Buddy', '素食主意Sooo Vegi', '酒盜', '閨•家', '雪瀛手作 Setsuei Tezukuri '
]

var Tinhau = ['Take Your Time輕時光', '嚐喜大不同特色餐廳小廚', '榴槤樂園 Durian Land', '焰手卷',
    '玩具屋', '第一郡Q1', '陪著你走甜品', '頭啖湯', '黑麥', '黑麥到會'
]

var TaiKoo = ['sensory ZERO 感味宮匠', '賞茶', '日常小館 Bistro Quotidien	', 'Café Paradise'
]

var ChaiWan = ['Feeder飼家', 'Kougehof Dessert咕咕洛夫甜品', 'Springtime', '小重慶', '花膠總管', '響茶'
]

var FortressHill = ['Coffee+Space', 'PRISMA Coffee Co.', 'Tea Elements 茶一', '公平點Fair Circle',
    '表哥小廚', '龍門冰室'
]

var ShauKeiWan = ['SKW Pizza Pie 筲箕灣脆意雞	', 'The Little Bakery', '上咖啡 Captain Coffee',
    '低調高手大街小食', '來來小吃店', '壹碗壹碟', '大丼家', '安安燒 On On BBQ', '潮米石磨腸粉', '激安燒肉工房',
    '煮打菜打冷小菜館', '珍意泰國菜館', '糖品', '脆意雞', '茶色生香', '迫迫廚 Big Big  Kitchen', '金城餐廳', '黃金雞'
]

var SaiWanHo = ['Cs\' Bakery', '和記餐廳', '文興記', '明記糖水', '甜甜屋Sweetie house', '醍醐茶寮 Daigo Saryo'
    , '魚蛋佬', '齊柏林熱狗店Zeppelin Hot Dog'
]

var QuarryBay = ['Homing People', '兄弟小食', '小娘惹 Little NyoNya', '師父飯堂', '慕名小店'
    , '樂林小鍋米線', '蝦麵店', '阿土伯鹽水雞', '魚願以嚐'
]

var TaiHang = ['All in Burger & Bar', 'Dough Kitchen', 'New York Club'
    , 'Pheromone - steak house', 'Ramen Nagi 凪拉麵', 'Second Draft', 'Second Sip by Studio Caffeine	'
    , 'Tomo the bar', '八寸料亭はつすん'
]

var WanChai = [, '18 Grams, Brim 28', '1963木十豆寸', 'ABC Cake House',
    'Burger Home', 'Café Relay', 'Casky', 'Cheeky Pasta', 'Jouer', 'My Little Coffee',
    'sensory ZERO 感味宮匠', 'The Corner Coffee', 'Tomato Story', 'ULURU.HK',
    '原汁原味', '味角DeliCorner', '和記餐廳', '威記美食', '富記麵家', '幸福週末', '後街牛扒 Backstreet Steak',
    '文華饕記', '新嘉美茶餐廳', '新景園咖喱小廚', '深燒酒Midnight Wildfire', '茶理史', '蝦麵店',
    '雄記美食', '麵匠風龍'
]

var CausewayBay = ['Reaction Coffee Roasters', '18 Grams', 'Appendix Coffee & Bar', 'Artista Perfetto',
    'Cafe Corridor', 'Cafe R&C', 'Cafe Zense', 'Flat 61 Lougue', 'GAC Home Cafe', 'Involtini Italian cuisine',
    'Little Vegas', 'M2 Cafe', 'Mamaday Cafe', 'Mother of Pizzas', 'Mr. & Mrs. Cat & Dessert Cafe',
    'No Boundary HK', 'Notte', 'Pandan leaf Indonesian Food班蘭葉印尼美食', 'Peek-A-Poke', 'Rabbitland Cafe',
    'Ruggers', 'The Espresso Room', 'Top Blade Steak Lab', 'Urban Coffee Roaster', 'Yolo Cafe',
    '三川居酒屋', '三才魚蛋粉麵', '十下火鍋 SUPPA', '博多拉麵別天神', '咖啡熱Coffever', '囍筷', '山旮旯San Ka La',
    '幸福週末', '心之食堂', '心燒食堂', '星嚼Starchew', '木衛二鑄茶所', '渣哥一九九六', '瀛豐放題料理專門店',
    '為食龍', '肥後屋', '蝦麵店', '迷客夏Milksha', '阿貓地攤與貓仙島 Cat store', '鳳鳴石磨腸粉', '麵尊', '龍門冰室'
]


/*function*/
/*add by TB*/

// Map restaurants array to Name
const RestaurantsMap = {
    CuisineType: CuisineType,
    YuenLong: YuenLong,
    TinShuiWai: TinShuiWai,
    SheungShui: SheungShui,
    Fanling: Fanling,
    Taipo: Taipo,
    TuenMun: TuenMun,
    TaiWai: TaiWai,
    ShaTin: ShaTin,
    Fotan: Fotan,
    ShekMun: ShekMun,
    MaOnShan: MaOnShan,
    TsuenWan: TsuenWan,
    KwaiChung: KwaiChung,
    KwaiFong: KwaiFong,
    TseungKwanO: TseungKwanO,
    SaiKung: SaiKung,
    Island: Island,
    KowloonCity: KowloonCity,
    KowloonTong: KowloonTong,
    ToKwaWan: ToKwaWan,
    HungHom: HungHom,
    Jordan: Jordan,
    TaiKokTsui: TaiKokTsui,
    PrinceEdward: PrinceEdward,
    TsimShaTsui: TsimShaTsui,
    MongKok: MongKok,
    YauMaTei: YauMaTei,
    ShamShuiPo: ShamShuiPo,
    ShekKipMei: ShekKipMei,
    MeiFoo: MeiFoo,
    CheungShaWan: CheungShaWan,
    KwunTong: KwunTong,
    KowloonBay: KowloonBay,
    LamTin: LamTin,
    NgauTauKok: NgauTauKok,
    DiamondHill: DiamondHill,
    SanPoKong: SanPoKong,
    SheungWan: SheungWan,
    Central: Central,
    KennedyTown: KennedyTown,
    SaiWan: SaiWan,
    PokFuLam: PokFuLam,
    NorthPoint: NorthPoint,
    Tinhau: Tinhau,
    TaiKoo: TaiKoo,
    ChaiWan: ChaiWan,
    FortressHill: FortressHill,
    ShauKeiWan: ShauKeiWan,
    SaiWanHo: SaiWanHo,
    QuarryBay: QuarryBay,
    TaiHang: TaiHang,
    WanChai: WanChai,
    CausewayBay: CausewayBay,
}


/*useless
function newCuisine() {
    var selectedRestaurants = RestaurantsMap.CuisineType
   
    var randomIndex = Math.floor(Math.random() * selectedRestaurants.length)

    document.getElementById('cuisineDisplay').innerHTML = selectedRestaurants[randomIndex]
    
}

*/

/*done version with console
// new function
function newCuisine(element) {

    //console.log("(what is THIS?) selected element🔥:", element) // e.g. <input onclick="handleClick(this);" id="Fotan" type="radio" name="place" value="Fotan">

    //console.log("the value in the selected element🔥:", element.value) // e.g. Fotan

    var selectedRestaurants = RestaurantsMap[element.value]

    //console.log("the array you want🔥:", selectedRestaurants)    // e.g.  ["GLOs Cafe by fooody伙食工業", "惠豐涼茶素食", "圓點工房 Canapes Room", "Om Coffee N Holistic Lab", "Circle Bakery"]

    var randomIndex = Math.floor(Math.random() * selectedRestaurants.length)

    document.getElementById('cuisineDisplay').innerHTML = selectedRestaurants[randomIndex]

  /* var link = 'https://www.google.com/search?q=' + selectedRestaurants[randomIndex];
    window.open(link);
    */


//done version without console but google SEO
/*
function newCuisine(element) {

var selectedRestaurants = RestaurantsMap[element.value] //the specific place ge value

    var randomIndex = Math.floor(Math.random() * selectedRestaurants.length) //choose random restaurant from the list

    document.getElementById('cuisineDisplay').innerHTML = selectedRestaurants[randomIndex] //show restaurant 

var link = 'https://www.google.com/search?q=' + selectedRestaurants[randomIndex];
    window.open(link);
};
*/

//try to use button instead of directly open
/*
function genURL(){

var link = 'https://www.google.com/search?q=' + selectedRestaurants[randomIndex];
    window.open(link);

}
*/

//try with openrice 
function newCuisine(element) {

var selectedRestaurants = RestaurantsMap[element.value] //the specific place ge value

    var randomIndex = Math.floor(Math.random() * selectedRestaurants.length) //choose random restaurant from the list

    document.getElementById('cuisineDisplay').innerHTML = selectedRestaurants[randomIndex] //show restaurant 

var link = 'https://www.google.com/search?q=' +"openrice "+ selectedRestaurants[randomIndex];
    window.open(link);
};