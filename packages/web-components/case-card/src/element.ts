import stylesheet from '@gemeente-denhaag/card/dist/stylesheet.mjs';

export interface CardData {
  lang?: string;
  dateTime?: string;
  href: string;
  linkLabel?: string;
}

export class DenhaagCaseCardElement extends HTMLElement implements CardData {
  dateTime?: string;
  href: string;
  linkLabel?: string;
  _shadow: ShadowRoot;
  _container: HTMLDivElement;

  constructor() {
    super();

    this.dateTime = this.getAttribute('datetime') || '';
    this.href = this.getAttribute('href') || '';
    this.lang = this.getAttribute('lang') || document.documentElement.lang || 'nl-NL';
    this.linkLabel = this.getAttribute('linkLabel') || '';

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

  createSubtitleElement(): HTMLParagraphElement | null {
    const hasSubtitle = this.querySelector('[slot="subtitle"]');
    if (!hasSubtitle) {
      return null;
    }

    const subtitleP = this.ownerDocument.createElement('p');
    subtitleP.className = 'utrecht-paragraph denhaag-case-card__subtitle';

    const subtitleSlot = this.ownerDocument.createElement('slot');
    subtitleSlot.setAttribute('name', 'subtitle');

    subtitleP.appendChild(subtitleSlot);
    return subtitleP;
  }

  createActionLink(): HTMLAnchorElement {
    const link = this.ownerDocument.createElement('a');
    link.href = this.href;
    link.className = 'denhaag-case-card__action';

    if (this.linkLabel) {
      link.setAttribute('aria-label', this.linkLabel);
    }

    // Check if icon slot exists
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
      link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" class="denhaag-icon denhaag-case-card__arrow" focusable="false" aria-hidden="true" shape-rendering="auto"><path fill="currentColor" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"></path></svg>`;
    }

    return link;
  }

  render() {
    this._container.innerHTML = '';

    const card = this.ownerDocument.createElement('div');
    card.className = 'denhaag-case-card';

    const wrapper = this.ownerDocument.createElement('div');
    wrapper.className = 'denhaag-case-card__wrapper';

    const background = this.ownerDocument.createElement('div');
    background.className = 'denhaag-case-card__background';

    const contentDiv = this.ownerDocument.createElement('div');

    const title = this.ownerDocument.createElement('p');
    title.className = 'utrecht-paragraph denhaag-case-card__title';

    const headingSlot = this.ownerDocument.createElement('slot');
    headingSlot.setAttribute('name', 'heading');
    title.appendChild(headingSlot);

    contentDiv.appendChild(title);

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
    return ['datetime', 'href', 'lang', 'linklabel'];
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
    }

    if (this.isConnected) {
      this.render();
    }
  }
}
