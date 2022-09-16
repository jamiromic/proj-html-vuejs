<template>
    <div class="read_testimonials_container">
        <div class="read_testimonials_wrapper">
            <span class="subtitle">headache free</span>
            <h2 class="title">award winning <br> moving company</h2>
            <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia assumenda ratione hic, facere aliquam, eaque dolores sed tempore, est excepturi. Exercitationem, quos temporibus accusantium fugit labore animi, placeat expedita tenetur.</p>
            <a href="#">read our testimonials</a>
        </div>
    </div>
</template>

<script>
    import store from '../store';
    export default {
        name: "ReadTestimonialsComponent",
        data() {
            return {
                store: store,
            };
        },
        
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .read_testimonials_container {
        background-color: #F8FBFC;


        .read_testimonials_wrapper {
            @include flex_center_column;
            gap: 1rem;
            padding: 13rem 0;
            @include small_container;
            margin: 0 auto;
            text-align: center;

            .title {
                @include title_green_style;
            }

            .subtitle {
                @include subtitle_style;
            }

            .text {
                @include text_style;
            }

            a {
                @include buttons;
            }

        }
    }

</style>