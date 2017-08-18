module.exports = () => {
  return {
    plugins: [
      require('postcss-icss-values'),
      require('postcss-import'),
      require('postcss-extend')
    ]
  };
}
