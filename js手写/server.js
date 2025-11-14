const http = require('http');
const url = require('url');

// 启动服务器，端口 3000（与前端的 5500 不同，形成跨域）
http.createServer((req, res) => {
  // 解析 URL 中的查询参数（获取 callback 名称）
  const query = url.parse(req.url, true).query;
  const callbackName = query.callback; // 前端传入的回调函数名（如 myCallback）

  // 要返回的数据
  const data = {
    code: 200,
    message: '成功',
    result: { list: [1, 2, 3], total: 3 }
  };

  // 构造 JSONP 响应：回调函数名(数据)
  const response = `${callbackName}(${JSON.stringify(data)})`;

  // 设置响应头（允许任意源访问，纯测试用）
  res.setHeader('Content-Type', 'text/javascript');
  res.end(response);
}).listen(3000, () => {
  console.log('后端服务器运行在 http://localhost:3000');
});