// Format a design token path as CSS variable
export const path2css = (path) => `var(--${path.join('-')})`;

/**
 * @typedef {{ key: string, path: string[], value: string }} DesignToken
 */

/** @param {unknown} token @returns {token is DesignToken} */
export const isDesignToken = (token) =>
  typeof token === 'object' && token !== null && 'key' in token && 'path' in token && 'value' in token;

/** @param {object} tokenGroup @returns {DesignToken[]} */
export const getTokenRows = (tokenGroup) =>
  Object.values(tokenGroup).flatMap((token) => {
    if (isDesignToken(token)) {
      return token;
    }

    return typeof token === 'object' && token !== null ? getTokenRows(token) : [];
  });

/** @param {DesignToken} token @returns {string} */
export const getTokenGroup = (token) => token.path.slice(1, -1).join('.') || token.path.at(-1) || '';
