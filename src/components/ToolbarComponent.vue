<template>
        <div class="wrapper_toolbar">
            <img src='..//assets/avada-movers-logo.png' alt="Logo Avada Movers">    
            <ul>
                <li v-for="item in store.toolbarMenu" :key="item">
                    <a href="#" :class="item === 'Home' ? 'item_menu active' : 'item_menu'" >{{ item }}</a>
                </li>
                <li>
                    <a class="button" href="#">Free Quote</a>
               </li>
            </ul>
        </div>
    
</template>

<script>
    import store from '../store';
    
    export default {
        name: "ToolbarComponent",
        data() {
            return {
                store: store,
            };
        },
        
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    
        .wrapper_toolbar {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1690px;
            padding: 1.5rem 0.50rem;

            img {
                height: 90px;

            }

            ul {
                display: flex;
                gap: 4rem;
                
                .item_menu {
                    color: #252525;
                    font-weight: 900;
                    font-size: 1.28rem;
                }

                .active {
                    color: #6ABF17
                }
            }

            .button {
                @include buttons;

            }

            a {
                text-decoration: none;
            }


        }

    

    

    
   

</style>