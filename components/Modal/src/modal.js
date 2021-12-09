export default class ModalScripts {
  constructor(className = 'denhaag-modal') {
    this.modals = document.getElementsByClassName(className);

    if (!this.modals || this.modals.length === 0 || typeof this.modals !== 'object') {
      // Nothing to see here.
      return;
    }

    this.modalSelector = className;

    // Loop through all modals.
    this.modals.forEach((modal) => this.clickEvents(modal));
  }

  /**
   * All modal click events, which includes opening and closing the modal.
   * @param modal
   */
  clickEvents(modal) {
    // Close closest modal.
    Array.from(modal.querySelectorAll('[data-modal-toggle]')).forEach((el) => {
      el.onclick = () => this.toggleModal(el.closest('.denhaag-modal'));
    });

    if (!modal.getAttribute('id')) {
      console.warn("Modal doesn't have the ID attribute which is required to open and close the modal.");
      return;
    }

    // Toggle the modal based on trigger with ID.
    document.querySelectorAll(`[data-modal-toggle="${modal.getAttribute('id')}"]`).forEach((el) => {
      el.onclick = () => this.toggleModal(modal);
    });
  }

  /**
   * Toggle the modal.
   * @param {object} modal.
   */
  toggleModal(modal) {
    modal.classList.toggle(`${this.modalSelector}--open`);
  }
}
