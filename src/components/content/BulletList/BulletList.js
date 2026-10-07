import { html } from '../../../core/html.js';
import './BulletList.scss';

/**
 * 箇条書き。項目は文字列、または { text, sub: string[] } で入れ子にできる。
 * @param {{ heading?: string, items: Array<string | { text: string, sub?: string[] }>, numbered?: boolean }} props
 */
export function BulletList({ heading, items, numbered = false }) {
  const tag = numbered ? 'ol' : 'ul';
  return html`
    <div class="bullet-list ${numbered ? 'bullet-list--numbered' : ''}">
      ${heading && html`<h3 class="bullet-list__heading">${heading}</h3>`}
      <${tag} class="bullet-list__items">
        ${items.map((item) => {
          const { text, sub } = typeof item === 'string' ? { text: item } : item;
          return html`
            <li class="bullet-list__item">
              ${text}
              ${sub && html`<ul class="bullet-list__sub">${sub.map((s) => html`<li>${s}</li>`)}</ul>`}
            </li>
          `;
        })}
      </${tag}>
    </div>
  `;
}
