# webpack4 打包demo

# webpack版本
webpack全局:5.61.0
webpack局部:4.29.6
webpack-cli全局:4.9.1
webpack-cli局部:3.2.3

# Tips
[参考链接]https://segmentfault.com/a/1190000014159004?utm_source=sf-similar-article
1.webpack可以全局安装或者本地安装。官网上不推荐全局安装，因为这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败
2.全局和局部都安装webpack,这样命令行内直接使用webpack命令，使用的是全局的，npm运行的是局部的webpack
3.全局安装是为了可以在命令行中使用webpack，项目安装是为了让项目发布后，其他人可以在直接使用npm命令时使用与你相同版本的webpack

# 一：使用纯命令行打包文件
```
node_modules/.bin/webpack app/main.js -o common/index.js
```