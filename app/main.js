//main.js 组件，将写的代码模块返回并插入到页面中
const greeter = require('./app.js');
document.querySelector("#root").appendChild(greeter());