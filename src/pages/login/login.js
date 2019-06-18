/**
 * 注册模板,包含验证码倒计时及手机号简单验证
 * 默认模块名: pages/register/register
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(){
    $().ready(function(){
          $('.login').css('top',($(window).height()-$('.login').height())/2-40+'px');
    });
    
    var pageview = {};
    pageview.init = function () {
        var apiUrl="http://qxbyd.cyol.com/"; 
        var params = router.getPageParams();
        console.log(params)
      $('#login_submit').click(function(){
          var name=$('#uname').val();
          var telephone=$('#utel').val();
          var code=$('#code').val();
          var region=$('#region option:selected').val();
          var duty=$('#duty').val();
          if(name==""){
             bui.hint("用户名不能为空！");
             $('#uname').focus();
          }else if(!/^1[0-9]{10}/.test(telephone)){
             bui.hint("手机号格式不正确！");
             $('#utel').focus();
          }else if(code==""){
             bui.hint("验证码不能为空！");
             $('#code').focus();
          }else if(region==0){
             bui.hint("请选择公司！");
          }else{
            bui.ajax({
              url:apiUrl+"api/register",
              data:{
                  name:name,
                  telephone:telephone,
                  code:code,
                  region:region,
                  duty:duty,
                  wx_open_id:params.wx_open_id
              }
            }).then(function(data){
              console.log(data);
              if(data.data.token){
                var storage=bui.storage();
                storage.set("token",data.data.token);
                router.load({ url: "pages/main/main.html", param: {wx_open_id:params.wx_open_id} });
              }
            },function(err){
              console.log(err);
            });
          }
      });

        // 验证码示例
      var $btnSend = $("#btnSend");
      var timer = bui.timer({
          onEnd: function() {
              $btnSend.removeClass("disabled").text("重新获取验证码");
          },
          onProcess: function(e) {
              var valWithZero = e.count < 10 ? "0" + e.count : e.count;
              $btnSend.text(valWithZero + "后重新获取");
          },
          times: 60
      });

      $btnSend.on("click", function(argument) {
          var hasDisabled = $(this).hasClass("disabled");
          if (!hasDisabled) {
              $(this).addClass("disabled")
              bui.hint("验证码发送成功")
              timer.restart();
          }
      })
    }

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})
