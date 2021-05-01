// required for testing with jest
module.exports = {
  presets: [['@babel/preset-env', { loose: false}], '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [[
    '@babel/plugin-transform-runtime',
    {
      regenerator: true,
      corejs: 3,
    },
  ]]
};
