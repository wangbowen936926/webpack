const path = require("path");
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WorkboxWebpackPlugin =  require('workbox-webpack-plugin');

const port = 3000;

module.exports = ((env) => {

    return {
        mode: "development",

        entry: ["./src/workbox.js"],

        output: {
            filename: "static/app.js",
            path: path.resolve(__dirname, "./dist"),
            clean: true
        },

        //配置终端打印
        stats: "errors-only",

        devServer: {
            static: "./dist",
            port,
            //启用 webpack 的热模块替换功能
            hot: true,
            //为所有服务启用gzip 压缩
            compress: true,
            client: {
                //当出现编译器错误或警告时，在浏览器中显示全屏覆盖。
                overlay: true,
                //在浏览器中以百分比形式打印编译进度。
                progress: true,
            },
            devMiddleware: {
                                             
            }
        },

        plugins: [
            new WebpackBar({
                color: "#f5a623",
                profile: true,
                // basic: false
            }),
            new HtmlWebpackPlugin({
                inject: "head",
                filename: "index.html",
                template: "./src/index.html"
            }),
            new WorkboxWebpackPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true
            }),
            new FriendlyErrorsWebpackPlugin({
                compilationSuccessInfo: {
                    messages: env.development && [
                        `App runing at：`, 
                        `- Local:   http://localhost:${port}`, 
                        `- Network: http://${require('ip').address()}:${port}`
                    ]
                } 
            })
        ]
    }
}) 