import {
  SectionSlide,
  ContentSlide,
  BulletList,
  Callout,
  Card,
  CardGrid,
  Columns,
  CodeBlock,
  CompareTable,
} from '../components/index.js';

const KICKER = '02 ／ コマンド';

export default {
  section: '02 コマンド',
  slides: [
    SectionSlide({
      number: '02',
      title: 'コマンド',
      lead: 'Claude Code を思いどおりに操るための入力のしかた',
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'Claude Code への「入力」は3種類ある',
      lead: '日本語で話しかけるだけでなく、特別な書き方を覚えるともっと便利になります',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: '起動するとき',
              title: '起動コマンド',
              text: 'ターミナルで <code>claude</code> に続けて書く。どの会話から始めるかなどを決める',
              tone: 'blue',
            }),
            Card({
              badge: '会話の途中',
              title: 'スラッシュコマンド',
              text: '<code>/</code> から始まる命令。会話の管理や設定の変更など、Claude Code 自体を操作する',
              highlight: true,
            }),
            Card({
              badge: '文章の中に',
              title: '記号ショートカット',
              text: '<code>@</code> でファイルを指定、<code>!</code> でコマンドを直接実行など、短い記号で操作する',
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'info',
          text: '普通の文章（「ログイン画面を直して」など）は、コマンドではなく Claude への「依頼」として扱われます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: '起動コマンド',
      lead: '<code>claude</code> の後ろにオプションを付けて、起動のしかたを変えられます',
      body: Columns({
        ratio: '1fr 1fr',
        align: 'center',
        left: CodeBlock({
          filename: 'ターミナル',
          lang: 'shell',
          code: `
claude                  # 新しい会話を始める
claude -c               # 直前の会話の続きから始める
claude -r               # 過去の会話を選んで再開する
claude -p "質問"        # 1回だけ答えさせて終了する
claude --model sonnet   # モデルを指定して起動する
`,
        }),
        right: [
          BulletList({
            items: [
              '普段は <code>claude</code> だけで OK',
              '昨日の作業の続きは <code>-c</code>（continue）',
              '<code>-p</code> は自動化向け。スクリプトやほかのコマンドと組み合わせられる',
            ],
          }),
          Callout({
            type: 'tip',
            text: 'すべてのオプションは <code>claude --help</code> で確認できます。',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      title: 'よく使うスラッシュコマンド',
      lead: '会話の途中で <code>/</code> を入力すると、使えるコマンドの候補が一覧で出ます',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: '会話の管理',
              title: '作業を整理する',
              items: [
                '<code>/clear</code> 会話をリセット',
                '<code>/compact</code> 会話を要約',
                '<code>/resume</code> 過去の会話を再開',
              ],
              tone: 'blue',
            }),
            Card({
              badge: '状況の確認',
              title: '今の状態を見る',
              items: [
                '<code>/context</code> 机の使用状況',
                '<code>/usage</code> 利用量と上限',
                '<code>/help</code> コマンド一覧',
              ],
              tone: 'yellow',
            }),
            Card({
              badge: '設定・育てる',
              title: 'ふるまいを変える',
              items: [
                '<code>/model</code> モデルの切り替え',
                '<code>/init</code> CLAUDE.md の作成',
                '<code>/memory</code> CLAUDE.md の編集',
                '<code>/agents</code> サブエージェント管理',
              ],
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'tip',
          text: '自分で作ったスキル（第5章）も <code>/スキル名</code> の形でここに並びます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      title: '記号とキーボードショートカット',
      body: Columns({
        ratio: '1fr 1fr',
        left: CompareTable({
          compact: true,
          headers: ['入力', '意味'],
          rows: [
            ['<code>@ファイル名</code>', 'そのファイルを指定して読ませる（入力途中で候補が出る）'],
            ['<code>!コマンド</code>', 'シェルコマンドをそのまま実行する（例: <code>!git status</code>）'],
            ['<code>/コマンド名</code>', 'スラッシュコマンドを実行する'],
          ],
        }),
        right: CompareTable({
          compact: true,
          headers: ['キー', '動作'],
          rows: [
            ['<code>Esc</code>', '実行中の作業を止める'],
            ['<code>Shift</code>+<code>Tab</code>', 'モードを切り替える（計画モードなど）'],
            ['<code>↑</code>', '過去に入力した内容を呼び出す'],
            ['<code>Ctrl</code>+<code>C</code>', '入力や実行を中断する'],
          ],
        }),
      }),
      note: '※ バージョンによって、使えるコマンドやキー操作は変わることがあります。',
    }),
  ],
};
