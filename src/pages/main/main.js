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
    bui.ready(function(){
        $('.yybtn1').on("click",function(){
            router.load({ url: "pages/meeting/meeting.html", param: {} });
        });
        var params = router.getPageParams();
        console.log(params.wx_open_id);
        var storage=bui.storage({size:2});
        var name=storage.get("name")[0];
        var token=storage.get("token")[0];
        console.log(token);
        console.log("name:"+name);
        if(!token){
             bui.ajax({
                url:apiUrl+"api/get_token",
                data:{
                    wx_open_id:params.wx_open_id
                }
            }).then(function(data){
                console.log(data)
                if(data.data.status==2 && params.wx_open_id){
                    router.load({ url: "pages/login/login.html", param: {wx_open_id:params.wx_open_id} });
                }else if(data.data.token){
                    storage.set("token",data.data.token);
                    storage.set("name",data.data.name);
                    $('.username').html(data.data.name);
                }
            });
        }else if(name){
            $('.username').html(name);
        }
    });
    // 初始化
    pageview.init();
      // 绑定按钮跳转
    $("#btn").on("click",function(){
      router.load({ url: "pages/mine/mine.html", param: {} });
    })

    // 输出模块
    return pageview;
})
