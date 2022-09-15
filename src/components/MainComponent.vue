<template>
    <main>
        <ReadTestimonialsComponent/>
        <FullServiceSection/>
    </main>
</template>

<script>
    import store from '../store';
    import ReadTestimonialsComponent from './ReadTestimonialsComponent.vue';
    import FullServiceSection from './FullServiceSection.vue';

    export default {
    name: "MainComponent",
    data() {
        return {
            store: store,
        };
    },
    components: { ReadTestimonialsComponent, FullServiceSection }
}
</script>

<style lang="scss" scoped>

</style>