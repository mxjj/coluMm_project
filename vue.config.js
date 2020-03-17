
const IS_PROD = ['production'].includes(process.env.NODE_ENV) // 是否是生产环境

console.log(IS_PROD,process.env.VUE_APP_URL)
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
            '/api': {
                // 代理地址
                target: process.env.VUE_APP_URL,
                // 自动打开浏览器
                changeOrigin: true,
                // 重写地址
                pathRewrite: {
                    '^/api': ""
                }
            }
        }
    }
}