import { html } from '../../../core/html.js';
import './Columns.scss';

/**
 * 2カラムのレイアウト
 * @param {{ left: string | string[], right: string | string[], ratio?: string, align?: 'start'|'center' }} props
 *   ratio は grid-template-columns の値（例: '1fr 1fr', '3fr 2fr'）
 */
export function Columns({ left, right, ratio = '1fr 1fr', align = 'start' }) {
  return html`
    <div class="columns columns--${align}" style="--ratio: ${ratio}">
      <div class="columns__col">${left}</div>
      <div class="columns__col">${right}</div>
    </div>
  `;
}
