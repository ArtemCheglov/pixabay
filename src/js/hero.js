// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    modules: [Pagination, Autoplay],
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    speed: 800,

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});