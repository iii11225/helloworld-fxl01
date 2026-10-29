export default function handler(req, res) {
  const now = new Date().toLocaleString('zh-CN');
  const html = `
  <html>
    <body style="font-size:24px;text-align:center;margin-top:100px;">
      <p>Hello World！我是fxl，我的第一个AI开发的网站</p>
      <p>服务器当前时间：${now}</p>
    </body>
  </html>
  `
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.status(200).end(html)
}
