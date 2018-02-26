$(function() {
  var swipers = [];
  $('.swiper-container').each(function(index) {
    var next_button = $('.swiper-button-next:eq(' + index + ')');
    var prev_button = $('.swiper-button-prev:eq(' + index + ')');
    var container = $(this);
    var slidesPerView = $(this).data('slidesPerView') || 4;
    swipers.push(
      new Swiper(this, {
        slidesPerView: slidesPerView,
        spaceBetween: 30,
        slidesPerGroup: slidesPerView,
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
          }
        },
        keyboardControl: true,
        navigation: {
          nextEl: next_button,
          prevEl: prev_button,
        },
        a11y: true,
        prevSlideMessage: 'Previous item',
        nextSlideMessage: 'Next item',
        firstSlideMessage: 'This is the first item',
        lastSlideMessage: 'This is the last item',
        on: {
          reachEnd: function() {
            var swiper = this;
            container.append(
              '<div class="swiper-button-next refresh-button" aria-disabled="false" tabindex="0" role="button" aria-label="Return to first item" style="background-color: rgb(78, 42, 132); background-image: url(\'//common.northwestern.edu/v8/css/images/icons/refresh.svg\');"></div>'
            );
            container.on('click', '.refresh-button', function() {
              swiper.slideTo(0);
              $(this).remove();
            });
            container.find('.swiper-button-prev').click(function() {
              $('.refresh-button').remove();
            });
          }
        }
      })
    );
  });
});
