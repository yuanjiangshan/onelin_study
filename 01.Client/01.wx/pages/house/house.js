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
        title1: "Sydney",
        title2: "悉尼",
        url: "../../images/sydney.png",
      },
      {
        id: 1,
        title1: "Melbourne",
        title2: "墨尔本",
        url: "../../images/melbourne.jpg",
      }, {
        id: 2,
        title1: "Canberra",
        title2: "堪培拉",
        url: "../../images/canberra.jpg",
      }, {
        id: 3,
        title1: "Brisbane",
        title2: "布里斯班",
        url: "../../images/brisbane.jpg",
      }
    ],

    imageSrc3: [{
      id: 0,
      title1: "Dublin",
      title2: "都柏林",
      url: "../../images/dublin.png",
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
      }
    ],

    introduces: [{
        id: 0,
        src: "../../images/intro1.jpeg",
        title1: "纽卡斯尔",
        place: "IQ Collingwood",
        price: "£113 起/周",
        des: "纽卡网红学生公寓，200英镑限时返现"
      },
      {
        id: 1,
        src: "../../images/intro2.jpg",
        title1: "哈德斯菲尔德",
        place: "The Courtyard",
        price: "£140 起/周",
        des: "哈德斯菲尔德早鸟预订，火爆抢房"
      },
      {
        id: 2,
        src: "../../images/intro3.jpg",
        title1: "谢菲尔德",
        place: "New Era Student Living",
        price: "£148 起/周",
        des: "谢菲尔德最新Studio，限时优惠"
      }, {
        id: 3,
        src: "../../images/intro4.jpg",
        title1: "格拉斯哥",
        place: "true Glasgow",
        price: "£150 起/周",
        des: "£250奢华床品厨具免费送+免费接机"
      },
      {
        id: 4,
        src: "../../images/intro3.jpg",
        title1: "谢菲尔德",
        place: "Fenton House",
        price: "£130 起/周",
        des: "限时折扣，立省300镑"
      },
      {
        id: 5,
        src: "../../images/intro5.jpg",
        title1: "伯明翰",
        place: "Vita Birmingham",
        price: "£189 起/周",
        des: "全新学生公寓，限时高额返现进行中"
      },
      {
        id: 6,
        src: "../../images/intro6.jpg",
        title1: "利兹",
        place: "Leeds St Albans",
        price: "£182 起/周",
        des: "利兹全新公寓，抢房进行中"
      },
      {
        id: 7,
        src: "../../images/intro7.jpg",
        title1: "约克",
        place: "VITA Student York",
        price: "£194 起/周",
        des: "拼多多，拼得多，省得多！"
      },
      {
        id: 8,
        src: "../../images/intro8.jpg",
        title1: "曼切斯特",
        place: "Circle Square",
        price: "£255 起/周",
        des: "限时高额返现，拼团更实惠"
      },
      {
        id: 9,
        src: "../../images/intro9.jpg",
        title1: "伦敦",
        place: "IQ Bankside",
        price: "£351 起/周",
        des: "限时200英镑返现"
      }
    ]

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
    // console.log(res);
    let id = res.currentTarget.dataset.www;
    this.setData({
      indexSelect: id
    })
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

})