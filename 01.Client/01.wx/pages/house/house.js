// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSelect: 0,
    imgUrls: [
      "../../images/swiper1.jpg",
      "../../images/swiper2.jpeg",
      "../../images/swiper3.jpeg",
      "../../images/swiper4.jpeg"
    ],
    imageSrc1: [{
      id: 0,
      title1: "London",
      title2: "伦敦",
      url: "../../images/london.png",
    }, {
      id: 1,
      title1: "Liverpool",
      title2: "利物浦",
      url: "../../images/liverpool.png",
    }, {
      id: 2,
      title1: "Manchester",
      title2: "曼切斯特",
      url: "../../images/manchester.png",
    }, {
      id: 3,
      title1: "Newcastle",
      title2: "纽卡斯尔",
      url: "../../images/newcastle.png"
    }, {
      id: 4,
      title1: "Leeds",
      title2: "利兹",
      url: "../../images/lizi.png"
    }, {
      id: 5,
      title1: "Sheffield",
      title2: "谢菲尔德",
      url: "../../images/sheffield.png"
    }, {
      id: 6,
      title1: "Birmingham",
      title2: "伯明翰",
      url: "../../images/bominhan.png"
    }, {
      id: 7,
      title1: "Covertry",
      title2: "考文垂",
      url: "../../images/kaowenchui.png"
    }, {
      id: 8,
      title1: "Huddersfield",
      title2: "哈德斯菲尔德",
      url: "../../images/hadesifeidela.png"
    }, {
      id: 9,
      title1: "Glasgow",
      title2: "格拉斯哥",
      url: "../../images/glasgow.png"
    }],


    imageSrc2: [{
      id: 0,
      title1: "Melbourne",
      title2: "墨尔本",
      url: "../../images/melbourne.jpg",
    }, {
      id: 1,
      title1: "Canberra",
      title2: "堪培拉",
        url: "../../images/canberra.jpg",
    }, {
      id: 2,
      title1: "Brisbane",
      title2: "布里斯班",
        url: "../../images/brisbane.jpg",
    }],

    
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
      }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  toSearch: function() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  clickItem: function(res) {
    console.log(res);
    let id = res.currentTarget.dataset.www;
    this.setData({
      indexSelect: id
    })
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

})