"use strict";window.loader=bui.loader({cache:!1}),window.router=bui.router({});var apiUrl="http://qxbyd.cyol.com/";bui.ready(function(){$(document).delegate("input, textarea, select","blur",function(){setTimeout(function(){$("html").animate({height:"100.1vh"},100,function(){$(this).animate({height:"100vh"},1)})},100)}),document.onreadystatechange=function(){"complete"==document.readyState?document.body.style.display="block":document.body.style.display="none"},router.init({id:"#bui-router",progress:!0,hash:!0}),function(){bui.btn({id:"#bui-router",handle:".bui-btn"}).load(),$("#bui-router").on("click",".btn-back",function(t){bui.back()})}(),loader.define(function(t,e,n){$("#btn").on("click",function(){router.load({url:"pages/page2/page2.html",param:{}})})})});