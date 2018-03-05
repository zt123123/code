// pages/detail/detail.js
const app = getApp()
Page({
  data: {
    userInfo: {},
    nickName: null,
    imgSrc: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    btnSrc: "/assets/img/open.png",
    list: [{
      name: "111",
      src: "/assets/img/add.png"
    },
    {
      name: "111",
      src: "/assets/img/add.png"
    },
    {
      name: "111",
      src: "/assets/img/add.png"
    },
    {
      name: "111",
      src: "/assets/img/add.png"
    },
    {
      name: "111",
      src: "/assets/img/add.png"
    }
    ]
  },

  onLoad(options) {
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

  onReady(options) {
    //获得dialog组件
    this.layer = this.selectComponent("#layer");
  },


  showLayer() {
    this.layer.showLayer();
  },

  //取消事件
  _cancelEvent() {
    this.layer.hideLayer();
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

  onPullDownRefresh() {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(() => {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  onReachBottom() {
    console.log(11111111111)
  },
  openPaper() {
    this.setData({
      btnSrc: "/assets/img/openactive.png"
    })
  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来一起拆红包，最高200元',
      path: 'pages/detail/detail',
      success: (res) => {
        // 转发成功
      },
      fail: (res) => {
        // 转发失败
      }
    }
  }
})