<template>
    <main>
        <ReadTestimonialsComponent/>
        <FullServiceSection/>
        <MoveWithEaseComponent/>
        <HappyCustomersComponent/>
        <RequestFreeQuoteComponent/>
    </main>
</template>

<script>
    import store from '../store';
    import ReadTestimonialsComponent from './ReadTestimonialsComponent.vue';
    import FullServiceSection from './FullServiceSection.vue';
    import MoveWithEaseComponent from './MoveWithEaseComponent.vue';
    import HappyCustomersComponent from './HappyCustomersComponent.vue';
import RequestFreeQuoteComponent from './RequestFreeQuoteComponent.vue';

    export default {
    name: "MainComponent",
    data() {
        return {
            store: store,
        };
    },
    components: {
    ReadTestimonialsComponent,
    FullServiceSection,
    MoveWithEaseComponent,
    HappyCustomersComponent,
    RequestFreeQuoteComponent
}
}
</script>

<style lang="scss" scoped>

</style>