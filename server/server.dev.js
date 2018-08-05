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
import App from '../shared/App.jsx'
import manifest from '../dist/manifest.json'

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {

  const SSRString = renderToString(<App />)

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
  await send(ctx, ctx.path, { root: path.resolve(__dirname, '../dist') })
})

app.listen(3000)