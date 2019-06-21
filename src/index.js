window.loader = bui.loader({
    cache: false
})
window.router = bui.router({});
// var apiUrl="";  
var apiUrl="http://qxbyd.cyol.com/"; 
bui.ready(function() {
    $(document).delegate('input, textarea, select', 'blur', function(){
       setTimeout(function(){
           $('html').animate({height: '100.1vh'}, 100, function(){
                 $(this).animate({height: '100vh'}, 1)
           })
       },100);
    });
    document.onreadystatechange = function () {
        if (document.readyState == "complete") {
            document.body.style.display = "block";
        } else {
            document.body.style.display = "none";
        };
    };
    // 初始化路由
    router.init({
        id: "#bui-router",
        progress: true,
        hash: true
    })

    // 绑定事件
    bind();
    // $_SESSION['cyol_orderment'] = array('wx_open_id'=>$openid);
    // 事件类定义
    function bind() {
        // 绑定页面的所有按钮有href跳转
        bui.btn({ id: "#bui-router", handle: ".bui-btn" }).load();

        // 统一绑定页面所有的后退按钮
        $("#bui-router").on("click", ".btn-back", function(e) {
            // 支持后退多层,支持回调
            bui.back();
        })
    }
    loader.define(function(require,exports,module){
        // 绑定按钮跳转
        $("#btn").on("click",function(){
          router.load({ url: "pages/page2/page2.html", param: {} });
        })
    })
    
})