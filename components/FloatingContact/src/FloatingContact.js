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
  }

  /**
   * Toggle event. Fires onclick of the label.
   */
  toggleEvents() {
    const state = this.toggle.getAttribute('aria-expanded') === 'false';
    this.toggle.setAttribute('aria-expanded', state ? 'true' : 'false');
    this.labelWrapper.innerHTML = state
      ? this.toggle?.dataset?.labelClose || 'Close'
      : this.toggle?.dataset?.labelOpen || 'Open';
    this.links.forEach((link) => (link.tabIndex = state ? 0 : -1));
  }
}
