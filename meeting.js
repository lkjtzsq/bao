"use strict";loader.define(function(){bui.ready(function(){function e(){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate(),c=t+"-"+i+"-"+a;bui.ajax({url:n+"api/meeting",type:"get",data:{date:c,token:"2bc4bc9fcb24b2903d61e7b7921409d3"},needNative:!0}).then(function(e){var e=e.data.data,t="";$(e).each(function(e,n){var i="",a=(n.name,n.meeting_desc,n.pnumber,n.address,n.books);n.id;$(a).each(function(e,t){i+=1==t?'<span style="background:#f5dcca"></span>':"<span></span>"});n.thumbnail[0];t+='<div class="meeting-item" data-id="'+n.id+'"><div class="meeting-room"><div class="meeting-left"><h1 class="meeting-title">'+n.name+'</h1><p class="meeting-cr p1">'+n.devices+'</p><p class="meeting-cr p2">'+n.pnumber+'人</p><p class="meeting-cr p3">'+n.address+'</p></div><div class="meeting-right"><img src="'+n.thumbnail+'"></div></div><div class="meeting-progress"><div class="progress-bar">'+i+'</div><div class="progress-count"><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span></div></div></div>'}),$(t).appendTo($(".meeting-contain"))})}function t(e){var t=new Date,i=t.getFullYear(),a=t.getMonth()+1,c=t.getDate(),s=i+"-"+a+"-"+c;$(".ts-group").find('input[type="checkbox"]').removeAttr("checked"),bui.ajax({url:n+"api/meeting",type:"get",data:{date:s,token:"2bc4bc9fcb24b2903d61e7b7921409d3"}}).then(function(t){console.log(t);var n=t.data.data[e].books;console.log(n),$(n).each(function(e,t){1==t?($(".ts-group").eq(e).find('input[type="checkbox"]').attr("disabled","true"),$(".ts-group").eq(e).find("label").addClass("disabled"),$(".ts-group").eq(e).find(".ts-tag").html("已预订")):($(".ts-group").eq(e).find('input[type="checkbox"]').removeAttr("disabled"),$(".ts-group").eq(e).find("label").removeClass("disabled"),$(".ts-group").eq(e).find(".ts-tag").html(""))})})}var n="http://qxbyd.cyol.com/";$("#demo").mobiscroll().calendar({lang:"zh"});var i=(new Date).getFullYear(),a=(new Date).getMonth()+1,c=(new Date).getDate();$("#demo").val(i+"/"+a+"/"+c);var s=$(window).height();$(".time-content").height(.8*s-129-61),$(".green-back").click(function(){bui.back()}),$(".mine").click(function(){router.load({url:"pages/mine/mine.html",param:{}})}),$("body").on("click",".meeting-item",function(){$("#theme").val("");var e=$(this).index(),n=$(this).attr("data-id");$(".ts-head h1").html($(this).find(".meeting-title").html()),$(".ts-desc").html($(this).find(".p1").html()),$(".ts-count span").html($(this).find(".p2").html()),$(".time-chose-bg,.time-chose").show(),$(".time-chose").attr("data-id",n),t(e)}),$(".time-chose-bg").click(function(){$(this).hide(),$(".time-chose").hide()}),$("#demo").change(function(){$(".meeting-contain").html(""),e()}),$("body").on("click",".meeting-right img",function(e){$(".view-pic-bg").show(),$(".view-pic").css("display","flex"),$(".view-pic img").attr("src",$(this).attr("src")),e.stopPropagation()}),$("body").on("click",".view-pic",function(){$(this).hide(),$(".view-pic-bg").hide()}),$(".meeting-contain").height($(window).height()-123),bui.storage().set("token","2bc4bc9fcb24b2903d61e7b7921409d3"),e(),$(".ts-group input").change(function(){$(".ts-group input:checked").length>0?$(".ts-btn").addClass("on"):$(".ts-btn").removeClass("on");var e=$('.time-content input[type="checkbox"]:checked').length,t=$('.time-content input[type="checkbox"]:checked').eq(0).parents(".ts-group").index(),n=$('.time-content input[type="checkbox"]:checked').eq(e-1).parents(".ts-group").index();console.log(t,n),$('.time-content input[type="checkbox"]').not("[disabled]").slice(t,n+1).prop("checked","checked").addClass("on")}),$(".time-content input.on").click(function(){}),$("body").on("click",".ts-btn.on",function(){var e=($(this).attr("data-id"),$('.time-content input[type="checkbox"]:checked').length),t=$('.time-content input[type="checkbox"]:checked').eq(0).parents(".ts-group").index()+1,i=$('.time-content input[type="checkbox"]:checked').eq(e-1).parents(".ts-group").index()+1;console.log(t,i);var a=$("#theme").val();""!==a?bui.ajax({url:n+"api/meeting/meeting_book",data:{token:"2bc4bc9fcb24b2903d61e7b7921409d3",mid:$(".time-chose").attr("data-id"),date:$("#demo").val().replace(/\//g,"-"),start_p:t,end_p:i,theme:a}}).then(function(e){$(".time-chose-bg,.time-chose").hide(),alert("预定成功")},function(e){alert("预定失败，请稍后尝试！")}):alert("会议主题不能为空！")})})});