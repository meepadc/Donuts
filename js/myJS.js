$('.owl-carousel').owlCarousel({
    loop:true,
    margin:70,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
});

$(document).ready(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
});

$(document).ready(function(){
    $(".btn_searchResume").click(function(){
        $(".banner_form2").slideToggle('300');
    });
});



$(document).ready(function(){
    $(function () {
        $(".candicate_panel").slice(0, 2).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".candicate_panel:hidden").slice(0, 2).slideDown();
            if ($(".candicate_panel:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });
});

// ===== Scroll to Top ==== 
$(document).ready(function(){
       $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
        });
        $('#return-to-top').click(function() {      // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 1500);
        }); 
});

// Scroll to div
$(document).ready(function () {
  $('.btn_requestCV').click(function (){
    $('html, body').animate({
      scrollTop: $(".request").offset().top
    }, 1000)
  })
});

// Menu mobile
$(document).ready(function() {
    var removeClass = true;
    $menuLeft = $('.menu_mobile_pushmenu_left');
    $nav_list = $('.menu_mobile_button');

    $nav_list.click(function(e) {
        $(this).toggleClass('active');
        $menuLeft.toggleClass('pushmenu-open');
        removeClass = false;
    });

    $('html').click(function () {
          if (removeClass) {
              $('.menu_mobile_pushmenu_left').removeClass('pushmenu-open');
               $('.menu_mobile_button').removeClass('active');
          }
          removeClass = true;
    });

    $('.menu_mobile_list_inner .parent').find('.menu_mobile_list_submenu').hide();

    // Accordion
    $('.menu_mobile_list_inner .parent').find('.fa-icon-action').click(function () {
      var next = $(this).next();
      next.slideToggle('fast');
      $('.menu_mobile_list_submenu').not(next).slideUp('fast');
      removeClass = false;
    });
    $('.menu_mobile_list_inner li .fa-icon-action').on('click', function(){
      $('.menu_mobile_list_inner li .fa-icon-action.active').removeClass('active');
      $(this).addClass('active');
      removeClass = false;
    });
});
// End Menu mobile


