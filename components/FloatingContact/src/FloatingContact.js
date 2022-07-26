export default class FloatingContact {
  constructor(id = 'denhaag-floating-contact') {
    this.element = document.getElementById(id);

    if (!this.element) {
      return;
    }

    this.toggle = document.getElementById(`${id}-switch`);

    if (!this.toggle) {
      return;
    }

    this.labelWrapper = document.getElementById(`${id}__label`);

    if (!this.labelWrapper) {
      return;
    }

    this.links = [...this.element.getElementsByClassName(`${id}__item-link`)];
    this.toggle.onclick = () => this.toggleEvents();
    this.element.addEventListener('keydown', (event) => this.keyBoardEvents(event));
  }

  /**
   * Toggle event. Fires onclick of the label.
   */
  toggleEvents() {
    const state = this.toggle.getAttribute('aria-expanded') === 'false';
    this.toggle.setAttribute('aria-expanded', state ? 'true' : 'false');
    this.links.forEach((link) => (link.tabIndex = state ? 0 : -1));
  }

  keyBoardEvents(event) {
    const floatingContactSwitchExpanded = this.element
      .querySelector('.denhaag-floating-contact-switch')
      .getAttribute('aria-expanded');

    // escape key
    if (event.key === 'Escape' && floatingContactSwitchExpanded === 'true') {
      setTimeout(() => {
        this.toggleEvents();
        this.toggle.focus();
      }, 1);
    }

    // tab forwards
    if (!event.shiftKey && event.key === 'Tab' && floatingContactSwitchExpanded === 'true') {
      setTimeout(() => {
        // this must be located inside timeout, because of the key event delay
        const floatingContactItemLinkFocus = document.activeElement.classList.contains(
          'denhaag-floating-contact__item-link',
        );

        if (!floatingContactItemLinkFocus) {
          this.toggleEvents();
        }
      }, 1);
    }

    // tab backwards
    if (event.shiftKey && event.key === 'Tab') {
      setTimeout(() => {
        // this must be located inside timeout, because of the key event delay
        const floatingContactSwitchFocus = document.activeElement.classList.contains('denhaag-floating-contact-switch');
        const floatingContactItemLinkFocus = document.activeElement.classList.contains(
          'denhaag-floating-contact__item-link',
        );

        if (!floatingContactSwitchFocus && floatingContactSwitchExpanded === 'true' && !floatingContactItemLinkFocus) {
          this.toggleEvents();
        }
      }, 1);
    }
  }
}
