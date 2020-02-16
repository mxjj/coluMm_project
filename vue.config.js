

module.exports = {
    // eslint保存检查
    lintOnSave: true,
    devServer: {
        // 端口名
        // port: 8080,
        // 自动打开浏览器
        open: true,
        // 代理地址
        proxy: {
            'api': {
                // 代理地址
                target:'http://yapi.demo.qunar.com/',
                // 自动打开浏览器
                changeOrigin:true,
                // 重写地址
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
}