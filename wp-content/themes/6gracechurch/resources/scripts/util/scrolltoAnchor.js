import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
import $ from "jquery";

class ScrolltoAnchor {

  constructor()
  {

    gsap.registerPlugin(ScrollToPlugin);

    console.log('ScrolltoHash')

    gsap.set(window, {scrollTo: 0});

    let hash = window.location.hash;

    // eslint-disable-next-line no-unused-vars
    let target = window.location.hash;
    target = target.replace('#', '');

    window.location.hash = '';

    console.log('hash', hash);

    if (hash) {
      console.log('has a hash')

      let scrollYPos = ($(hash).offset().top);

      gsap.to(window, {scrollTo: {y: scrollYPos, x: 0, autoKill: false}, duration:1, delay:0.5, ease: 'power2.inOut'});
    }


    //var scrollPos = $(document).scrollTop();

    $('a.anchor').on('click', function ( event ) {

      event.preventDefault();

      let target = $(this).attr('href');

      console.log('target ', target)

      let scrollPos = $(document).scrollTop();
      let addition = 0;

      if (scrollPos < 1000) {
        addition = 1000 - scrollPos
      }

      var scrollYPos = ($(target).offset().top) - 90 + addition;

      gsap.to(window, {scrollTo: {y: scrollYPos, autoKill:false}, ease: 'power2.inOut', duration:1});

    });

    $(document).scroll(function () {
      console.log($(document).scrollTop())
    });

  }
}

export default ScrolltoAnchor
