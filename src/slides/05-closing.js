import { TitleSlide, ContentSlide, Card, CardGrid, CompareTable } from '../components/index.js';

export default {
  section: 'まとめ',
  slides: [
    ContentSlide({
      kicker: 'SUMMARY',
      title: '今日のまとめ',
      body: CardGrid({
        columns: 2,
        cards: [
          Card({
            badge: '01 Claude とは？',
            title: 'Claude Code は手を動かす AI',
            text: 'ファイルを読み書きし、コマンドを実行しながら目的を達成するエージェント',
          }),
          Card({
            badge: '02 トークンとシート',
            title: 'トークン = AI が扱う量の単位',
            text: 'シートは組織プランでの1人分の利用権。Team で Claude Code を使うなら Premium シート',
            tone: 'blue',
          }),
          Card({
            badge: '03 利用制限',
            title: '5時間枠と週の上限',
            text: '会話を区切る・モデルを選ぶ・/usage で確認する、が上手な付き合い方',
            tone: 'yellow',
          }),
          Card({
            badge: '04 スキルと md',
            title: 'md ファイルで Claude を育てる',
            text: '常に守るルールは CLAUDE.md、特定作業の手順はスキルに書く',
            tone: 'green',
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
