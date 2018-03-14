/**
 * 定义常量
 */
const imi = imi || {};

imi.errorInfo = {
  success: {
    errorcode: 0,
    errordesc: "请求成功",
  },
  token: {
    errorcode: 99999,
    errordesc: "令牌错误，请重新登录",
  }
};


export {
  imi
}
