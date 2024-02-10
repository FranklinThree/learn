const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/vue/users') {
    const users = [
      { id: "001", name: '张三', age:20 },
      { id: "002", name: '李四', age:21 },
      { id: "003", name: '王五', age:22 },

    ];
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8001, 'localhost', () => {
  console.log('Server is running at http://localhost:8001');
});
