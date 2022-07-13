import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
import $ from "jquery";

class DownArrow {

    constructor()
    {

        gsap.registerPlugin(ScrollToPlugin);

        //console.log('DownArrow')

        //gsap.set(window, {scrollTo: 0});

        //let hash = window.location.hash;

        // eslint-disable-next-line no-unused-vars
       // let target = window.location.hash;
        //target = target.replace('#', '');

        //window.location.hash = '';

        ////console.log('hash', hash);

        $('.down-arrow').on('click', function ( event ) {

            event.preventDefault();

            let target = $(this).attr('href');

            ////console.log('target ', target)

            var scrollYPos = ($(target).offset().top );

            gsap.to(window, {scrollTo: {y: scrollYPos, autoKill: false}, duration: 0.5});

          //var scrollPos = $(document).scrollTop();
        })

    }
}

export default DownArrow
