const Tooltips = (htmlClass = '.denhaag-breadcrumb__item--hidden .denhaag-breadcrumb__text') => {
  // define elements by html class
  const tooltips = document.querySelectorAll(htmlClass);

  [...tooltips]?.forEach((tooltip) => {
    // 1.  get width of every tooltip
    const tooltipWidth = tooltip.offsetWidth;

    // 2. get positioning values
    const calculateTooltipPositioning = -1 * (tooltipWidth / 2.5);
    const tooltipPositioning = `${calculateTooltipPositioning}px`;

    // 3. correct positions of tooltip text block + block arrow
    tooltip.style.left = tooltipPositioning;
  });
};

export default Tooltips;
