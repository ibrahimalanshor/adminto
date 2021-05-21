const { src, dest, parallel, watch } = require('gulp')
const postcss = require('gulp-postcss')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const nunjucks = require('gulp-nunjucks-render')
const data = require('gulp-data')

const css = () => {
  return src('src/css/style.css')
    .pipe(postcss())
    .pipe(cleanCSS())
    .pipe(dest('dist/css'))
}

const cssDoc = () => {
  return src('src/css/style.css')
    .pipe(postcss())
    .pipe(cleanCSS())
    .pipe(dest('docs/css'))
}

const js = () => {
  return src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(dest('dist/js'))
}

const jsDoc = () => {
  return src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(dest('docs/js'))
}

const html = () => {
  return src('./src/pages/**/*.njk')
    .pipe(data(() => ({
      menus: require('./menu.json')
    })))
    .pipe(nunjucks({
      path: ['src/templates']
    }))
    .pipe(dest('dist/pages'))
}

const htmlDoc = () => {
  return src('./src/pages/**/*.njk')
    .pipe(data(() => ({
      menus: require('./menu.json'),
      publicPath: 'adminto'
    })))
    .pipe(nunjucks({
      path: ['src/templates']
    }))
    .pipe(dest('docs'))
}

const image = () => {
  return src('./src/images/**/*')
    .pipe(dest('dist/images'))
}

const imageDoc = () => {
  return src('./src/images/**/*')
    .pipe(dest('docs/images'))
}

const devHtml = () => {
  watch('./src/**/*.njk', html)
}

const devScript = () => {
  watch('./src/**/*.css', css)
  watch('./src/**/*.js', js)
}

const dev = () => {
  watch('./src/**/*.njk', html)
  watch('./src/**/*.css', css)
  watch('./src/**/*.js', js)
  watch('./src/images/**/*', image)
}

exports.css = css
exports.js = js
exports.html = html
exports.image = image
exports.devHtml = devHtml
exports.devScript = devScript
exports.dev = dev
exports.doc = parallel(cssDoc, jsDoc, htmlDoc, imageDoc)

exports.default = parallel(css, js, html, image)