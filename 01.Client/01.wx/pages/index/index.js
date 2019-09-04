//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      "../../images/index/liuxue.jpg",
      "../../images/index/fengjing.jpg",
      "../../images/index/ketang.jpg"
    ],
    navs:[
      {
        id:0,
        title:"留学地区",
        url:"../../images/index/area.png",
      }, {
        id:1,
        title: "课程",
        url: "../../images/index/course.png",
      }, {
        id:2,
        title: "公寓",
        url: "../../images/index/houes.png",
      }, {
        id:3,
        title: "留学顾问",
        url: "../../images/index/consultant.png",
      }
    ],
    background:[
      {
        id:0,
        url: "../../images/index/school1.png"
      }, {
        id: 1,
        url: "../../images/index/school2.png"
      }, {
        id: 2,
        url: "../../images/index/school3.png"
      }, {
        id: 3,
        url: "../../images/index/school4.png"
      }
    ], imgUrlOne: [
      {
        id: 0,
        url: "../../images/index/course1.jpg"
      }, {
        id: 1,
        url: "../../images/index/course2.jpg"
      }, {
        id: 2,
        url: "../../images/index/course3.jpg"
      }
    ], 
    tails: [
      {
        id: 0,
        title: "选择大数据留学需要做哪些准备",
        url: "../../images/index/advisory1.jpg",
      }, {
        id: 1,
        title: "美国升学咨询机构给高一学生准备美国升学的建议",
        url: "../../images/index/advisory2.png",
      }, {
        id: 2,
        title: "大数据留学为何能够热潮涌动？",
        url: "../../images/index/advisory3.jpg",
      }, {
        id: 3,
        title: "美国升学咨询机构告诉大家美国升学生活该如何适应",
        url: "../../images/index/advisory4.jpg",
      }, {
        id: 4,
        title: "如何通过美国升学咨询机构选择美国中学",
        url: "../../images/index/advisory5.png",
      }
    ]
  },

  onLoad: function () {
    
  },
  jump: function (res) {
    let buffer = res.currentTarget.dataset.index;
    switch(buffer){
      case 0:
        wx.navigateTo({
          url: '../indexPag/area/area'
         })
        break;
      case 1:
        wx.navigateTo({
          url: '../logs/logs'
        })
        break;
      case 2:
        wx.navigateTo({
          url: "../house/house"
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../indexPag/area/area'
        })
        break;
    }
  }

})
