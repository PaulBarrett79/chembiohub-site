$(document).ready(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var a=this.hash.slice(1),b=$(this.hash);if(b=b.length?b:$("[name="+a+"]"),b.length)return $("html,body").animate({scrollTop:b.offset().top},1e3),window.location.hash=a,!1}})});