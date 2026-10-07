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
  VscodeMock,
  FlowDiagram,
} from '../components/index.js';

const KICKER = '03 ／ VS Code での操作とコマンド';

// キーボードショートカットの表記（例: kbd('Ctrl', 'Esc') → Ctrl+Esc）
const kbd = (...keys) => keys.map((key) => `<code>${key}</code>`).join('+');

export default {
  section: '03 VS Code での操作とコマンド',
  slides: [
    SectionSlide({
      number: '03',
      title: 'VS Code での操作とコマンド',
      lead: 'この資料では、VS Code の拡張機能で Claude Code を使う前提で説明します',
      scope: 'code',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: 'はじめかた（VS Code 拡張機能）',
      lead: 'この資料では、VS Code から使う方法を中心に説明します',
      body: [
        FlowDiagram({
          steps: [
            { title: '拡張機能を入れる', text: '<code>Ctrl</code>+<code>Shift</code>+<code>X</code> で「Claude Code」を検索して Install' },
            { title: '✻ アイコンを押す', text: 'エディタ右上（ファイルを開いているとき）' },
            { title: 'サインインする', text: 'ブラウザが開くので、Claude のアカウントで承認' },
            { title: '話しかける', text: 'プロンプト欄に日本語で依頼を入力' },
          ],
        }),
        Columns({
          ratio: '1fr 1fr',
          left: Callout({
            type: 'info',
            title: '必要なもの',
            text: 'VS Code 1.94.0 以降と、有料の Claude アカウント（Pro / Max / Team / Enterprise）または Console アカウント。',
          }),
          right: BulletList({
            size: 'sm',
            heading: 'まず試す依頼の例',
            items: [
              '「このプロジェクトの構成を教えて」',
              '「README を読んで、動かし方を説明して」',
              '小さな修正を1つ頼んでみる',
            ],
          }),
        }),
      ],
      note: '※ ターミナル（CLI）で使う方法は、この章の最後で紹介します。',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: '画面の見かた',
      lead: 'VS Code の中に Claude のパネルが並びます',
      body: Columns({
        ratio: '3fr 2fr',
        align: 'center',
        left: VscodeMock(),
        right: BulletList({
          numbered: true,
          size: 'sm',
          items: [
            '<strong>✻ アイコン</strong>：クリックで Claude を開く（ファイルを開いているとき）',
            '<strong>エディタ</strong>：選んだ行は Claude にも見える',
            '<strong>会話パネル</strong>：依頼と回答が並ぶ',
            '<strong>プロンプト欄</strong>：ここに依頼を入力。<code>/</code> と <code>@</code> が使える',
            '<strong>欄の下の表示</strong>：権限モード・モデル・使用量',
            '<strong>ステータスバー</strong>：<code>✻ Claude Code</code> からも開ける',
          ],
        }),
      }),
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: 'Claude への伝え方',
      lead: '文章で頼むだけでなく、ファイルや選択範囲も一緒に渡せます',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: 'そのまま',
              title: '文章で依頼する',
              text: '日本語で書いて <code>Enter</code> で送信。改行したいときは <code>Shift</code>+<code>Enter</code>',
              tone: 'blue',
            }),
            Card({
              badge: '@ で指定',
              title: 'ファイル・フォルダを指定',
              text: '<code>@auth</code> と入力すると候補が出る（部分一致OK）。フォルダは <code>@src/components/</code> と最後に <code>/</code> を付ける',
              highlight: true,
            }),
            Card({
              badge: '選択して聞く',
              title: 'コードを選んで質問',
              text: 'エディタで行を選ぶと Claude にも見える。' + `${kbd('Alt', 'K')} で <code>@app.ts#5-10</code> のように行番号つきで挿入できる`,
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'tip',
          text: '送信を <code>Ctrl</code>+<code>Enter</code> に変えたいときは、拡張機能の設定（<code>useCtrlEnterToSend</code>）で変更できます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: '「/」メニューでできること',
      lead: 'プロンプト欄で <code>/</code> を入力すると、コマンドの候補が出ます',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: '会話・状況',
              title: '今の状態を整える',
              items: [
                '<code>/compact</code> 会話を要約して机を空ける',
                '<code>/usage</code> 利用量と上限を確認',
                '<code>/status</code> バージョンやアカウント',
                '<code>/export</code> 会話を保存',
              ],
              tone: 'blue',
            }),
            Card({
              badge: 'モデル・モード',
              title: 'ふるまいを変える',
              items: [
                '<code>/model</code> モデルを切り替える',
                '<code>/plan</code> 計画モードにする',
                '<code>/skills</code> スキルの一覧と設定',
              ],
              tone: 'green',
            }),
            Card({
              badge: '連携・ちょい聞き',
              title: '外とつなぐ・横から聞く',
              items: [
                '<code>/mcp</code> 外部ツールとの接続',
                '<code>/btw</code> 会話に混ぜずに質問',
              ],
              tone: 'yellow',
            }),
          ],
        }),
        Callout({
          type: 'info',
          text: '拡張機能で使えるコマンドは、ターミナル版（CLI）の一部です。<code>/</code> を押して出る候補が「使えるもの」です。CLAUDE.md の編集も、このメニューの <strong>Customize → Instructions</strong> から開けます。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: '許可のしくみと、変更内容の確認',
      lead: 'Claude がファイルを変える前に、どこまで確認するかは「モード」で決まります',
      body: Columns({
        ratio: '3fr 2fr',
        left: CompareTable({
          compact: true,
          headers: ['モード', '動き', 'おすすめ'],
          highlightColumn: 2,
          rows: [
            ['Manual', '編集やコマンドの前に確認する', '最初はこれ'],
            ['Plan', '先に計画を見せ、承認してから実行', '大きな変更の前に'],
            ['Edit automatically', '編集は確認なしで進める', '慣れてから'],
            ['Auto', '自動判定で確認を減らす', '慣れてから'],
          ],
        }),
        right: [
          BulletList({
            size: 'sm',
            items: [
              'モードは、プロンプト欄の下の表示をクリックして切り替える',
              'Manual では、変更前後を並べた<strong>差分</strong>が開き、承認・却下・別の指示を選べる',
              'Plan では計画が Markdown で開き、コメントで修正を伝えられる',
            ],
          }),
        ],
      }),
      note: '※ 起動時のモードは、バージョンや契約プランによって異なります。',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: 'よく使うショートカット',
      lead: 'コマンドパレット（<code>Ctrl</code>+<code>Shift</code>+<code>P</code>）で「Claude Code」と入力すると、操作の一覧が出ます',
      body: CompareTable({
        compact: true,
        headers: ['操作', 'Windows / Linux', 'Mac'],
        highlightColumn: 1,
        rows: [
          ['Claude とエディタを行き来する', kbd('Ctrl', 'Esc'), kbd('Cmd', 'Esc')],
          ['新しい会話をタブで開く', kbd('Ctrl', 'Shift', 'Esc'), kbd('Cmd', 'Shift', 'Esc')],
          ['選択範囲を <code>@</code> で渡す', kbd('Alt', 'K'), kbd('Option', 'K')],
          ['閉じた会話のタブを開き直す', kbd('Ctrl', 'Shift', 'T'), kbd('Cmd', 'Shift', 'T')],
          ['実行中の作業を止める', '<code>Esc</code> または Stop ボタン', '<code>Esc</code> または Stop ボタン'],
        ],
      }),
      note: '※ Mac で <code>Cmd</code>+<code>Esc</code> が効かないときは、キーボードショートカットの設定を確認してください。',
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: '失敗しても巻き戻せる（チェックポイント）',
      lead: 'メッセージにマウスを乗せると出る巻き戻しボタンから、3つの戻し方を選べます',
      body: [
        CardGrid({
          columns: 3,
          cards: [
            Card({
              badge: 'Fork conversation from here',
              title: '会話だけ分岐する',
              text: 'その時点から新しい会話を始める。コードの変更はそのまま残る',
              tone: 'blue',
            }),
            Card({
              badge: 'Rewind code to here',
              title: 'コードだけ戻す',
              text: 'ファイルの変更をその時点に戻す。会話の履歴は残る',
              highlight: true,
            }),
            Card({
              badge: 'Fork and rewind',
              title: '両方やり直す',
              text: '新しい会話に分岐して、コードもその時点に戻す',
              tone: 'green',
            }),
          ],
        }),
        Callout({
          type: 'warn',
          text: '巻き戻せるのは Claude が編集したファイルが中心です。ターミナルのコマンドで変えたものや自分で編集した分は戻らないことがあるので、Git でのコミットも併用しましょう。',
        }),
      ],
    }),

    ContentSlide({
      kicker: KICKER,
      scope: 'code',
      title: 'ターミナル版（CLI）も使える',
      lead: 'VS Code のターミナル（<code>Ctrl</code>+<code>`</code>）で <code>claude</code> を実行すると、同じ Claude Code をコマンドで使えます',
      body: Columns({
        ratio: '1fr 1fr',
        left: CodeBlock({
          filename: 'VS Code のターミナル',
          lang: 'shell',
          code: `
# 最初に1回だけ CLI をインストール（Windows PowerShell）
irm https://claude.ai/install.ps1 | iex

claude                  # 新しい会話を始める
claude -c               # 直前の会話の続きから始める
claude -r               # 過去の会話を選んで再開する
claude -p "質問"        # 1回だけ答えさせて終了する
`,
        }),
        right: [
          BulletList({
            size: 'sm',
            items: [
              '拡張機能を入れただけでは、ターミナルで <code>claude</code> は使えない（別途インストールが必要）',
              'CLI だけにある機能：すべてのコマンド、<code>!</code> でのシェル実行、Tab 補完',
              '自動化やスクリプトから呼ぶなら <code>-p</code> が便利',
            ],
          }),
          Callout({
            type: 'info',
            text: 'まずは拡張機能だけで十分です。必要になったら CLI を足しましょう。',
          }),
        ],
      }),
      note: '※ macOS / Linux / WSL のインストールコマンドは公式ドキュメント（セットアップ）を参照してください。',
    }),
  ],
};
