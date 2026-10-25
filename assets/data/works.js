// 作品の追加・変更はこのファイルだけで行います。
// tags はキャラクターIDの配列。作品ページ全件表示／各キャラクターページの選別に使用。
// tags の値自体は画面上に表示されません。
// 同じ作品で投稿先や出演者が違う場合は、videos に動画を1件ずつ追加します。
// id は作品固有の英数字の名前。URLの #work-〇〇 に使うため変更しないのが安全です。
window.SiteContent = window.SiteContent || {};
window.SiteContent.works = [
  {
    id: 'tottorishibari',
    title: 'よく分からない子とやるポケットモンスターバイオレット鳥取県縛り',
    videos: [
      {
        tags: ['nanika'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/vBIeFbhUVis?si=BYKybEc6bB0q4GB6'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45490864?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'namaetuke',
    title: '名前しかない子に全てをあげよう！『トンデモ』設定決め大会【佐音なにか】【二どれか】',
    videos: [
      {
        tags: ['nanika','doreka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://www.youtube.com/embed/BTk65a6KJ6g?si=VahVONz3fTTB4we3'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45536312?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'zense',
    title: '前世',
    videos: [
      {
        tags: ['nanika','doreka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/gFKFtRZ3xZo'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45667326?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'haisya',
    title: '歯医者さん',
    videos: [
      {
        tags: ['nanika','doreka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/HYF2gvC4XWQ'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45695513?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'nanipro',
    title: '佐音なにかのプロフィール',
    videos: [
      {
        tags: ['nanika','doreka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/qGqiAJ6KLbo?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45706535?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'dorepro',
    title: '二どれかのプロフィール',
    videos: [
      {
        tags: ['nanika','doreka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/0m2qQ1fkDP8?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45706745?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'sister',
    title: '妹',
    videos: [
      {
        tags: ['nanika','doreka','dokoka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/jwhdVw8pTY4'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45712232?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'shinnenkai',
    title: '新年会',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka','dareka','nazeka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/GNtUrIPT6pA'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45819904?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'dokopro',
    title: '回どこかのプロフィール',
    videos: [
      {
        tags: ['dokoka','ituka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/q3_J8gU2P9c?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45827132?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'itupro',
    title: '十時いつかのプロフィール',
    videos: [
      {
        tags: ['ituka','dareka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/Q-l1YtkhTeY?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45837114?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'convini',
    title: 'コンビニ強盗',
    videos: [
      {
        tags: ['dokoka','ituka','nazeka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/2j7ysi1p2EA'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45848681?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'game',
    title: 'いつどこで誰が何したゲーム',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka','dareka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/BjlfnhxtzBI?feature=share'
          },
          {
            platform: 'niconico',
            url: ''
          },
        ],
      },
    ],
  },
  {
    id: 'shopping',
    title: 'ショッピングモール',
    videos: [
      {
        tags: ['doreka','dareka','nazeka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/sFMrrI8Yk1c?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45853003?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'endra1',
    title: 'え！？この令和の時代にエンダードラゴン討伐ですか！？『第1回　アイアンゴーレムトラップ』',
    videos: [
      {
        tags: ['nanika','doreka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/fbZVK9H-4MQ'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45956403?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'imagechenge',
    title: 'イメチェン',
    videos: [
      {
        tags: ['nanika','doreka','ituka','nazeka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/_hX7xfHhgxA'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45987936?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'magic',
    title: '魔法使い',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka','dareka','nazeka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/GVelj9k5mCM?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm45988788?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'talk',
    title: 'お悩み相談',
    videos: [
      {
        tags: ['nanika','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/D_Y9VNCqoAo?feature=share'
          },
          {
            platform: 'niconico',
            url: ''
          },
        ],
      },
    ],
  },
  {
    id: 'xxx',
    title: 'えっちな話',
    videos: [
      {
        tags: ['nanika','doreka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/GeKxPc0mY28?feature=share'
          },
          {
            platform: 'niconico',
            url: ''
          },
        ],
      },
    ],
  },
  {
    id: 'green',
    title: 'shortsで進めるリーフグリーン',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka','dareka','nazeka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/PSomkIzZcnM'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46075833?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'Yomu1_2026',
    title: '【読ム-1グランプリ2026】ファミリーレストラン',
    videos: [
      {
        tags: ['nanika','nazeka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/Bywt6BihlOc'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46097832?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'charaintro',
    title: '登場人物紹介',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka','dareka','nazeka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/GoiN5z6-leI?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/shorts/ss46318830?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'albite',
    title: '全ての質問を「諸説ありです」で乗り切るバイト面接',
    videos: [
      {
        tags: ['dokoka','nazeka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/eke60sH1qrQ?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/shorts/ss46324160?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'paid',
    title: '「お会計まとめてで」と言って店にいる全員分の会計を引き受けるお嬢様',
    videos: [
      {
        tags: ['nanika','dareka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtube.com/shorts/QeVHmXuhW5U?feature=share'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/shorts/ss46327292?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'substruct',
    title: '引きすぎですわよ！？',
    videos: [
      {
        tags: ['dokoka','dareka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/Y3QiEykJRuM'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46343113?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'ramen',
    title: 'ラーメン屋',
    videos: [
      {
        tags: ['nanika','dareka','nazeka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/ORKOSfTwTeI'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46908603?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'stroberry',
    title: 'イチゴ',
    videos: [
      {
        tags: ['nanika','ituka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/md19f_O6wE4'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46908635?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'wish',
    title: '願い',
    videos: [
      {
        tags: ['ituka','wilche','ikaga'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/ekMcSVu_D1E'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46914232?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'forgetting',
    title: '忘れ物',
    videos: [
      {
        tags: ['doreka','dokoka','dareka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/eX06Yv9CjbY'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46919098?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'omiyage',
    title: 'お土産',
    videos: [
      {
        tags: ['doreka','dareka','ikaga'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/nXqHTYJHJTU'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46919149?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'garls',
    title: 'ギャルゲー',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/xrxHxU6ChS4'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46927664?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'Bonnou',
    title: '煩悩',
    videos: [
      {
        tags: ['doreka','nazeka','ikaga'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/XJdelobmSAw'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46931038?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'quiz',
    title: 'クイズ',
    videos: [
      {
        tags: ['dokoka','nazeka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/p5kXSN6TNeg'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46931058?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'birthday',
    title: '誕生日',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka','dareka','nazeka','wilche','ikaga'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/995rtKqGXQw'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46939079?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: '1m1d',
    title: '正月',
    videos: [
      {
        tags: ['nanika','dokoka','nazeka','wilche'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/oCXEio7YP-o'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46946301?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  {
    id: 'DXhell',
    title: 'D X 三 途 の 川',
    videos: [
      {
        tags: ['nanika','doreka','dokoka','ituka','dareka','nazeka','wilche','ikaga'],
        sources: [
          {
            platform: 'youtube',
            url: 'https://youtu.be/ntUo1Ht5PZs'
          },
          {
            platform: 'niconico',
            url: 'https://www.nicovideo.jp/watch/sm46950148?ref=garage_share_other'
          },
        ],
      },
    ],
  },
  // {
  //   id: 'templert',
  //   title: 'ここにタイトルを入力',
  //   videos: [
  //     {
  //       tags: ['nanika','doreka','dokoka','ituka','dareka','nazeka','wilche','ikaga'],
  //       sources: [
  //         {
  //           platform: 'youtube',
  //           url: ''
  //         },
  //         {
  //           platform: 'niconico',
  //           url: ''
  //         },
  //       ],
  //     },
  //   ],
  // },
];
