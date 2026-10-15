// ===== 妈妈60大寿看板数据 · 只改这个文件 =====
// status 取值: "confirmed"(已定) | "pending"(待定) | "gap"(缺口/待办)
// 不要编造数字：没定的一律留 null / "待定"，让缺口可见。

window.BOARD = {
  meta: {
    title: "妈妈60大寿生日宴会",
    subtitle: "周六 10月17日 统筹看板",
    date: "2026年10月17日（周六）",
    owner: "我"
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
    { name: "大舅一行", count: 4, members: ["大舅等4人"],
      arrive: "周五中午起 / 全时段", status: "confirmed", note: "" },
    { name: "飞机", count: 7, members: ["冯小刚","莎莎","孟君孃孃","大姑爷","二娘","涂径","曹三"],
      arrive: "周五中午 / 周六中午", status: "confirmed", note: "周五中午即到" },
    { name: "我伯父", count: 5, members: ["伯父一行5人"],
      arrive: "周六中午", status: "confirmed", note: "" },
    { name: "王娟", count: 2, members: ["王娟等2人"],
      arrive: "周六中午", status: "confirmed", note: "" },
    { name: "罗平", count: 2, members: ["罗平等2人"],
      arrive: "周六中午", status: "confirmed", note: "" },
    { name: "俊红", count: 1, members: ["俊红"],
      arrive: "周六中午 / 周六晚上", status: "confirmed", note: "住宿是否安排？" },
    { name: "二姨妈", count: 1, members: ["二姨妈（朱二姐）"],
      arrive: "周六中午 / 周六晚上", status: "confirmed", note: "" },
    { name: "老爸", count: 1, members: ["老爸"],
      arrive: "周六晚上", status: "confirmed", note: "仅晚上计入" },
    { name: "家里已有", count: 9, members: ["家中常驻9人"],
      arrive: "全时段", status: "confirmed", note: "周五至周六每天均计" }
  ],

  // ---------- 各餐次人数构成（用于核对） ----------
  meals: [
    { day: "周五", meal: "中午", total: 20, parts: "飞机7 + 大舅4 + 家里9", note: "" },
    { day: "周五", meal: "晚上", total: 25, parts: "飞机7 + 大舅4 + 家里9 + 二叔车5", note: "" },
    { day: "周六", meal: "中午", total: 36, parts: "二叔车5 + 大舅4 + 飞机7 + 伯父5 + 王娟2 + 罗平2 + 俊红1 + 二姨妈1 + 家里9", note: "用车5辆" },
    { day: "周六", meal: "晚上", total: 28, parts: "二叔车5 + 大舅4 + 飞机7 + 老爸1 + 俊红1 + 二姨妈1 + 家里9", note: "含浦集市" }
  ],

  // ---------- 住宿安排 ----------
  hotels: [
    { hotel: "橘籽酒店", rooms: 6, people: ["二叔","二娘","涂径","曹三","孟君孃孃","姑爷","冯小刚","莎莎","五叔","五娘","汪丽","汪丽老公"],
      status: "confirmed", note: "共6间" },
    { hotel: "十里天池", rooms: 4, people: ["三娘","四娘","孟菊嬢嬢","大舅等4人","二姨妈","霞升爸妈","俊红?"],
      status: "pending", note: "俊红是否入住待定，房间数需再核对" },
    { hotel: "家里", rooms: null, people: ["其余人员"],
      status: "gap", note: "住宿人数待定" }
  ],

  // ---------- 餐饮 / 菜品 ----------
  catering: [
    { item: "周六中午 桌餐", detail: "813元 × 3桌", cost: 2439, status: "confirmed", by: "我" },
    { item: "麻将台费", detail: "100元", cost: 100, status: "confirmed", by: "我" },
    { item: "茶水米饭", detail: "2元 × 30", cost: 60, status: "confirmed", by: "我" },
    { item: "周六晚上 含浦集市", detail: "已预约，菜品待定", cost: null, status: "pending", by: "我" }
  ],

  // ---------- 交通 ----------
  transport: [
    { item: "周六中午用餐出行", detail: "车5辆，载36人", status: "confirmed", by: "二叔车 + 大舅车 + 其余" },
    { item: "各批接送", detail: "接机7人、自驾接送", status: "pending", by: "" }
  ],

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
      { item: "周六晚上 含浦集市", unit: null, qty: 1, cur: "CNY", note: "菜品待定，金额未知" }
    ]
  }
};
