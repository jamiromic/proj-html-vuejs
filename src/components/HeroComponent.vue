<template>
    <div class="wrapper_hero">
        <ToolbarComponent/>

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

    .wrapper_hero {
        background-image: url(../assets/avada-movers-homeherobackground-final.jpg);
        background-size: 130%;
        background-position: top;
        height: 1060px;
    }
   

</style>