$(document).ready(function(){const e=["css/owl.transitions.css","css/owl.carousel.css","css/animate.css"];for(let i=0;i<e.length;i++)o(e[i]);function o(e){var o=window.document.createElement("link"),i=window.document.getElementsByTagName("head")[0];o.rel="stylesheet",o.href=e,o.media="only x",i.appendChild(o,i),setTimeout(function(){o.media="all"},0)}function i(e,o){$("#mc_submit i").removeClass(e).addClass(o)}$("header nav ul li a").click(function(e){e.preventDefault();var o=$(this).attr("href"),i=$(o).position();i&&$(window).scrollTo({top:i.top,left:"0px"},1e3)}),$(".app_link").click(function(e){event.preventDefault(),$(window).scrollTo({top:$("#hero").position().top,left:"0px"},1e3)}),$(".burger_icon").click(function(){$("header nav").toggleClass("show"),$("header .burger_icon").toggleClass("active")}),wow=new WOW({animateClass:"animated",mobile:!1,offset:50}),wow.init(),$(".hero").parallax("50%",.3),$("html").niceScroll({scrollspeed:50,autohidemode:!1,cursorwidth:8,cursorborderradius:8,cursorborder:"0",background:"rgba(48, 48, 48, .4)",cursorcolor:"#1f1f1f",zindex:999}),$("#tslider").owlCarousel({items:1,navigation:!0,pagination:!1,slideSpeed:300,paginationSpeed:400,singleItem:!0,responsive:!0,autoPlay:!0,transitionStyle:"fade"}),$("#submit_form").submit(function(){$("#mc_submit").attr("disabled","disabled"),i("icon","loading")}),$("#submit_form").length&&$("#submit_form").ajaxChimp({callback:function(e){"success"===e.result?(i("loading","icon"),$("#mc_submit").removeAttr("disabled","disabled"),$("#submit_form #mc-email").val(""),$("#error_msg").hide(),$("#success_msg").show()):(i("loading","icon"),$("#success_msg").hide(),$("#error_msg").show(),$("#mc_submit").removeAttr("disabled","disabled"))}}),$("#play_video").click(function(e){e.preventDefault();var o=$(this).data("video");o='<iframe src="'+o+'" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',$(".about_video").append(o).fadeIn(200)}),$(".close_video").click(function(e){e.preventDefault(),$(".about_video").fadeOut(200,function(){$("iframe",this).remove()})})});