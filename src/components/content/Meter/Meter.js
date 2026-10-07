import { html } from '../../../core/html.js';
import './Meter.scss';

const formatK = (value) => `${Math.round(value / 1000)}K`;

/**
 * 積み上げ棒グラフ（コンテキストウィンドウの使用量などを表す）
 * tone を省略した区分は「空き」としてグレーで表示する。
 * @param {{ label: string, total: number, segments: Array<{ label: string, value: number, tone?: string }> }} props
 */
export function Meter({ label, total, segments }) {
  const used = segments.filter((s) => s.tone).reduce((sum, s) => sum + s.value, 0);

  return html`
    <figure class="meter">
      <figcaption class="meter__header">
        <span class="meter__label">${label}</span>
        <span class="meter__total">${formatK(used)} / ${formatK(total)} トークン使用中</span>
      </figcaption>
      <div class="meter__bar" role="img" aria-label="${label}: ${formatK(total)} 中 ${formatK(used)} を使用">
        ${segments.map(
          (s) => html`
            <span
              class="meter__segment ${s.tone ? `meter__segment--${s.tone}` : 'is-empty'}"
              style="--size: ${(s.value / total) * 100}%"
            ></span>
          `,
        )}
      </div>
      <ul class="meter__legend">
        ${segments.map(
          (s) => html`
            <li class="meter__legend-item">
              <span class="meter__swatch ${s.tone ? `meter__segment--${s.tone}` : 'is-empty'}"></span>
              <span>${s.label}</span>
              <span class="meter__value">${formatK(s.value)}</span>
            </li>
          `,
        )}
      </ul>
    </figure>
  `;
}
