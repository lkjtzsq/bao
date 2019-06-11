/**
 * 注册模板,包含验证码倒计时及手机号简单验证
 * 默认模块名: pages/register/register
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(){
    $(function () {
        //初始化配置参数      
        $('#demo').mobiscroll().calendar({
            lang: 'zh'          //使用语言
        });
        var year=new Date().getFullYear();
        var month=new Date().getMonth()+1;
        var day=new Date().getDate();
        $('#demo').val(year+'/'+month+'/'+day);
    });
    $('.green-back').click(function(){
    	bui.back();
    });
    $('.mine').click(function(){
    	router.load({ url: "pages/mine/mine.html", param: {} });
    });
})
