export default class AnchorCollapses {
  constructor(className = 'denhaag-anchor-collapse') {
    this.panelClassName = className;
    this.contentClassName = `${className}__content`;
    this.summaryClassName = `${className}__summary`;
    this.panels = [];
  }

  /**
   * Set up event listeners for custom events to control collapse panels.
   */
  setupEventListeners() {
    window.addEventListener('anchorCollapse:toggle', (e) => {
      const panel = this.getPanel(e.detail.id);
      if (panel) {
        panel.open = !panel.open;
      }
    });

    window.addEventListener('anchorCollapse:open', (e) => this.openCollapse(e.detail.id));
    window.addEventListener('anchorCollapse:close', (e) => this.closeCollapse(e.detail.id));
    window.addEventListener('anchorCollapse:openAll', () => this.forceOpenAll());
    window.addEventListener('anchorCollapse:closeAll', () => this.forceCloseAll());
  }

  /**
   * Initialize the AnchorCollapses by selecting panels and setting up event listeners.
   */
  initialize() {
    this.panels = [...document.querySelectorAll(`.${this.panelClassName}`)];

    this.panels.forEach((panel) => {
      // Listen to native toggle event
      panel.addEventListener('toggle', () => this.updatePanelState(panel));

      // Handle Escape key in content
      panel.querySelector(`.${this.contentClassName}`)?.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
          e.preventDefault();
          panel.open = false;
          panel.querySelector(`.${this.summaryClassName}`)?.focus();
        }
      });
    });

    this.openOrCloseCollapses();
  }

  /**
   * Get a panel by its ID.
   * @param {string} id The ID of the panel.
   * @return {*}
   */
  getPanel(id) {
    return this.panels.find((panel) => panel.id === id);
  }

  /**
   * Update the state of a panel based on its open attribute.
   *
   * @param {HTMLElement} panel The panel to update.
   * @param {boolean} summaryInert The inert state for the summary element.
   */
  updatePanelState(panel, summaryInert = false) {
    const isOpen = panel.open;
    panel.setAttribute('aria-expanded', String(isOpen));

    const content = panel.querySelector(`.${this.contentClassName}`);
    if (content) {
      content.inert = !isOpen;
    }

    const summary = panel.querySelector(`.${this.summaryClassName}`);
    if (summary) {
      summary.inert = summaryInert;
    }
  }

  /**
   * Handle resize event to open or close collapses based on viewport size.
   */
  resize() {
    if (!this.panels.length) {
      return;
    }

    this.openOrCloseCollapses();
  }

  /**
   * Open or close collapse panels based on viewport size.
   */
  openOrCloseCollapses() {
    if (!this.panels.length) {
      return;
    }

    if (window.matchMedia('(min-width: 768px)').matches) {
      this.forceOpenAll();
    } else {
      this.forceCloseAll();
    }

    const { hash } = window.location;
    if (hash) {
      const cleanedHash = hash.replace('#', '');
      const targetPanel =
        this.getPanel(cleanedHash) || document.getElementById(cleanedHash)?.closest(`.${this.panelClassName}`);

      if (targetPanel) {
        this.openCollapse(targetPanel.id);
        setTimeout(() => targetPanel.scrollIntoView({ behavior: 'smooth' }), 300);
      }
    }
  }

  /**
   * Force open all collapse panels.
   */
  forceOpenAll() {
    if (!this.panels.length) {
      // Do nothing if there are no panels.
      return;
    }

    this.panels?.forEach((panel) => {
      panel.open = true;
      this.updatePanelState(panel, true);
    });
  }

  /**
   * Force close all collapse panels.
   */
  forceCloseAll() {
    if (!this.panels.length) {
      // Do nothing if there are no panels.
      return;
    }

    this.panels?.forEach((panel) => {
      panel.open = false;
      this.updatePanelState(panel, false);
    });
  }

  /**
   * Open a specific collapse panel by its ID.
   * @param {string} id The ID of the collapse panel to open.
   */
  openCollapse(id) {
    const panel = this.getPanel(id);
    if (panel && !panel.open) {
      panel.open = true;
    }
  }

  /**
   * Close a specific collapse panel by its ID.
   * @param {string} id The ID of the collapse panel to close.
   */
  closeCollapse(id) {
    const panel = this.getPanel(id);
    if (panel && panel.open) {
      panel.open = false;
    }
  }
}
