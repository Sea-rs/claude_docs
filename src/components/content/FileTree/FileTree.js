import { html } from '../../../core/html.js';
import './FileTree.scss';

/**
 * フォルダ構成図
 * @param {{ entries: Array<{ name: string, depth?: number, dir?: boolean, note?: string, highlight?: boolean }> }} props
 */
export function FileTree({ entries }) {
  return html`
    <ul class="file-tree">
      ${entries.map(
        ({ name, depth = 0, dir = false, note, highlight = false }) => html`
          <li
            class="file-tree__row ${dir ? 'is-dir' : 'is-file'} ${highlight ? 'is-highlight' : ''}"
            style="--depth: ${depth}"
          >
            <span class="file-tree__name">${name}</span>
            ${note && html`<span class="file-tree__note">${note}</span>`}
          </li>
        `,
      )}
    </ul>
  `;
}
