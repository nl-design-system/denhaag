const TableScroll = (
  scrollButtonsClassName = '.denhaag-table__scroll-buttons .denhaag-button',
  scrollButtonLeft = 'denhaag-table__scroll-buttons-left',
  scrollButtonRight = 'denhaag-table__scroll-buttons-right',
  tableClassName = '.denhaag-table',
  tableContainerClassname = '.denhaag-table-container',
) => {
  // select elements to interact with
  const tableContainers = document.querySelectorAll(tableContainerClassname);
  const scrollBtns = document.querySelectorAll(scrollButtonsClassName);

  // essential for calculation
  let xPosition = 0;
  let scrollUnit;
  let tableColumnTotal;
  let tableContainerWidth;
  let tableWidth;
  let scrollableArea;

  // disable/enable scroll navigation depending on scroll area existance
  const toggleScrollNavigation = (button) => {
    if (scrollableArea === 0) {
      button.closest(tableContainerClassname).classList.add('table-container--scroll-nav-disabled');
    } else {
      button.closest(tableContainerClassname).classList.remove('table-container--scroll-nav-disabled');
    }
  };

  // reset disabled buttons
  const resetDisabledButtons = () => {
    [...scrollBtns]?.forEach((button) => {
      button.removeAttribute('disabled');
    });
  };

  // set button to disabled if reaching begin or end horizontal scrolling
  const disableButton = (button) => {
    // reset disabled button
    resetDisabledButtons();

    // disable button
    if (xPosition === scrollableArea || xPosition === 0) {
      button?.setAttribute('disabled', '');
    }
  };

  // register scroll event update position
  const updateScrollPosition = () => {
    [...tableContainers]?.forEach((container) => {
      console.log('xPosition: ', xPosition);
      const disableBtn = () => {
        // disable   left button
        if (xPosition === 0) {
          container.querySelector(`.${scrollButtonLeft}`).setAttribute('disabled', '');
        }

        // disable right button
        if (xPosition === scrollableArea) {
          container.querySelector(`.${scrollButtonRight}`).setAttribute('disabled', '');
        }
      };
      // initially disable left button
      disableBtn();

      // table container scroll
      container.onscroll = () => {
        // reset disabled button
        resetDisabledButtons();

        // scroll delay
        setTimeout(() => {
          disableBtn();
        }, 150);

        // update position
        xPosition = container?.scrollLeft;
        console.log('xPosition after scroll event: ', xPosition);
      };
    });
  };
  // run when using touch or mouse to scroll
  updateScrollPosition();

  // register and store scroll activities
  [...scrollBtns]?.forEach((button) => {
    console.log('button: ', button);
    // disable/enable scroll navigation depending on scroll area existance
    toggleScrollNavigation(button);

    // number of columns in table
    tableColumnTotal = button.closest(tableClassName).rows[0].cells.length;
    console.log('tableWidth: ', tableWidth);

    // table container width
    tableContainerWidth = button.closest(tableContainerClassname)?.offsetWidth;
    console.log('tableWidth: ', tableWidth);

    // table width
    tableWidth = button.querySelector(tableClassName)?.scrollWidth;
    console.log('tableWidth: ', tableWidth);

    // scroll area, the amount of horizontal space not visible
    scrollableArea = tableWidth - tableContainerWidth;
    console.log('scrollableArea: ', scrollableArea);

    // scroll unit per click
    scrollUnit = (scrollableArea / tableColumnTotal) * 3;
    console.log('scrollUnit: ', scrollUnit);

    button.onclick = () => {
      // scroll amount for right and left buttons
      const scrollAmountRight = xPosition + scrollUnit;
      const scrollAmountLeft = xPosition - scrollUnit;
      console.log('scrollAmountRight: ', scrollAmountRight);
      console.log('scrollAmountLeft: ', scrollAmountLeft);

      //scroll to right
      if (button.classList.contains(scrollButtonRight)) {
        console.log('right button');
        button.closest(tableContainerClassname)?.scroll({ left: scrollAmountRight, behavior: 'smooth' });
      }

      //scroll to left
      if (button.classList.contains(scrollButtonLeft)) {
        console.log('left button');
        button.closest(tableContainerClassname)?.scroll({ left: scrollAmountLeft, behavior: 'smooth' });
      }

      // need delay because of scroll time
      setTimeout(() => {
        // update scroll position
        updateScrollPosition();

        // set button to disabled of reaching begin or end horizontal scroll
        disableButton(button);
      }, 150);
    };
  });
};

export default TableScroll;
