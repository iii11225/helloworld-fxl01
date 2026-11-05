export default function handler(req, res) {
  const now = new Date().toLocaleString('zh-CN');
  const html = `
  <!DOCTYPE html>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      body {
        /* 柔和渐变背景 */
        background: linear-gradient(135deg, #f0f8ff, #e6f7ff);
        font-family: "Microsoft Yahei", sans-serif;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .text-box {
        animation: fadeIn 1.2s ease-in-out;
        text-align: center;
      }
      .title {
        font-size: 26px;
        color: #222;
      }
      .time {
        margin-top: 24px;
        font-size: 20px;
        color: #336699;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>
  <body>
    <div class="text-box">
      <div class="title">Hello World！我是fxl，我的第一个AI开发的网站</div>
      <div class="time">服务器当前时间：${now}</div>
    </div>
  </body>
  </html>
  `;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
}
