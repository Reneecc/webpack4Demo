//webpack.config.js 配置文件 简单的js模块

//两个exports也不报错

// webpack2的配置
module.exports = {
    entry: __dirname + "/app/main.js", // 之前提到的唯一入口文件
    output: {
        path: __dirname + "/common", // 打包后的文件存放的地方
        filename: "index.js" // 打包后输出文件的文件名
    }
}

//webpack4的配置
module.exports = {
    //webpack4需要添加这个配置，devlopment为开发环境，production为生产环境
    //生产环境 打包出来的文件不会压缩在一起，注释掉后终端只会出现黄色报错信息
    // mode: "development",
    mode: "production",
    entry: __dirname + "/app/main.js", // 唯一入口文件
    output: {
        path: __dirname + "/common", // 打包后的文件存放的地方
        filename: "index.js"//打包后输出文件的文件名
    }
}



//__dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录
//module.exports,申明多个时，第二个会顶替第一个