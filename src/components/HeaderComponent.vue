<template>
    <header>
        <TopHeaderComponent/>

    </header>
</template>

<script>
    import store from '../store';
    import TopHeaderComponent from './TopHeaderComponent.vue';

    export default {
    name: "HeaderComponent",
    data() {
        return {
            store: store,
        };
    },
    components: { TopHeaderComponent }
}
</script>

<style lang="scss" scoped>
    header {
        background-color: #6ABF17;
        color: white;
    }

</style>