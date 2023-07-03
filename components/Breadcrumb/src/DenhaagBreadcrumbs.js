export default class DenhaagBreadcrumbs {
  constructor(id = 'denhaag-breadcrumb') {
    this.breadcrumbWrapper = document.getElementById(id);

    if (!this.breadcrumbWrapper) {
      return;
    }

    this.classList = {
      list: `${id}__list`,
      item: `${id}__item`,
      hidden: `${id}__item--hidden`,
      text: `${id}__text`,
    };

    this.listWidth = 0;
    this.listItems = this.breadcrumbWrapper.getElementsByClassName(this.classList.item);
    this.listItemsWidth = this.calculateListItemWidth();
    this.originalListItemsWidth = this.calculateListItemOriginalWidth();
    this.currentItem = this.listItems[this.listItems.length - 1];

    // Need timeout otherwise we get the wrong widths?
    setTimeout(() => {
      this.handler();
      this.positionTooltips();
    }, 10);
    this.windowEvents();
  }

  /**
   * Will fire window events.
   */
  windowEvents() {
    const windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      // Only on window-width change, otherwise iPhones will be buggy.
      if (window.innerWidth !== windowWidth) {
        this.resizeEvents();
      }
    });

    window.addEventListener('orientationchange', () => this.resizeEvents);
  }

  /**
   *  Will be fired on window events.
   */
  resizeEvents() {
    this.handler();
    this.positionTooltips();
  }

  /**
   * Calculate the width and handle classes.
   *
   * @param {number} index Index of the element to set hiddenClassName.
   */
  handler(index = 0) {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      const list = this.breadcrumbWrapper.querySelector(`.${this.classList.list}`);

      // Set width of the parent element.
      this.listWidth = Math.ceil(list.offsetWidth);

      if (this.originalListItemsWidth > this.listWidth && this.currentItem) {
        this.currentItem.style.removeProperty('--denhaag-breadcrumb-text-max-width');
      }

      if (this.listItemsWidth > this.listWidth || this.originalListItemsWidth > this.listWidth) {
        // Fire methods when combined list-item width is bigger than list-width.
        this.setHiddenClasses(index);
      } else if (this.originalListItemsWidth < this.listWidth) {
        this.removeHiddenClasses();
        this.currentItem.style.setProperty('--denhaag-breadcrumb-text-max-width', '100%');
      }
    } else {
      // Remove all classes if set.
      this.removeHiddenClasses();
      this.currentItem.style.removeProperty('--denhaag-breadcrumb-text-max-width');
      this.resetTooltipPositions();
    }
  }

  setWidths() {
    this.listItemsWidth = this.calculateListItemWidth();
    this.originalListItemsWidth = this.calculateListItemOriginalWidth();
  }

  /**
   * Set width of all list-items combined.
   */
  calculateListItemWidth() {
    if (!this.listItems) {
      return 0;
    }

    return Math.ceil([...this.listItems].map((li) => li.getBoundingClientRect().width).reduce((a, b) => a + b, 0));
  }

  calculateListItemOriginalWidth() {
    if (!this.listItems) {
      return 0;
    }

    return Math.ceil(
      [...this.listItems]
        .map((li) => this.getOriginalWidth(li.querySelector(`.${this.classList.text}`)))
        .reduce((a, b) => a + b, 0),
    );
  }

  /**
   * Remove all Hidden classes.
   */
  removeHiddenClasses() {
    Array.from(this.breadcrumbWrapper.getElementsByClassName(this.classList.hidden)).forEach((item) =>
      item.classList.remove(this.classList.hidden),
    );
  }

  /**
   * Set hidden className based on index.
   *
   * @param {number} index Index of the item to update and to identify the following (if exists).
   */
  setHiddenClasses(index = 0) {
    const listItems = Array.from(this.listItems).slice(1, -1);

    if (listItems.length === 0) {
      return;
    }

    if (!listItems[index].classList.contains(this.classList.hidden) && listItems[index] !== this.currentItem) {
      listItems[index].classList.add(this.classList.hidden);
    }

    if (index < listItems.length - 1) {
      this.setWidths();
      this.handler(index + 1);
    }
  }

  /**
   * Get original width.
   *
   * @param {HTMLElement} element The element to check the original width from.
   * @return {number}
   */
  getOriginalWidth(element) {
    if (!element) {
      return 0;
    }

    // Temporarily remove the max-width property
    element.style.maxWidth = '100%';

    // Get the original width
    const originalWidth = element.offsetWidth;

    // Restore the max-width property
    element.style.maxWidth = null;

    return originalWidth;
  }

  /**
   * Position tooltips.
   */
  positionTooltips() {
    const tooltips = Array.from(this.listItems)?.filter((item) => item.classList.contains(this.classList.hidden));

    tooltips?.forEach((el) => this.setTooltipPosition(el));
  }

  /**
   * Set the Tooltip Position.
   * @param {HTMLElement} el The HTML element to calculate and update.
   */
  setTooltipPosition(el) {
    const calculateTooltipPositioning = Math.round(-1 * (el.querySelector(`.${this.classList.text}`).offsetWidth / 2));
    el.style.setProperty('--denhaag-breadcrumb-hidden-text-left', `${calculateTooltipPositioning}px`);
  }

  /**
   * Remove CSS variable of tooltips.
   */
  resetTooltipPositions() {
    Array.from(this.listItems)?.forEach((el) => el.style.removeProperty('--denhaag-breadcrumb-hidden-text-left'));
  }
}
