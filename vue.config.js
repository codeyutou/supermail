module.exports = {
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                'assets':'@/assets',
                'commom':'@/common',
                'components':'@/components',
                'store':'@/store',
                'views':'@/views',
                'network':'@/network',
            }
        }
    }
}