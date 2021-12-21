export default class AccordionScripts {
  constructor(className = 'denhaag-accordion__panel') {
    // initiate classes
    this.accordionPanels = document.getElementsByClassName(className);

    // check if accordion panels are not there
    if (!this.accordionPanels || this.accordionPanels.length === 0 || typeof this.accordionPanels !== 'object') {
      // Nothing to see here.
      return;
    }

    this.accordionPanelSelector = className;

    // Loop through all accordion panels.
    this.accordionPanels.forEach((accordionPanel) => this.clickEvents(accordionPanel));
  }

  /**
   * All accordion click events, which includes opening and closing the accordion.
   * @param accordionPanel
   */
  clickEvents(accordionPanel) {
    // toggle accordion.
    accordionPanel.onclick = (el) => {
      this.toggleAccordion(el.target.closest(`.${this.accordionPanelSelector}`));
    };
  }

  /**
   * Toggle the accordion.
   * @param {object} accordionPanel.
   */
  toggleAccordion(accordionPanel) {
    accordionPanel.classList.toggle(`${this.accordionPanelSelector}--expanded`);
    accordionPanel.children.forEach((child) => child.classList.toggle(`${child.className}--expanded`));
    accordionPanel.nextElementSibling.classList.toggle(`${accordionPanel.nextElementSibling.className}--expanded`);

    // TO DO: fix toggle close accordion

    // TO DO: add toggle aria-expanded for the panel
  }
}
