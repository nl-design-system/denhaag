const AccordionToggle = (className = 'denhaag-accordion__title') => {
  // Select all clickable elements.
  [...document.getElementsByClassName(className)]?.forEach((element) => {
    const parent = element.closest('.denhaag-accordion__container');
    let accordionHeight = `${parent.querySelector('.denhaag-accordion__details-content').offsetHeight}px`;

    const setAccordionHeight = (el, newHeight) => {
      el.style.setProperty('--denhaag-accordion-details-max-height', newHeight);
    };

    // Set max-height property.
    if (parent.querySelector('.denhaag-accordion__details-content')) {
      setAccordionHeight(parent, accordionHeight);
    }

    // Toggle accordion-item.
    element.onclick = () => {
      const expanded = element.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';

      if (expanded === 'false') {
        // Return correct height to show closing animation
        setAccordionHeight(parent, accordionHeight);

        setTimeout(() => {
          parent.classList.toggle('denhaag-accordion__container--open');
        }, 50);
      }

      if (expanded === 'true') {
        parent.classList.toggle('denhaag-accordion__container--open');

        // Wait 500 ms (transition duration) to set height to auto, to ensure the animation works
        setTimeout(() => {
          setAccordionHeight(parent, 'auto');
        }, 500);
      }

      // Set opposite aria-expanded.
      element.setAttribute('aria-expanded', expanded);
    };
  });
};

export default AccordionToggle;
