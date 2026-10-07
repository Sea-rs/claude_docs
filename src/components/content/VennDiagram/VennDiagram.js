import { html } from '../../../core/html.js';
import './VennDiagram.scss';

function renderLayer(layers, depth) {
  const [layer, ...rest] = layers;
  return html`
    <div class="venn__layer venn__layer--${depth} ${rest.length ? '' : 'is-innermost'}">
      <p class="venn__label">
        <span class="venn__name">${layer.label}</span>
        ${layer.sub && html`<code class="venn__sub">${layer.sub}</code>`}
      </p>
      ${rest.length > 0 && renderLayer(rest, depth + 1)}
    </div>
  `;
}

/**
 * 範囲の包含関係を示す入れ子の円（ベン図）。補足用の小さな図。
 * layers は外側（広い範囲）から内側（狭い範囲）の順に渡す。
 * @param {{ layers: Array<{ label: string, sub?: string }>, caption?: string, size?: number }} props
 */
export function VennDiagram({ layers, caption, size = 280 }) {
  return html`
    <figure class="venn" style="--size: ${size}px">
      <div class="venn__circles">${renderLayer(layers, 0)}</div>
      ${caption && html`<figcaption class="venn__caption">${caption}</figcaption>`}
    </figure>
  `;
}
