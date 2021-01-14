// 模块的缓存

'use strict';

function $require(id) {
  const fs = require('fs');
  const path = require('path');
  
  const filename = path.join(__dirname, id); // pathto/module1.js
  
  const dirname =  path.dirname(filename);  // pathto
  
  let code = fs.readFileSync(filename, 'utf8');
  
  // 定义一个数据容器，用容器去装模块导出的成员
  let module = { id: filename, exports: {} };
  let exports = module.exports; // module.exports

  
  code =`
  (function($require, module, exports, __dirname, __filename) { 
    ${code} 
  })($require, module, exports, dirname, filename);`;
  eval(code);
  return module.exports;
}



var m4 = $require('./module/module4.js');
m4.say('hello')