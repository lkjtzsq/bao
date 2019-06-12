'use strict';

/**
 * 注册模板,包含验证码倒计时及手机号简单验证
 * 默认模块名: pages/register/register
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function () {
    bui.ready(function () {
        //初始化配置参数      
        $('#demo').mobiscroll().calendar({
            lang: 'zh' //使用语言
        });
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        $('#demo').val(year + '/' + month + '/' + day);
        var _windowH = $(window).height();
        $('.time-content').height(_windowH * 0.8 - 95 - 61);
        $('.green-back').click(function () {
            bui.back();
        });
        $('.mine').click(function () {
            router.load({ url: "pages/mine/mine.html", param: {} });
        });
        var meetingArr = [{ "title": "小厨大会议室", "desc": "投影 / 电视 / 白版", "count": "20-50人", "addr": "中青大厦" }, { "title": "小厨小会议室", "desc": "暂无相关设备", "count": "10人以下", "addr": "中青大厦" }, { "title": "文化会客厅", "desc": "暂无相关设备", "count": "10人以下", "addr": "中青大厦" }];
        $('body').on("click", ".meeting-item", function () {
            var index = $(this).index();
            var item = meetingArr[index];
            $('.ts-head h1').html($(this).find('.meeting-title').html());
            $('.ts-desc').html($(this).find('.p1').html());
            $('.ts-count span').html($(this).find('.p2').html());
            $('.time-chose-bg,.time-chose').show();
        });
        $('.time-chose-bg').click(function () {
            $(this).hide();
            $('.time-chose').hide();
        });
        $('#demo').change(function () {});
        $('body').on("click", ".meeting-right img", function (event) {
            $('.view-pic-bg').show();
            $('.view-pic').css('display', 'flex');
            $('.view-pic img').attr('src', $(this).attr('src'));
            event.stopPropagation();
        });
        $('body').on("click", ".view-pic", function () {
            $(this).hide();
            $('.view-pic-bg').hide();
        });
        // ajax请求
        var apiUrl = "";
        bui.ajax({
            url: apiUrl + "api/meeting",
            type: "POST"
        }).then(function (data) {
            console.log(data.data.data);
            var data = data.data.data;
            var str = '';
            $(data).each(function (i, v) {
                var name = v.name;
                var meeting_desc = v.meeting_desc;
                var pnumber = v.pnumber;
                var address = v.address;
                var thumbnail = v.thumbnail[0] || "/images/pic-default.png";
                str += '<div class="meeting-item"><div class="meeting-room"><div class="meeting-left"><h1 class="meeting-title">' + v.name + '</h1><p class="meeting-cr p1">' + v.devices + '</p><p class="meeting-cr p2">' + v.pnumber + '人</p><p class="meeting-cr p3">' + v.address + '</p></div><div class="meeting-right"><img src="' + v.thumbnail + '"></div></div><div class="meeting-progress"><div class="progress-bar"><span></span></div><div class="progress-count"><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span></div></div></div>';
            });
            $(str).appendTo($('main'));
        });
    });
});