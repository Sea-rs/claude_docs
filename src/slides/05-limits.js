import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Columns,
  CompareTable,
  Timeline,
} from '../components/index.js';

const KICKER = '05 ／ 利用制限';

export default {
  section: '05 利用制限',
  slides: [
    SectionSlide({
      number: '05',
      title: '利用制限',
      lead: '「使い放題」ではない理由と、上手な付き合い方',
      scope: 'both',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: 'なぜ利用制限があるの？',
      body: Columns({
        ratio: '3fr 2fr',
        left: BulletList({
          items: [
            'AI を動かすには、大量の計算資源（GPU）が必要',
            'すべての利用者が快適に使えるよう、1人あたりの利用量に上限がある',
            {
              text: '上限は「メッセージの回数」ではなく<strong>処理したトークン量</strong>で決まる',
              sub: ['短いやり取りなら多く、重い作業なら少なく使える'],
            },
            '上限はプランによって異なる（Max は Pro の約5倍・約20倍）',
          ],
        }),
        right: Callout({
          type: 'warn',
          title: '利用枠は共通',
          text: 'claude.ai のチャットと Claude Code は、同じ利用枠を使います。チャットでたくさん使うと、Claude Code で使える量も減ります。',
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: '上限は2種類ある',
      body: [
        CardGrid({
          columns: 2,
          cards: [
            Card({
              badge: '短期の上限',
              title: '5時間ごとの上限',
              text: '最初のメッセージを送った時点から5時間の枠。5時間たつとリセットされます',
            }),
            Card({
              badge: '長期の上限',
              title: '週ごとの上限',
              text: '7日間の合計利用量の上限。毎日長時間使い続ける場合に関係してきます',
              tone: 'blue',
            }),
          ],
        }),
        Timeline({
          items: [
            { time: '10:00', title: '最初のメッセージ', text: 'ここから5時間の枠が始まる' },
            { time: '12:30', title: '作業中', text: '枠の中で自由に使える', tone: 'blue' },
            { time: '14:10', title: '上限に到達', text: 'リセットまで一時的に使えない', tone: 'yellow' },
            { time: '15:00', title: 'リセット', text: '次のメッセージで新しい枠が始まる', tone: 'green' },
          ],
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: '利用量を多く消費するもの',
      body: [
        CardGrid({
          columns: 2,
          cards: [
            Card({
              title: '長く続いた会話',
              text: '履歴が毎回読み直されるため、後半ほど1回あたりの消費が大きくなる',
            }),
            Card({
              title: '大きなファイルの読み込み',
              text: '巨大なログやデータファイルをそのまま読ませると、一気に消費する',
              tone: 'blue',
            }),
            Card({
              title: '高性能なモデル（Opus）',
              text: '同じ作業でも、軽いモデルより多くの利用量を消費する',
              tone: 'yellow',
            }),
            Card({
              scope: 'code',
              title: '複数のエージェントの同時実行',
              text: 'サブエージェントを並行して動かすと、その分だけ消費が増える',
              tone: 'green',
            }),
          ],
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: 'Claude Code：コストが重くなりやすい作業',
      lead: '具体的な依頼の例と、軽くするコツ',
      body: CompareTable({
        compact: true,
        headers: ['依頼・作業の例', '重さ', 'なぜ重い？', '軽くするコツ'],
        highlightColumn: 1,
        rows: [
          ['「プロジェクト全体を見て直して」', '重い', '多数のファイルを読み込む', '対象のファイルやフォルダを指定する'],
          ['何時間も同じ会話で作業を続ける', '重い', '履歴を毎回読み直す', '区切りで新しい会話・<code>/compact</code>'],
          ['巨大なログや CSV をそのまま読ませる', '重い', '1ファイルで何万トークンにもなる', '必要な部分だけ抜き出して渡す'],
          ['エラーが直るまで何度もやり直させる', 'やや重い', '失敗のたびに読み書きが増える', '原因を自分で絞ってから頼む'],
          ['Opus で調査を何本も並行させる', '重い', '高性能モデル × 並列で倍々に増える', '調べものは軽いモデルに任せる'],
          ['特定の関数の小さな修正・質問', '軽い', '読む範囲が小さい', 'そのままでOK'],
        ],
      }),
      note: '※ 「重さ」は相対的な目安です。実際の消費量は <code>/usage</code> やプロンプト欄のコンテキスト表示で確認できます。',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'chat',
      title: 'claude.ai：利用量が増えやすい使い方',
      lead: '長さ・添付・ツール・モデルが、利用量に効いてきます',
      body: CompareTable({
        compact: true,
        headers: ['使い方の例', '重さ', 'なぜ重い？', '軽くするコツ'],
        highlightColumn: 1,
        rows: [
          ['1つのチャットを延々と続ける', '重い', '履歴が毎回読み直される', '話題が変わったら新しいチャットにする'],
          ['大きなファイルを何度も添付する', '重い', '添付の大きさが毎回数えられる', 'Projects にまとめて登録して使い回す'],
          ['リサーチや Web 検索を多用する', '重い', '複数の情報源を調べてまとめる', '調べたい範囲を絞って依頼する'],
          ['高性能なモデルを常用する', 'やや重い', '同じ作業でも消費が大きい', '軽いモデルで足りるか試す'],
          ['1つずつ細かく質問を重ねる', 'やや重い', 'やり取りの回数だけ読み直しが増える', '関連する質問は1回にまとめる'],
          ['短い質問・短い文章の相談', '軽い', '処理する量が小さい', 'そのままでOK'],
        ],
      }),
      note: '※ 実際の消費量は、claude.ai の「設定 → 使用量」で確認できます。',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: '利用状況を確認する',
      lead: '使っている場所によって、確認のしかたが違います',
      body: [
        Columns({
          ratio: '1fr 1fr',
          left: Card({
            scope: 'chat',
            title: '設定画面で確認',
            items: [
              '「設定 → 使用量」を開く',
              '5時間ごとの枠と週ごとの上限の進み具合が見える',
              '有料プランでは追加利用の状況も確認できる',
            ],
            tone: 'blue',
          }),
          right: Card({
            scope: 'code',
            title: 'コマンドと表示で確認',
            items: [
              'プロンプト欄で <code>/usage</code> を入力',
              'プロンプト欄の下のコンテキスト表示（<code>◔ 24%</code>）で作業机の使用率が分かる',
              '上限が近づくと画面に警告が出る',
            ],
            highlight: true,
          }),
        }),
        Callout({
          type: 'info',
          text: '利用枠は共通なので、どちらで確認しても同じプランの上限の話です。上限に達すると、リセットされる時刻が表示されます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'both',
      title: '上限に達してしまったら？',
      body: [
        CardGrid({
          columns: 2,
          cards: [
            Card({
              badge: '1',
              title: 'リセットを待つ',
              text: '表示されたリセット時刻を待てば、また使えるようになります',
            }),
            Card({
              badge: '2',
              title: '軽いモデルに切り替える',
              text: '<code>/model</code> で Sonnet などに切り替えると、消費を抑えながら作業を続けられます',
              tone: 'blue',
            }),
            Card({
              badge: '3',
              title: '追加利用を使う',
              text: '設定で追加利用を有効にすると、上限を超えた分を従量課金で続けられます（プランにより異なります）',
              tone: 'yellow',
            }),
            Card({
              badge: '4',
              title: 'プランを見直す',
              text: 'いつも足りないなら、Max プランや Premium シートへの変更を検討しましょう',
              tone: 'green',
            }),
          ],
        }),
      ],
      note: '※ 上限の具体的な量は、Anthropic によって随時見直されています。',
    }),
  ],
};
