jQuery(document).ready(function() {
    jQuery('#block-superfish-1 ul.sf-menu').children('li').children('a').attr('href', '#');
    jQuery('#block-superfish-1 ul.sf-menu').children('li.first').children('a').attr('href', '/');
    
    jQuery('.footer-menu ul.menu').children('li').children('a').attr('href', '#block-menu-menu-footer-menu');
    
    jQuery("a.yes").click(function () {
      jQuery('#webform-client-form-17').slideDown();
      jQuery('#webform-client-form-23').slideDown();
    });
    jQuery("a.no").click(function () {
      jQuery('#webform-client-form-17').slideUp();
    });
    
    textblur('body.context-concierge .webform-client-form #edit-submitted-name');
    textblur('body.context-concierge .webform-client-form #edit-submitted-number');
    textblur('body.context-concierge .webform-client-form #edit-submitted-email');
    textblur('body.context-group .webform-client-form #edit-submitted-first-name');
    textblur('body.context-group .webform-client-form #edit-submitted-last-name');
    textblur('body.context-group .webform-client-form #edit-submitted-email-address');
    textblur('body.context-group .webform-client-form #edit-submitted-phone-number');
    textblur('body.context-group .webform-client-form #edit-submitted-age');
    textblur('body.context-group .webform-client-form #edit-submitted-postcode');
    
    jQuery('.church_life_teaser .ajax-processed').click(function () {
      jQuery('.ajax-webform-form').hide();
    });
    
    jQuery('body.page-home .view-homepage .jcarousel-item-horizontal').hover(
        function () {
          jQuery(this).children('a').children('.rollover_title').animate({top:'0px'},{queue:false,duration:500});
        }, 
        function () {
          jQuery(this).children('a').children('.rollover_title').animate({top:'310px'},{queue:false,duration:500});
        }
    );
        
    jQuery('body.context-events .view-event .campus_global_event').hover(
        function () {
          jQuery(this).children('.global_event_title').animate({top:'0px'},{queue:false,duration:500});
        }, 
        function () {
          jQuery(this).children('.global_event_title').animate({top:'230px'},{queue:false,duration:500});
        }
    );
        
   jQuery('body.context-team .view-team-views .team_global_member').hover(
        function () {
          jQuery(this).children('.member_name').animate({top:'0px'},{queue:false,duration:500});
        }, 
        function () {
          jQuery(this).children('.member_name').animate({top:'230px'},{queue:false,duration:500});
        }
    );
        
    jQuery('body.context-team .view-team-views .team_campus_member').hover(
        function () {
          jQuery(this).children('.member_name').animate({top:'0px'},{queue:false,duration:500});
        }, 
        function () {
          jQuery(this).children('.member_name').animate({top:'230px'},{queue:false,duration:500});
        }
    );
        
    jQuery('.event-carousel .campus_event').hover(
        function () {
          jQuery(this).children('.campus_event_text').animate({top:'121px'},{queue:false,duration:500});
        }, 
        function () {
          jQuery(this).children('.campus_event_text').animate({top:'290px'},{queue:false,duration:500});
        }
    );
        
    jQuery('.navigation-menu h2.block-title').toggle(
      function () {
        jQuery('.navigation-menu .content').fadeIn();
      },
      function () {
        jQuery('.navigation-menu .content').fadeOut();
      }
    );
        
    jQuery('.navigation-menu a.button').click(function () {
        if(!jQuery(this).hasClass('active')) {
            if(jQuery(this).attr('href')=='ddm_place_money'){
                if(!jQuery('#ddm_place_money').css('left') != '0px') {
                   jQuery('#ddm_place_money').show().animate({"left": "-=710px"}, "normal");
                   jQuery('#ddm_place_time').hide().animate({"left": "+=710px"}, "normal");
                }
            }
            else if(jQuery(this).attr('href')=='ddm_place_time'){
                if(!jQuery('#ddm_place_time').css('left') != '0px') {
                   jQuery('#ddm_place_time').show().animate({"left": "-=710px"}, "normal");
                   jQuery('#ddm_place_money').hide().animate({"left": "+=710px"}, "normal");
                }
            }
        }
        
        jQuery('.navigation-menu a.button').removeClass('active');
        jQuery(this).addClass('active');
        
        return false;
    });
});

function textblur(value) {
    var foin=jQuery(value);
    var foinv=foin.attr('value');
    foin.focus(function(){
        if(foin.attr('value')==foinv){
                foin.attr('value','');
        }
    });
    foin.blur(function(){
        if(foin.attr('value')==''){
                foin.attr('value',foinv);
        }
    });
}