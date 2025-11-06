export default class Accordion {
  constructor(className = 'denhaag-accordion__container') {
    this.collapses = document.getElementsByClassName(className);

    this.events();
  }

  events() {
    if (!this.collapses || !this.collapses.length) {
      return;
    }

    Array.from(this.collapses).forEach((collapse) =>
      collapse.addEventListener('toggle', () => this.toggleAttributes(collapse)),
    );
  }

  toggleAttributes(collapse) {
    if (!collapse) return;
    const collapseButton = collapse.querySelector('.denhaag-accordion__panel');
    const collapseContent = collapse.querySelector('.denhaag-accordion__details');

    const isCollapseOpen = collapse.open;

    collapseButton.setAttribute('aria-expanded', !!isCollapseOpen);

    collapseContent.inert = !isCollapseOpen;
  }
}
