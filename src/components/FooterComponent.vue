<template>
    <footer>
        <FooterLinkMenuComponent/>
        <div class="container_footer_bottom">
            <ul class="footer_credits_wrapper">
                <li v-for="item in store.footerCredits" :key="item">
                    {{ item }}
                </li>
            </ul>
            <ul class="brands_lists">
                <li v-for="item in store.brandsIcon" :key="item">
                    <a href="#"><font-awesome-icon :icon="item"/></a>
                </li>
            </ul>
        </div>
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
    
        


    </footer>
</template>

<script>
    import store from '../store';
    import FooterLinkMenuComponent from './FooterLinkMenuComponent.vue';

    export default {
    name: "FooterComponent",
    data() {
        return {
            store: store,
        };
    },
    components: { 
        FooterLinkMenuComponent 
    }
}

</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    footer {
        background-color: #6ABF17;
        padding: 1.25rem 0 0;
        color: white;
        position: relative;

        .container_footer_bottom {
            @include flex_center_column;

            .footer_credits_wrapper {
                @include display_flexbox;
                padding: 2.5rem 0;


            li {
                border-right: 2px solid white;
                padding: 0 1rem;
                letter-spacing: 0.05rem;
            }

            li:last-child {
                border: none;
            }

            
            }

            .brands_lists {
                @include brand_icons;
                justify-content: center;
                font-size: 1.5rem;
                padding-bottom: 3rem;
            }

        }

        .fa-chevron-up {
            position: absolute;
            right: 100px;
            bottom: 0px;
            padding: 0.90rem 1.4rem;
            background-color: #394132;
            border-radius: 5px 5px 0 0;
        }

        
    }

</style>