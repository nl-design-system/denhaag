const TableScroll = (
  scrollButtonsContainerClassName = '.denhaag-table__scroll-buttons',
  scrollButtonsClassName = '.denhaag-table__scroll-buttons .denhaag-button',
  scrollButtonLeft = 'denhaag-table__scroll-buttons-left',
  scrollButtonRight = 'denhaag-table__scroll-buttons-right',
  tableClassName = '.denhaag-table__table',
  tableContainerClassname = '.denhaag-table__container',
  tableBlockClassname = '.denhaag-table',
) => {
  // select elements to interact with
  const tableContainers = document.querySelectorAll(tableContainerClassname);

  // essential for calculation
  let xPosition = 0;
  let scrollUnit;
  let tableColumnTotal;
  let tableContainerWidth;
  let tableWidth;
  let scrollableArea;

  // disable/enable scroll navigation depending on scroll area existance
  const toggleScrollNavigation = (tableBlock, scrollableArea) => {
    if (scrollableArea === 0) {
      tableBlock
        ?.querySelector(scrollButtonsContainerClassName)
        ?.classList.add('denhaag-table__scroll-buttons--disabled');
    } else {
      tableBlock
        ?.querySelector(scrollButtonsContainerClassName)
        ?.classList.remove('denhaag-table__scroll-buttons--disabled');
    }
  };

  // set button to disabled if reaching begin or end horizontal scrolling
  const toggleDisableButton = (tableBlock) => {
    const buttons = tableBlock?.querySelectorAll(scrollButtonsClassName);

    // disable button right
    if (xPosition === scrollableArea) {
      tableBlock?.querySelector(`.${scrollButtonRight}`)?.setAttribute('disabled', '');
    }

    // disable button left
    if (xPosition === 0) {
      tableBlock?.querySelector(`.${scrollButtonLeft}`)?.setAttribute('disabled', '');
    }

    // enable button
    if (xPosition > 0 && xPosition < scrollableArea) {
      [...buttons]?.forEach((button) => {
        button?.removeAttribute('disabled');
      });
    }
  };

  // register scroll event update position
  const updateScrollPosition = () => {
    [...tableContainers]?.forEach((container) => {
      // initial toggle button
      toggleDisableButton(container?.closest(tableBlockClassname));

      // table container scroll
      container.onscroll = () => {
        // update position
        xPosition = container?.scrollLeft;

        // scroll delay
        setTimeout(() => {
          // update toggle button after scroll
          toggleDisableButton(container?.closest(tableBlockClassname));
        }, 150);
      };
    });
  };
  // initialize scroll position update
  updateScrollPosition();

  // setup table data for click scroll
  [...tableContainers]?.forEach((container) => {
    // select elements to interact with
    const tableBlock = container?.closest(tableBlockClassname);
    const buttons = tableBlock?.querySelectorAll(scrollButtonsClassName);

    // number of columns in table
    tableColumnTotal = tableBlock?.querySelector(tableClassName)?.rows[0]?.cells?.length;

    // table container width
    tableContainerWidth = tableBlock?.querySelector(tableContainerClassname)?.offsetWidth;

    // table width
    tableWidth = tableBlock?.querySelector(tableClassName)?.scrollWidth;

    // scroll area, the amount of horizontal space not visible
    scrollableArea = tableWidth - tableContainerWidth;

    // disable/enable scroll navigation depending on scroll area existance
    toggleScrollNavigation(tableBlock, scrollableArea);

    // scroll unit per click
    scrollUnit = (scrollableArea / tableColumnTotal) * 3;

    [...buttons]?.forEach((button) => {
      button.onclick = () => {
        // scroll amount for right and left buttons
        const scrollAmountRight = xPosition + scrollUnit;
        const scrollAmountLeft = xPosition - scrollUnit;

        //scroll to right
        if (button?.classList?.contains(scrollButtonRight)) {
          tableBlock?.querySelector(tableContainerClassname)?.scroll({ left: scrollAmountRight, behavior: 'smooth' });
        }

        //scroll to left
        if (button.classList.contains(scrollButtonLeft)) {
          tableBlock?.querySelector(tableContainerClassname)?.scroll({ left: scrollAmountLeft, behavior: 'smooth' });
        }
      };
    });
  });
};

export default TableScroll;
