//app.js 写模块的地方,依据CommonJs规范导出该模块
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = "welcome to use webpack!";
    return greet;
  }