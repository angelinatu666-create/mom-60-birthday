// ===== 妈妈60大寿看板数据 · 只改这个文件 =====
// status 取值: "confirmed"(已定) | "pending"(待定) | "gap"(缺口/待办)
// 不要编造数字：没定的一律留 null / "待定"，让缺口可见。

window.BOARD = {
  meta: {
    title: "妈妈60大寿生日宴会",
    subtitle: "周六 10月17日 统筹看板",
    date: "2026年10月17日（周六）",
    owner: "我",
    hero: "assets/render.jpg",
    heroCaption: "现场效果图 · 浅紫仙鹤主题（背板 / 花艺 / 气球 / 灯光）"
  },

  // ---------- 顶部人数速览（手填，来自已统计人数） ----------
  headcount: {
    friLunch: 20,   // 周五中午
    friDinner: 25,  // 周五晚上
    satLunch: 36,   // 周六中午
    satDinner: 28   // 周六晚上
  },

  // ---------- 迎接客人 · 各批到达与人数 ----------
  // status: confirmed(已定) | pending(待定)
  guestGroups: [
    { name: "二叔开车", count: 5, members: ["二叔","五叔","五娘","三娘","四娘"],
      arrive: "周六中午 / 周六晚上", status: "confirmed", note: "" },
    { name: "大舅一行", count: 4, members: ["大舅","杨华","汪丽","廖三"],
      arrive: "周五中午起 / 全时段", status: "confirmed", note: "" },
    { name: "飞机", count: 7, members: ["冯小刚","莎莎","孟君孃孃","大姑爷","二娘","涂径","曹三"],
      arrive: "周五早上 8 点多到", status: "confirmed", note: "直接坐地铁，到【阳光地铁站】接" },
    { name: "我伯父", count: 5, members: ["大伯","大伯娘","小姑","大姑","老爸"],
      arrive: "周六中午", status: "confirmed", note: "含老爸" },
    { name: "王娟", count: 2, members: ["王娟等2人"],
      arrive: "周六中午", status: "confirmed", note: "" },
    { name: "罗平", count: 2, members: ["罗平等2人"],
      arrive: "周六中午", status: "confirmed", note: "" },
    { name: "俊红", count: 1, members: ["俊红"],
      arrive: "周六中午 / 周六晚上", status: "confirmed", note: "住宿已安排：十里天池" },
    { name: "二姨妈", count: 1, members: ["二姨妈（朱二姐）"],
      arrive: "周五早上", status: "confirmed", note: "需到【火车站】接" },
    { name: "家里已有", count: 9, members: ["家中常驻9人"],
      arrive: "全时段", status: "confirmed", note: "周五至周六每天均计" }
  ],

  // ---------- 各餐次人数构成（用于核对） ----------
  meals: [
    { day: "周五", meal: "中午", total: 20, parts: "飞机7 + 大舅4 + 家里9", note: "用餐地点：暂定家里" },
    { day: "周五", meal: "晚上", total: 25, parts: "飞机7 + 大舅4 + 家里9 + 二叔车5", note: "用餐地点：暂定家里" },
    { day: "周六", meal: "中午", total: 36, parts: "二叔车5 + 大舅4 + 飞机7 + 伯父5 + 王娟2 + 罗平2 + 俊红1 + 二姨妈1 + 家里9", note: "龙溪谷现代农庄 · 用车7辆" },
    { day: "周六", meal: "晚上", total: 28, parts: "二叔车5 + 大舅4 + 飞机7 + 老爸1 + 俊红1 + 二姨妈1 + 家里9", note: "含浦集市" }
  ],

  // ---------- 住宿安排 ----------
  hotels: [
    { hotel: "橘籽酒店", rooms: 6, people: ["二叔","二娘","涂径","曹三","孟君孃孃","姑爷","冯小刚","莎莎","五叔","五娘","汪丽","汪丽老公"],
      status: "confirmed", note: "共6间" },
    { hotel: "十里天池", rooms: 4, people: ["杨华","三娘","四娘","孟菊嬢嬢","二姨妈","霞升爸妈","俊红"],
      status: "confirmed", note: "含俊红；房间数需再核对" },
    { hotel: "家里", rooms: null, people: ["大舅（沙发）","二姨娘（上铺）"],
      status: "confirmed", note: "大舅睡沙发；二姨娘睡上铺" }
  ],

  // ---------- 餐饮 / 菜品 ----------
  catering: [
    { item: "周六中午 桌餐", detail: "龙溪谷现代农庄 · 813元 × 3桌", cost: 2439, status: "confirmed", by: "我" },
    { item: "麻将台费", detail: "100元", cost: 100, status: "confirmed", by: "我" },
    { item: "茶水米饭", detail: "2元 × 30", cost: 60, status: "confirmed", by: "我" },
    { item: "周六晚上 含浦集市", detail: "含浦集市 · 10-12人餐套餐 771元 × 3桌", cost: 2313, status: "confirmed", by: "我" }
  ],

  // ---------- 周五菜单（在家用餐·暂定） ----------
  satLunchMenu: {
    venue: "龙溪谷现代农庄",
    tables: 3,
    price: 813,
    formImg: "assets/menu-olongxi.jpg",
    dishes: ["泉水活鱼","黄焖鳝鱼","爆炒田鸡","老姜炒鸡","铁板鱿鱼须","砂锅鹿茸菌","大盆花菜","红菜苔","干锅牛腩","梅菜扣肉","蒸蛋","凉拌木耳","八宝鸭","豆腐"]
  },

  // ---------- 周五菜单 ----------
  friLunchMenu: {
    venue: "家里（暂定）",
    note: "周五中午",
    dishes: ["黑山羊炖萝卜","基围虾","柠檬鸡爪","卤菜（猪耳朵、肚子、芯）","擂辣椒皮蛋","炒猪肉","蔬菜","芹菜瘦肉"]
  },
  friDinnerMenu: {
    venue: "家里（暂定）",
    note: "周五晚上",
    dishes: ["黄鸭叫","霸王别姬","大闸蟹","黑山羊炖萝卜","基围虾","柠檬鸡爪","卤菜（猪耳朵、肚子、芯）","小炒黄牛肉","蔬菜"]
  },

  // ---------- 周六晚上菜单（含浦集市套餐） ----------
  satDinnerMenu: {
    venue: "含浦集市",
    tables: 3,
    price: 771,
    formImg: "assets/menu-hanpu.jpg",
    package: "10-12人餐套餐",
    dishes: ["四味迎宾：香辣鱼丁 / 擂辣椒皮蛋 / 美极小云耳 / 爽脆萝卜",
             "双味大明虾","黄焖260天土鸡","虎皮香猪肉","秘制生态甲鱼",
             "清蒸多宝鱼（或酱椒蒸）","长寿豆炖鲜猪肚汤","葱爆黄牛肉","土蒜自家腊猪脸",
             "香锅大盆牛蛙","蒜香薯条排骨","海皇干捞粉丝","清炒应季时蔬",
             "精美手工点心","绿叶水果拼盘","米饭 · 茶水"]
  },

  // ---------- 交通 ----------
  transport: [
    { item: "周六中午用餐出行", detail: "车7辆，载36人", status: "confirmed", by: "二叔车 + 大舅车 + 其余" },
    { item: "周五火车站接站", detail: "接二姨妈1人", status: "confirmed", by: "待定" },
    { item: "周五阳光地铁站接机", detail: "接飞机一行7人（早上8点多到，坐地铁）", status: "confirmed", by: "待定" }
  ],

  // ---------- 周六中午接客/用车明细（按座位排） ----------
  satLunchPickup: {
    totalCars: 7,
    totalPeople: 36,
    lines: [
      { car: "二叔开车", n: 5, who: "二叔、五叔、五娘、三娘、四娘" },
      { car: "大舅车",  n: 4, who: "大舅、杨华、汪丽、廖三" },
      { car: "飞机",    n: 7, who: "冯小刚、莎莎、孟君孃孃、大姑爷、二娘、涂径、曹三" },
      { car: "伯父",    n: 5, who: "大伯、大伯娘、小姑、大姑、老爸" },
      { car: "王娟",    n: 2, who: "王娟等2人" },
      { car: "罗平",    n: 2, who: "罗平等2人" },
      { car: "俊红",    n: 1, who: "俊红" },
      { car: "二姨妈",  n: 1, who: "二姨妈（朱二姐）" },
      { car: "家里已有", n: 9, who: "家中常驻9人" }
    ],
    note: "共 7 辆车，载 36 人"
  },

  // ---------- 周六当天现场安排（待办） ----------
  onsite: [
    { item: "背景影片播放", status: "gap", by: "", note: "待定责任人 + 影片素材" },
    { item: "现场主持和装饰", status: "gap", by: "", note: "主持人、装饰方案均未定" },
    { item: "蛋糕预定", status: "gap", by: "", note: "未预定，需尽快下单" },
    { item: "拍照", status: "gap", by: "", note: "待定摄影师/责任人" }
  ],

  // ---------- 财务 ----------
  // 支出只填 unit(单价) 和 qty(数量)，页面自动算 unit*qty。unit:null → 显示「单价待补」。
  finance: {
    currency: "CNY",
    budget: null,          // 总预算未提供
    spent: [
      { item: "周六中午 桌餐", unit: 813, qty: 3, cur: "CNY" },
      { item: "麻将台费",      unit: 100, qty: 1, cur: "CNY" },
      { item: "茶水米饭",      unit: 2,   qty: 30, cur: "CNY" },
      { item: "住宿费",        unit: 85,  qty: 12, cur: "CNY" },
      { item: "周六晚上 含浦集市", unit: 771, qty: 3, cur: "CNY", note: "10-12人餐套餐" }
    ]
  }
};
