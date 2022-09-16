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
   ],
   testimonials: [
    {
        photo: 'avada-movers-johndoe-final-200x200.jpg',
        name: 'John Doe'
    },
    {
        photo: 'avada-movers-janedoe-final-200x200.jpg',
        name: 'Jane Doe'
    },
    {
        photo: 'avada-movers-johnsmith-final-200x200.jpg',
        name: 'John Smith'
    }
   ],
   footerMenuLeft: [
    'home',
    'rates',
    'testimonials',
    'blog',
    'free quote'
   ],
   footerMenuRight: [
    'heading out to college?',
    'moving your business',
    'outstanding quality',
    'cost of moving',
    'best moving tips'
   ],
   footerCredits: [
    '© Copyright 2012 - 2020',
    'Avada Theme by ThemeFusion',
    'All Right Reserved',
    'Powered by WordPress'
   ]
   
})

export default store


