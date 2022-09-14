import Vue from 'vue';

const store = Vue.observable({
   brandsIcon: [
    'fa-brands fa-facebook-f',
    'fa-brands fa-twitter',
    'fa-brands fa-instagram',
    'fa-brands fa-youtube'
   ],
   logoIconUrl: '../assets/avada-movers-logo.png',
   phoneNumber: '1.800.555.67.89'

})

export default store