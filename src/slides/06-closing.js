import { TitleSlide, ContentSlide, Card, CardGrid, CompareTable } from '../components/index.js';

export default {
  section: 'まとめ',
  slides: [
    ContentSlide({
      kicker: 'SUMMARY',
      title: '今日のまとめ',
      body: CardGrid({
        columns: 3,
        cards: [
          Card({
            badge: '01 Claude とは？',
            title: '手を動かす AI',
            text: 'ファイルを読み書きし、コマンドを実行して目的を達成する。得意・不得意を知って任せる',
          }),
          Card({
            badge: '02 コマンド',
            title: '/ @ ! を使いこなす',
            text: '起動コマンド・スラッシュコマンド・記号ショートカットで操作する',
            tone: 'blue',
          }),
          Card({
            badge: '03 トークンとシート',
            title: 'トークン = 量の単位',
            text: 'シートは組織プランでの1人分の利用権。Team で Claude Code を使うなら Premium',
            tone: 'green',
          }),
          Card({
            badge: '04 利用制限',
            title: '5時間枠と週の上限',
            text: '広い指示・長い会話・巨大ファイルは重い。区切る・絞るで節約',
            tone: 'yellow',
          }),
          Card({
            badge: '05 スキルと md',
            title: 'md で Claude を育てる',
            text: '常に守るルールは CLAUDE.md、特定作業の手順はスキルに書く',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: 'NEXT STEP',
      title: '次の一歩と参考リンク',
      body: CompareTable({
        headers: ['やってみよう', '参考になるページ'],
        rows: [
          ['Claude Code をインストールして起動する', '<a href="https://code.claude.com/docs" target="_blank" rel="noopener">Claude Code ドキュメント</a>'],
          ['<code>/init</code> で CLAUDE.md を作る', '<a href="https://code.claude.com/docs/en/memory" target="_blank" rel="noopener">CLAUDE.md（メモリ）の解説</a>'],
          ['よくやる作業を1つスキルにしてみる', '<a href="https://code.claude.com/docs/en/skills" target="_blank" rel="noopener">スキルの解説</a>'],
          ['自分に合ったプランを確認する', '<a href="https://claude.com/pricing" target="_blank" rel="noopener">料金プラン</a>'],
          ['困ったときに調べる', '<a href="https://support.claude.com" target="_blank" rel="noopener">ヘルプセンター</a>'],
        ],
      }),
    }),

    TitleSlide({
      eyebrow: 'THANK YOU',
      title: 'まずは小さな作業から<br>任せてみましょう',
      subtitle: 'ご清聴ありがとうございました',
    }),
  ],
};
