const AccordionToggle = (className = 'denhaag-accordion__title') => {
  // Select all clickable elements.
  [...document.getElementsByClassName(className)]?.forEach((element) => {
    const wrapper = element.closest('.denhaag-accordion__container');
    let accordionHeight = `${wrapper.querySelector('.denhaag-accordion__details-content').offsetHeight}px`;

    const setAccordionHeight = (el, newHeight) => {
      el.style.setProperty('--denhaag-accordion-details-max-height', newHeight);
    };

    const setAccordionDisplay = (el, value) => {
      const content = el.querySelector('.denhaag-accordion__details');
      content.style.display = value;
    };

    // Set max-height property.
    if (wrapper.querySelector('.denhaag-accordion__details-content')) {
      setAccordionHeight(wrapper, accordionHeight);
    }

    // Toggle accordion-item.
    element.onclick = () => {
      const expanded = element.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';

      if (expanded === 'false') {
        // Return correct height to show closing animation
        setAccordionHeight(wrapper, accordionHeight);

        setTimeout(() => {
          wrapper.classList.toggle('denhaag-accordion__container--open');
        }, 50);

        setTimeout(() => {
          setAccordionDisplay(wrapper, 'none');
        }, 500);
      }

      if (expanded === 'true') {
        setAccordionDisplay(wrapper, 'block');
        setTimeout(() => {
          const dynamicHeight = `${wrapper.querySelector('.denhaag-accordion__details-content').offsetHeight}px`;
          accordionHeight = dynamicHeight;
          setAccordionHeight(wrapper, dynamicHeight);
          wrapper.classList.toggle('denhaag-accordion__container--open');
        }, 50);

        // Wait 500 ms (transition duration) to set height to auto, to ensure the animation works
        setTimeout(() => {
          setAccordionHeight(wrapper, 'auto');
        }, 550);
      }

      // Set opposite aria-expanded.
      element.setAttribute('aria-expanded', expanded);
    };
  });
};

export default AccordionToggle;
