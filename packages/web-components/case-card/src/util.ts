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
export function escapeXML(xml: string) {
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
}
