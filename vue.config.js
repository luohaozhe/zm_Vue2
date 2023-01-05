const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,　　//关闭语法检查
  devServer:{
      
      //配置代理跨域
      proxy: {
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        '/api': {
          target: `http://1.116.64.64:5004/api2/`,
          changeOrigin: true,
          pathRewrite: {
            '^/api' : ''
          }
        }
      },

      host: 'localhost',
      // host: '112.27.203.71',
      
      // public: '112.27.203.71:8080', // 此处是自己电脑IP地址！
      https: false,
      open: true,
  },
 

})
