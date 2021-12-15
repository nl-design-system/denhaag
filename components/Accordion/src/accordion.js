const AccordionScripts = (className = 'denhaag-accordion') => {
  /**
   * All accordion click events, which includes opening and closing the accordion.
   * @param accordion
   */
  function clickEvents(accordion) {
    // Close accordion.
    accordion.onclick = (el) => toggleAccordion(el.closest('.denhaag-accordion'));
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
