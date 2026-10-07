import { html } from '../../../core/html.js';
import './CompareTable.scss';

/**
 * 比較表。1列目は行の見出しとして太字になる。
 * @param {{ headers: string[], rows: string[][], highlightColumn?: number, compact?: boolean }} props
 *   highlightColumn: 強調したい列の番号（0 始まり）
 */
export function CompareTable({ headers, rows, highlightColumn, compact = false }) {
  const cellClass = (i) => (i === highlightColumn ? 'is-highlight' : '');

  return html`
    <div class="compare-table ${compact ? 'compare-table--compact' : ''}">
      <table>
        <thead>
          <tr>
            ${headers.map((h, i) => html`<th scope="col" class="${cellClass(i)}">${h}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${rows.map(
            (row) => html`
              <tr>
                ${row.map((cell, i) =>
                  i === 0
                    ? html`<th scope="row">${cell}</th>`
                    : html`<td class="${cellClass(i)}">${cell}</td>`,
                )}
              </tr>
            `,
          )}
        </tbody>
      </table>
    </div>
  `;
}
