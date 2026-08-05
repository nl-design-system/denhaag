// Format a design token path as CSS variable
export const path2css = (path) => `var(--${path.join('-')})`;

export const isDesignToken = (token) =>
  typeof token === 'object' && token !== null && 'value' in token && 'path' in token;

export const getTokenRows = (tokenGroup) =>
  Object.values(tokenGroup).flatMap((token) => {
    if (isDesignToken(token)) {
      return token;
    }

    return typeof token === 'object' && token !== null ? getTokenRows(token) : [];
  });

export const getTokenGroup = (token) => token.path.slice(1, -1).join('.') || token.path.at(-1);
