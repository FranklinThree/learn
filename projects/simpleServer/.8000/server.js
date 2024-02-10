const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/localhost/vue/bugs') {
    const bugs = [
      { id: "001", desc: "222行出现空指针异常", resolved: false },
      { id: "002", desc: "666行出现类型转换异常", resolved: false },
      { id: "003", desc: "888行出现算术异常", resolved: false }
    ];
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(bugs));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8000, 'localhost', () => {
  console.log('Server is running at http://localhost:8000');
});
