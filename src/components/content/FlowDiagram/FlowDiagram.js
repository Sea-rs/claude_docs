import { html } from '../../../core/html.js';
import './FlowDiagram.scss';

/**
 * 処理の流れ図。loopLabel を渡すと「最初に戻る」矢印を表示する。
 * @param {{ steps: Array<{ title: string, text?: string }>, loopLabel?: string, direction?: 'horizontal'|'vertical' }} props
 */
export function FlowDiagram({ steps, loopLabel, direction = 'horizontal' }) {
  return html`
    <div class="flow flow--${direction} ${loopLabel ? 'flow--loop' : ''}">
      <ol class="flow__steps">
        ${steps.map(
          (step, i) => html`
            <li class="flow__step">
              <span class="flow__index">${i + 1}</span>
              <p class="flow__title">${step.title}</p>
              ${step.text && html`<p class="flow__text">${step.text}</p>`}
            </li>
          `,
        )}
      </ol>
      ${loopLabel && html`<p class="flow__loop"><span>${loopLabel}</span></p>`}
    </div>
  `;
}
