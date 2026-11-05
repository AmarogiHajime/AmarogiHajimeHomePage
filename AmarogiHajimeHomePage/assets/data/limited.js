/*
 * 「今回のキーワード入力ページ」の登録内容は、このファイルを編集します。
 *
 * 編集する基本項目は4つです。
 *   keyword     = キーワード（同じキーワードで複数動画を表示できます）
 *   title       = 動画タイトル
 *   description = その動画の概要
 *   url         = 動画URL（YouTube・ニコニコ動画を自動判別）
 *
 * 元の limitedGroups → videos という構造は維持しています。
 * 同じ動画のYouTube版とニコニコ動画版を両方置く場合は、
 * 下部の「複数投稿先の書き方」を参照してください（従来の sources も利用できます）。
 *
 * これはキーワードに応じて表示を切り替える仕組みです。
 * GitHubの公開リポジトリから、この設定内容を見ることはできます。
 */
window.SiteContent = window.SiteContent || {};
window.SiteContent.limitedGroups = [
  {
    keyword: 'サンプルA', 
    videos: [
      {
        title: '動画タイトルA', 
        description: 'ここに動画Aの概要を書きます。', 
        url: '', 
      },
    ],
  },
  
];

