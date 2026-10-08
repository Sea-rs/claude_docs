import './VideoModal.scss';

/**
 * 動画を再生するモーダル。ページに1つだけ作り、open() のたびに動画を差し替える。
 * - Esc・背景クリック・×ボタンで閉じる（閉じると再生を止めて、開いたボタンにフォーカスを戻す）
 * - 開いている間は Tab キーのフォーカスをモーダルの中に閉じ込める
 */
export function createVideoModal() {
  const el = document.createElement('div');
  el.className = 'video-modal';
  el.hidden = true;
  el.innerHTML = `
    <div class="video-modal__backdrop" data-close></div>
    <div class="video-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
      <div class="video-modal__header">
        <p class="video-modal__title" id="video-modal-title"></p>
        <button type="button" class="video-modal__close" data-close aria-label="動画を閉じる">×</button>
      </div>
      <div class="video-modal__stage">
        <video class="video-modal__video" controls playsinline></video>
        <p class="video-modal__error" role="alert" hidden>
          動画を読み込めませんでした。<br />
          <code class="video-modal__path"></code><br />
          <span>public/videos/ にファイルがあるか、ファイル名が合っているか確認してください。</span>
        </p>
      </div>
    </div>
  `;

  const video = el.querySelector('video');
  const title = el.querySelector('.video-modal__title');
  const closeButton = el.querySelector('.video-modal__close');
  const errorBox = el.querySelector('.video-modal__error');
  const errorPath = el.querySelector('.video-modal__path');
  let trigger = null;

  const showError = () => {
    errorPath.textContent = video.getAttribute('src') || '';
    errorBox.hidden = false;
    video.hidden = true;
    // サムネ側にも「見つかりません」を出す
    trigger?.closest('.video-thumb')?.classList.add('is-missing');
  };
  video.addEventListener('error', showError);

  const api = {
    el,
    isOpen: () => !el.hidden,

    open({ src, title: text, trigger: opener }) {
      trigger = opener ?? null;
      title.textContent = text ?? '';
      errorBox.hidden = true;
      video.hidden = false;
      video.src = src;
      el.hidden = false;
      document.body.classList.add('has-video-modal');
      closeButton.focus();
      video.play().catch(() => {
        // 自動再生をブラウザに止められた場合は、再生ボタンを押してもらう
      });
    },

    close() {
      if (el.hidden) return;
      video.pause();
      // src を外して、バッファや通信を解放する
      video.removeAttribute('src');
      video.load();
      el.hidden = true;
      document.body.classList.remove('has-video-modal');
      trigger?.focus();
      trigger = null;
    },
  };

  el.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) api.close();
  });

  // Tab キーでモーダルの外に出ないようにする
  el.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = [closeButton, ...(video.hidden ? [] : [video])];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  return api;
}
