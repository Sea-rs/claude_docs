import { html } from '../../../core/html.js';
import './Timeline.scss';

/**
 * 横向きのタイムライン
 * @param {{ items: Array<{ time: string, title: string, text?: string, tone?: string }> }} props
 */
export function Timeline({ items }) {
  return html`
    <ol class="timeline">
      ${items.map(
        ({ time, title, text, tone = 'accent' }) => html`
          <li class="timeline__item timeline__item--${tone}">
            <p class="timeline__time">${time}</p>
            <span class="timeline__dot" aria-hidden="true"></span>
            <p class="timeline__title">${title}</p>
            ${text && html`<p class="timeline__text">${text}</p>`}
          </li>
        `,
      )}
    </ol>
  `;
}
