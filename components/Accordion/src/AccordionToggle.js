const AccordionToggle = (className = '.denhaag-accordion__title') => {
  // Select all clickable elements.
  const clickableElements = document.querySelectorAll(className);

  // Toggle navigation.
  [...clickableElements]?.forEach((element) => {
    const parent = element.closest('.denhaag-accordion__container');

    if (parent.querySelector('.denhaag-accordion__details-content')) {
      parent.style.setProperty(
        '--denhaag-accordion-details-max-height',
        `${parent.querySelector('.denhaag-accordion__details-content').offsetHeight}px`,
      );
    }

    console.log(parent.querySelector('.denhaag-accordion__details'));

    element.onclick = () => {
      const expanded = element.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';

      parent.classList.toggle('denhaag-accordion__container--open');

      // Set opposite aria-expanded.
      element.setAttribute('aria-expanded', expanded);
    };
  });
};

export default AccordionToggle;
