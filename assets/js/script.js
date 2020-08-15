// preloader
$(window).on('load', function() {
    $('.preloader').fadeOut();
});


$(function(){
    $('.carousel').carousel({
        interval: 3000
    });
    $('#myCollapsible').collapse({
      toggle: false
    });
    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 5, // Shows a three slides at a time
        slidesToScroll: 5, // When you click an arrow, it scrolls 1 slide at a time
        arrows: false, // Adds arrows to sides of slider
        dots: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    
                }
            }
        ]
    });
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() >80 ) { 
            $("#main-head").addClass('stick')
        }
         else {
            $("#main-head").removeClass('stick')
        }
      });
     
      $('#scroll').hide();
      $(window).scroll(function(){
        // $('#scroll').hide();
          if($(document).scrollTop()>100){
              $('#scroll').fadeIn();
          }
          else{
            $('#scroll').fadeOut();
          }
      });
      
      $('#scroll').on('click',function() {
          $("html, body").animate({
              scrollTop: 0
          }, 1200);
          return false;
      });
      $(function () {
        $('#myTab li:last-child a').tab('show')
      });

      

     
});
/*timeline slider*/
$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.autoplay').slick({
        speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: false,
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2,
        }
    },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
  
      });
      $('.result-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    
                }
            }
        ]
      });
});

function openNav() {
    $('#mySidenav').css({
        // 'display':'block',
        'width':'250px'
    });
    $('body').css({'background-color':'rgba(0,0,0,0.4)'});
};

function closeNav() {
    $('#mySidenav').css({
        'width':'0'
    });
    $('body').css({'background-color':'white'});
};


