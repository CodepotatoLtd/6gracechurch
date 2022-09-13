import { gsap } from 'gsap';
import $ from "jquery";
import Swiper from "../autoload/_swiper";

class FloorSelectorGallerySwiper {

    constructor()
    {

       // console.log('------------- floor')

        if ( $('.section-floor-selector-gallery').length ) {
            console.log('------------- section-floor-selector-gallery')

            let swiperID = 'floor-' + 0;
            let swiperIDHash = '#floor-' + 0;

            $('.floor-selector-gallery-swiper').attr('id', swiperID);

            let floorSwiper = new Swiper(swiperIDHash, {
                slidesPerView: 'auto',
                centeredSlides: true,
                speed: 200,
                effect: 'fade',
                /*navigation: {
                    nextEl: swiperIDHash + ' .swiper-button-next',
                    prevEl: swiperIDHash + ' .swiper-button-prev',
                },*/
                on: {
                    init() {
                        setTimeout(() => {
                            window.dispatchEvent(new Event('resize'))
                        }, 200)
                    },
                },

            });



            floorSwiper.slideTo(2)
            //setActiveFloor(7)

            floorSwiper.on('transitionEnd', function () {

                console.log("floorSwiper.activeIndex " ,floorSwiper.activeIndex);

                let n = floorSwiper.activeIndex

                if (n > 2) {
                    n = 0
                }

                if (n < 0) {
                    n = 2
                }

                setActiveFloor(n)

            });


            gsap.set('.floor', {opacity: 0})


            let activeImage = '#f3';
            let activeButton = '#h3';

            $('.hotspot').each(function ( index ) {
                let i = index


                $('#h' + i)
                .mouseover(function () {
                  //gsap.to($(this), {scaleX:1.3, scaleY: 1.3, duration:0.25, transformOrigin: '50% 50%'})
                    let id = $(this).attr('id');
                    let number = id.substring(1);
                    let floor = '#f' + number;
                    gsap.to(floor, {autoAlpha: 1})

                })
                .mouseout(function () {
                  // gsap.to($(this), {scaleX:1, scaleY: 1})
                    let id = $(this).attr('id');
                    let number = id.substring(1);
                    let floor = '#f' + number;

                    if (floor != activeImage) {
                        gsap.to(floor, {autoAlpha: 0})
                    }

                }).click(function () {
                    console.log('click')
                    let id = $(this).attr('id');
                    let number = id.substring(1);
                    let floor = '#f' + number;
                    floorSwiper.slideTo(number)

                    //gsap.set('.floor', {autoAlpha: 0})
                    //gsap.set(floor, {autoAlpha: 1})
                    setActiveFloor(number)
                })

            });

            function setActiveFloor(n)
            {
                console.log('setActiveFloor ', n)

                let floor = '#f' + n;
                activeImage = '#f' + n
                gsap.set('.floor', {autoAlpha: 0})
                gsap.set(floor, {autoAlpha: 1})
            }


        }
    }
}

export default FloorSelectorGallerySwiper
