import { html } from '../../../core/html.js';
import './VscodeMock.scss';

// エディタ内のコード行（幅の割合と色の種類）。文字ではなく棒で表して、言語に依存しないイメージにする。
const CODE_LINES = [
  { indent: 0, width: 38, tone: 'a' },
  { indent: 1, width: 52, tone: 'b' },
  { indent: 1, width: 44, tone: 'c', selected: true },
  { indent: 2, width: 60, tone: 'b', selected: true },
  { indent: 2, width: 34, tone: 'a', selected: true },
  { indent: 1, width: 48, tone: 'c' },
  { indent: 0, width: 24, tone: 'a' },
  { indent: 0, width: 42, tone: 'b' },
];

/**
 * VS Code 上の Claude Code パネルのイメージ図（静的なモック）。
 * 番号マーカーは次の対応。スライド側の説明リストを同じ順で並べること。
 *   1 エディタ右上の ✻ アイコン / 2 エディタ（選択範囲）/ 3 会話パネル
 *   4 プロンプト欄 / 5 プロンプト欄の下（モード・モデル・使用量）/ 6 ステータスバー
 */
export function VscodeMock() {
  return html`
    <figure class="vsmock" aria-label="VS Code と Claude Code パネルのイメージ図">
      <div class="vsmock__window">
        <div class="vsmock__activity" aria-hidden="true">
          <span></span><span></span><span class="is-spark">✻</span><span></span>
        </div>

        <div class="vsmock__editor">
          <div class="vsmock__tabs">
            <span class="vsmock__tab">app.js</span>
            <span class="vsmock__spark">✻<i class="vsmock__marker vsmock__marker--1">1</i></span>
          </div>
          <div class="vsmock__code">
            ${CODE_LINES.map(
              ({ indent, width, tone, selected }, i) => html`
                <div class="vsmock__line ${selected ? 'is-selected' : ''}">
                  <span class="vsmock__no">${i + 1}</span>
                  <span class="vsmock__bar vsmock__bar--${tone}" style="--indent: ${indent}; --w: ${width}%"></span>
                </div>
              `,
            )}
            <i class="vsmock__marker vsmock__marker--2">2</i>
          </div>
        </div>

        <div class="vsmock__panel">
          <div class="vsmock__chat">
            <p class="vsmock__bubble vsmock__bubble--user">この処理を説明して <b>@app.js#3-5</b></p>
            <p class="vsmock__bubble vsmock__bubble--claude">3〜5行目は、入力を検証してから保存しています……</p>
            <i class="vsmock__marker vsmock__marker--3">3</i>
          </div>
          <div class="vsmock__prompt">
            <p class="vsmock__input">Claude に頼む…（<b>/</b> でコマンド、<b>@</b> でファイル）<i class="vsmock__marker vsmock__marker--4">4</i></p>
            <div class="vsmock__chips">
              <span>Manual</span><span>Sonnet</span><span>◔ 24%</span>
              <i class="vsmock__marker vsmock__marker--5">5</i>
            </div>
          </div>
        </div>
      </div>
      <div class="vsmock__status" aria-hidden="true">
        <span>main</span><span class="vsmock__status-claude">✻ Claude Code<i class="vsmock__marker vsmock__marker--6">6</i></span>
      </div>
      <figcaption class="vsmock__caption">※ イメージ図です。実際の見た目はバージョンやテーマで異なります。</figcaption>
    </figure>
  `;
}
