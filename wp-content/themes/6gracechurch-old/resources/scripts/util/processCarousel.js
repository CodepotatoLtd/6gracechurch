import $ from "jquery";
import Swiper from 'swiper/bundle';

class ProcessCarousel {

    constructor()
    {

        console.log('------------- ProcessCarousel')

        if ( $('.section-process-carousel').length ) {
            //console.log('------------- floor')

            let swiperID = 'process-' + 0;
            let swiperIDHash = '#process-' + 0;

            $('.process-swiper').attr('id', swiperID);

            let processSwiper = new Swiper(swiperIDHash, {
                slidesPerView: "auto",
                spaceBetween: 30,
            });
        }
    }
}

export default ProcessCarousel
