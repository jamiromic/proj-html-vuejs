<template>
        <div class="wrapper_toolbar">
            
            <ul>
                <img class="logo" src='..//assets/avada-movers-logo.png' alt="Logo Avada Movers">
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
            justify-content: center;
            align-items: center;
            @include big_container;
            padding: 1.5rem 0.50rem;
            
            .logo {
                padding-right: 50px;

                img {
                height: 90px;
                }

            }
            

            ul {
                display: flex;
                flex-wrap: wrap;
                gap: 4rem;
                align-items: center;
                justify-content: center;
                
                .item_menu {
                    color: #252525;
                    font-weight: 900;
                    font-size: 1.28rem;
                }

                .item_menu:hover {
                    color: #6ABF17;
                }

                .active {
                    color: #6ABF17;
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