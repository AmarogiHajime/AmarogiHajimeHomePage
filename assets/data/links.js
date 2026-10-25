// リンク一覧。url が '' なら未設定として表示し、クリックできません。
// サイト内リンクは相対パス、外部リンクは https:// で始まるURLを指定します。
window.SiteContent = window.SiteContent || {};
window.SiteContent.linkGroups = [
  {
    heading: 'サイト内',
    links: [
      { title: 'トップページ', description: 'いらっしゃいませ。', url: 'index.html' },
      { title: 'キャラクター紹介', description: '自慢の娘たちです。', url: 'characters.html' },
      { title: '作品一覧', description: 'クソ動画一覧です。', url: 'works.html' },
    ],
  },
  {
    heading: '外部サイト',
    links: [
      { title: 'YouTube', description: '高評価とコメントお待ちしております。', url: 'https://youtube.com/@norainu1632?si=bKyZ-2V7jHqbjycm' },
      { title: 'ニコニコ動画', description: 'いいねとコメントお待ちしております。', url: 'https://www.nicovideo.jp/user/55019501' },
      { title: 'Twitter(現X)', description: 'ほぼ日記。', url: 'https://x.com/AMa1SCy2' },
    ],
  },
];
