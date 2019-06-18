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
        var apiUrl="http://qxbyd.cyol.com/"; 
        var params = router.getPageParams();
        console.log(params.wx_open_id)
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
                var storage=bui.storage();
                storage.set("token",data.data.token);
            }
        });
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
