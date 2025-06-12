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

    const dateWrapper = this.ownerDocument.createElement('div');
    dateWrapper.className = 'denhaag-card__date-wrapper';

    const dateElement = this.ownerDocument.createElement('time');
    dateElement.setAttribute('datetime', this.dateTime);

    try {
      const formattedDate = new Intl.DateTimeFormat(this.lang).format(new Date(this.dateTime));
      dateElement.textContent = formattedDate;
    } catch {
      dateElement.textContent = this.dateTime;
    }

    dateWrapper.appendChild(dateElement);
    return dateWrapper;
  }

  createSubtitleElement(): HTMLDivElement | null {
    const hasSubtitle = this.querySelector('[slot="subtitle"]');
    if (!hasSubtitle) {
      return null;
    }

    const subtitleDiv = this.ownerDocument.createElement('div');
    subtitleDiv.className = 'denhaag-card__subtitle';

    const subtitleSlot = this.ownerDocument.createElement('slot');
    subtitleSlot.setAttribute('name', 'subtitle');

    subtitleDiv.appendChild(subtitleSlot);
    return subtitleDiv;
  }

  createActionLink(): HTMLAnchorElement {
    const link = this.ownerDocument.createElement('a');
    link.href = this.href;
    link.className = 'denhaag-card__action-link';

    if (this.linkLabel) {
      link.setAttribute('aria-label', this.linkLabel);
    }

    const iconSlot = this.ownerDocument.createElement('slot');
    iconSlot.setAttribute('name', 'icon');
    link.appendChild(iconSlot);

    return link;
  }

  render() {
    const card = this.ownerDocument.createElement('div');
    card.className = 'denhaag-card denhaag-case-card';

    const wrapper = this.ownerDocument.createElement('div');
    wrapper.className = 'denhaag-card__wrapper';

    const background = this.ownerDocument.createElement('div');
    background.className = 'denhaag-card__background';

    const content = this.ownerDocument.createElement('div');
    content.className = 'denhaag-card__content';

    const textWrapper = this.ownerDocument.createElement('div');
    textWrapper.className = 'denhaag-card__text-wrapper';

    const title = this.ownerDocument.createElement('div');
    title.className = 'denhaag-card__title';

    const headingSlot = this.ownerDocument.createElement('slot');
    headingSlot.setAttribute('name', 'heading');
    title.appendChild(headingSlot);

    textWrapper.appendChild(title);

    const subtitle = this.createSubtitleElement();
    if (subtitle) {
      textWrapper.appendChild(subtitle);
    }

    const defaultSlot = this.ownerDocument.createElement('slot');
    textWrapper.appendChild(defaultSlot);

    const actions = this.ownerDocument.createElement('div');
    actions.className = 'denhaag-card__actions';

    const dateElement = this.createDateTimeElement();
    if (dateElement) {
      actions.appendChild(dateElement);
    }

    actions.appendChild(this.createActionLink());

    content.appendChild(textWrapper);
    content.appendChild(actions);

    wrapper.appendChild(background);
    wrapper.appendChild(content);

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
