export default class FloatingContact {
  constructor(id = 'denhaag-floating-contact') {
    if (!id) {
      console.warn(`FloatingContact: No ID provided.`);
      return;
    }

    this.element = document.getElementById(id);

    if (!this.element) {
      console.warn(`FloatingContact: No element with the ID: ${id}`);
      return;
    }

    this.toggle = document.getElementById(`${id}-switch`);

    if (!this.toggle) {
      console.warn(`FloatingContact: No element with the ID: ${id}-switch`);
      return;
    }

    this.labelWrapper = document.getElementById(`${id}__label`);

    if (!this.toggle) {
      console.warn(`FloatingContact: No element with the ID: ${id}__label`);
      return;
    }

    this.links = [...this.element.getElementsByClassName(`${id}__item-link`)];

    this.toggle.onclick = () => this.toggleEvents();
  }

  /**
   * Toggle event. Fires onclick of the label.
   */
  toggleEvents() {
    const open = this.toggle.getAttribute('aria-expanded') === 'false';
    this.toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    this.labelWrapper.innerHTML = open ? this.toggle.dataset.labelClose : this.toggle.dataset.labelOpen;
    this.links.forEach((link) => (link.tabIndex = open ? 0 : -1));
  }
}
