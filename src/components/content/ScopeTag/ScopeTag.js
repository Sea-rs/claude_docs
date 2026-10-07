import { html } from '../../../core/html.js';
import './ScopeTag.scss';

/**
 * 「どの製品で使える内容か」を示すラベルの種類。
 *   code … Claude Code でだけ使える
 *   chat … claude.ai（Web・デスクトップ・モバイルのチャット）でだけ使える
 *   both … どちらでも使える
 */
const SCOPES = {
  code: { tone: 'accent', label: 'Claude Code 専用', short: 'Code 専用', description: 'Claude Code（VS Code 拡張機能・ターミナル）でだけ使える機能' },
  chat: { tone: 'blue', label: 'claude.ai 専用', short: 'claude.ai 専用', description: 'claude.ai（Web・デスクトップ・モバイルのチャット）でだけ使える機能' },
  both: { tone: 'green', label: 'どちらでも使える', short: '共通', description: 'claude.ai でも Claude Code でも使える考え方・機能' },
};

/**
 * ラベル1個。スライドの見出し脇には通常サイズ、表やカードの中には compact を使う。
 * @param {'code'|'chat'|'both'} scope
 * @param {{ compact?: boolean }} [options]
 */
export function ScopeTag(scope, { compact = false } = {}) {
  const { tone, label, short } = SCOPES[scope];
  return html`<span class="scope-tag scope-tag--${tone} ${compact ? 'scope-tag--compact' : ''}">${compact ? short : label}</span>`;
}

/** 3種類のラベルの意味を並べた凡例 */
export function ScopeLegend() {
  return html`
    <ul class="scope-legend">
      ${['both', 'chat', 'code'].map(
        (scope) => html`
          <li class="scope-legend__row">
            ${ScopeTag(scope)}
            <span class="scope-legend__text">${SCOPES[scope].description}</span>
          </li>
        `,
      )}
    </ul>
  `;
}
