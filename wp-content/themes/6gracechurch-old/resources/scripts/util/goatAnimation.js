import { gsap } from "gsap";
import $ from "jquery";

class GoatAnimation {

    constructor()
    {

        if ($(".header-gy-home").length) {
            gsap.set('.down-arrow', {opacity:0})

            let images = $('.animated-image').children(), // images in the sequence
            //fps = 14,
            fps = 19,
            duration = 1 / fps;

          //let gsapDuration = 16;
            let goatDuration = 10;
            let slideDuration = 5;
            let slideDelay = 0;

            let sequence = gsap.timeline({repeat: -1})
            .staggerTo(images, 0, {position: 'static', visibility: 'visible'}, duration, 0)
            .staggerTo(images.not(images.last()), 0, {
                position: 'absolute',
                visibility: 'hidden',
                immediateRender: false
            }, duration, duration)
            .set({}, {}, "+=" + duration);

            let element = document.getElementById('sprite');
            let positionInfo = element.getBoundingClientRect();
          //let height = positionInfo.height;
            let spriteWidth = positionInfo.width;

            gsap.set('#goat', {left: -spriteWidth})

            let screenWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

            function goatFinished()
            {
                gsap.to('.down-arrow', {opacity:1})
            }

            gsap.to('#goat', {left: "100%", duration: goatDuration, ease: "linear", onComplete:goatFinished})
            gsap.to('#bg', {left: 0, duration: slideDuration, ease: "linear", delay: slideDelay})

          //gsap.to('.goat-image', {left})
        }

    }
}

export default GoatAnimation
