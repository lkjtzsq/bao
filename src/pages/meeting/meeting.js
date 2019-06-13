/**
 * 注册模板,包含验证码倒计时及手机号简单验证
 * 默认模块名: pages/register/register
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(){
    bui.ready(function(){
        var apiUrl="http://qxb.test.com/";
         //初始化配置参数      
        $('#demo').mobiscroll().calendar({
            lang: 'zh'          //使用语言
        });
        var year=new Date().getFullYear();
        var month=new Date().getMonth()+1;
        var day=new Date().getDate();
        $('#demo').val(year+'/'+month+'/'+day);
        var _windowH=$(window).height();
        $('.time-content').height(_windowH*0.8-95-61);
        $('.green-back').click(function(){
            bui.back();
        });
        $('.mine').click(function(){
            router.load({ url: "pages/mine/mine.html", param: {} });
        });
        var meetingArr=[
            {"title":"小厨大会议室","desc":"投影 / 电视 / 白版","count":"20-50人","addr":"中青大厦"},
            {"title":"小厨小会议室","desc":"暂无相关设备","count":"10人以下","addr":"中青大厦"},
            {"title":"文化会客厅","desc":"暂无相关设备","count":"10人以下","addr":"中青大厦"}
        ];
        $('body').on("click",".meeting-item",function(){
            var index=$(this).index();
            $('.ts-head h1').html($(this).find('.meeting-title').html());
            $('.ts-desc').html($(this).find('.p1').html());
            $('.ts-count span').html($(this).find('.p2').html());
            $('.time-chose-bg,.time-chose').show();
            getTime(index);
        })
        $('.time-chose-bg').click(function(){
            $(this).hide();
            $('.time-chose').hide();
        });
        $('#demo').change(function(){
            
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
        $('.meeting-contain').height($(window).height()-123);
        // 虚拟storage
        var storage=bui.storage();
        storage.set("token","2bc4bc9fcb24b2903d61e7b7921409d3");
       function getList(){
         // ajax请求
        
        var curDate=new Date();
        var year=curDate.getFullYear();
        var month=curDate.getMonth()+1;
        var day=curDate.getDate();
        var date=year+'-'+month+'-'+day;
        // console.log(date);
        bui.ajax({
            url:apiUrl+"api/meeting",
            type:"get",
            data:{
                "date":date,
                "token":"2bc4bc9fcb24b2903d61e7b7921409d3"
            }
        }).then(function(data){
            var data=data.data.data;
            var str='';
            $(data).each(function(i,v){
                var spanStr='';
                var name=v.name;
                var meeting_desc=v.meeting_desc;
                var pnumber=v.pnumber;
                var address=v.address;
                var books=v.books;
                $(books).each(function(k,z){
                    if(z==1){
                        spanStr+='<span style="background:#f5dcca"></span>';
                    }else{
                        spanStr+='<span></span>';
                    }
                });
                var thumbnail=v.thumbnail[0] || "/images/pic-default.png";
                str+='<div class="meeting-item"><div class="meeting-room"><div class="meeting-left"><h1 class="meeting-title">'+v.name+'</h1><p class="meeting-cr p1">'+v.devices+'</p><p class="meeting-cr p2">'+v.pnumber+'人</p><p class="meeting-cr p3">'+v.address+'</p></div><div class="meeting-right"><img src="'+v.thumbnail+'"></div></div><div class="meeting-progress"><div class="progress-bar">'+spanStr+'</div><div class="progress-count"><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span></div></div></div>';
            });
            $(str).appendTo($('.meeting-contain'));            
        });
       }
       getList();
       $('.ts-group input').not(':checked').change(function(){
            var inputCheckedLen=$('.ts-group input:checked').length;
            if(inputCheckedLen>0){
                $('.ts-btn').addClass('on');
            }else{
                $('.ts-btn').removeClass('on');
            }
       });
        function getTime(index){
             // ajax请求
            var curDate=new Date();
            var year=curDate.getFullYear();
            var month=curDate.getMonth()+1;
            var day=curDate.getDate();
            var date=year+'-'+month+'-'+day;
            // console.log(date);
            $('.ts-group').find('input[type="checkbox"]').removeAttr('disabled').removeAttr("checked");;
            $('.ts-group').find('label').removeClass('disabled');
             $('.ts-btn').removeClass('on');
            bui.ajax({
                url:apiUrl+"api/meeting",
                type:"get",
                data:{
                    "date":date,
                    "token":"2bc4bc9fcb24b2903d61e7b7921409d3"
                }
            }).then(function(data){
                console.log(data);
                var books=data.data.data[index].books;
                console.log(books);
                
                $(books).each(function(i,v){
                    if(v==1){
                        $('.ts-group').eq(i).find('input[type="checkbox"]').attr('disabled','true');
                        $('.ts-group').eq(i).find('label').addClass('disabled');
                    }
                });
            });
       }
    });
})
