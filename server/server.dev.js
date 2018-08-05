const static_url  = ''
require('asset-require-hook')({
  name: '/[hash].[ext]',
  extensions: ['jpg', 'png', 'gif'],
  limit: 8000
})
import csshook from 'css-modules-require-hook/preset'
import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import send from 'koa-send'
import React from 'react'
import { renderToString } from 'react-dom/Server'
import { ServerStyleSheet } from 'styled-components'
import App from './App.jsx'
import manifest from '../dist/manifest.json'
const app = new Koa()
const router = new Router()

const sheet = new ServerStyleSheet()
router.get('/', (ctx) => {

  const SSRString = renderToString(sheet.collectStyles(<App location={ctx.url} />))
  const styles = sheet.getStyleTags()

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="author" content="Buctwbzs">
      <meta name="keywords" content="Buctwbzs">
      <meta name="description" content="Buctwbzs's personal website.">
      <title>
        Buctwbzs
      </title>
      <link rel="icon" href="http://www.buctwbzs.com/statics/images/personal-website/favicon.ico" type="image/x-icon">
      <link rel="shortcut icon" href="http://www.buctwbzs.com/statics/images/personal-website/favicon.ico" type="image/x-icon">
      <link href=${manifest['vendor.css']} rel="stylesheet">
      <link href=${manifest['index.css']} rel="stylesheet">
      ${styles}
    </head>
      <body>
        <div id="app">${SSRString}</div>
        <script type="text/javascript" src=${manifest['vendor.js']}></script>
        <script type="text/javascript" src=${manifest['index.js']}></script>
      </body>
    </html>
  `
  ctx.body = html

})


app.use(router.routes())

app.use(async ctx => {
  await send(ctx, ctx.path, { root: '../dist/client' })
})

app.listen(3000)