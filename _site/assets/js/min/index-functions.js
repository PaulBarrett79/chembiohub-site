function createAutoClosingAlert(a,b,c){window.setTimeout(function(){$("#"+a).find(b).fadeToggle("slow","linear")},c)}function loadSearch(){window.open(href,"_blank")}function redirect_search(){var a=$("input#equip-search").val();a&&(href="https://www.research-facilities.ox.ac.uk/account/webauth/?next=/search/?q="+a+"&filter.basedNear.uri=&filter.formalOrganisation.uri=http%3A%2F%2Foxpoints.oucs.ox.ac.uk%2Fid%2F00000000",ga("send",{hitType:"event",eventCategory:"outbound",eventAction:"link",eventLabel:a,hitCallback:loadSearch}),setTimeout(loadSearch,1e3))}$(document).ready(function(){$(".contact-form").bootstrapValidator({fields:{email:{trigger:"blur",feedbackIcons:"false"}}}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},800),!1}),$(".contact-form").on("success.form.bv",function(a){a.preventDefault();var b=this.id,c=JSON.stringify($(this).serializeObject());return $.ajax({type:"POST",beforeSend:function(a){a.setRequestHeader("Content-type","application/json")},crossDomain:!0,url:$(this).attr("action"),data:c,dataType:"json"}).done(function(){$("#contact-submit-success").fadeToggle("slow","linear"),createAutoClosingAlert(b,".contact-submit-success",500)}).fail(function(){$("#contact-submit-error").fadeToggle("slow","linear"),createAutoClosingAlert(b,".contact-submit-error",500)}),!1})}),vpw=$(window).width(),vph=$(window).height(),$(".functional").height()<vph&&$(".functional").css("min-height",vph),$(window).keypress(function(a){13==a.keyCode&&redirect_search()}),$("#equip-search-btn").click(function(a){a.preventDefault(),redirect_search()}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{value:function(a,b){var c=this.toString();(void 0===b||b>c.length)&&(b=c.length),b-=a.length;var d=c.indexOf(a,b);return-1!==d&&d===b}});