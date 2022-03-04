const path = require("path");

module.exports = {

    //入口文件
    entry: "./src/index.js",

    //输出地址
    output: {
        //构建所输出的地址
        path: path.resolve(__dirname, "./dist"),
        //文件名
        filename: "duplicate-removal.js",
        //导出所暴露的对象名
        // library: "duplicateRemoval",
        library: {
            name: "duplicateRemoval",
            //捆绑一个可以使用 CommonJS、AMD 和 script 标签的库
            type: "umd"
        },
        //每次构建清空上次dist
        clean: true
    }
}