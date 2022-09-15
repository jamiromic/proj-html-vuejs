<template>
    <div class="get_a_free_section">
        <font-awesome-icon icon="fa-regular fa-paper-plane" />
        <a href="#">get a free quote online now!</a>
    </div>
</template>

<script>
    export default {
        name: "GetFreeComponent"
        
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .get_a_free_section {
        @include display_flexbox;
        background-color: #1775BF;
        color: white;
        font-size: 1.35rem;
        letter-spacing: 0.15rem;
        padding: 5rem;
        text-transform: uppercase;

        a {
            padding-left: 1rem;
            text-decoration: none;
            color: white;
        }

    }

</style>