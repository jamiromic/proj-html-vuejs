<template>
    <div class="wrapper_call_us_brands">
        <div class="call_us">
            <font-awesome-icon icon="fa-solid fa-phone-flip" />
            <span class="call_us_text">Call us for a Free Quote: {{ store.phoneNumber }}</span>
        </div>
        <ul class="brands_lists">
            <li v-for="item in store.brandsIcon" :key="item">
                <font-awesome-icon :icon="item"/>
            </li>
        </ul>
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

    .wrapper_call_us_brands {
        max-width: 1400px;
        margin: 0 auto;
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .call_us {

            .call_us_text {
                padding-left: 1rem;
                font-size: 0.90rem;
            }

            .fa-phone-flip {
                font-size: 0.92rem;
            }

        }

        .brands_lists {
            display: flex;
            gap: 1.5rem;
            font-size: 1.08rem;
        }


    }
   

</style>