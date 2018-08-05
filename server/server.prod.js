
import Koa from 'koa'
import Router from 'koa-router'
import send from 'koa-send'
import React from 'react'
import { renderToString } from 'react-dom/Server'
import { ServerStyleSheet } from 'styled-components'
import App from './App'
import manifest from '../dist/client/manifest.json'

const sheet = new ServerStyleSheet()

const app = new Koa()
const router = new Router()

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
      <title>
        Buctwbzs
      </title>
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
  await send(ctx, ctx.path, { root: 'dist/client' })
})

app.listen(8080)