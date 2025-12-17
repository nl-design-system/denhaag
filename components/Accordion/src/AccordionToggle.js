/* global WeakSet */
class Accordion {
  constructor(className = 'denhaag-accordion__container') {
    this.debug = this.isDebugMode();
    this.eventPrefix = 'nlds-accordion';
    this.className = className;

    this.collapses = [];
    this.summaries = [];
    this.initialized = new WeakSet();

    this.setupEventListeners();
  }

  /**
   * Setup any additional event listeners if needed.
   */
  setupEventListeners() {
    window.addEventListener(`${this.eventPrefix}:init`, this.initialize.bind(this));
    window.addEventListener(`${this.eventPrefix}:reinit`, this.reinitialize.bind(this));
    window.addEventListener(`${this.eventPrefix}:toggleDebug`, this.toggleDebugMode.bind(this));

    window.addEventListener(`${this.eventPrefix}:open`, (event) => this.openCollapse(event?.detail?.collapse));
    window.addEventListener(`${this.eventPrefix}:close`, (event) => this.closeCollapse(event?.detail?.collapse));
  }

  /**
   * Initialize the accordion functionality.
   */
  initialize() {
    if (!this.className) {
      if (this.debug) console.warn('Accordion className is not defined.');
      return;
    }

    this.collapses = document.getElementsByClassName(this.className);
    this.summaries = [];

    if (!this.collapses || !this.collapses.length) {
      return;
    }

    Array.from(this.collapses)?.forEach((collapse) => {
      const isNew = !this.initialized.has(collapse);
      const header = collapse?.querySelector('.denhaag-accordion__panel');

      if (header) {
        this.summaries.push(header);
        if (isNew) {
          header.addEventListener('keydown', (event) => this.handleKeydown(event, collapse));
        }
      }

      if (isNew) {
        this.initialized.add(collapse);
        collapse.addEventListener('toggle', () => this.toggleAttributes(collapse));
      }
    });

    if (this.initialized && this.debug) console.info(`Initialized accordion with ${this.collapses.length} items.`);
  }

  /**
   * Reinitialize the accordion, useful when new elements are added to the DOM.
   * Used within components like OWS.
   */
  reinitialize() {
    this.summaries = [];
    this.initialize();
  }

  /**
   * Dispatch a custom event with optional data.
   *
   * @param {string} name The name of the event to dispatch.
   * @param {Object} data Optional data to include with the event.
   */
  dispatchEvent(name, data = {}) {
    if (!name) {
      return;
    }

    if (this.debug) console.group(`Dispatching event: ${name}`);
    if (this.debug) console.info(data);

    // Split name on `:` to add prefix if missing. (internal or external event).
    let eventName = name;
    if (name.indexOf(':') === -1) {
      eventName = `${this.eventPrefix}:${name}`;
    }

    window.dispatchEvent(
      new CustomEvent(eventName, {
        detail: data,
        bubbles: true,
      }),
    );

    if (this.debug) console.groupEnd();
  }

  /**
   * Check if debug mode is enabled via URL parameter.
   *
   * @return {boolean}
   */
  isDebugMode() {
    return new URLSearchParams(window.location.search).get('debug') === 'nlds:accordion';
  }

  /**
   * Toggle debug mode on or off.
   */
  toggleDebugMode() {
    this.debug = !this.debug;
  }

  /**
   * Handle keyboard navigation within the accordion.
   *
   * @param {object} event The keyboard event object.
   * @param {HTMLElement} collapse The current accordion item.
   */
  handleKeydown(event, collapse) {
    const scope = collapse.closest('.denhaag-accordion');
    const scopedSummaries = scope
      ? Array.from(scope.querySelectorAll(':scope > .denhaag-accordion__container > .denhaag-accordion__panel'))
      : this.summaries;
    const index = scopedSummaries.indexOf(event.target);
    let targetIndex;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        targetIndex = (index + 1) % scopedSummaries.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        targetIndex = (index - 1 + scopedSummaries.length) % scopedSummaries.length;
        break;
      case 'Home':
        event.preventDefault();
        targetIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        targetIndex = scopedSummaries.length - 1;
        break;
      case 'ArrowLeft':
      case 'Escape':
        this.dispatchEvent('close', { collapse });
        return;
      case 'ArrowRight':
        this.dispatchEvent('open', { collapse });
        return;
      case ' ':
        event.preventDefault();
        this.dispatchEvent(!collapse.open ? 'open' : 'close', { collapse });
        return;
      default:
        return;
    }

    scopedSummaries[targetIndex]?.focus();
  }

  /**
   * Toggle attributes based on the open state of the collapse.
   * @param {HTMLElement} collapse The collapse element.
   */
  toggleAttributes(collapse) {
    if (!collapse) return;
    this.dispatchEvent(collapse.open ? 'open' : 'close', { collapse });
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

export default Accordion;
