// キャラクターはこのファイルで一括管理します。
// 新しい人物はキー（ID）を重複させずに、既存のブロックをコピーして増やします。
// image に例: "images/characters/nanika.png" と設定すると立ち絵を表示できます。
// 空文字 "" のままなら「画像未登録」の表示になります。
// profile は項目を追加・削除でき、各プロフィール画面へ自動反映されます。
window.SiteContent = window.SiteContent || {};
window.SiteContent.characters = {
  "nanika": {
    "name": "佐音　なにか",
    "summary": "さね　なにか",
    "description": "全身ピンク色。比較的に会話が通じるがイチゴに関する価値観だけは明らかにおかしい人物。イチゴを完全に動物として扱っており散歩や食事をさせるだけでなく、最終的には人権まで獲得させようとしている。誕生日は12月32日で誰にも誕生日を祝われていない(と思っている)。",
    "images": [
      "images/characters/なにか.png",
      "images/characters/なにか_2.png"
    ],
    "imageIntervalMs": 4000,
    "profile": [
      {
        "label": "誕生日",
        "value": "12月32日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "C型"
      },
      {
        "label": "出身",
        "value": "宇宙"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "一人っ子"
      },
      {
        "label": "好きな食べ物",
        "value": "炒飯"
      },
      {
        "label": "好きな動物",
        "value": "イチゴ"
      },
      {
        "label": "趣味",
        "value": "署名運動"
      },
      {
        "label": "好きなもの",
        "value": "保冷剤・歴史書"
      },
      {
        "label": "嫌いなもの",
        "value": "オキシジェン・デストロイヤー"
      },
      {
        "label": "口癖",
        "value": "助けてください"
      }
    ]
  },
  "doreka": {
    "name": "二　どれか",
    "summary": "いちのつぎ　どれか",
    "description": "自信満々でかなりマイペースな1001人姉妹の長女。その自信の反面、妹のどこかからは「アホ姉」と呼ばれている。どういう訳か自宅には大量の妹達含め来訪者の忘れ物が残されている。商売はかなりできるようで、現在はメイド喫茶を経営していたりしている。",
    "images": [
      "images/characters/どれか.png",
      "images/characters/どれか_2.png"
    ],
    "imageIntervalMs": 4000,
    "profile": [
      {
        "label": "誕生日",
        "value": "10月14日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "B型"
      },
      {
        "label": "出身",
        "value": "地球の下にいる亀の下"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "妹が1000人　もっと増える予定あり"
      },
      {
        "label": "好きな食べ物",
        "value": "野菜"
      },
      {
        "label": "好きな動物",
        "value": "ミュータント"
      },
      {
        "label": "趣味",
        "value": "釈迦に説法"
      },
      {
        "label": "好きなもの",
        "value": "年末・カーチェイス"
      },
      {
        "label": "嫌いなもの",
        "value": "デミグラスソース"
      },
      {
        "label": "口癖",
        "value": "諸説あり"
      }
    ]
  },
  "dokoka": {
    "name": "回　どこか",
    "summary": "ぜろまわり　どこか",
    "description": "比較的まともな感覚を持っている1001人姉妹の末っ子。長女のどれかに対しては徹底して辛辣である。一方なにかへの好意は尊敬の感情も含めてかなり強い。",
    "images": [
      "images/characters/どこか.png",
      "images/characters/どこか_2.png"
    ],
    "imageIntervalMs": 4000,
    "profile": [
      {
        "label": "誕生日",
        "value": "3月31日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "C型"
      },
      {
        "label": "出身",
        "value": "地球の下にいる亀の下"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "姉が1000人　妹が増える予定あり"
      },
      {
        "label": "好きな食べ物",
        "value": "ホットケーキ"
      },
      {
        "label": "好きな動物",
        "value": "ポメラニアン"
      },
      {
        "label": "趣味",
        "value": "マッサージ"
      },
      {
        "label": "好きなもの",
        "value": "かくれんぼ・安心感"
      },
      {
        "label": "嫌いなもの",
        "value": "掃除機"
      },
      {
        "label": "口癖",
        "value": "諸説あり"
      }
    ]
  },
  "ituka": {
    "name": "十時　いつか",
    "summary": "ととき　いつか",
    "description": "殆どの状況を受け入れてしまう人。佐音なにかのイチゴ関連の話では面白いだけで関わっている。自身は神になりたがっている。周囲を独特なあだ名で呼ぶのが特徴。",
    "images": [
      "images/characters/いつか.png",
      "images/characters/いつか_2.png",
      "images/characters/いつか_3.png"
    ],
    "imageIntervalMs": 4000,
    "profile": [
      {
        "label": "誕生日",
        "value": "10月5日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "AB型"
      },
      {
        "label": "出身",
        "value": "地球ではある"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "一人っ子"
      },
      {
        "label": "好きな食べ物",
        "value": "蜂蜜"
      },
      {
        "label": "好きな動物",
        "value": "フェニックス"
      },
      {
        "label": "趣味",
        "value": "栄養補給"
      },
      {
        "label": "好きなもの",
        "value": "汽車・場外乱闘"
      },
      {
        "label": "嫌いなもの",
        "value": "ホラー映画"
      },
      {
        "label": "口癖",
        "value": "親"
      }
    ]
  },
  "dareka": {
    "name": "仏粒州　だれか",
    "summary": "ぶっつぶす　だれか",
    "description": "名前だけが恐ろしい上品なお嬢様。基本的にはまともな人間だが発想はかなり突拍子がない。基本的にやりたい事は好き勝手にやり始めるし欲しいものは大体手に入る人間である。",
    "images": [
      "images/characters/だれか.png",
      "images/characters/だれか_2.png"
    ],
    "imageIntervalMs": 4000,
    "profile": [
      {
        "label": "誕生日",
        "value": "4月9日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "B型"
      },
      {
        "label": "出身",
        "value": "遊園地"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "人並みには居る"
      },
      {
        "label": "好きな食べ物",
        "value": "ラーメン"
      },
      {
        "label": "好きな動物",
        "value": "アブラゼミ"
      },
      {
        "label": "趣味",
        "value": "手裏剣"
      },
      {
        "label": "好きなもの",
        "value": "食堂・単純作業"
      },
      {
        "label": "嫌いなもの",
        "value": "お通し"
      },
      {
        "label": "口癖",
        "value": "過去"
      }
    ]
  },
  "nazeka": {
    "name": "西京　なぜか",
    "summary": "さいきょう　なぜか",
    "description": "名実ともに偽りなく最強の人間。かなりバイトが好きな人間であり常にバイトをしながらバイトを探している。因みに誕生日は誰にも祝われたことがない。",
    "images": [
      "images/characters/なぜか.png",
      "images/characters/なぜか_2.png"
    ],
    "imageIntervalMs": 4000,
    "profile": [
      {
        "label": "誕生日",
        "value": "12月0日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "D型"
      },
      {
        "label": "出身",
        "value": "どこでもない"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "最強は常に孤独なのである。"
      },
      {
        "label": "好きな食べ物",
        "value": "特に？"
      },
      {
        "label": "好きな動物",
        "value": "クワガタ"
      },
      {
        "label": "趣味",
        "value": "バイト"
      },
      {
        "label": "好きなもの",
        "value": "人間・愛"
      },
      {
        "label": "嫌いなもの",
        "value": "にわか雨"
      },
      {
        "label": "口癖",
        "value": "戯言"
      }
    ]
  },
  "wilche": {
    "name": "ヴィルヒェ・クライノート",
    "summary": "ゔぃるひぇ　くらいのーと",
    "description": "かなり強い部類の魔法使い。何でも叶えてあげようとするが、周囲から飛んでくる願いは「イチゴに選挙権を」だの「神様にしろ」だの妙なものばかりである。彼女の他人の呼び方は初対面の時の願いである。",
    "image": "images/characters/ヴィルヒェ.png",
    "profile": [
      {
        "label": "誕生日",
        "value": "7月7日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "BC型"
      },
      {
        "label": "出身",
        "value": "ドイツ"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "一人っ子"
      },
      {
        "label": "好きな食べ物",
        "value": "フライドチキン"
      },
      {
        "label": "好きな動物",
        "value": "妹"
      },
      {
        "label": "趣味",
        "value": "ガールズバンド"
      },
      {
        "label": "好きなもの",
        "value": "メタリック・サタデーナイト"
      },
      {
        "label": "嫌いなもの",
        "value": "手相占い"
      },
      {
        "label": "口癖",
        "value": "八重桜"
      }
    ]
  },
  "ikaga": {
    "name": "羊渡川　いかが",
    "summary": "めえどがわ　いかが",
    "description": "とにかく寝ることを優先する間延びした独特の喋り方が特徴な羊。かなりぐうたらでありバイトの面接も受けてないらしい。なぜかとヴィルヒェと一緒にどれかのメイド喫茶でバイトしている。",
    "image": "images/characters/いかが.png",
    "profile": [
      {
        "label": "誕生日",
        "value": "5月10日"
      },
      {
        "label": "年齢",
        "value": "無限大"
      },
      {
        "label": "血液型",
        "value": "O型"
      },
      {
        "label": "出身",
        "value": "どこでもない"
      },
      {
        "label": "兄弟姉妹の存在",
        "value": "居ると思います？"
      },
      {
        "label": "好きな食べ物",
        "value": "ポテトチップス"
      },
      {
        "label": "好きな動物",
        "value": "羊"
      },
      {
        "label": "趣味",
        "value": "睡眠"
      },
      {
        "label": "好きなもの",
        "value": "綿あめ・雲"
      },
      {
        "label": "嫌いなもの",
        "value": "目覚まし時計"
      },
      {
        "label": "口癖",
        "value": "新人メイド"
      }
    ]
  },

  
};
