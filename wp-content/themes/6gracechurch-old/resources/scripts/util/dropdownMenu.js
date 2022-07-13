// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap';

class DropdownMenu {

    doAThing() {
        console.log('Do a thing')
    }

    constructor() {

      //let mobile = true;
        let menuOpen = false;
        var menuWrapper = '.menu-wrapper';
        var menuToggle = '#show-menu';
     // var subMenu = '.sub-menu';

        let dropDownOpen = false;
      // eslint-disable-next-line no-unused-vars
        let navHeight = '';

        function getHeight()
        {

            console.log('getHeight')
            navHeight = $('.dropdown-menu-style').height();

            console.log('navHeight', navHeight)
        }


        if ($('.dropdown-menu-style').length) {
            console.log('Is dropdown')

            gsap.delayedCall(1, getHeight)

            $('.nav-primary-dropdown .menu-item-has-children > a').click(function (e) {

                e.stopPropagation();

                e.preventDefault ? e.preventDefault() : (e.returnValue = false);

                var $link = $(this);

                function showDropdown()
                {

                    console.log('show parent Dropdown')

                    var $sub = $link.siblings('.sub-menu');

                    gsap.set('.sub-menu > .menu-item', {height: '46px'})

                    $('.sub-menu').removeClass('visible')
                    gsap.set('.sub-menu',{opacity:0})
                    gsap.set($sub,{opacity:0, display:'block'})
                    gsap.to($sub, {opacity:1, duration:0.25})

                }

                console.log('sub nav tests');

                if ($link.parent().parent().parent().hasClass('nav-primary-dropdown')) {
                    console.log('child of nav');

                    e.preventDefault();

                    if (!$link.siblings('.sub-menu').hasClass('visible')) {
                        $('.nav-primary-dropdown .menu-item-has-children a').removeClass('sub-open');
                        $link.addClass('sub-open');
                        $('.sub-menu').removeClass('visible');
                        dropDownOpen = true;

                        showDropdown();
                    } else {
                        dropDownOpen = false;
                        $('.sub-menu').removeClass('visible');
                        $link.removeClass('sub-open');
                    }
                } else {
                    console.log('else')

                    if ($(this).parent().parent().hasClass('sub-menu')) {
                        console.log('child of sub nav');
                        e.preventDefault();

                        //gsap.set('.sub-menu > .menu-item', {height: '46px'})

                        if (!$link.siblings('.sub-menu').hasClass('sub-child-visible')) {

                            let linkHeight = $(this).outerHeight();
                            $(this).parent().siblings('.menu-item').children('a').removeClass('sub-open');
                             gsap.set($(this).parent().siblings('.menu-item').children('a').siblings('.sub-menu'), {display:'none'})


                            //gsap.set($(this).parent().siblings('.menu-item').children('a'), {opacity: 0.2})

                            gsap.set($(this).parent().siblings(), {height: linkHeight})
                            $('.sub-menu').removeClass('sub-child-visible');
                            $link.addClass('sub-open');

                            $link.siblings('.sub-menu').addClass('sub-child-visible');
                            gsap.set($link.siblings('.sub-menu'),{ display:'block'})
                            gsap.set($link.siblings('.sub-menu'), {opacity: 1})

                            let height = $link.siblings('.sub-menu').height() + $(this).outerHeight();
                            gsap.set($(this).parent(), {height: height})
                        } else {
                            $link.siblings('.sub-menu').removeClass('sub-child-visible');
                            let height = $(this).outerHeight();
                            //$link.removeClass('sub-open');
                            gsap.set($link.siblings('.sub-menu'), {opacity: 0})
                            gsap.set($(this).parent(), {height: height})
                        }
                    }
                }

                if ($link.parent().parent().hasClass('sub-menu')) {
                    console.log('child of sub nav add visible');

                    e.preventDefault();

                   // $link.siblings('.sub-menu').addClass('visible');

                    //$link.siblings('.sub-menu').addClass('visible');

                    //if (!$link.siblings('.sub-menu').hasClass('visible')) {
                     //   $link.siblings('.sub-menu').addClass('visible');
                   // }
                    //$('.nav-primary-dropdown .menu-item-has-children a').removeClass('sub-open');

                    // open sub menu
                    //if (!$link.siblings('.sub-menu').hasClass('visible')) {
                    //$('.nav-primary-dropdown .menu-item-has-children a').removeClass('sub-open');
                     // $link.addClass('sub-open');
                    //$('.sub-menu').removeClass('visible');
                    //dropDownOpen = true;

                    //showDropdown();
                    //} else {
                    //dropDownOpen = false;
                    //$('.sub-menu').removeClass('visible');
                    //$link.removeClass('sub-open');
                    //}
                }
            });
        }

        $('html').click(function () {
            if (dropDownOpen === true) {
                $('.nav-primary-dropdown .menu-item-has-children a').removeClass('sub-open');

              //menu-item

                gsap.set('.sub-menu > .menu-item', {height: '46px'})
                gsap.to('.dropdown-menu-style', {height: navHeight})
                gsap.set('.sub-menu',{ display:'none'})

                $('.sub-menu').removeClass('sub-child-visible');

                dropDownOpen = false;

            }

        });



      $(menuToggle).click(function () {

        console.log('-------- main-navbar click');

        if (menuOpen) {
            console.log('close');

            $(menuToggle).removeClass('open');

            menuOpen = false;

            hideMenu();
          //$('.nav-primary').removeClass('menu-open');

          //TweenMax.set('.main-navbar .navbar-toggle .open-menu', {css:{display:'block'}});
          //TweenMax.set('.main-navbar .navbar-toggle .close-menu', {css:{display:'none'}});
         // gsap.to(menuWrapper,  {right:'-100%', duration:0.5, onComplete: hideMenu});
        } else {
            console.log('open');

          //$(menuToggle).addClass('open');
            $(menuWrapper).addClass('menu-open');

          menuOpen = true;

          //gsap.to(menuWrapper, {right:'0%', duration:0.5});
        }

        //menuOpen =! menuOpen;

      });

      function hideMenu()
      {

          $(menuWrapper).removeClass('menu-open');

          menuOpen = false;

      }

      $('.menu-anchor a').on('click', function ( event ) {

        event.preventDefault();

        let target = $(this).attr('href');
        let offset = '100';

        console.log('target ', target)

        var scrollYPos = ($(target).offset().top- offset);

        gsap.to(window, {scrollTo: {y: scrollYPos, autoKill:false}, ease: 'power2.inOut', duration:1});

        if (menuOpen) {
          console.log('close');

          $(menuToggle).removeClass('open');

          hideMenu();

        }

      });
    }
}

export default DropdownMenu
