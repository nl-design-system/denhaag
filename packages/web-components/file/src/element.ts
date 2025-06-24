import stylesheet from '@gemeente-denhaag/file/dist/stylesheet.mjs';

export interface FileData {
  name: string;
  href: string;
  size?: string;
  lastUpdated?: string;
}

/**
 * A file displays a link to download an attachment and metadata about the file.
 * @element denhaag-file
 *
 * @attr {string} name - The file name to display
 * @attr {string} href - URL of the file to download
 * @attr {string} size - File size (e.g. "2.5 MB")
 * @attr {string} lastupdated - Last update text (e.g. "Yesterday", "2 hours ago", "Dec 15, 2024")
 *
 * @fires click - Fires when component is clicked (only if onClick handler is needed)
 *
 * @slot file-icon - Required icon for the file type
 * @slot download-content - Required content for the download link (icon + text)
 *
 * @example
 * <denhaag-file
 *   name="Annual Report 2024.pdf"
 *   href="/files/annual-report-2024.pdf"
 *   size="2.5 MB"
 *   lastupdated="Yesterday">
 *   <svg slot="file-icon"><!-- PDF icon --></svg>
 * </denhaag-file>
 *
 * @example
 * <!-- With custom download content -->
 * <denhaag-file name="Rapport.pdf" href="/files/rapport.pdf">
 *   <svg slot="file-icon"><!-- PDF icon --></svg>
 *   <span slot="download-content">
 *     <svg><!-- custom icon --></svg>
 *     Downloaden
 *   </span>
 * </denhaag-file>
 */
export class DenhaagFileElement extends HTMLElement implements FileData {
  static get observedAttributes() {
    return ['name', 'href', 'size', 'lastupdated'];
  }

  private _shadow: ShadowRoot;
  private _container: HTMLDivElement;
  private _clickHandler: ((event: MouseEvent) => void) | null = null;

