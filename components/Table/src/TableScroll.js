const TableScroll = (
  scrollButtonsClassName = '.denhaag-table__scroll-buttons .denhaag-button',
  scrollButtonLeft = 'denhaag-table__scroll-buttons-left',
  scrollButtonRight = 'denhaag-table__scroll-buttons-right',
  tableClassName = '.denhaag-table',
  tableContainer = '.denhaag-table-container',
) => {
  // select elements to interact with
  const scrollBtns = document.querySelectorAll(scrollButtonsClassName);
  const tableContainers = document.querySelectorAll(tableContainer);

  // essential for calculation
  let xPosition = 0;
  let scrollUnit;
  let tableColumnTotal;
  let tableContainerWidth;
  let tableWidth;
  let scrollableArea;

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
      // initially disable left button

      const disableBtn = () => {
        if (xPosition === 0) {
          container.querySelector(`.${scrollButtonLeft}`).setAttribute('disabled', '');
        }

        // if () {

        // }
      };
      // initially disable left button
      disableBtn();

      container.onscroll = () => {
        // reset disabled button
        resetDisabledButtons();

        // disable btn with scroll delay
        setTimeout(() => disableBtn(), 150);

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
    button.onclick = () => {
      // number of columns in table
      tableColumnTotal = button.closest(tableClassName).rows[0].cells.length;

      // table container width
      tableContainerWidth = button.closest(tableContainer)?.offsetWidth;

      // table width
      tableWidth = button.closest(tableClassName)?.scrollWidth;
      console.log('tableWidth: ', tableWidth);

      // scroll area, the amount of horizontal space not visible
      scrollableArea = tableWidth - tableContainerWidth;
      console.log('scrollableArea: ', scrollableArea);

      // scroll unit per click
      scrollUnit = scrollableArea / tableColumnTotal;

      // scroll amount for right and left buttons
      const scrollAmountRight = xPosition + scrollUnit;
      const scrollAmountLeft = xPosition - scrollUnit;

      //scroll to right
      if (button.classList.contains(scrollButtonRight)) {
        button.closest(tableContainer)?.scroll({ left: scrollAmountRight, behavior: 'smooth' });
      }

      //scroll to left
      if (button.classList.contains(scrollButtonLeft)) {
        button.closest(tableContainer)?.scroll({ left: scrollAmountLeft, behavior: 'smooth' });
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
