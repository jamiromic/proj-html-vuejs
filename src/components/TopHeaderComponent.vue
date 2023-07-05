<template>
    <div class="header_top_wrapper">
        <div class="wrapper_call_us_brands">
            <div class="call_us">
                <font-awesome-icon icon="fa-solid fa-phone-flip" />
                <span class="call_us_text">Call us for a Free Quote: {{ store.phoneNumber }}</span>
            </div>
            <ul class="brands_lists">
                <li v-for="item in store.brandsIcon" :key="item">
                    <a href="#"><font-awesome-icon :icon="item"/></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        name: 'TopHeaderComponent',
        data() {
            return {
                store: store,

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .header_top_wrapper {

        background-color: #6ABF17;
        color: white;



        .wrapper_call_us_brands {
            @include big_container;
            margin: 0 auto;
            padding: 1.25rem 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

        .call_us {

            .call_us_text {
                padding-left: 1rem;
                
            }


        }

        .brands_lists {
            @include brand_icons;

        }




    }

    }

    
   

</style>