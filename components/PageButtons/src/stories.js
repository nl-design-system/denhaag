window.addEventListener('DOMContentLoaded', async () =>
  document.querySelectorAll('.denhaag-page-buttons')?.forEach((wrapper) => {
    const toggle = wrapper.querySelector('[aria-controls]');
    if (!toggle) return;

    const panel = document.getElementById(toggle.getAttribute('aria-controls'));
    if (!panel) return;

    const getFocusables = () => [toggle, ...panel.querySelectorAll('a, button')];
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    };

    const navigate = (offset, e) => {
      const items = getFocusables();
      const i = items.indexOf(e.target);
      if (i < 0) return;
      e.preventDefault();
      items[(i + offset + items.length) % items.length].focus();
    };

    wrapper.addEventListener('keydown', (e) => {
      console.log(e);

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'ArrowRight':
          navigate(1, e);
          break;
        case 'ArrowLeft':
          navigate(-1, e);
          break;
        case 'Home':
          e.preventDefault();
          getFocusables().at(0)?.focus();
          break;
        case 'End':
          e.preventDefault();
          getFocusables().at(-1)?.focus();
          break;
      }
    });

    toggle.addEventListener('click', () =>
      toggle.setAttribute('aria-expanded', toggle.getAttribute('aria-expanded') !== 'true'),
    );
  }),
);
