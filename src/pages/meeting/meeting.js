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
        var params = router.getPageParams();
         //初始化配置参数   
        $('#demo').mobiscroll().calendar({
            lang: 'zh'          //使用语言
        });
        var year=new Date().getFullYear();
        var month=new Date().getMonth()+1;
        var day=new Date().getDate();
        $('#demo').val(year+'/'+month+'/'+day);
        var _windowH=$(window).height();
        $('.time-content').height(_windowH*0.8-129-61-10-5-12);
        // var myScroll = new IScroll('.time-content');
        $('.green-back').click(function(){
           router.back({
            name: "main"
           });
        });
        $('.mine').click(function(){
            router.load({ url: "pages/mine/mine.html", param: {} });
        });
        $('body').on("click",".meeting-item",function(did){
            $('#theme').val("");
            var index=$(this).index();
            var dataId=$(this).attr("data-id");
            $('.ts-head h1').html($(this).find('.meeting-title').html());
            $('.ts-desc').html($(this).find('.p1').html());
            $('.ts-count span').html($(this).find('.p2').html());
            $('.time-chose-bg,.time-chose').show();
            $('.time-chose').attr('data-id',dataId);
            did=dataId;
            getTime(did);
        })
        $('.time-chose-bg').click(function(){
            $(this).hide();
            $('.time-chose').hide();
        });
        $('#demo').change(function(){
            $('.meeting-contain').html("");
            getList();
        });
        $('body').on("click",".meeting-right img",function(event){
            $('.view-pic-bg').show();
            $('.view-pic').css('display','flex');
            $('.view-pic img').attr('src',$(this).attr('src'));
            event.stopPropagation();
        })
        $('body').on("click",".view-pic",function(){
            $(this).hide();
            $('.view-pic-bg').hide();
        })
        $('.meeting-contain').height($(window).height()-123-8-54);
       function getList(){
         // ajax请求
        // console.log(date);
        bui.ajax({
            url:apiUrl+"api/meeting",
            type:"get",

            data:{
                "date":$('#demo').val().replace(/\//g,'-'),
                "token":token
            },
            needNative:true
        }).then(function(data){
            console.log(data);
            var data=data.data.data;
            var str1='';
            var str2='';
            $(data).each(function(i,v){
                var spanStr='';
                var name=v.name;
                var meeting_desc=v.meeting_desc;
                var pnumber=v.pnumber;
                var address=v.address;
                var books=v.books;
                var id=v.id;
                var region=v.region;
                $(books).each(function(k,z){
                    if(z==1){
                        spanStr+='<span style="background:#e2e2e2"></span>';
                    }else{
                        spanStr+='<span></span>';
                    }
                });
                var thumbnail=v.thumbnail[0] || "/images/pic-default.png";
                if(region=="1"){
                    str1+='<div class="meeting-item" data-id="'+v.id+'"><div class="meeting-room"><div class="meeting-left"><h1 class="meeting-title">'+v.name+'</h1><p class="meeting-cr p1">'+v.devices+'</p><p class="meeting-cr p2">'+v.pnumber+'人</p><p class="meeting-cr p3">'+v.address+'</p></div><div class="meeting-right"><img src="'+v.thumbnail+'"></div></div><div class="meeting-progress"><div class="progress-bar">'+spanStr+'</div><div class="progress-count"><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span></div></div></div>';
                }
                if(region=="2"){
                    str2+='<div class="meeting-item" data-id="'+v.id+'"><div class="meeting-room"><div class="meeting-left"><h1 class="meeting-title">'+v.name+'</h1><p class="meeting-cr p1">'+v.devices+'</p><p class="meeting-cr p2">'+v.pnumber+'人</p><p class="meeting-cr p3">'+v.address+'</p></div><div class="meeting-right"><img src="'+v.thumbnail+'"></div></div><div class="meeting-progress"><div class="progress-bar">'+spanStr+'</div><div class="progress-count"><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span></div></div></div>';
                }
            });
           
            $(str1).appendTo($('.mc1'));            
            $(str2).appendTo($('.mc2'));  
            $('.meeting-item').each(function(i,v){
                var did = $(this).attr('data-id');
                getTime(did);
            }) 
        });
       }
       getList();
       $('.ts-group input').change(function(){
            var _this=$(this);
            var inputArr=$('.time-content input[type="checkbox"]');
            var len=$('.time-content input[type="checkbox"]:checked').length;
            var checkArr=$('.time-content input.on');
            // console.log('--------------')
            // console.log(checkArr);
            var start_p=$('.time-content input[type="checkbox"]:checked').eq(0).parents('.ts-group').index();
            var end_p=$('.time-content input[type="checkbox"]:checked').eq(len-1).parents('.ts-group').index();
            var inputCheckedLen=$('.ts-group input:checked').length;
            var step=Math.ceil(inputCheckedLen/2);
            // console.log("step:"+step);
            console.log(start_p,end_p);
            if(inputCheckedLen>0){
                $('.ts-btn').addClass('on');
            }else{
                $('.ts-btn').removeClass('on');
            }
          if(!$(this).hasClass('on')){
            inputArr.slice(start_p,end_p+1).not('[disabled]').prop('checked','checked').addClass('on');
            inputArr.slice(start_p,end_p+1).each(function(i,v){
                if($(v).attr('disabled')){
                     $(inputArr).prop('checked',false).removeClass('on');
                }
            });
            // console.log($(inputArr).slice(start_p,end_p+1));
            // $(inputArr).slice(start_p,end_p+1).each(function(i,v){
            //     if($(v).attr('disabled')){
            //         console.log('进来:'+i)
            //         $(inputArr).slice(start_p,end_p+1).slice(0,i).prop('checked',false).removeAttr
            //         ('on');
            //     }
            // });
          }else{
            console.log("取消事件");
            $(this).removeClass('on');
            console.log('step:'+step);
            inputArr.slice(start_p,end_p+1).each(function(i,v){
                console.log(i);
                console.log("---------------");
                console.log(_this.siblings('.ts-time').html());
                console.log("---------------");
                console.log($(v).siblings('.ts-time').html());
                if(_this.siblings('.ts-time').html()==$(v).siblings('.ts-time').html()){
                    if(i<step){
                        console.log("取消上半区");
                        $(inputArr).slice(start_p,end_p+1).slice(0,i).prop('checked',false).removeClass
                        ('on');
                    }else{
                        console.log("取消下半区");
                        console.log( $(inputArr).slice(start_p,end_p+1));
                        $(inputArr).slice(start_p,end_p+1).slice(i,inputCheckedLen+1).prop('checked',false).removeClass
                        ('on');
                    }
                }
                
            });
          }
       });

        function getTime(did){
             // ajax请求
            $('.ts-group').find('input[type="checkbox"]').removeAttr("checked");
            // $('.ts-group').find('label').removeClass('disabled');
            // $('.ts-btn').removeClass('on');
            
            bui.ajax({
                url:apiUrl+"api/meeting",
                type:"get",
                data:{
                    date:$('#demo').val().replace(/\//g,"-"),
                    "token":token
                }
            }).then(function(data){
                // console.log(data);
                $(data.data.data).each(function(i,v){
                    if(v.id==did){
                        $(v.books).each(function(j,z){
                            if(z==1){
                                $('.ts-group').eq(j).find('input[type="checkbox"]').attr('disabled','true');
                                $('.ts-group').eq(j).find('label').addClass('disabled');
                                $('.ts-group').eq(j).find('.ts-tag').html('已预订');
                            }else{
                                $('.ts-group').eq(j).find('input[type="checkbox"]').removeAttr('disabled');
                                $('.ts-group').eq(j).find('label').removeClass('disabled');
                                $('.ts-group').eq(j).find('.ts-tag').html('');
                            }
                            var oclock=$('.ts-group').eq(j).find('.ts-time').html().split('-')[1];
                            var tsTime=$('#demo').val()+' '+oclock;
                            var ttSeconds=new Date(tsTime).getTime();
                            var curSeconds=new Date().getTime();
                            if(ttSeconds<curSeconds){
                                $('.ts-group').eq(j).find('input[type="checkbox"]').attr('disabled','true');
                                $('.ts-group').eq(j).find('label').addClass('disabled');
                                $('.ts-group').eq(j).find('.ts-tag').html('已过期');
                                $('.meeting-item[data-id='+did+']').find('.progress-bar span').eq(j).css('background','#e2e2e2')  
                            }
                        });
                    }
                });
                
            });
       }
       
       //会议室提交
       var timeoutflag = null;
       $('#theme').blur(function(){
                var scrollTop=$('.time-content').scrollTop();
                $('body').scrollTop(scrollTop+1);
            });
       $('body').off('click','.ts-btn.on').on("click",".ts-btn.on",function(){
          if(timeoutflag != null){
            clearTimeout(timeoutflag);
          }
          timeoutflag=setTimeout(function(){
            var dataId=$(this).attr('data-id');
            var len=$('.time-content input[type="checkbox"]:checked').length;
            var start_p=$('.time-content input[type="checkbox"]:checked').eq(0).parents('.ts-group').index()+1;
            var end_p=$('.time-content input[type="checkbox"]:checked').eq(len-1).parents('.ts-group').index()+1;
            // console.log(start_p,end_p);
            var theme=$('#theme').val();

            if(theme == ""){
                alert("会议主题不能为空！");
            }
            if(theme!=="" && token){
                bui.ajax({
                    url:apiUrl+"api/meeting/meeting_book",
                    data:{
                        token:token,
                        mid:$('.time-chose').attr('data-id'),
                        date:$('#demo').val().replace(/\//g,"-"),
                        start_p:start_p,
                        end_p:end_p,
                        theme:theme
                    }
                }).then(function(data){
                    alert("预定成功");
                    $('.time-chose-bg,.time-chose').hide();
                    $('.meeting-contain').html("");
                    getList();
                },function(err){
                    alert("预定失败，请稍后尝试！");
                });
            }
          },500);
            
        })
    });
})
