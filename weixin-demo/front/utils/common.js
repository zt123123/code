/**
 * 常用api封装
 */

//对话框
const dialog = (options = {}) => {
  const { title, content, success, fail } = options
  wx.showModal({
    title,
    content,
    success(res) {
      if (res.confirm) {
        success && success()
      } else if (res.cancel) {

      }
    },
    fail: fail && fail()
  })
}

//网络请求
const request = (options = {}) => {
  const { url, method = 'post', dataType = 'json', data = {}, header = { 'content-type': 'application/json' }, success, fail } = options
  wx.request({
    url,
    method,
    data,
    dataType,
    header,
    success(res) {
      success && success(res)
    },
    fail(err) {
      fail && fail(err)
    },
  })
}
//toast
const toast = (options) => {
  const { title = '成功', icon = 'success', duration = 2000 } = options
  wx.showToast({
    title,
    icon,
    duration
  })
}

module.exports = {
  dialog,
  request,
  toast
}
