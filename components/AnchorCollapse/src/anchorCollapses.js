export default class AnchorCollapses {
  constructor(className = 'denhaag-anchor-collapse') {
    this.panels = document.getElementsByClassName(className);

    if (!this.panels) {
      return;
    }

    this.windowEvents();
  }

  windowEvents() {
    const self = this;
    self.windowEventsLoop();
    window.addEventListener('resize', async () => {
      self.windowEventsLoop();
    });
    window.addEventListener('orientationchange', async () => {
      self.windowEventsLoop();
    });
  }

  /**
   * Loop through panels and close them based on the windowWidth.
   */
  windowEventsLoop() {
    const openCollapses = window.matchMedia('(min-width: 768px)').matches;
    [...this.panels].forEach((panel) => {
      [...panel.getElementsByTagName('details')].forEach((details) => {
        details.open = openCollapses;
      });
    });
  }
}
