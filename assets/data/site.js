// サイト名・紹介文・トップページ・各ページ見出しを編集するファイル。
// 設定値の右側にある文字列（引用符の中）を書き換えます。
window.SiteContent = window.SiteContent || {};
window.SiteContent.site = {
  titleIcon: 'images/site-icon.png',
  name: '雨露木一',
  description: '雨露木一の作品やアカウントについて分かるサイトです。',
  home: {
    heading: '', // 空欄なら name（サイト名）をトップ見出しにも使います
    introduction: 'キャラクター、登場作品、リンクをまとめています。',
    // トップで紹介する人物。IDは characters.js のキー名と一致させます。
    featuredCharacters: ['nanika', 'doreka', 'dokoka'],
    linkHeading: 'リンク',
    linkDescription: '関連サイトへのリンク',
  },
  headings: {
    characters: 'キャラクター紹介',
    charactersDescription: '一人ずつ、プロフィールと登場作品を紹介しています。',
    works: '作品一覧',
    worksDescription: '',
    links: 'リンク',
    linksDescription: '関連サイトへのリンクをまとめています。',
    about: 'このサイトについて',
    aboutDescription: 'このサイトは雨露木一のなんやかんやをまとめたサイトです。',
  },
  about: [
    'かつては野良犬と名乗っていたアホです。',
    'いろいろやっていましたが今では主に動画を投稿しています。',
  ],
};
