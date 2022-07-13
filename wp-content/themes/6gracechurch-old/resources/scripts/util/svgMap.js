import { gsap } from "gsap";
import $ from "jquery";

class GoatAnimation {

    constructor()
    {

        if ($("#svg-map").length) {

          gsap.set('#m1 text', {x:"+=1"})
          gsap.set('#m10 text', {x:"+=0.5"})
          gsap.set('#m11 text', {x:"+=0.5"})
          gsap.set('#m14 text', {x:"+=0.5"})
          gsap.set('#m17 text', {x:"+=0.5"})
          gsap.set('#m21 text', {x:"+=0.5"})

          gsap.set('#w6', {y:"+=1"})
          gsap.set('#w12', {y:"+=1"})




            gsap.set('.window', {autoAlpha: 0, scaleX:0, scaleY: 0, transformOrigin: '50% 100%'})

            $('.marker')
            .mouseover(function () {
                gsap.to($(this), {scaleX:1.3, scaleY: 1.3, duration:0.25, transformOrigin: '50% 50%'})
                let id = $(this).attr('id');
                let number = id.substring(1);
                let window = '#w' + number;
                gsap.to(window, {autoAlpha: 1, scaleX:1, scaleY:1, duration:0.25})
            })
            .mouseout(function () {
                gsap.to($(this), {scaleX:1, scaleY: 1})
                let id = $(this).attr('id');
                let number = id.substring(1);
                let window = '#w' + number;
                gsap.to(window, {autoAlpha: 0, scaleX:0, scaleY: 0, duration:0.25})
            });
        }
    }
}

export default GoatAnimation
