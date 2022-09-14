import Vue from 'vue';

const store = Vue.observable({
   brandsIcon: [
    'fa-brands fa-facebook-f',
    'fa-brands fa-twitter',
    'fa-brands fa-instagram',
    'fa-brands fa-youtube'
   ],
   phoneNumber: '1.800.555.67.89',
   toolbarMenu: [
    'Home',
    'Rates',
    'Testimonials',
    'FAQ',
    'Blog',
    'Contact'
   ],
   
})

export default store


