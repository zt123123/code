// pages/detail/detail.js
Page

  ({

    /**
     * 页面的初始数据
     */
    data: {
      imgSrc: "",
      downImg: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.setNavigationBarTitle({
        title: '领取红包',
      })
    },
    reqData() {

      wx.login({
        success: function (res) {
          wx.request({
            url: "http://localhost:9999/code",
            header: {},
            data: {
              code: res.code
            },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
              //openid
              console.log(res.data.openid)
            },
            fail: function (err) {
              console.log(err)
            },
            complete: function (res) { },
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })


    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    upload() {
      var that = this


      wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths[0]

          that.setData({
            imgSrc: tempFilePaths
          })

          wx.uploadFile({
            url: 'http://localhost:3000/upload',
            filePath: tempFilePaths,
            name: 'file',
            header: {},
            formData: {},
            success: function (res) {
              console.log(res)
            },
            fail: function (res) { },
            complete: function (res) { },
          })

        }
      })
    },

    download() {
      var that = this
      wx.downloadFile({
        url: 'http://localhost:3000/upload/0.jpg', //仅为示例，并非真实的资源
        success: function (res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          if (res.statusCode === 200) {
            that.setData({
              downImg: res.tempFilePath
            })
          }
        }
      })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
      console.log(11111111111)
    },


    scan() {
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '开红包',
        path: '/pages/index/index',
        success(res) {
          // 转发成功
        },
        fail(res) {
          // 转发失败
        }
      }
    }
  })