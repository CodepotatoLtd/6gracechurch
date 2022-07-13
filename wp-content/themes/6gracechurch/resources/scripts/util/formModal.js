import $ from "jquery";
import 'bootstrap/js/dist/modal';
import {gsap} from "gsap";

class FormModal {

    constructor()
    {

        $('.apply-now').on('click', function (e) {

            e.preventDefault();

            $('#modal-form').modal('show')

            window.location.hash = '#apply-now';
        });

        $('.close').on('click', function (e) {

            e.preventDefault();

            $('#modal-form').modal('hide')

            //window.location.hash = '';
        });

        $('#modal-form').on("hidden.bs.modal", function () {
            //window.location.hash = '';
        });


        let hash = window.location.hash;

        // eslint-disable-next-line no-unused-vars
        //let target = window.location.hash;
        //target = target.replace('#', '');

        //window.location.hash = '';

        console.log('hash', hash);

        if (hash == "#apply-now") {
            console.log('has a hash')

            $('#modal-form').modal('show')
            //let scrollYPos = ($(hash).offset().top);

            //gsap.to(window, {scrollTo: {y: scrollYPos, x: 0, autoKill: false}, duration:1, delay:0.5, ease: 'power2.inOut'});
        }

    }
}
export default FormModal
