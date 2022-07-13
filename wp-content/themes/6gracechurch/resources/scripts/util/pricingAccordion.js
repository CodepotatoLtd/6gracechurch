import {gsap} from 'gsap';

class PricingAccordion {

    doAThing() {
        console.log('animations Do a thing')

    }

    constructor(){

      console.log('PricingAccordion')

        if ( $('#pricing-accordion').length ) {
            let hash = window.location.hash;

            console.log('hash',  hash)

            $(hash).collapse('show')

            let hashID = '#' + hash;

            let elementOffset = $(hashID).offset().top;

            gsap.to(window, {duration: 2, scrollTo: elementOffset});
        }

    }
}

export default PricingAccordion
