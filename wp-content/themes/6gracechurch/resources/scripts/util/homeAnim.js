import { gsap } from "gsap";
import $ from "jquery";

class HomeAnim {

    constructor()
    {

        if ( $('.header-main').length ) {
            gsap.set('.triangle', {opacity:0})

            gsap.set('#t4', {opacity:1})
            gsap.set('#t29', {opacity:1})
            gsap.set('#t39', {opacity:1})

            let duration = 1;
            let offset = "-=0.8";

            let tl = gsap.timeline({repeat: -1, repeatDelay: 2});
            //let tl = gsap.timeline({});

            tl.to(".triangle", {
                duration: 2,
                opacity: 1,
                ease: "power1.inOut",
                stagger: {
                    amount: 2.5,
                    grid:"auto",
                    ease: "power1.inOut",
                }
            }).to(".triangle", {
                duration: 2,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    amount: 2.5,
                    grid:"auto",
                    ease: "power1.inOut",
                }
            })
        }
    }
}
export default HomeAnim
