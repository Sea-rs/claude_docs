import { html } from '../../../core/html.js';
import './Callout.scss';

const TYPES = {
  tip: { tone: 'green', label: 'ポイント' },
  info: { tone: 'blue', label: '補足' },
  warn: { tone: 'yellow', label: '注意' },
};

/**
 * 補足・注意などの囲み
 * @param {{ type?: 'tip'|'info'|'warn', title?: string, text: string }} props
 */
export function Callout({ type = 'info', title, text }) {
  const { tone, label } = TYPES[type];
  return html`
    <aside class="callout callout--${tone}">
      <p class="callout__label">${label}</p>
      <div class="callout__content">
        ${title && html`<p class="callout__title">${title}</p>`}
        <p class="callout__text">${text}</p>
      </div>
    </aside>
  `;
}
