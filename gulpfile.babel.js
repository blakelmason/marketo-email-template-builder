import gulp from 'gulp'
import React from 'react'
import ReactDOM from 'react-dom/server'
import fs from 'fs'
import Handlebars from 'handlebars'
import App from './src/App'
import sass from 'node-sass'

gulp.task('test', (cb) => {
  const reactHtml = ReactDOM.renderToStaticMarkup(<App />)
  const css = sass.renderSync({ file: './src/style.scss' }).css.toString()
  const template = Handlebars.compile(
    fs.readFileSync('./templates/handlebars.html', 'utf-8')
  )
  const html = template({ body: reactHtml, style: css })
  fs.writeFileSync('./src/template.html', html)
  cb()
})
