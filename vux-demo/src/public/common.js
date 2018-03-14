import Vue from 'vue'
import {
  cookie
} from 'vux'

import {
  imi
} from './constant'

import {
  routeConfig,
  domainName,
  serverName,
  apiPrefix,
  loginTimeOutErrorCode
} from '../config'
/**
 * 定义全局公用方法
 */

Vue.prototype.domainName = domainName
Vue.prototype.serverName = serverName
Vue.prototype.apiPrefix = apiPrefix


/*路由匹配后替换标题title*/
Vue.prototype.matchTitle = function (path) {
  return routeConfig.filter((val, index, arr) => {
    if (path == arr[index].path) {
      return arr[index].title;
    }
  })[0]['title']
}

/** ajax请求 **/
Vue.prototype.http = function (opts) {
  let vue = this
  let autohandle = null;
  if (opts.autohandle != undefined) {
    autohandle = opts.autohandle
  } else {
    autohandle = true
  }

  vue.$vux.loading.show({
    text: '加载中...'
  })

  vue.$http({
    method: opts.method,
    url: apiPrefix + opts.url,
    headers: opts.headers || {
      Authorization: "IMIWXXCX " + cookie.get('token')
    },
    params: opts.params || {},
    data: opts.data || {}
  }).then(function (response) {
    vue.$vux.loading.hide()
    const code = response.data.errorcode;
    const desc = response.data.errordesc;

    if (code == imi.errorInfo.token.errorcode) {
      vue.$vux.alert.show({
        title: '错误',
        content: imi.errorInfo.token.desc
      })
      return false;
    } else if (code == imi.errorInfo.success.errorcode) {

      opts.success && opts.success(response.data)
      return true;

    } else {

      if (autohandle == true) {
        vue.$vux.alert.show({
          title: '错误',
          content: desc
        })
        return false;
      } else {
        opts.success && opts.success(response.data)
      }
    }

    return true;

  }).catch(function (error) {
    vue.$vux.loading.hide()

    if (!opts.error) {

      let response = error.response
      let errorMessage = '请求失败'

      if (response && response.data) {
        if (response.data.code === loginTimeOutErrorCode) {
          window.location.href = '/'
        }
        errorMessage = response.data.message
      }

      vue.$vux.alert.show({
        title: '提示',
        content: errorMessage
      })
    } else {
      opts.error(error.response.data.data)
    }
  })
}

Vue.prototype.get = function (opts) {
  opts.method = 'get'
  this.http(opts)
}

Vue.prototype.post = function (opts) {

  opts.method = 'post'
  this.http(opts)
}

Vue.prototype.put = function (opts) {
  opts.method = 'put'
  this.http(opts)
}

Vue.prototype.delete = function (opts) {
  opts.method = 'delete'
  this.http(opts)
}


/**
 * 表单验证
 * @param {选项配置} opts 
 */
Vue.prototype.valid = function (opts) {
  let vue = this
  let valid = true

  if (opts.ref && !opts.ref.valid) {
    valid = false
  }

  if (opts.ignoreRefs) {
    let newRefs = []
    for (let i in opts.refs) {
      let ref = opts.refs[i]
      for (let j in opts.ignoreRefs) {
        let ignoreRef = opts.ignoreRefs[j]
        if (ref !== ignoreRef) {
          newRefs.push(ref)
        }
      }
    }
    opts.refs = newRefs
  }

  for (let i in opts.refs) {
    if (!opts.refs[i].valid) {
      valid = false
      break
    }
  }

  if (valid) {
    opts.success()
  } else if (opts.error) {
    opts.error()
  } else {
    vue.$vux.toast.show({
      text: '请检查输入'
    })
  }
}

Vue.prototype.closeShowBack = function () {
  this.$store.commit('updateShowBack', false)
}

Vue.prototype.updateTitle = function (value) {
  this.$store.commit('updateTitle', value)
}
