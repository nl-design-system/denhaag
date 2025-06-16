import stylesheet from '@gemeente-denhaag/card/dist/stylesheet.mjs';

export type CaseCardAppearance = 'default' | 'archived' | 'list';

export interface CardData {
  lang?: string;
  dateTime?: string;
  href: string;
  linkLabel?: string;
  appearance?: CaseCardAppearance;
}

/**
 * Custom element for displaying case cards with Den Haag styling
 * @element denhaag-case-card
 *
 * @attr {string} datetime - ISO 8601 date string for the case
 * @attr {string} href - URL for the action link
 * @attr {string} lang - Language code for date formatting (defaults to document language or 'nl-NL')
 * @attr {string} linklabel - Accessible label for the action link
 * @attr {string} appearance - Visual appearance of the card ('default' | 'archived' | 'list')
 *
 * @slot heading - The main title content
 * @slot subtitle - Optional subtitle content
 * @slot icon - Optional custom icon for the action link (defaults to arrow)
 * @slot - Default slot for additional content
 *
 * @example
 * <denhaag-case-card href="/case/123" datetime="2024-01-15" appearance="archived">
 *   <h3 slot="heading">Case Title</h3>
 *   <span slot="subtitle">Case subtitle</span>
 * </denhaag-case-card>
 */
export class DenhaagCaseCardElement extends HTMLElement implements CardData {
  dateTime?: string;
  href: string;
  linkLabel?: string;
  appearance?: CaseCardAppearance;
  _shadow: ShadowRoot;
  _container: HTMLDivElement;

  constructor() {
    super();

    this.dateTime = this.getAttribute('datetime') || '';
    this.href = this.getAttribute('href') || '';
    this.lang = this.getAttribute('lang') || document.documentElement.lang || 'nl-NL';
    this.linkLabel = this.getAttribute('linkLabel') || '';
    this.appearance = (this.getAttribute('appearance') as CaseCardAppearance) || 'default';

    this._shadow = this.attachShadow({
      mode: 'closed',
    });

    this._shadow.adoptedStyleSheets = [stylesheet];

    this._container = this.ownerDocument.createElement('div');
    this._shadow.appendChild(this._container);
  }

  connectedCallback() {
    this.render();
  }

  createDateTimeElement(): HTMLDivElement | null {
    if (!this.dateTime) {
      return null;
    }

    const contextDiv = this.ownerDocument.createElement('div');
    contextDiv.className = 'denhaag-case-card__context';

    const dateElement = this.ownerDocument.createElement('time');
    dateElement.setAttribute('datetime', this.dateTime);

    try {
      const formattedDate = new Intl.DateTimeFormat(this.lang).format(new Date(this.dateTime));
      dateElement.textContent = formattedDate;
    } catch {
      dateElement.textContent = this.dateTime;
    }

    contextDiv.appendChild(dateElement);
    return contextDiv;
  }

  createSubtitleElement(): HTMLDivElement | null {
    const hasSubtitle = this.querySelector('[slot="subtitle"]');
    if (!hasSubtitle) {
      return null;
    }

    const subtitleDiv = this.ownerDocument.createElement('div');
    subtitleDiv.className = 'denhaag-case-card__subtitle';

    const subtitleSlot = this.ownerDocument.createElement('slot');
    subtitleSlot.setAttribute('name', 'subtitle');

    subtitleDiv.appendChild(subtitleSlot);
    return subtitleDiv;
  }

  createActionLink(): HTMLAnchorElement {
    const link = this.ownerDocument.createElement('a');
    link.href = this.href;
    link.className = 'denhaag-case-card__action';

    if (this.linkLabel) {
      link.setAttribute('aria-label', this.linkLabel);
    }

    const hasIcon = this.querySelector('[slot="icon"]');
    if (hasIcon) {
      const iconSlot = this.ownerDocument.createElement('slot');
      iconSlot.setAttribute('name', 'icon');

      iconSlot.addEventListener('slotchange', (e) => {
        const slot = e.target as HTMLSlotElement;
        const assignedElements = slot.assignedElements();
        assignedElements.forEach((el) => {
          if (el.tagName.toLowerCase() === 'svg') {
            el.classList.add('denhaag-icon', 'denhaag-case-card__arrow');
          }
        });
      });

      link.appendChild(iconSlot);
    } else {
      // Default arrow icon
      const svg = this.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('width', '1em');
      svg.setAttribute('height', '1em');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('class', 'denhaag-icon denhaag-case-card__arrow');
      svg.setAttribute('focusable', 'false');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('shape-rendering', 'auto');

      const path = this.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill', 'currentColor');
      path.setAttribute(
        'd',
        'M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414',
      );

      svg.appendChild(path);
      link.appendChild(svg);
    }

    return link;
  }

  render() {
    this._container.innerHTML = '';

    const card = this.ownerDocument.createElement('div');

    const classNames = ['denhaag-case-card'];
    if (this.appearance === 'archived') {
      classNames.push('denhaag-case-card--archived');
    } else if (this.appearance === 'list') {
      classNames.push('denhaag-case-card--list');
    }
    card.className = classNames.join(' ');

    const wrapper = this.ownerDocument.createElement('div');
    wrapper.className = 'denhaag-case-card__wrapper';

    const background = this.ownerDocument.createElement('div');
    background.className = 'denhaag-case-card__background';

    const contentDiv = this.ownerDocument.createElement('div');

    const titleDiv = this.ownerDocument.createElement('div');
    titleDiv.className = 'denhaag-case-card__title';

    const headingSlot = this.ownerDocument.createElement('slot');
    headingSlot.setAttribute('name', 'heading');
    titleDiv.appendChild(headingSlot);

    contentDiv.appendChild(titleDiv);

    const subtitle = this.createSubtitleElement();
    if (subtitle) {
      contentDiv.appendChild(subtitle);
    }

    const defaultSlot = this.ownerDocument.createElement('slot');
    contentDiv.appendChild(defaultSlot);

    const footer = this.ownerDocument.createElement('div');
    footer.className = 'denhaag-case-card__footer';

    const dateElement = this.createDateTimeElement();
    if (dateElement) {
      footer.appendChild(dateElement);
    } else {
      const emptyContext = this.ownerDocument.createElement('div');
      emptyContext.className = 'denhaag-case-card__context';
      footer.appendChild(emptyContext);
    }

    footer.appendChild(this.createActionLink());

    wrapper.appendChild(background);
    wrapper.appendChild(contentDiv);
    wrapper.appendChild(footer);

    card.appendChild(wrapper);
    this._container.appendChild(card);
  }

  static get observedAttributes() {
    return ['datetime', 'href', 'lang', 'linklabel', 'appearance'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (oldValue === newValue) return;

    switch (name) {
      case 'datetime':
        this.dateTime = newValue || '';
        break;
      case 'href':
        this.href = newValue || '';
        break;
      case 'lang':
        this.lang = newValue || document.documentElement.lang || 'nl-NL';
        break;
      case 'linklabel':
        this.linkLabel = newValue || '';
        break;
      case 'appearance': {
        const validAppearances: CaseCardAppearance[] = ['default', 'archived', 'list'];
        this.appearance = validAppearances.includes(newValue as CaseCardAppearance)
          ? (newValue as CaseCardAppearance)
          : 'default';
        break;
      }
    }

    if (this.isConnected) {
      this.render();
    }
  }
}
