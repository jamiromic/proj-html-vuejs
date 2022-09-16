<template>
    <div class="container_bg_happy_customers">
        <div class="container_happy_customers">
            <div class="title_box">
                 <span class="subtitle">happy customers</span>
                <h2 class="title">testimonials</h2>
            </div>
            <div class="card_wrapper">
                <div v-for="item,i in store.testimonials" :key="i" class="card">
                    <img :src="require(`..//assets/${item.photo}`)" :alt="`${item.name}'s Photo'`">
                    <span class="card_name">{{ item.name }}</span>
                    <p class="card_text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque 
                        corporis, velit modi eligendi, odio error rerum perferendis suscipit nulla quidem quis molestiae."
                    </p>

                </div>
            </div>
            <div class="button">
                <a href="#">read more testimonials</a>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store';
    export default {
        name:'HappyCustomersComponent',
        data() {
            return {
                store: store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .container_bg_happy_customers {
        background-image: url(../assets/avada-movers-testimonial-background.jpg);
        background-size: cover;
        background-size: 130%;
        background-position: top;
        

        .container_happy_customers {
        @include big_container;
        padding: 14rem 0;
        margin: 0 auto;
        @include flex_center_column;
        gap: 4rem;

        .title_box {
            @include flex_center_column;

            .subtitle {
                @include subtitle_style;
            }

            .title {
                @include title_green_style;
            }

        }

        .card_wrapper {
            @include display_flexbox;
            gap: 4rem;
            flex-wrap: wrap;
            padding-bottom: 4rem;

            .card {
                @include flex_center_column;
                gap: 3rem;
                text-align: center;
                max-width: 500px;


                img {
                    border-radius: 999px;
                }

                .card_name {
                    font-size: 2.15rem;
                    text-transform: capitalize;
                    color: #1775BF;
                    font-weight: 800;
                }

                .card_text {
                    @include text_style;
                    font-style: italic;
                    font-weight: 600;
                    line-height: 3rem;
                }
            }

        }

        a {
            @include buttons;

        }
    }

    }

    

</style>