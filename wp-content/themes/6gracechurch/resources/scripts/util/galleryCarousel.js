import Swiper from '../autoload/_swiper';
import $ from "jquery";

class GalleryCarousel {

    doAThing()
    {
        console.log('animations Do a thing')

    }

    constructor()
    {

        console.log('GalleryCarousel')

        var swiperClass = '.section-gallery';

        $(swiperClass).each(function ( index ) {

            console.log('GalleryCarousel')

            var swiperID = 'gallery-' + index;
            var swiperIDHash = '#gallery-' + index;

            $('.gallery-wrapper', this).attr('id', swiperID);
            //$('.swiper-button-next', this).attr('id', swiperID + '-next');
            //$('.swiper-button-prev', this).attr('id', swiperID + '-next');

            var homeSwiper = new Swiper(swiperIDHash + ' .gallery-swiper', {
                slidesPerView: 'auto',
                centeredSlides: true,
                speed: 500,
                spaceBetween: 10,
                //loop: true,
                //effect: 'fade',
                loop: true,
                /*autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                spaceBetween: 10,*/
              pagination: {
                el: swiperIDHash + ' .gallery-pagination',
                clickable: true
              },
                navigation: {
                    nextEl: swiperIDHash + ' .swiper-button-next',
                    prevEl: swiperIDHash + ' .swiper-button-prev',
                },
                on: {
                    init() {
                        setTimeout(() => {
                            window.dispatchEvent(new Event('resize'))
                        }, 200)
                    },
                },

            });

            homeSwiper.on('transitionStart', function () {

                //console.log('transitionStart');

            });

        });

    }
}

export default GalleryCarousel
