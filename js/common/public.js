function isBrowser(){var a,e={},t=navigator.userAgent.toLowerCase();return(a=t.match(/rv:([\d.]+)\) like gecko/))?e.ie=a[1]:(a=t.match(/msie ([\d.]+)/))?e.ie=a[1]:(a=t.match(/firefox\/([\d.]+)/))?e.firefox=a[1]:(a=t.match(/chrome\/([\d.]+)/))?e.chrome=a[1]:(a=t.match(/opera.([\d.]+)/))?e.opera=a[1]:(a=t.match(/version\/([\d.]+).*safari/))&&(e.safari=a[1]),e}function login(){var a=$("#username").val();if(null==a||a.length<1)return layer.msg("请输入用户名！"),!1;var e=$("#password").val();return null==e||e.length<1?(layer.msg("请输入密码！"),!1):($("#loginform").attr("action",baseUrl+"login"),$("#loginform").submit(),!1)}function getdata(a,e,t,i,o){t=t||"GET";var n;n=o?"application/json":"application/x-www-form-urlencoded";$.ajax({type:t,contentType:n,url:a,dataType:"json",timeout:1e4,data:e,async:!0,beforeSend:function(){},complete:function(a,e){"timeout"==e&&layer.msg("请求超时")},success:function(a){null!=i&&"function"==typeof i&&i(a)},error:function(){console.log("请求超时")}})}function filldom(a,e,t){var i=Handlebars.compile($("#"+a).html());$("#"+t).html(i(e))}function GetQueryString(a){var e=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(e);return null!=t?encodeURI(t[2]):""}function qs(a){var e="";for(var t in a)a[t]&&(e+=t+"="+a[t]+"&");return e.slice(0,-1)}function qss(a){var e="";for(var t in a)a[t]&&(e+=t+"="+a[t]+"@");return e.slice(0,-1)}function orgpageInit(a,e,t,i){t*=1,i*=1;var o=0,n=0;if($(e).empty(),isNaN(t)||0>=t)return!1;if(isNaN(i)&&(i=1),i>t&&(i=t),1==i?($(e).append('<li class="disabled"><a class="colordis" href="javascript:void(0)">首页</a></li>'),$(e).append('<li class="disabled"><a class="colordis" href="javascript:void(0)">上一页</a></li>')):($(e).append('<li><a href="javascript:void(0)" data-page="1">首页</a></li>'),$(e).append('<li><a href="javascript:void(0)" data-page="'+(i-1)+'">上一页</a></li>')),i>1){var r=2;r=t-i>2?r=2:4-(t-i),o=i>r?o=r:i-1;for(var l=0;o>l;l++)$(e).append('<li><a href="javascript:void(0)" data-page="'+(i-o+l)+'">'+(i-o+l)+"</a></li>")}if($(e).append('<li class="active"><a href="javascript:void(0)">'+i+"</a></li>"),t>i){var s=2;s=0>s-i?s=2:5-i,n=t-i>s?n=s:t-i;for(var l=1;n>=l;l++)$(e).append('<li><a href="javascript:void(0)" data-page="'+(i+l)+'">'+(i+l)+"</a></li>")}i==t||1==t?($(e).append('<li class="disabled"><a class="colordis" href="javascript:void(0)">下一页</a></li>'),$(e).append('<li class="disabled"><a class="colordis" href="javascript:void(0)">末页</a></li>')):($(e).append('<li><a href="javascript:void(0)" data-page="'+(i+1)+'">下一页</a></li>'),$(e).append('<li><a href="javascript:void(0)" data-page="'+t+'">末页</a></li>')),$(e).find("a").on("click",function(e){if(e.preventDefault(),$(this).parent("li").hasClass("disabled")||$(this).parent("li").hasClass("active"))return!1;"string"==typeof a?"function"==typeof window[a]&&window[a]($(this).attr("data-page")):"function"==typeof a&&a($(this).attr("data-page"))});var c="";return c+='<div class="paginmsg">',c+="共<span>"+t+"页</span>",1==t?($(e).append(c),!1):(c+='，跳转第<input class="skipnum" type="text" />页',c+='<button class="pageskip">确定</button>',c+="</div>",$(e).append(c),void $(e).find(".pageskip").on("click",function(){var i=$(e).find(".skipnum").val();return/^[1-9]*[1-9][0-9]*$/.test(i)?i>t?(layer.msg("页码超过总页数！"),!1):void("string"==typeof a?"function"==typeof window[a]&&window[a].apply(null,[i]):"function"==typeof a&&a(i)):(layer.msg("页码只能是整数"),!1)}))}function getparm(a){var e=$(a),t=$.parseJSON(e.attr("data-parm").replace(new RegExp("'","gm"),'"')),i="",o=0;i+=e.attr("data-posturl"),$.each(t,function(a,e){e=encodeURIComponent(e),i+=0==o?"?"+a+"="+e:"&"+a+"="+e,o++}),window.location.href=i}$(function(){$(".left-bar").mCustomScrollbar({set_width:!1,set_height:!1,horizontalScroll:!1,scrollInertia:550,scrollEasing:"easeOutCirc",autoDraggerLength:!0,scrollButtons:{enable:!1,scrollType:"continuous",scrollSpeed:20,scrollAmount:40},advanced:{updateOnBrowserResize:!0,updateOnContentResize:!1,autoExpandHorizontalScroll:!1,autoScrollOnFocus:!0},callbacks:{onScrollStart:function(){$("#catalog-list li ul").hide()},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,whileScrolling:!1,whileScrollingInterval:30}}),$(".hmb-search button").click(function(){if(!$.trim($(this).siblings("input").val()))return layer.msg("请填写搜索关键词",{time:2e3}),!1;var a=$(this).siblings("input").val(),e="";if(GetQueryString("goodssource")){var t=decodeURI(decodeURI(GetQueryString("sourcename")))||"";e+="product.html?goodsname="+a+"&status=byGoodsName&goodssource="+GetQueryString("goodssource")+"&sourcename="+t}else e="product.html?goodsname="+a+"&status=byGoodsName";window.location.href=e}),$("#isindex").val()?$(".catalog").css({height:"484px",overflow:"visible"}):$(".classify").hover(function(){$(".catalog").css({height:"484px",overflow:"visible"})},function(){$(".catalog").css({height:"0px",overflow:"hidden"})}),$(".catalog").on("mouseenter mouseleave",function(a){"mouseenter"==a.type||"mouseleave"==a.type&&($(".lbf-child-catalog").hide(),$(".lbf-third-catalog").hide(),$(this).find("li").removeClass("hover"))}),$(".catalog").on("mouseenter mouseleave","li.catalog-li",function(a){$(".lbf-child-catalog").show(),"mouseenter"==a.type?($(".lbf-third-catalog").hide(),$(this).addClass("hover").siblings().removeClass("hover"),$(".lbf-child-catalog ul").eq($(this).index()).show().siblings().hide()):a.type}),$(".catalog").on("mouseenter mouseleave",".lbf-child-catalog li",function(a){if("mouseenter"==a.type){var e=$(this),t=$("li.catalog-li.hover").index(),i=$.trim($(".lbf-third-catalog div.pardiv").eq(t).find("ul").eq(e.index()).html()).length;$(".lbf-third-catalog").show(),i<=0?$(".lbf-third-catalog").hide():($(".lbf-third-catalog div.pardiv").eq(t).show().siblings().hide(),$(".lbf-third-catalog div.pardiv").eq(t).find("ul").eq(e.index()).show().siblings().hide())}else a.type})}),$(function(){function a(a){filldom("catalogs-template",a,"catalogs"),$(".left-bar").mCustomScrollbar()}$(".htc-left button").click(function(){layer.open({type:1,title:"登陆",move:!1,skin:"layui-layer-rim",area:["420px","300px"],content:'<form method="post" action="" id="loginform"><div id="login"><div><span>用户名：</span><input type="text" id="username" name="username"></div><div><span>密码：</span><input type="password" id="password" name="password"></div><div><button type="button" onclick="login()">登录</button></div><p>首次登录，请使用默认密码</p></div></form>'})});getdata("../js/json/catalog.json","","",a)}),Handlebars.registerHelper("eq",function(a,e,t){return a==e?t.fn(this):t.inverse(this)}),Handlebars.registerHelper("transformTime",function(a){if(a)return new Date(a).toJSON().split(".")[0].replace(/[TZ]/g," ")}),Handlebars.registerHelper("transformOrderType",function(a){return 1==a?"京 东":2==a?"苏 宁":void 0}),Handlebars.registerHelper("handindex",function(a,e){return parseInt(a)}),Handlebars.registerHelper("link",function(a,e){a=Handlebars.Utils.escapeExpression(a),e=Handlebars.Utils.escapeExpression(e);var t='<a href="'+e+'">'+a+"</a>";return new Handlebars.SafeString(t)});