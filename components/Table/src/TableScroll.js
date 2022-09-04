const TableScroll = (
  // scrollButtonsContainerClassName = '.denhaag-table__scroll-buttons',
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
  // const toggleScrollNavigation = (tableBlock) => {
  //   if (scrollableArea === 0) {
  //     tableBlock
  //       .querySelector(scrollButtonsContainerClassName)
  //       .classList.add('denhaag-table__scroll-buttons--disabled');
  //   } else {
  //     tableBlock
  //       .querySelector(scrollButtonsContainerClassName)
  //       .classList.remove('denhaag-table__scroll-buttons--disabled');
  //   }
  // };

  // set button to disabled if reaching begin or end horizontal scrolling
  const toggleDisableButton = (tableBlock) => {
    const buttons = tableBlock.querySelectorAll(scrollButtonsClassName);
    console.log('toggle disabled buttons');

    // disable button right
    if (xPosition === scrollableArea) {
      console.log('xPosition is: ', scrollableArea);
      tableBlock.querySelector(`.${scrollButtonRight}`).setAttribute('disabled', '');
    }

    // disable button left
    if (xPosition === 0) {
      console.log('xPosition is 0');
      tableBlock.querySelector(`.${scrollButtonLeft}`).setAttribute('disabled', '');
    }

    // enable button
    if (xPosition > 0 && xPosition < scrollableArea) {
      console.log('remove all disabled');
      [...buttons].forEach((button) => {
        button.removeAttribute('disabled');
      });
    }
  };

  // register scroll event update position
  const updateScrollPosition = () => {
    [...tableContainers].forEach((container) => {
      console.log('xPosition: ', xPosition);

      // table container scroll
      container.onscroll = () => {
        // update position
        xPosition = container.scrollLeft;
        console.log('xPosition after scroll event: ', xPosition);

        // scroll delay
        setTimeout(() => {
          toggleDisableButton(container.closest(tableBlockClassname));
        }, 1);
      };
    });
  };
  // initialize scroll position update
  updateScrollPosition();

  // setup table data for click scroll
  [...tableContainers].forEach((container) => {
    // select elements to interact with
    const tableBlock = container.closest(tableBlockClassname);
    console.log('tableBlock: ', tableBlock);
    const buttons = tableBlock.querySelectorAll(scrollButtonsClassName);
    console.log('buttons: ', buttons);

    // disable/enable scroll navigation depending on scroll area existance
    // toggleScrollNavigation(tableBlock);

    // number of columns in table
    tableColumnTotal = tableBlock.querySelector(tableClassName).rows[0].cells.length;
    console.log('tableColumnTotal: ', tableColumnTotal);

    // table container width
    tableContainerWidth = tableBlock.querySelector(tableContainerClassname).offsetWidth;
    console.log('tableContainerWidth: ', tableContainerWidth);

    // table width
    tableWidth = tableBlock.querySelector(tableClassName).scrollWidth;
    console.log('tableWidth: ', tableWidth);

    // scroll area, the amount of horizontal space not visible
    scrollableArea = tableWidth - tableContainerWidth;
    console.log('scrollableArea: ', scrollableArea);

    // scroll unit per click
    scrollUnit = (scrollableArea / tableColumnTotal) * 3;
    console.log('scrollUnit: ', scrollUnit);

    [...buttons].forEach((button) => {
      button.onclick = () => {
        // scroll amount for right and left buttons
        const scrollAmountRight = xPosition + scrollUnit;
        const scrollAmountLeft = xPosition - scrollUnit;
        console.log('scrollAmountRight: ', scrollAmountRight);
        console.log('scrollAmountLeft: ', scrollAmountLeft);

        //scroll to right
        if (button.classList.contains(scrollButtonRight)) {
          console.log('right button');
          tableBlock.querySelector(tableContainerClassname).scroll({ left: scrollAmountRight, behavior: 'smooth' });
        }

        //scroll to left
        if (button.classList.contains(scrollButtonLeft)) {
          console.log('left button');
          tableBlock.querySelector(tableContainerClassname).scroll({ left: scrollAmountLeft, behavior: 'smooth' });
        }
      };
    });
  });
};

export default TableScroll;
