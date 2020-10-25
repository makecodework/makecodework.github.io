jQuery(document).ready(function ($) {
  // gallery mixing and filter.
  var containerEl = document.querySelector('.grid');
  var mixer = mixitup(containerEl, {
    animation: {
      animateResizeContainer: false // required to prevent column algorithm bug
    }
  });
  // let config = {
  //   selectors: {
  //     target: '.grid-item',
  //     filter: '.filter',
  //   },
  //   animation: {
  //     animateResizeContainer: false,
  //     effects: 'fade scale'
  //   }
  // };
  // $('.grid').mixItUp(config);  // End of gallery mixing and filter.
  
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: false,
        loop: false
      }
    }
  });
  // accordian
  $('.accordion-toggle').on('click', function () {
    $(this).closest('.panel-group').children().each(function () {
      $(this).find('>.panel-heading').removeClass('active');
    });

    $(this).closest('.panel-heading').toggleClass('active');
  });

  //Initiat WOW JS
  new WOW().init();

  // portfolio filter
  // $(window).load(function () {
  //   'use strict';
  //   var $portfolio_selectors = $('.portfolio-filter >li>a');
  //   var $portfolio = $('.portfolio-items');
  //   $portfolio.isotope({
  //     itemSelector: '.portfolio-item',
  //     layoutMode: 'fitRows'
  //   });

  //   $portfolio_selectors.on('click', function () {
  //     $portfolio_selectors.removeClass('active');
  //     $(this).addClass('active');
  //     var selector = $(this).attr('data-filter');
  //     $portfolio.isotope({
  //       filter: selector
  //     });
  //     return false;
  //   });
  // });

  // Contact form
  var form = $('#main-contact-form');
  form.submit(function (event) {
    event.preventDefault();
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr('action'),

      beforeSend: function () {
        form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
      }
    }).done(function (data) {
      form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
    });
  });

  //Pretty Photo
  // $("a[rel^='prettyPhoto']").prettyPhoto({
  //   social_tools: false
  // });

  

});
