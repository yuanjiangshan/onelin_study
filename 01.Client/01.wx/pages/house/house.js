// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSelect:0,
    imgUrls: [
      "../../images/swiper1.jpg",
      "../../images/swiper2.jpeg",
      "../../images/swiper3.jpeg",
      "../../images/swiper4.jpeg"
    ],
    imageSrc:[
      "../../images/london.png",
      "../../images/liverpool.png",
      "../../images/manchester.png",
      "../../images/newcastle.png"
    ],
    imageTitle:[
      "London"
    ],
    topics: [{
      id: 0,
      title: "英国",
    },
    {
      id: 1,
      title: "澳大利亚",
    },
    {
      id: 2,
      title: "爱尔兰",
    }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  clickItem:function(res){
    let id=res.currentTarget.dataset.yjs;
    this.setData({
      indexSelect:id
    })
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
})