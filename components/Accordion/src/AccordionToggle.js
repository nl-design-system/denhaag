const AccordionToggle = (className = 'denhaag-accordion__title') => {
  // Select all clickable elements.
  [...document.getElementsByClassName(className)]?.forEach((element) => {
    const parent = element.closest('.denhaag-accordion__container');

    // Set max-height property.
    if (parent.querySelector('.denhaag-accordion__details-content')) {
      parent.style.setProperty(
        '--denhaag-accordion-details-max-height',
        `${parent.querySelector('.denhaag-accordion__details-content').offsetHeight}px`,
      );
    }

    // Toggle accordion-item.
    element.onclick = () => {
      const expanded = element.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';
      parent.classList.toggle('denhaag-accordion__container--open');

      // Set opposite aria-expanded.
      element.setAttribute('aria-expanded', expanded);
    };
  });
};

export default AccordionToggle;
