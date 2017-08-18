module.exports = () => {
  return {
    plugins: [
      require('postcss-import'),
      require('postcss-custom-properties'),
      require('postcss-extend')
    ]
  };
}
