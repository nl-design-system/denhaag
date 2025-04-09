// import css from '@gemeente-denhaag/card/src/css.mjs';
import css from './css.js';

export interface CardData {
  dateTime: string;
  href: string;
  heading: string;
}
// const html = (str: string) => str;

export const QUOTATION_MARK = 0x0022;
export const AMPERSAND = 0x0026;
export const LESS_THAN_SIGN = 0x003c;
export const GREATER_THAN_SIGN = 0x003e;
export const SPACE = 0x0020;
export const NONCHARACTER_FFFE = 0xfffe;
export const NONCHARACTER_FFFF = 0xffff;

/**
 * Escaping of the following characters using entities: & < > "
 * Also replace non-character ranges with the replacement character (U+FFFD)
 *
 * @param {string} xml
 * @param {boolean=} attr When false, double quotes will not be escaped
 * @return {string}
 */
export const escapeXML = function escapeXML(xml: string) {
  /**
   * Escape the Unicode 'non-characters'
   * Escape characters below 0xC0 except tab and the newlines
   * Escape < to prevent starting an element
   * Escape > to prevent ending a CDATA section
   * Escape " to prevent ending an attribute
   * Escape & to prevent starting an entity reference
   * Don't escape surrogate blocks, because they are essential for Unicode support in JavaScript
   *
   * @see http://www.w3.org/TR/REC-xml/#charsets
   * @param {string} m One character.
   * @return {string} The same character, or its escaped version.
   */
  function escapeChar(char: string) {
    let m = char;
    const charCode = m.charCodeAt(0);

    if (charCode === QUOTATION_MARK) {
      // && attr !== false)
      // One byte shorter than than &quot;
      m = '&#34;';
    } else if (charCode === AMPERSAND) {
      // &
      m = '&amp;';
    } else if (charCode === GREATER_THAN_SIGN) {
      /*
       * In a text node the > needn't be escaped,
       * but in CDATA sections it must be.
       */
      // <
      m = '&gt;';
    } else if (charCode === LESS_THAN_SIGN) {
      m = '&lt;';
    } else if (charCode < SPACE || charCode === NONCHARACTER_FFFE || charCode === NONCHARACTER_FFFF) {
      m = '\uFFFD';
    }

    return m;
  }

  // TODO: Move RegExp to constant

  // eslint-disable-next-line no-control-regex
  return xml.replace(/[\0-\t\u000B\u000C\u000E-\u00C0"&<>\uFFFE\uFFFF]/g, escapeChar);
};

export class DenhaagCaseCardElement extends HTMLElement implements CardData {
  dateTime: string;
  href: string;
  heading: string;
  _shadow: ShadowRoot;
  _div: HTMLElement;
  constructor() {
    super();
    this._shadow = this.attachShadow({
      mode: 'closed',
    });
    const style = this.ownerDocument.createElement('style');
    style.textContent = css;
    this._shadow.appendChild(style);
    this._div = this._shadow.appendChild(this.ownerDocument.createElement('div'));

    this.dateTime = this.getAttribute('datetime') || '';
    this.href = this.getAttribute('href') || '';
    this.heading = this.getAttribute('heading') || '';
    console.log(42);
  }
  connectedCallback() {
    //
    this.render();
  }
  _getLang() {
    // TODO: Get current language from DOM tree
    return 'nl-NL';
  }
  render() {
    const formattedDate = new Intl.DateTimeFormat(this._getLang()).format(new Date(this.dateTime));

    this._div.innerHTML = `
    <div class="denhaag-card denhaag-case-card">
  <div class="denhaag-card__wrapper">
    <div class="denhaag-card__background"></div>
    <div class="denhaag-card__content">
      <div class="denhaag-card__text-wrapper">
        <p class="utrecht-paragraph denhaag-card__title"><slot name="heading"></slot></p>
        <p class="utrecht-paragraph denhaag-card__subtitle">
          This impressive paella is a perfect party dish and a fun meal to cook.
          <date datetime="${escapeXML(this.dateTime)}">${escapeXML(formattedDate)}</date>
        </p>
      </div>
      <div class="denhaag-card__actions">
        <a aria-label="Shrimp and Chorizo Paella" href="${escapeXML(this.href)}" class="denhaag-card__action-link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 24 24"
            class="denhaag-icon denhaag-card__arrow-icon"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              fill="currentColor"
              d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"
            ></path></svg
        ></a>
      </div>
    </div>
  </div>
</div>

    `;
  }
}
