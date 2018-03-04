//index.js
//获取应用实例
const app = getApp()
const { dialog, request, toast } = require('../../utils/common.js')

const base64 = require("../../component/images/base64.js")

Page({
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(() => {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  data: {
    userInfo: {},
    grids: [0, 1, 2],
    list: [111111111111, 2222222222, 33333333],
    game: [
      {
        src: "http://wx.imi78.com/materiel/gameimg/102.png",
        name: "欢乐斗地主"
      },
      {
        src: "http://wx.imi78.com/materiel/gameimg/201.png",
        name: "徐州麻将"
      },
      {
        src: "http://wx.imi78.com/materiel/gameimg/203.png",
        name: "临沂麻将"
      }
    ],
    nickName: null,
    imgSrc: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://m.imi78.com/img/pic_01.jpg',
      'http://m.imi78.com/img/pic_02.jpg',
      'http://m.imi78.com/img/pic_03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  //事件处理函数
  launchAppError(e) {
    console.log(e.detail.errMsg)
  },
  jumpToDetail() {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  share() {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  request() {
    request({
      url: 'http://www.getyao.com/api/hot',
      method: "get",
      success: res => {
        console.log(res)
      }
    })
  },
  refresh() {
    wx.startPullDownRefresh({
      success() {

      },
      fail() {

      }
    })
  },
  onLoad() {
    wx.showNavigationBarLoading()
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady() {

    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 500)
  },
  addUser() {
    let info = app.globalData.userInfo
    if (info && info.avatarUrl && info.nickName) {
      this.setData({
        imgSrc: info.avatarUrl,
        nickName: info.nickName,
      })
    }
  },
  getPhoneInfo() {
    wx.getSystemInfo({
      success(res) {
        console.log(res)
      },
      fail(err) {

      }
    })
  },
  login() {
    wx.login({
      success(res) {
        console.log(res)
      },
      fail(res) {

      },
      complete(res) {

      },
    })
  },
  getUserInfo(e) {
    console.log(e.detail)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showAction() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: (res) => {
        console.log(res.tapIndex)
      },
      fail: (res) => {
        console.log(res.errMsg)
      }
    })
  },
  showDialog() {
    dialog({
      title: '123',
      content: '456',
      success: () => {
        console.log('123')
      }
    }
    )
  },
  showToast() {
    toast({
      title: "111111111"
    })
  },
  showCustom() {
  },
  showLoading() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '开红包',
      path: '/pages/index/index',
      success: (res) => {
        // 转发成功
      },
      fail: (res) => {
        // 转发失败
      }
    }
  }
})
