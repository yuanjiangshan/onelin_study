//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    indexSelect: 0,
    topics:[{
      id:0,
      url:"../../images/user/user.png",
      title:"查看个人资料"
    },{
        id: 1,
        url: "../../images/user/history record.png",
        title: "历史记录"
    },
     {
        id: 2,
        url: "../../images/user/on.png",
        title: "关于"
      }, {
        id: 3,
        url: "../../images/user/help.png",
        title: "帮助"
      }, {
        id: 4,
        url: "../../images/user/Setting.png",
        title: "设置"
      }]
  },
  toUser:function(){
    wx.navigateTo({
      url: '../homes-pay/homes-pay'
    })
  }
  ,
  onLoad: function () {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toUserMap: function (res) {
    let buffer = res.currentTarget.dataset.yjs;
    console.log(res);
    switch(buffer){
      case 0: wx.navigateTo({
        url: "../homes-user/homes-user"
      });
      break;
      case 1: wx.navigateTo({
        url: "../homes-history record/homes-history record"
      });
        break;
      case 2: wx.navigateTo({
        url: "../homes-on/on"
      });
        break;
      case 3: wx.navigateTo({
        url: "../homes-help/homes-help"
      });
        break;
      case 4: wx.navigateTo({
        url: "../homes-Setting/homes-Setting"
      });
        break;
    }
  }
})
