export type Writing = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO or YYYY-MM-DD
  tag: string;          // 👈 新增
  cover: string; 
  jellyfishOnly?: boolean;
};

export const writings: Writing[] = [
  {
    slug: "january",
    title: "一月札记",
    excerpt:
      "一会再写",
    date: "2026-1-13",
    jellyfishOnly: false,
    tag: 'MumbleBee',
    cover: "/writing/january.png",
  },
  {
    slug: "to-the-east",
    title: "一路东行",
    excerpt:
      "Journey to the east.",
    date: "2025-11-24",
    jellyfishOnly: false,
    tag: 'MumbleBee',
    cover: "/writing/to-the-east.png",
  },
  {
    slug: "dui-dui-zi",
    title: "对对子",
    excerpt:
      "Ladies and gentlemen, we are floating in space.",
    date: "2025-11-26",
    jellyfishOnly: true,
    tag: 'Fragrance',
    cover: "/writing/dui-dui-zi.png",
  },
  {
    slug: "its-all-about-the-smell",
    title: "该是无花果香气",
    excerpt:
      "It's all about the smell",
    date: "2025-11-9",
    jellyfishOnly: false,
    tag: 'Fragrance',
    cover: "/writing/smell.png",
  },
  {
    slug: "happy-24-to-me",
    title: "冬令时下你与我",
    excerpt:
      "When I am after 24.",
    date: "2025-10-27",
    jellyfishOnly: false,
    tag: 'WhatADay',
    cover: "/writing/happy-24-to-me.png",
  },
  {
    slug: "jumping-into-the-lake",
    title: "湖水",
    excerpt:
      "What to wear in a lake.",
    date: "2024-10-25",
    jellyfishOnly: true,
    tag: 'Fragrance',
    cover: "/writing/jumping-into-the-lake.png",
  },
  {
    slug: "a-lost-scarf",
    title: "一匹围巾",
    excerpt:
      "A lost scarf of mine.",
    date: "2024-10-18",
    jellyfishOnly: false,
    tag: 'MumbleBee',
    cover: "/writing/a-lost-scarf.png",
  },
  {
    slug: "the-secret-den",
    title: "秘密小屋的秘密",
    excerpt:
      "Such spaces mediate between children’s inner worlds and external reality.",
    date: "2024-9-17",
    jellyfishOnly: false,
    tag: 'Fragrance',
    cover: "/writing/the-secret-den.png",
  },
  {
    slug: "viva-la-elysium",
    title: "她衣衫褴褛",
    excerpt:
      "Wine is an essential compontents of a woman's life.",
    date: "2024-9-1",
    jellyfishOnly: false,
    tag: 'Fragrance',
    cover: "/writing/viva-la-elysium.png",
  },
  {
    slug: "oh-my-love",
    title: "致吾爱",
    excerpt:
      "Ohhh, my love.",
    date: "2024-8-27",
    jellyfishOnly: false,
    tag: 'WhatADay',
    cover: "/writing/oh-my-love.png",
  },
  {
    slug: "come-again",
    title: "Come Again",
    excerpt:
      "On way back to friends",
    date: "2024-8-10",
    jellyfishOnly: false,
    tag: 'WhatADay',
    cover: "/writing/come-again.png",
  },
  {
    slug: "chemistry-is-magic",
    title: "波士顿的雨季在八月降临",
    excerpt:
      "Rain, rain go away.",
    date: "2024-8-7",
    jellyfishOnly: true,
    tag: 'Fragrance',
    cover: "/writing/chemistry-is-magic.png",
  },
  {
    slug: "dreaming",
    title: "眩晕",
    excerpt:
      "The kaleidoscope keeps spinning nonstop.",
    date: "2024-7-31",
    jellyfishOnly: true,
    tag: 'Fragrance',
    cover: "/writing/dreaming.png",
  },
  {
    slug: "i-miss-u",
    title: "我想念你",
    excerpt:
      "I witness",
    date: "2024-7-16",
    jellyfishOnly: true,
    tag: 'Fragrance',
    cover: "/writing/i-missu.png",
  },
  {
    slug: "back-to-summer",
    title: "夏天已经结束了",
    excerpt:
      "Natsu ga owatte shimatta",
    date: "2025-6-18",
    jellyfishOnly: false,
    tag: 'Fragrance',
    cover: "/writing/back-tosummer.png",
  },
  {
    slug: "search-by-a-kiss",
    title: "午后",
    excerpt:
      "I drink.",
    date: "2025-5-27",
    jellyfishOnly: false,
    tag: 'MumbleBee',
    cover: "/writing/search-by-a-kiss.png",
  },
  {
    slug: "heartbeat",
    title: "心跳",
    excerpt:
      "我不止一次错把满地的月光当成是海洋",
    date: "2025-2-14",
    jellyfishOnly: true,
    tag: 'Fragrance',
    cover: "/writing/heartbeat.png",
  },
  {
    slug: "who-am-i",
    title: "又是一年冬好处",
    excerpt:
      "The golden age will come again",
    date: "2024-12-31",
    jellyfishOnly: false,
    tag: 'WhatADay',
    cover: "/writing/who-am-i.png",
  },
  {
    slug: "wine-of-2024",
    title: "2024饮酒小结",
    excerpt:
      "Don't talk, just drink.",
    date: "2024-12-17",
    jellyfishOnly: false,
    tag: 'WhatADay',
    cover: "/writing/wine-of-24.png",
  },
  {
    slug: "happy-23-to-me",
    title: "像一只水母",
    excerpt:
      "Jellyfish cannot swim.",
    date: "2024-10-27",
    jellyfishOnly: false,
    tag: 'WhatADay',
    cover: "/writing/happy-23-to-me.png",
  },
  {
    slug: "we-bond-in-blood",
    title: "妈妈",
    excerpt:
      "So we beat on.",
    date: "2024-10-20",
    jellyfishOnly: true,
    tag: 'MumbleBee',
    cover: "/writing/we-bond-in-blood.png",
  },
  {
    slug: "love-is-a-curse",
    title: "爱是诅咒",
    excerpt:
      "What is love",
    date: "2024-9-22",
    jellyfishOnly: false,
    tag: 'Fragrance',
    cover: "/writing/love-is-a-curse.png",
  },
  {
    slug: "oh-summer",
    title: "无尽夏",
    excerpt:
      "Endless Summerless",
    date: "2024-8-24",
    jellyfishOnly: false,
    tag: 'MumbleBee',
    cover: "/writing/oh-summer.png",
  },
  {
    slug: "what-do-u-mean",
    title: "没关系",
    excerpt:
      "what do you mean by",
    date: "2024-8-18",
    jellyfishOnly: false,
    tag: 'MumbleBee',
    cover: "/writing/what-do-u-mean.png",
  },
  {
    slug: "change",
    title: "随机数",
    excerpt:
      "Stop putting ketchup in my lemonade.",
    date: "2024-6-2",
    jellyfishOnly: false,
    tag: 'MumbleBee',
    cover: "/writing/change.png",
  },
];
