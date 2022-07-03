import express from 'express'
import path from 'path'
import fs from 'fs'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server"
import App from './src/App'

const app = express();

// 参数 index 含义，不立即返回
app.use(express.static('./build', { index: false }))

app.get('/*', (req, res) => {
  const sheet = new ServerStyleSheet();

  const reactApp = renderToString(
    // 让所有样式收集起来
    sheet.collectStyles(
      // 服务器端为前端配置好前端路由
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
  )

  // 因为编译后的脚本文件链接是携带 hash 值，这是不可知的，所以我们只需要替换 div#root 容器就好
  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send(err)
    }
    console.log("🚀 ~ file: server.js ~ line 36 ~ fs.readFile ~ styles", sheet.getStyleTags())
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`).replace("{{ styles }}", sheet.getStyleTags()) // 将收集的样式，添加到页面中去；index.html 模板文件新增样式替换标签位置
    )
  })
})

app.listen('8080', () => {
  console.log('Server is listening on port 8080.');
})
