<template>
    <header>
        <TopHeaderComponent/>
        <HeroComponent/>

    </header>
</template>

<script>
    import store from '../store';
    import TopHeaderComponent from './TopHeaderComponent.vue';
    import HeroComponent from './HeroComponent.vue';

    export default {
    name: "HeaderComponent",
    data() {
        return {
            store: store,
        };
    },
    components: { 
        TopHeaderComponent,
        HeroComponent
    }
}
</script>

<style lang="scss" scoped>
    

</style>