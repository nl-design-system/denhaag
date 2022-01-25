export default class ShareButtonScripts {
  constructor(className = 'denhaag-share-button') {
    // initiate classes
    this.shareButtons = document.getElementsByClassName(className);

    // check if shareButton is not there
    if (!this.shareButtons || this.shareButtons.length === 0 || typeof this.shareButtons !== 'object') {
      // Nothing to see here.
      return;
    }

    this.shareButtonSelector = 'denhaag-page-buttons';

    this.shareButtons.forEach((shareButton) => {
      return this.clickEvents(shareButton);
    });
  }

  clickEvents(shareButton) {
    // toggle shareoptions.
    shareButton.onclick = (el) => this.toggleShareButton(el.target.closest(`.${this.shareButtonSelector}`));
  }

  /**
   * Toggle the sharebutton.
   * @param {object} shareButton.
   */
  toggleShareButton(shareButton) {
    const shareButtonOpenedClassName = `${this.shareButtonSelector}--open`;

    // toggle sharebutton class '...--open'
    shareButton.classList.toggle(shareButtonOpenedClassName);
  }
}
