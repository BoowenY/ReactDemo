//不能使用ES6语法，是能用Common JS
const proxy = require('http-proxy-middleware')
module.exports = function () {
    app.use(
        proxy('/api1', { //遇见api1前缀请求，出发该代理
            target: 'http://localhost:5000', //请求转发给谁
            changeOrigin: true,//控制服务器收到的请求头中host字段值
            pathRewrite: {'^/api1': ''} //重写请求路径，把api1更替为空字符串，正则匹配
        })
    )
}