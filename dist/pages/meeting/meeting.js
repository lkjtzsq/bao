"use strict";loader.define(function(){$(function(){$("#demo").mobiscroll().calendar({lang:"zh"});var e=(new Date).getFullYear(),n=(new Date).getMonth()+1,a=(new Date).getDate();$("#demo").val(e+"/"+n+"/"+a)}),$(".green-back").click(function(){bui.back()}),$(".mine").click(function(){router.load({url:"pages/mine/mine.html",param:{}})})});