import Swiper from '../autoload/_swiper';
import $ from "jquery";

class FloorGallery {

    doAThing()
    {
        console.log('animations Do a thing')

    }

    constructor()
    {

        console.log('GalleryCarousel')

        var swiperClass = '.floor-gallery';

        $(swiperClass).each(function ( index ) {

            console.log('GalleryCarousel')

            var swiperID = 'floor-gallery-' + index;
            var swiperIDHash = '#floor-gallery-' + index;

            $(this).attr('id', swiperID);

            var homeSwiper = new Swiper(swiperIDHash, {
                slidesPerView: 'auto',
                centeredSlides: true,
                speed: 500,
                loop: true,
                effect: 'fade',
                //loop: true,
                /*autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                spaceBetween: 10,*/
              pagination: {
                el: swiperIDHash + ' .swiper-pagination',
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

export default FloorGallery
