const AccordionToggle = (className = '.denhaag-accordion__title') => {
  if (!className) {
    return;
  }

  // select all clickable elements
  const clickableElements = document.querySelectorAll(className);

  // toggle navigation
  [...clickableElements]?.forEach((element) => {
    element.onclick = () => {
      let expanded = element.getAttribute('aria-expanded');
      element.closest('.denhaag-accordion__container').classList.toggle('denhaag-accordion__container--open');
      if (expanded === 'false') {
        expanded = 'true';
      } else {
        expanded = 'false';
      }
      element.setAttribute('aria-expanded', expanded);
    };
  });
};

export default AccordionToggle;
