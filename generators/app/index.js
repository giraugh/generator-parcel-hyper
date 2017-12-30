const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)

    this.argument('appname', { type: String, required: true })
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { name: this.options.appname }
    )
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('index.html'),
      { title: this.options.appname }
    )
    this.fs.copyTpl(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    )
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    )
    this.fs.copyTpl(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    )
  }

  install () {
    this.yarnInstall([
      'hyperapp',
      'babel-plugin-transform-object-rest-spread',
      'babel-plugin-transform-react-jsx',
      'babel-preset-env',
      'parcel-bundler'
    ], { dev: true })
  }
}
