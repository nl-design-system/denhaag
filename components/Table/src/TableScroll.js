const TableScroll = (
  scrollButtonsContainerClassName = '.denhaag-table__scroll-buttons',
  scrollButtonsClassName = '.denhaag-table__scroll-buttons .denhaag-button',
  scrollButtonLeft = 'denhaag-table__scroll-buttons-left',
  scrollButtonRight = 'denhaag-table__scroll-buttons-right',
  scrollButtonsDisabled = 'denhaag-table__scroll-buttons--disabled',
  tableClassName = '.denhaag-table',
  tableContainerClassname = '.denhaag-table__container',
  tableWrapperClassname = '.denhaag-table-wrapper',
  containerShadowLeftClassName = '.denhaag-table__container-shadow--left',
  containerShadowRightClassName = '.denhaag-table__container-shadow--right',
  containerShadowDisabled = 'denhaag-table__container-shadow--disabled',
  containerShadowGroupClassName = '.denhaag-table__container-shadow-group',
) => {
  // select elements to interact with
  const tableContainers = document.querySelectorAll(tableContainerClassname);

  // essential return values for calculation
  const xPosition = (container) => container?.scrollLeft;
  const tableContainerWidth = (container) => container?.clientWidth;
  const tableWidth = (container) => container?.querySelector(tableClassName)?.clientWidth;
  const scrollableArea = (container) => tableWidth(container) - tableContainerWidth(container);
  const tableColumnTotal = (container) => container?.querySelector(tableClassName)?.rows[0]?.cells?.length;
  const scrollUnit = (container) => (scrollableArea(container) / tableColumnTotal(container)) * 3;

  // disable/enable scroll navigation depending on scroll area existance
  const toggleScrollNavigation = (tableWrapper, scrollableArea) => {
    if (scrollableArea === 0) {
      tableWrapper?.querySelector(scrollButtonsContainerClassName)?.classList.add(scrollButtonsDisabled);
    } else {
      tableWrapper?.querySelector(scrollButtonsContainerClassName)?.classList.remove(scrollButtonsDisabled);
    }
  };

  // set button to disabled if reaching begin or end horizontal scrolling
  const toggleDisableButton = (tableWrapper) => {
    const buttons = tableWrapper?.querySelectorAll(scrollButtonsClassName);
    const container = tableWrapper?.querySelector(tableContainerClassname);

    // disable button right + shadow right
    if (xPosition(container) === scrollableArea(container)) {
      tableWrapper?.querySelector(`.${scrollButtonRight}`)?.setAttribute('disabled', '');
      tableWrapper?.querySelector(containerShadowRightClassName)?.classList.add(containerShadowDisabled);
    }

    // disable button left + shadow left
    if (xPosition(container) === 0) {
      tableWrapper?.querySelector(`.${scrollButtonLeft}`)?.setAttribute('disabled', '');
      tableWrapper?.querySelector(containerShadowLeftClassName)?.classList.add(containerShadowDisabled);
    }

    // enable button + shadows left and right
    if (xPosition(container) > 0 && xPosition(container) < scrollableArea(container)) {
      [...buttons]?.forEach((button) => {
        button?.removeAttribute('disabled');
        tableWrapper?.querySelector(containerShadowRightClassName)?.classList.remove(containerShadowDisabled);
        tableWrapper?.querySelector(containerShadowLeftClassName)?.classList.remove(containerShadowDisabled);
      });
    }
  };

  // setup table scroll + button click scroll
  [...tableContainers]?.forEach((container) => {
    // select elements to interact with
    const tableWrapper = container?.closest(tableWrapperClassname);
    const buttons = tableWrapper?.querySelectorAll(scrollButtonsClassName);
    const table = container?.querySelector(tableClassName);

    // set height for container shadow group same as table (without scrollbar)
    container.querySelector(containerShadowGroupClassName).style.height = `${table?.clientHeight}px`;

    // initial toggle the buttons + scroll navigation
    toggleDisableButton(tableWrapper);
    toggleScrollNavigation(tableWrapper, scrollableArea(container));

    // table container scroll
    container.onscroll = () => {
      // scroll delay
      setTimeout(() => {
        // update toggle buttons after scroll
        toggleDisableButton(tableWrapper);
      }, 1);
    };

    // table button click scroll
    [...buttons]?.forEach((button) => {
      button.onclick = () => {
        // scroll amount for right and left buttons
        const scrollAmountRight = xPosition(container) + scrollUnit(container);
        const scrollAmountLeft = xPosition(container) - scrollUnit(container);

        //scroll to right
        if (button?.classList?.contains(scrollButtonRight)) {
          container?.scroll({ left: scrollAmountRight, behavior: 'smooth' });
        }

        //scroll to left
        if (button?.classList?.contains(scrollButtonLeft)) {
          container?.scroll({ left: scrollAmountLeft, behavior: 'smooth' });
        }
      };
    });
  });
};

export default TableScroll;
