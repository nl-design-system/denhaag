// Format a design token path as CSS variable
export const path2css = (path) => `var(--${path.join('-')})`;
