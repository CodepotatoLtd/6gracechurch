import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'imagesloaded/imagesloaded.pkgd.js'

class HeaderAnimation {

    constructor() {

        console.log('header anim')

        gsap.registerPlugin(ScrollTrigger);

        setScrollTrigger();

        gsap.to('.loader-wrapper', {opacity:0, delay: 0.5, autoAlpha:0, duration: 0.35})

        //alert($(document).height());

        $('#main').imagesLoaded()
        .always(function (  ) {
            console.log('all images loaded');
        })
      .done(function (  ) {
        console.log('all images preload images are successfully loaded');

        //setScrollTrigger();

        ScrollTrigger.refresh()

        //gsap.to('.loader-wrapper', {opacity:0, delay: 0.5, autoAlpha:0, duration: 0.35})

        //alert($(document).height());


        //gsap.delayedCall(0.5, setScrollTrigger);
        //ScrollTrigger.refresh()

        //gsap.to('#loading-animation', {autoAlpha:0, delay: 2, duration: 1})
      })
      .fail(function () {
        console.log('all images loaded, at least one is broken');
      })
      .progress(function ( instance, image ) {
        var result = image.isLoaded ? 'loaded' : 'broken';
        console.log('image is ' + result + ' for ' + image.img.src);
      });

    //const panels = new Panels

    function setScrollTrigger()
    {

        ScrollTrigger.matchMedia({

            '(min-width: 992px)': function () {

                ScrollTrigger.create({
                    trigger: '#main',
                    start: 'top top',
                    end: '+=700px',
                    pin: true,

                })

                gsap.to('#top-split-panel-left', {
                    yPercent: -120,
                    ease: 'none',
                    scrollTrigger: {
                        //scroller: '#scroller',
                        trigger: '#main',
                        start: 'top top',
                        end: '+=700px',
                        scrub: true,
                        pin: true,
                    },
                });

                gsap.to('#top-split-panel-right', {
                    yPercent: 120,
                    ease: 'none',
                    scrollTrigger: {
                        //scroller: '#scroller',
                        trigger: '#main',
                        start: 'top top',
                        end: '+=700px',
                        scrub: true,
                        pin: true,
                        toggleClass: {targets: '#top-split-panel-right', className: 'is-active'},
                    },
                });

            },
        });

        window.addEventListener('resize', resize);

        function resize()
        {
            gsap.set('#main', { clearProps: 'all' })
          //TweenMax.set(arrayOfElements, {clearProps: 'all'});
            console.log('resize')
            ScrollTrigger.refresh(true)
        }
    }
    }
}

export default HeaderAnimation
