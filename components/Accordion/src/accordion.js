const AccordionScripts = (className = 'denhaag-accordion') => {
  /**
   * All accordion click events, which includes opening and closing the accordion.
   * @param accordion
   */
  function clickEvents(accordion) {
    // Close closest accordion.
    Array.from(accordion.querySelectorAll('[data-accordion-toggle]')).forEach((el) => {
      el.onclick = () => toggleAccordion(el.closest('.denhaag-accordion'));
    });

    if (!accordion.getAttribute('id')) {
      console.warn("Accordion doesn't have the ID attribute which is required to open and close the accordion.");
      return;
    }

    // Toggle the accordion based on trigger with ID.
    document.querySelectorAll(`[data-accordion-toggle="${accordion.getAttribute('id')}"]`).forEach((el) => {
      el.onclick = () => toggleAccordion(accordion);
    });
  }

  /**
   * Toggle the accordion.
   * @param {object} accordion.
   */
  function toggleAccordion(accordion) {
    accordion.classList.toggle(`${accordionSelector}--open`);
  }

  // initiate classes
  const accordions = document.getElementsByClassName(className);
  // check if accordions are there
  if (!accordions || accordions.length === 0 || typeof accordions !== 'object') {
    // Nothing to see here.
    return;
  }
  const accordionSelector = className;
  // Loop through all accordions.
  accordions.forEach((accordion) => clickEvents(accordion));
};

export default AccordionScripts;
