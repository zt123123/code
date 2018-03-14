/*路由标题配置*/
const routeConfig = [{
    path: '/',
    title: '首页'
  },
  {
    path: '/detail',
    title: '领取红包'
  }
]
/** api配置 **/
const domainName = 'localhost:8010'

const devServerName = 'http://192.168.0.171:888' /** 开发环境域名地址 **/
const prodServerName = 'http://ss.api.imi78.com' /** 生产环境域名地址 **/

const serverName = (process.env.NODE_ENV == 'development' ? devServerName : prodServerName)
const apiPrefix = serverName + '/api/'
const loginTimeOutErrorCode = 'login_timeout_error'

export {
  routeConfig,
  domainName,
  serverName,
  apiPrefix,
  loginTimeOutErrorCode
}
