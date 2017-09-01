//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    aaa: 1
  },

  fff: function (evt) {

    console.log(evt.currentTarget.dataset.id);
    var i = evt.currentTarget.dataset.id;
    this.setData({
      aaa: i
    });
  }

})
