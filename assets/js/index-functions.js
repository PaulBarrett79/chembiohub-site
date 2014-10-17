
$(document).ready(function() {

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
                || location.hostname == this.hostname) {
        var hashStr = this.hash.slice(1);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + hashStr +']');

        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top}, 1000);
            window.location.hash = hashStr;
            return false;
        }
    }
});
  
  $('#contact-form').bootstrapValidator({
        fields: {
          email: {
                trigger: 'blur',
                feedbackIcons: 'false'
            }
        }
    });/** Contact form submission */

 /* $('.ppl-thumb').contenthover({
      overlay_background:'#000',
      overlay_opacity:0.8
  });*/
  
  $('.contact-form').on('submit', function(e){
    var valuesToSubmit = JSON.stringify($(this).serializeObject());
    alert(valuesToSubmit);
    $.ajax({
      type: "POST",
      beforeSend: function(xhr) {
        xhr.setRequestHeader( "Content-type", "application/json" );
      },
      crossDomain: true,
      url: $(this).attr('action'),
      data: valuesToSubmit,
      dataType: "json"
    }).done(function() {
      $('#contact-submit-success').fadeToggle( "slow", "linear" );
      createAutoClosingAlert("#contact-submit-success", 4000);
    }).fail(function() {
      $('#contact-submit-error').fadeToggle( "slow", "linear" );
      createAutoClosingAlert("#contact-submit-error", 4000);
    });
    return false;
  });

});

function createAutoClosingAlert(selector, delay) {
   //var alert = $(selector).alert();
   window.setTimeout(function() { $(selector).fadeToggle( "slow", "linear" ) }, delay);
}

vpw = $(window).width();
vph = $(window).height();
if($('.functional').height() < vph) {
  $('.functional').height(vph); 
}
$(window).keypress(function(e) {
    if (e.keyCode == 13) {
        redirect_search();
    }
});
$("#equip-search-btn").click(function(e){
  e.preventDefault();
  redirect_search();
});

function redirect_search(){
  var v = $("input#equip-search").val();
  if(v){
      href = "https://www.research-facilities.ox.ac.uk/account/webauth/?next=/search/?q=" + v + "&filter.basedNear.uri=&filter.formalOrganisation.uri=http%3A%2F%2Foxpoints.oucs.ox.ac.uk%2Fid%2F00000000";
      ga('send', {
        'hitType': 'event',
      'eventCategory': 'outbound',
      'eventAction': 'link',
      'eventLabel': v,
      'hitCallback': loadSearch

    });
      // redirect after one second if recording takes too long
    setTimeout(loadSearch, 1000);
 
    // redirect to outbound page
    function loadSearch() {
      document.location = href;
    }
  }
}

//endswith polyfill - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
  Object.defineProperty(String.prototype, 'endsWith', {
    value: function (searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
  });
}

