import { gsap } from 'gsap';
import $ from "jquery";

class Menu {

    constructor()
    {

        let menuToggle = '#show-menu';
        let menu = '.nav-primary';
        let triangle = '.menu-triangle';


        let menuOpen = false;

        $(menuToggle).click(function () {

            console.log('-------- main-navbar click');

            if (menuOpen) {
                console.log('close');

                $(menuToggle).removeClass('menu-open');

                closeMenu()

                menuOpen = false;
            } else {
                console.log('open');

              //$(menuToggle).addClass('open');
                $(menuToggle).addClass('menu-open');

                openMenu()

                menuOpen = true;
            }

        });
        gsap.set(triangle, {bottom: "-80vw"});
        //gsap.set('.menu-item',{opacity: 0, x: -50});

        function openMenu()
        {
            gsap.to(menu, {left: 0, ease: "power1.inOut",});
            gsap.to(triangle, {bottom: 0, ease: "power1.inOut",});
            //gsap.to(".menu-item", { opacity: 1, x: 0, delay: 0.35, duration: 0.25, stagger: 0.1 });
        }

        function closeMenu()
        {
            gsap.to(menu, {left: "-100vw"});
            gsap.to(triangle, {bottom: "-80vw"});
            //gsap.to('.menu-item',{opacity: 0, x: -50});
        }

    }
}

export default Menu
