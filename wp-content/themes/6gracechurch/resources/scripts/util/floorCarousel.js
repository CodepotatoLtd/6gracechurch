import Swiper from '../autoload/_swiper';
import $ from "jquery";

class FloorCarousel {

    doAThing()
    {
        console.log('animations Do a thing')

    }

    constructor()
    {

        console.log('FloorCarousel')

        var swiperClass = '.floor-swiper';

        $(swiperClass).each(function ( index ) {

            console.log('FloorCarousel')

            var swiperID = 'floor-' + index;
            var swiperIDHash = '#floor-' + index;

            $(this).attr('id', swiperID);

            let floorSwiper = new Swiper(swiperIDHash, {
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

            floorSwiper.on('transitionStart', function () {

                //console.log('transitionStart');

            });

        });

    }
}

export default FloorCarousel
