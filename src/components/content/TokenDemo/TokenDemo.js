import { html, escapeHtml } from '../../../core/html.js';
import './TokenDemo.scss';

/**
 * 文章がトークンに分割される様子を色分けで見せる
 * @param {{ examples: Array<{ label: string, tokens: string[] }> }} props
 */
export function TokenDemo({ examples }) {
  return html`
    <div class="token-demo">
      ${examples.map(
        ({ label, tokens }) => html`
          <div class="token-demo__row">
            <p class="token-demo__label">${label}</p>
            <p class="token-demo__tokens">
              ${tokens.map(
                (token, i) =>
                  html`<span class="token-demo__token token-demo__token--${i % 4}">${escapeHtml(token).replace(/ /g, '␣')}</span>`,
              )}
            </p>
            <p class="token-demo__count"><strong>${tokens.length}</strong> トークン</p>
          </div>
        `,
      )}
    </div>
  `;
}
