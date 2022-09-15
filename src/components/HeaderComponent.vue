<template>
    <header>
        <TopHeaderComponent/>
        <HeroComponent/>
        <GetFreeComponent/>
    </header>
</template>

<script>
    import store from '../store';
    import TopHeaderComponent from './TopHeaderComponent.vue';
    import HeroComponent from './HeroComponent.vue';
    import GetFreeComponent from './GetFreeComponent.vue';

    export default {
    name: "HeaderComponent",
    data() {
        return {
            store: store,
        };
    },
    components: {
    TopHeaderComponent,
    HeroComponent,
    GetFreeComponent
}
}
</script>

<style lang="scss" scoped>
    

</style>