import GalleryCarousel from "../util/galleryCarousel";
import BurgerMenu from '../util/burgerMenu.js';
import SvgMap from '../util/svgMap.js';
import FloorGallery from '../util/floorGallery.js';
//import ScrollToAnchor from '../util/scrolltoAnchor.js';
import DownArrow from '../util/downArrow.js';
import MapFS from '../util/mapFS.js';
import AOS from 'aos';


export default {
    init() {
        // JavaScript to be fired on all pages
       // const scrolltoAnchor = new ScrolltoAnchor();
    },
    finalize() {
      AOS.init();
        // JavaScript to be fired on all pages, after page specific JS is fired
        const galleryCarousel = new GalleryCarousel();
        const burgerMenu = new BurgerMenu();
        const svgMap = new SvgMap();
        const floorGallery = new FloorGallery();
        const mapFS = new MapFS();
        //const ScrollToAnchor = new ScrollToAnchor();
        const downArrow = new DownArrow();

    },
};
