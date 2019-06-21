/**
 * 注册模板,包含验证码倒计时及手机号简单验证
 * 默认模块名: pages/register/register
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(){
    bui.ready(function(){
        // storage 获取 token
        var storage=bui.storage();
        var token=storage.get("token")[0];
        $('.green-back').click(function(){
            router.back({
                callback:function(){
                    // $('.meeting-contain').html("");
                    // router.refresh();
                }
            });
        });
        // ajax
        function getList(ele,url,icon){
            bui.ajax({
                url:apiUrl+url,
                data:{
                    "token":token
                },
                 needNative:true
            }).then(function(data){
                $(ele).html("");
                var data=data.data.data;
                var str="";
                $(data).each(function(i,v){
                    var id=v.id;
                    var name=v.name;
                    var status=v.status;
                    switch(status){
                        case "-1":
                            status="已结束";
                            break;
                        case "0":
                            status="审核中";
                            break;
                        case "1":
                            status="已预订";
                            break;
                        case "2":
                            status="未通过";
                            break;
                        case "3":
                            status="已撤销";
                            break;
                    }
                    var theme=v.theme;
                    var time=v.date+" "+v.start_time+"-"+v.end_time;
                    var address=v.address;
                    str+='<div class="mine-item"><h1 class="mine-title"><i class="'+icon+'"></i>'+name+'</h1><p class="mine-cr used">状态：<span>'+status+'</span></p><p class="mine-cr">主题：'+theme+'</p><p class="mine-cr">时间：<span>'+time+'</span></p><p class="mine-cr">地点：<span>'+address+'</span></p><p class="mine-btn-cr"><a class="cancel" data-id="'+id+'">取消</a></p></div>';
                });
                $(str).appendTo($(ele));
            },function(err){
                console.log(err);
            });
        }
        $('body').on("click",'.cancel',function(){
            var id=$(this).attr('data-id');
            setTimeout(function(){
                getMine(id);
            },500);
        })
        function getMine(id){
            bui.ajax({
            url:apiUrl+"api/meeting/cancel_book",
            data:{
                id:id,
                "token":token
            },
            needNative:true
            }).then(function(data){
                getList("#mb1","api/meeting/my_book","icon1");
            });
        }
        getList("#mb1","api/meeting/my_book","icon1");
    });
})
