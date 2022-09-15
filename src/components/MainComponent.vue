<template>
    <main>
        <ReadTestimonialsComponent/>
    </main>
</template>

<script>
    import store from '../store';
    import ReadTestimonialsComponent from './ReadTestimonialsComponent.vue';
    export default {
    name: "MainComponent",
    data() {
        return {
            store: store,
        };
    },
    components: { ReadTestimonialsComponent }
}
</script>

<style lang="scss" scoped>

</style>