  // Properties
  private _name: string = '';
  private _href: string = '';
  private _size: string = '';
  private _lastUpdated: string = '';

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    const oldValue = this._name;
    this._name = value || '';
    if (oldValue !== this._name && this.isConnected) {
      this._updateName();
    }
  }

  get href(): string {
    return this._href;
  }

  set href(value: string) {
    const oldValue = this._href;
    this._href = value || '';
    if (oldValue !== this._href && this.isConnected) {
      this._updateHref();
    }
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    const oldValue = this._size;
    this._size = value || '';
    if (oldValue !== this._size && this.isConnected) {
      this._updateDescription();
    }
  }

  get lastUpdated(): string {
    return this._lastUpdated;
  }

  set lastUpdated(value: string) {
    const oldValue = this._lastUpdated;
    this._lastUpdated = value || '';
    if (oldValue !== this._lastUpdated && this.isConnected) {
      this._updateDescription();
    }
  }

  constructor() {
    super();

    // Initialize properties from attributes
    this._name = this.getAttribute('name') || '';
    this._href = this.getAttribute('href') || '';
    this._size = this.getAttribute('size') || '';
    this._lastUpdated = this.getAttribute('lastupdated') || '';

    // Create shadow DOM
    this._shadow = this.attachShadow({ mode: 'open' });
    this._shadow.adoptedStyleSheets = [stylesheet];

    this._container = this.ownerDocument.createElement('div');
    this._shadow.appendChild(this._container);
  }

  connectedCallback() {
    this._render();
  }

  disconnectedCallback() {
    // Clean up any event listeners if needed
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (oldValue === newValue) return;

    switch (name) {
      case 'name':
        this.name = newValue || '';
        break;
      case 'href':
        this.href = newValue || '';
        break;
      case 'size':
        this.size = newValue || '';
        break;
      case 'lastupdated':
        this.lastUpdated = newValue || '';
        break;
    }
  }

  // Method to set click handler programmatically (for button mode)
  setClickHandler(handler: (event: MouseEvent) => void) {
    this._clickHandler = handler;
    if (this.isConnected) {
      this._render();
    }
  }

  removeClickHandler() {
    this._clickHandler = null;
    if (this.isConnected) {
      this._render();
    }
  }

  private _getFileExtension(): string | undefined {
    if (!this._href || this._href.lastIndexOf('.') < 0) {
      return undefined;
    }
    return this._href.substring(this._href.lastIndexOf('.') + 1);
  }

  private _createFileIcon(): HTMLElement {
    const iconSlot = this.ownerDocument.createElement('slot');
    iconSlot.setAttribute('name', 'file-icon');

    // Apply icon classes to slotted content
    iconSlot.addEventListener('slotchange', (e) => {
      const slot = e.target as HTMLSlotElement;
      const assignedElements = slot.assignedElements();
      assignedElements.forEach((el) => {
        if (el.tagName.toLowerCase() === 'svg') {
          el.classList.add('denhaag-icon', 'denhaag-file__icon');
        }
      });
    });

    return iconSlot;
  }

  private _createDownloadContent(): HTMLElement {
    const contentSlot = this.ownerDocument.createElement('slot');
    contentSlot.setAttribute('name', 'download-content');

    // Apply classes to slotted icons if present
    contentSlot.addEventListener('slotchange', (e) => {
      const slot = e.target as HTMLSlotElement;
      const assignedElements = slot.assignedElements();
      assignedElements.forEach((el) => {
        // Find any SVG icons in the slotted content
        const svgs = el.getElementsByTagName('svg');
        for (let i = 0; i < svgs.length; i++) {
          svgs[i].classList.add('denhaag-icon', 'denhaag-file__link__icon');
        }
        // If the slotted element is an SVG itself
        if (el.tagName.toLowerCase() === 'svg') {
          el.classList.add('denhaag-icon', 'denhaag-file__link__icon');
        }
      });
    });

    return contentSlot;
  }

  private _render() {
    // Clear container
    this._container.innerHTML = '';

    const isButton = !!this._clickHandler;
    const wrapper = this.ownerDocument.createElement(isButton ? 'button' : 'a');
    wrapper.className = 'denhaag-file';
    wrapper.setAttribute('aria-labelledby', 'file-name');
    wrapper.setAttribute('aria-describedby', 'file-description');

    if (isButton) {
      (wrapper as HTMLButtonElement).type = 'button';
      (wrapper as HTMLButtonElement).onclick = (e) => {
        if (this._clickHandler) {
          this._clickHandler(e);
        }
      };
    } else {
      (wrapper as HTMLAnchorElement).href = this._href;
      (wrapper as HTMLAnchorElement).download = this._name;
    }

    // Left side - file icon
    const leftDiv = this.ownerDocument.createElement('div');
    leftDiv.className = 'denhaag-file__left';
    leftDiv.appendChild(this._createFileIcon());

    // Right side - content
    const rightDiv = this.ownerDocument.createElement('div');
    rightDiv.className = 'denhaag-file__right';

    // Label section
    const labelDiv = this.ownerDocument.createElement('div');
    labelDiv.className = 'denhaag-file__label';

    const nameSpan = this.ownerDocument.createElement('span');
    nameSpan.id = 'file-name';
    nameSpan.textContent = this._name + ' ';
    labelDiv.appendChild(nameSpan);

    // Description (extension, size, date)
    const extension = this._getFileExtension();
    const descriptionParts = [extension, this._size, this._lastUpdated].filter(Boolean);

    if (descriptionParts.length > 0) {
      const descriptionSpan = this.ownerDocument.createElement('span');
      descriptionSpan.id = 'file-description';
      descriptionSpan.textContent = `(${descriptionParts.join(', ')})`;
      labelDiv.appendChild(descriptionSpan);
    }

    // Link section
    const linkDiv = this.ownerDocument.createElement('div');
    linkDiv.className = 'denhaag-file__link';

    linkDiv.appendChild(this._createDownloadContent());

    rightDiv.appendChild(labelDiv);
    rightDiv.appendChild(linkDiv);

    wrapper.appendChild(leftDiv);
    wrapper.appendChild(rightDiv);

    this._container.appendChild(wrapper);
  }

  // Update methods for better performance
  private _updateName() {
    const nameElement = this._shadow.querySelector('#file-name');
    if (nameElement) {
      nameElement.textContent = this._name + ' ';
    }
    // Also update download attribute if it's a link
    const wrapper = this._shadow.querySelector('.denhaag-file') as HTMLAnchorElement;
    if (wrapper && wrapper.tagName === 'A') {
      wrapper.download = this._name;
    }
  }

  private _updateHref() {
    const wrapper = this._shadow.querySelector('.denhaag-file') as HTMLAnchorElement;
    if (wrapper && wrapper.tagName === 'A') {
      wrapper.href = this._href;
    }
    // Extension might have changed, so update description
    this._updateDescription();
  }

  private _updateDescription() {
    const extension = this._getFileExtension();
    const descriptionParts = [extension, this._size, this._lastUpdated].filter(Boolean);

    const descriptionElement = this._shadow.querySelector('#file-description');

    if (descriptionParts.length > 0) {
      if (descriptionElement) {
        descriptionElement.textContent = `(${descriptionParts.join(', ')})`;
      } else {
        this._render();
      }
    } else if (descriptionElement) {
      descriptionElement.remove();
    }
  }
}
