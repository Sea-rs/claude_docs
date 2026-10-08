import { html, escapeHtml, stripTags } from './html.js';
import { createProgressBar } from '../components/ui/ProgressBar/ProgressBar.js';
import { createControls } from '../components/ui/Controls/Controls.js';
import { createTocPanel } from '../components/ui/TocPanel/TocPanel.js';
import { createVideoModal } from '../components/ui/VideoModal/VideoModal.js';
import './Deck.scss';

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;
const IDLE_DELAY_MS = 2500;
const SWIPE_THRESHOLD_PX = 50;

const NEXT_KEYS = ['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'];
const PREV_KEYS = ['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'];

/**
 * スライドを並べて表示し、キーボード・ボタン・スワイプでのページ送りを担当する。
 * slides は { title, section, layout, html } の配列（src/slides を参照）。
 */
export class Deck {
  constructor(root, slides) {
    this.root = root;
    this.slides = slides;
    this.index = 0;
    this.idleTimer = null;
  }

  mount() {
    const total = this.slides.length;

    this.root.innerHTML = html`
      <div class="deck">
        <div class="deck__viewport">
          <div class="deck__stage">
            ${this.slides.map(
              (slide, i) => html`
                <section
                  class="slide slide--${slide.layout}"
                  aria-roledescription="slide"
                  aria-label="${i + 1} / ${total}: ${escapeHtml(stripTags(slide.title))}"
                >
                  ${slide.html}
                </section>
              `,
            )}
          </div>
        </div>
      </div>
    `;

    this.deckEl = this.root.querySelector('.deck');
    this.slideEls = [...this.root.querySelectorAll('.slide')];

    this.progress = createProgressBar();
    this.controls = createControls({
      onPrev: () => this.prev(),
      onNext: () => this.next(),
      onToc: () => this.toc.toggle(),
      onFullscreen: () => this.toggleFullscreen(),
    });
    this.toc = createTocPanel({
      slides: this.slides,
      onSelect: (i) => {
        this.go(i);
        this.toc.close();
      },
    });
    this.videoModal = createVideoModal();
    this.deckEl.append(this.progress.el, this.controls.el, this.toc.el, this.videoModal.el);

    this.bindEvents();
    this.fit();
    this.go(this.indexFromHash());
    this.wake();
  }

  go(index) {
    const total = this.slides.length;
    this.index = Math.min(Math.max(index, 0), total - 1);

    this.slideEls.forEach((el, i) => {
      el.classList.toggle('is-active', i === this.index);
      el.classList.toggle('is-before', i < this.index);
      el.classList.toggle('is-after', i > this.index);
      el.inert = i !== this.index;
    });

    this.progress.update(this.index, total);
    this.controls.update(this.index, total);
    this.toc.update(this.index);
    history.replaceState(null, '', `#/${this.index + 1}`);
  }

  next() {
    this.go(this.index + 1);
  }

  prev() {
    this.go(this.index - 1);
  }

  indexFromHash() {
    const match = location.hash.match(/^#\/(\d+)$/);
    return match ? Number(match[1]) - 1 : 0;
  }

  // 1280x720 のステージを、画面いっぱいに収まるよう拡大縮小する
  fit() {
    const scale = Math.min(window.innerWidth / SLIDE_WIDTH, window.innerHeight / SLIDE_HEIGHT);
    this.deckEl.style.setProperty('--deck-scale', scale);
  }

  toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen?.();
    }
  }

  // マウスを動かしていない間は操作ボタンを隠して、スライドに集中できるようにする
  wake() {
    this.deckEl.classList.remove('is-idle');
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => this.deckEl.classList.add('is-idle'), IDLE_DELAY_MS);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.fit());
    window.addEventListener('hashchange', () => this.go(this.indexFromHash()));
    window.addEventListener('keydown', (e) => this.onKeydown(e));
    window.addEventListener('pointermove', () => this.wake());

    // 動画サムネ（VideoThumb）のクリックでモーダルを開く
    this.deckEl.addEventListener('click', (e) => {
      const thumb = e.target.closest('[data-video-src]');
      if (!thumb) return;
      this.videoModal.open({
        src: thumb.dataset.videoSrc,
        title: thumb.dataset.videoTitle,
        trigger: thumb,
      });
    });

    // サムネ画像・動画を読み込めなかったときは、「見つかりません」の案内に切り替える
    // （error イベントはバブリングしないので、キャプチャ段階で受ける）
    this.deckEl.addEventListener(
      'error',
      (e) => e.target.closest?.('.video-thumb')?.classList.add('is-missing'),
      true,
    );

    let touchStartX = null;
    this.deckEl.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.touches[0].clientX;
      },
      { passive: true },
    );
    this.deckEl.addEventListener('touchend', (e) => {
      if (touchStartX === null || this.videoModal.isOpen()) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > SWIPE_THRESHOLD_PX) {
        dx < 0 ? this.next() : this.prev();
      }
      touchStartX = null;
    });
  }

  onKeydown(e) {
    // 動画モーダルを開いている間は、スライド送りなどのキー操作を止める
    // （Space・矢印キーは動画プレイヤー自身の操作に使われる）
    if (this.videoModal.isOpen()) {
      if (e.key === 'Escape') this.videoModal.close();
      return;
    }

    if (e.altKey || e.ctrlKey || e.metaKey) return;

    if (e.key === 'Escape' && this.toc.isOpen()) {
      this.toc.close();
      return;
    }
    if (e.key === 't' || e.key === 'T') {
      this.toc.toggle();
      return;
    }
    if (this.toc.isOpen()) return;

    // ボタンにフォーカスがあるときの Enter / Space はボタン自身の操作を優先する
    const onButton = e.target instanceof HTMLElement && e.target.closest('button, a');
    if (onButton && (e.key === 'Enter' || e.key === ' ')) return;

    if (NEXT_KEYS.includes(e.key)) {
      e.preventDefault();
      this.next();
    } else if (PREV_KEYS.includes(e.key)) {
      e.preventDefault();
      this.prev();
    } else if (e.key === 'Home') {
      this.go(0);
    } else if (e.key === 'End') {
      this.go(this.slides.length - 1);
    } else if (e.key === 'f' || e.key === 'F') {
      this.toggleFullscreen();
    }
  }
}
