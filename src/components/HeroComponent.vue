<template>
    <div class="wrapper_hero">
        <ToolbarComponent/>
        <div class="hero_title">
            <span class="subtitle">Moving Without the Hassle</span>
            <h1 class="title">We make it simple</h1>
            <span class="subtitle">professional service with quality and customer satisfaction</span>
        </div>

    </div>
</template>

<script>
    import store from '../store';
    import ToolbarComponent from './ToolbarComponent.vue';
    

    export default {
    name: "HeroComponent",
    data() {
        return {
            store: store,
        };
    },
    components: { ToolbarComponent }
}
</script>

<style lang="scss" scoped>

    @import '../styles/mixins.scss';

    .wrapper_hero {
        background-image: url(../assets/avada-movers-homeherobackground-final.jpg);
        background-size: 130%;
        background-position: top;
        

        .hero_title {
            text-transform: uppercase;
            height: 910px;
            @include flex_center_column;

            .title {
                color: #252525;
                font-size: 5rem;
                font-weight: 900;
                padding: 1rem 0;
            }

            .subtitle {
                @include subtitle_style;
                font-weight: 900;
                font-size: 1.20rem;
            }
        }
    }


   

</style>