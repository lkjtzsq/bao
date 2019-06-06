/**
 * 首页模块
 * 默认模块名: main
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require, exports, module) {

    var pageview = {};

    // 模块初始化定义
    pageview.init = function() {

    }

    // 初始化
    pageview.init();
      // 绑定按钮跳转
    $("#btn").on("click",function(){
      router.load({ url: "pages/mine/mine.html", param: {} });
    })

    // 输出模块
    return pageview;
})
