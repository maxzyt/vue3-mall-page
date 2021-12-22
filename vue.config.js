module.exports = {
    publicPath: './', // 根路径
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'static', // 静态资源目录(js,css,img,fonts)
    lintOnSave: false, // 是否开启eslint保存检测,有效值（true||false||error)
    devServer: {
        port: 80,
        proxy: {
            // 配置跨域因为我们给url加上了前缀/api，我们访问/index/getNewsList就当于访问了：http://localhost:81/api/index/getNewsList。
            // 在proxy中拦截了/api,并把/api及其前面的所有替换成了target中的内容，因此实际访问Url是http://vuedemoapi.com/api/index/getNewsList。
            '/api': {
                target: 'http://vuedemoapi.com/api',
                ws: true, // 是否跨域
                changeOrigin: true,
                secure: false,
                // 重写地址
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}