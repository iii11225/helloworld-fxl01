// 引入node内置http模块
const http = require('http');

// 配置端口
const PORT = 3000;

// 创建服务
const server = http.createServer((req, res) => {
  // 设置响应头：状态码200，内容类型html，编码utf-8
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  // 获取服务器当前时间
  const now = new Date().toLocaleString('zh-CN');

  // 页面HTML内容
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <style>
        body {
            font-family: "Microsoft Yahei", sans-serif;
            font-size: 22px;
            text-align: center;
            margin-top: 120px;
        }
    </style>
</head>
<body>
    <div>Hello World！我是fxl，我的第一个AI开发的网站</div>
    <div style="margin-top:20px; font-size:18px;">服务器当前时间：${now}</div>
</body>
</html>
  `;

  // 返回页面内容
  res.end(html);
});

// 监听端口启动服务
server.listen(PORT, () => {
  console.log(`服务器启动成功！访问地址：http://localhost:${PORT}`);
});
