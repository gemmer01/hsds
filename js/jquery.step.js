$(function(){step=$("#myStep").step(),$("#preBtn").click(function(e){step.preStep()}),$("#nextBtn").click(function(e){step.nextStep()}),$("#goBtn").click(function(e){step.goStep(0)})}),function(e){"use strict";"function"==typeof define?(define.cmd&&define("jquery-step",["jquery"],function(t,i,n){var s=t("jquery");return e(s),s}),define.amd&&define(["jquery"],e)):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){e.fn.step=function(t){var i=e.extend({},e.fn.step.defaults,t),n=this.find(".step-header li").length,s=i.initStep<n?100/(2*n)+100*(i.initStep-1)/n:100,p=i.initStep;return this.find(".step-header").prepend('<div class="step-bar"><div class="step-bar-active"></div></div>'),this.find(".step-list").eq(i.initStep-1).show(),n<i.initStep&&(i.initStep=n),0==i.animate&&(i.speed=0),this.find(".step-header li").each(function(t,n){t<i.initStep&&e(n).addClass("step-active"),e(n).append("<span>"+(t+1)+"</span>")}),this.find(".step-header li").css({width:100/n+"%"}),this.find(".step-header").show(),this.find(".step-bar-active").animate({width:s+"%"},i.speed,function(){}),this.nextStep=function(){return!(p>=n)&&this.goStep(p+1)},this.preStep=function(){return!(p<=1)&&this.goStep(p-1)},this.goStep=function(t){return void 0==t||isNaN(t)||t<0?(window.console&&window.console.error&&console.error("the method goStep has a error,page:"+t),!1):(p=t,this.find(".step-list").hide(),this.find(".step-list").eq(p-1).show(),this.find(".step-header li").each(function(n,s){$li=e(s),$li.removeClass("step-active"),n<t&&($li.addClass("step-active"),i.scrollTop&&e("html,body").animate({scrollTop:0},"slow"))}),s=t<n?100/(2*n)+100*(t-1)/n:100,this.find(".step-bar-active").animate({width:s+"%"},i.speed,function(){}),!0)},this},e.fn.step.defaults={animate:!1,speed:500,initStep:1,scrollTop:!0}});