<template>
    <div class="free_quote_container">
        <div class="free_quote_wrapper">
            
            <h2 class="title">request a free quote</h2>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas! Accusamus
                 ad dolore enim quibusdam fugiat sequi voluptate, tenetur vero, omnis ea, eos animi!</p>
            <a href="#">click here</a>
        </div>
    </div>
</template>

<script>

    export default {
        name: "RequestFreeQuoteComponent",

    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .free_quote_container {
        background-image: url(../assets/avada-movers-request-quote-background.jpg);
        background-size: cover;


        .free_quote_wrapper {
            @include flex_center_column;
            gap: 1rem;
            height: 700px;
            max-width: 1000px;
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