import cardCss from '@gemeente-denhaag/card/dist/css.mjs';
import { escapeXML } from './util.js';

export interface CardData {
  lang?: string;
  dateTime?: string;
  href: string;
  linkLabel?: string;
  inactive?: boolean;
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(cardCss);

export class DenhaagCaseCardElement extends HTMLElement implements CardData {
  dateTime?: string;
  href: string;
  linkLabel?: string;
  _shadow: ShadowRoot;
  _div: HTMLElement;

  constructor() {
    super();

    this.dateTime = this.getAttribute('datetime') || '';
    this.href = this.getAttribute('href') || '';
    this.lang = this.getAttribute('lang') || 'nl-NL'; // maybe get the lang from the document as fallback
    this.linkLabel = this.getAttribute('linkLabel') || '';

    this._shadow = this.attachShadow({
      mode: 'closed',
    });

    this._shadow.adoptedStyleSheets = [sheet];

    this._div = this._shadow.appendChild(this.ownerDocument.createElement('div'));
  }

  connectedCallback() {
    this.render();
  }

  getDateTimeElement() {
    if (!this.dateTime) {
      return '';
    }

    const formattedDate = this.dateTime && new Intl.DateTimeFormat(this.lang).format(new Date(this.dateTime));

    return `<div class="denhaag-card__date-wrapper">
              <date datetime="${escapeXML(this.dateTime)}">${escapeXML(formattedDate)}</date>
            </div>`;
  }

  render() {
    const subtitleSlot = this.querySelector('[slot="subtitle"]')
      ? `<div class="denhaag-card__subtitle">
          <slot name="subtitle"></slot>
        </div>`
      : '';

    this._div.innerHTML = `
      <div class="denhaag-card denhaag-case-card">
        <div class="denhaag-card__wrapper">
          <div class="denhaag-card__background"></div>
          <div class="denhaag-card__content">
            <div class="denhaag-card__text-wrapper">
              <div class="denhaag-card__title">
                <slot name="heading"></slot>
              </div>
              ${subtitleSlot}
              <slot></slot>
            </div>
            <div class="denhaag-card__actions">
              ${this.getDateTimeElement()}
              <a
                ${this.linkLabel && `aria-label="${escapeXML(this.linkLabel)}"`}
                href="${escapeXML(this.href)}"
                class="denhaag-card__action-link"
              >
              <slot name="icon"></slot>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
