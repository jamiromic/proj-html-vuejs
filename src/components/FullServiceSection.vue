<template>
    <div class="container_full_service">
        <div class="title_box">
            <span class="subtitle">we are professional</span>
            <h2 class="title">Full-Service Solution</h2>
        </div>
        <div class="wrapper_cards">
            <div v-for="item,i in store.fullServiceCard" :key="i" class="card">
                <div class="photo">
                    <img :src="require(`..//assets/${item.photo}`)"
                    :alt="item.altPhoto">
                </div>
                <div class="card_content">
                    <h2 class="title"> {{ item.title }} </h2>
                    <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Enim omnis placeat facere magnam amet dicta fugiat eos perspiciatis,
                         quo sit suscipit impedit, recusandae earum.</p>
                    <a href="#">read more</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import store from '../store';
    export default {
        name: "FullServiceSection",
        data() {
            return {
                store: store,
            };
        },  
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .container_full_service {
        max-width: 1690px;
        height: 1280px;
        margin: 0 auto;
        @include flex_center_column;
        

        .title_box {
            text-align: center;
            padding: 5rem 0;

            .subtitle {
                @include subtitle_style;
            }

            .title {
                @include title_green_style;
                padding-top: 1rem
            }

        }

        .wrapper_cards {
            @include display_flexbox;
            gap: 4rem;

            .card {
                display: flex;
                flex-direction: column;
                background-color: #F2F5F8;
                width: 480px;
                height: 720px;

                .photo {
                    text-align: center;
                    margin: 1.5rem 1.5rem 0 1.5rem;

                    img {
                        width: 100%;
                    }

                }

                .card_content {
                    @include flex_center_column;
                    background-color: white;
                    margin: 1.5rem;
                    height: 100%;

                    .title {
                        font-size: 2.15rem;
                        text-transform: capitalize;
                        color: #1775BF;
                        font-weight: 800;
                    }

                    .text {
                        @include text_style;
                        text-align: center;
                    }

                    a {
                        @include buttons;
                    }
                }
            }

            
        }
    }



</style>