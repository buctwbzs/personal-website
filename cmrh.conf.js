module.exports = {
  extensions: ['.scss'],
  preprocessCss: (data, filename) =>
    require('node-sass').renderSync({
      data,
      file: filename
    }).css,
  generateScopedName: '[name]_[local]__[hash:base64:5]',
}