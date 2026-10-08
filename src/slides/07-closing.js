import { TitleSlide, ContentSlide, Card, CardGrid, CompareTable, ScopeTag } from '../components/index.js';

const link = (url, label) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;

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
            title: '2つの入り口がある',
            text: 'チャットの claude.ai と、手を動かす Claude Code。得意・不得意を知って任せる',
          }),
          Card({
            badge: '02 claude.ai',
            title: 'Projects と Artifacts',
            text: '資料と指示を Projects にまとめ、成果物は Artifacts で作る',
            tone: 'blue',
            scope: 'chat',
          }),
          Card({
            badge: '03 VS Code での操作',
            title: '@ と / を使いこなす',
            text: '許可のモード・差分の確認・巻き戻しで、安心して任せる',
            scope: 'code',
          }),
          Card({
            badge: '04 トークンとシート',
            title: 'トークン = 量の単位',
            text: 'シートは組織プランでの1人分の利用権。Team は Standard と Premium で利用量の上限が違う',
            tone: 'green',
            scope: 'both',
          }),
          Card({
            badge: '05 利用制限',
            title: '5時間枠と週の上限',
            text: '長い会話・大きな添付・広い指示は重い。区切る・絞るで節約',
            tone: 'yellow',
            scope: 'both',
          }),
          Card({
            badge: '06 スキルと md',
            title: 'ルールと手順を覚えさせる',
            text: '常に守るルールは Project instructions / CLAUDE.md、手順はスキルに書く',
            tone: 'blue',
            scope: 'both',
          }),
        ],
      }),
    }),

    ContentSlide({
      kicker: 'NEXT STEP',
      title: '次の一歩と参考リンク',
      body: CompareTable({
        compact: true,
        headers: ['やってみよう', '参考になるページ'],
        rows: [
          [
            `Projects を作って、よく使う資料と指示を登録する ${ScopeTag('chat', { compact: true })}`,
            link('https://support.claude.com/en/articles/9517075-what-are-projects', 'Projects の解説'),
          ],
          [
            `VS Code に拡張機能を入れて、✻ アイコンから起動する ${ScopeTag('code', { compact: true })}`,
            link('https://code.claude.com/docs/en/vs-code', 'VS Code 拡張機能の解説'),
          ],
          [
            `Claude に頼んで CLAUDE.md を作ってもらう ${ScopeTag('code', { compact: true })}`,
            link('https://code.claude.com/docs/en/memory', 'CLAUDE.md（メモリ）の解説'),
          ],
          [
            `よくやる作業を1つスキルにしてみる ${ScopeTag('both', { compact: true })}`,
            link('https://support.claude.com/en/articles/12512180-use-skills-in-claude', 'スキルの解説（claude.ai）'),
          ],
          [
            '自分に合ったプランを確認する',
            link('https://claude.com/pricing', '料金プラン'),
          ],
          [
            '困ったときに調べる',
            link('https://support.claude.com', 'ヘルプセンター'),
          ],
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
