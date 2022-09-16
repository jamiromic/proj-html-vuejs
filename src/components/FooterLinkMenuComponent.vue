<template>
    <div class="wrapper_footer_link_menu">
        <div class="link_menu about_us">
            <h2 class="title">about</h2>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa reiciendis et. Cumque tempore
                 et debitis maiores maxime, veritatis consequatur illo facere eveniet, beatae est.</p>
            <img src='..//assets/avada-movers-logo.png' alt="Logo Avada Movers Footer">
        </div>
        <div class="link_menu avada movers">
            <h2 class="title">avada movers</h2>
            <ul>
                <li v-for="link in store.footerMenuLeft" :key="link" :class="link === 'home' ? 'active' : ''">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    <a href="#">{{ link }}</a>
                    
                </li>
            </ul>
        </div>
        <div class="link_menu recent posts">
            <h2 class="title">recent posts</h2>
            <ul>
                <li v-for="link in store.footerMenuRight" :key="link" >
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    <a href="#">{{ link }}</a>
                </li>
            </ul>
        </div>
        

    </div>
</template>

<script>
    import store from '../store';

    export default {
        name: "FooterLinkMenuComponent",
        data() {
            return {
                store: store,
            };
        },
    }

</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .wrapper_footer_link_menu {
        @include display_flexbox;
        gap: 4rem;
        padding: 6rem 0;
        background-color: white;
        color: black;
        flex-wrap: wrap;

        .link_menu {
            width: 490px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 3rem;

            h2 {
                text-transform: uppercase;
                font-size: 1.40rem;
                font-weight: 900;
            }

            img {
                max-width: 50%;
                padding-top: 1rem;
            }

            .text {
                margin-top: -10px;
                line-height: 2.5rem;
                font-weight: 500;
                font-size: 1.25rem;
            }

            ul {
                display: flex;
                flex-direction: column;
                gap: 2.75rem;
                text-transform: capitalize;
                font-size: 1.25rem;

                .active {
                    color: #6ABF17;
                }


                a {
                    text-decoration: none;
                    color: currentColor;
                    padding-left: 0.5rem;
                }

                a:hover {
                    color: #6ABF17;
                }
            }
            
        }
    }

</style>