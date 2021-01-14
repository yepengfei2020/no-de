const http = require('http');

let count = 0;

let method = (request, response) =>{
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});//只需要设置响应头的编码格式就好
  // 此回调会在有任何用户请求时触发
  response.write(`你是第${count++}个访问用户`);
  if(count === 10){
    while(true) { }
  }
  response.end();
}

const  server = http.createServer(method);


server.listen(2080, (error) => {
  if (error)
    throw error;
  console.log('成功启动Web服务，端口：2080');
});


