export default class Accordion {
  constructor(className = 'denhaag-accordion__container') {
    this.collapses = document.getElementsByClassName(className);
    this.summaries = [];

    this.events();
  }

  events() {
    if (!this.collapses || !this.collapses.length) {
      return;
    }

    Array.from(this.collapses)?.forEach((collapse, index) => {
      collapse.addEventListener('toggle', () => this.toggleAttributes(collapse));

      const header = collapse?.querySelector('.denhaag-accordion__panel');
      if (header) {
        this.summaries.push(header);
        header.addEventListener('keydown', (event) => this.handleKeydown(event, index));
      }
    });
  }

  /**
   * Handle keyboard navigation within the accordion.
   *
   * @param {object} event The keyboard event object.
   * @param {number} index The index of the current accordion item.
   */
  handleKeydown(event, index) {
    let targetIndex;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        targetIndex = (index + 1) % this.summaries.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        targetIndex = (index - 1 + this.summaries.length) % this.summaries.length;
        break;
      case 'Home':
        event.preventDefault();
        targetIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        targetIndex = this.summaries.length - 1;
        break;
      case 'ArrowLeft':
      case 'Escape':
        this.closeCollapse(this.collapses[index]);
        return;
      case 'ArrowRight':
        this.openCollapse(this.collapses[index]);
        return;
      default:
        // Do nothing for other keys.
        return;
    }

    this.summaries[targetIndex]?.focus();
  }

  /**
   * Toggle attributes based on the open state of the collapse.
   * @param {HTMLElement} collapse The collapse element.
   */
  toggleAttributes(collapse) {
    if (!collapse) return;

    const isCollapseOpen = collapse.open;
    isCollapseOpen ? this.openCollapse(collapse) : this.closeCollapse(collapse);
  }

  /**
   * Open the collapse.
   * @param {HTMLElement} collapse The collapse element.
   */
  openCollapse(collapse) {
    if (!collapse) return;
    const collapseButton = collapse.querySelector('.denhaag-accordion__panel');
    const collapseContent = collapse.querySelector('.denhaag-accordion__details');

    collapse.open = true;
    collapseButton.setAttribute('aria-expanded', 'true');
    collapseContent.inert = false;
  }

  /**
   * Close the collapse.
   * @param {HTMLElement} collapse The collapse element.
   */
  closeCollapse(collapse) {
    if (!collapse) return;
    const collapseButton = collapse.querySelector('.denhaag-accordion__panel');
    const collapseContent = collapse.querySelector('.denhaag-accordion__details');

    collapse.open = false;
    collapseButton.setAttribute('aria-expanded', 'false');
    collapseContent.inert = true;
  }
}
