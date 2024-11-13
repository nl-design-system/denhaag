class DenhaagBreadcrumbs {
  constructor(id = 'denhaag-breadcrumb') {
    this.breadcrumbWrapper = document.getElementById(id);

    if (!this.breadcrumbWrapper) {
      return;
    }

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.hideToolTip();
      } else {
        this.resetTooltips();
      }
    });
    document.addEventListener('click', () => this.resetTooltips());

    this.classList = {
      list: `${id}__list`,
      item: `${id}__item`,
      hidden: `${id}__item--hidden`,
      text: `${id}__text`,
      link: `${id}__link`,
      truncate: `${id}__item--truncated`,
    };

    this.listWidth = 0;
    this.listItems = Array.from(this.breadcrumbWrapper.getElementsByClassName(this.classList.item));
    this.currentPageItem = this.listItems[this.listItems.length - 1];
    this.homePageItem = this.listItems[0];

    this.windowWidth = window.innerWidth;
    this.resizeEvents();
    this.windowEvents();
  }

  /**
   * Will fire window events.
   */
  windowEvents() {
    window.addEventListener('resize', () => {
      // Only on window-width change, otherwise iPhones will be buggy.
      if (window.innerWidth !== this.windowWidth) {
        this.windowWidth = window.innerWidth;
        this.resizeEvents();
      }
    });

    window.addEventListener('orientationchange', () => {
      this.windowWidth = window.innerWidth;
      this.resizeEvents();
    });
  }

  /**
   *  Will be fired on window events.
   */
  resizeEvents() {
    this.listWidth = Math.ceil(this.breadcrumbWrapper.querySelector(`.${this.classList.list}`).offsetWidth);
    this.handler();
    this.positionTooltips();
  }

  /**
   * Calculate the width and handle classes.
   */
  handler() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      const items = this.listItems.filter((el) => el !== this.currentPageItem && el !== this.homePageItem);
      if (items.length > 1) {
        // Hide any items that are too big.
        items.slice(0, Math.abs(items.length - 1)).forEach((item) => this.setItemHidden(item));
      }

      // Truncate parent item.
      if (this.calculateListItemWidth() > this.listWidth) {
        items[items.length - 1].classList.add(this.classList.truncate);
      }

      // Last resort: Truncate current page item.
      if (this.calculateListItemWidth() > this.listWidth) {
        this.currentPageItem.classList.add(this.classList.truncate);
      }

      // Last resort: Hide parent item if still to big.
      if (this.calculateListItemWidth() > this.listWidth) {
        items[items.length - 1].classList.remove(this.classList.truncate);
        this.setItemHidden(items[items.length - 1]);
      }
    } else {
      // Remove all classes if set.
      this.removeHiddenClasses();
      this.removeTruncatedClasses();
      this.currentPageItem.style.removeProperty('--denhaag-breadcrumb-text-max-width');
      this.resetTooltipPositions();
    }
  }

  /**
   * Set width of list items combined.
   * @returns {number} Combined width of list items.
   */
  calculateListItemWidth() {
    return this.listItems.reduce((totalWidth, li) => {
      return totalWidth + Math.ceil(li.offsetWidth);
    }, 0);
  }

  /**
   * Set hidden attributes and className.
   * @param {HTMLElement} item The HTML element to modify.
   */
  setItemHidden(item) {
    item.classList.add(this.classList.hidden);
    item
      .querySelector(`.${this.classList.link}`)
      .setAttribute('aria-label', item.querySelector(`.${this.classList.text}`).textContent);
  }

  /**
   * Remove all Hidden classes.
   */
  removeHiddenClasses() {
    Array.from(this.breadcrumbWrapper.getElementsByClassName(this.classList.hidden)).forEach((item) => {
      item.classList.remove(this.classList.hidden);
      item.querySelector(`.${this.classList.link}`).removeAttribute('aria-label');
    });
  }

  /**
   * Remove all truncate classes.
   */
  removeTruncatedClasses() {
    Array.from(this.breadcrumbWrapper.getElementsByClassName(this.classList.truncate)).forEach((item) =>
      item.classList.remove(this.classList.truncate),
    );
  }

  /**
   * Position tooltips.
   */
  positionTooltips() {
    const tooltips = this.listItems.filter((item) => item.classList.contains(this.classList.hidden));
    tooltips.forEach((el) => this.setTooltipPosition(el));
  }

  /**
   * Set the Tooltip Position.
   * @param {HTMLElement} el The HTML element to calculate and update.
   */
  setTooltipPosition(el) {
    const calculateTooltipPositioning = Math.round(
      -1 * (el.querySelector(`.${this.classList.text}`).offsetWidth / 2 - 4),
    ); // it has a 4 pixel correction.

    el.style.setProperty('--denhaag-breadcrumb-hidden-text-left', `${calculateTooltipPositioning}px`);
  }

  /**
   * Remove CSS variable of tooltips.
   */
  resetTooltipPositions() {
    this.listItems.forEach((el) => el.style.removeProperty('--denhaag-breadcrumb-hidden-text-left'));
  }

  /**
   * Hide tooltip on Esc btn
   */
  hideToolTip() {
    const activeEl = document.activeElement;
    const parentEL = activeEl.parentNode;
    const isBreadcrumbItem = parentEL.classList.contains('denhaag-breadcrumb__item--hidden');
    if (isBreadcrumbItem) {
      const tooltip = activeEl.querySelector('.denhaag-breadcrumb__text');
      if (!tooltip.classList.contains('denhaag-breadcrumb__hide-tooltip')) {
        tooltip.classList.add('denhaag-breadcrumb__hide-tooltip');
      }
    }
  }

  /**
   * Reset tooltips after other user interaction
   */
  resetTooltips() {
    const items = document.querySelectorAll('.denhaag-breadcrumb__item--hidden');
    if (items?.length) {
      items.forEach((item) => {
        const tooltip = item.querySelector('.denhaag-breadcrumb__text');
        tooltip.classList.remove('denhaag-breadcrumb__hide-tooltip');
      });
    }
  }
}

export default DenhaagBreadcrumbs;
