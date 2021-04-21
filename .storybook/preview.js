const tokenContext = require.context('!!raw-loader!../src', true, /.\.(css|less|scss|svg)$/);

const tokenFiles = tokenContext.keys().map((filename) => {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  designToken: {
    files: tokenFiles
  }
};
