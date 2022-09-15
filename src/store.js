import Vue from 'vue';

const store = Vue.observable({
   brandsIcon: [
    'fa-brands fa-facebook-f',
    'fa-brands fa-twitter',
    'fa-brands fa-instagram',
    'fa-brands fa-youtube'
   ],
   phoneNumber: '1.800.555.67.89',
   logo: 'avada-movers-logo.png',
   toolbarMenu: [
    'Home',
    'Rates',
    'Testimonials',
    'FAQ',
    'Blog',
    'Contact'
   ],
   fullServiceCard: [
    {
        altPhoto: 'Photo One Service',
        photo: 'avada-movers-serviceonephoto-final-400x255.jpg',
        title: 'two man teams'
    },
    {
        altPhoto: 'Photo Two Service',
        photo: 'avada-movers-servicetwophoto-final-400x255.jpg',
        title: 'we do all the lifting'
    },
    {
        altPhoto: 'Photo Three Service',
        photo: 'avada-movers-servicethreephoto-final-400x255.jpg',
        title: 'coast to coast'
    },
   ]
   
})

export default store


