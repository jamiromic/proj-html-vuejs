<template>
        <div class="wrapper_toolbar">
            <img src='../assets/avada-movers-logo.png' alt="Logo Avada Movers">        
            <ul>
                <li v-for="item in store.toolbarMenu" :key="item">
                    <span :class="item === 'Home' ? 'item_menu active' : 'item_menu'" >{{ item }}</span>
                </li>
                <li>
                    <a href="#">Free Quote</a>
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
        computed: {
            getConsole() {
               return  console.log(store)
            }
        }
    
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    
        .wrapper_toolbar {
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1600px;
            padding: 1.5rem 0.50rem;

            img {
                height: 90px;

            }

            ul {
                display: flex;
                gap: 3.5rem;
                
                .item_menu {
                    color: #252525;
                    font-weight: 900;
                    font-size: 1.28rem;
                }

                .active {
                    color: #6ABF17
                }
            }

            a {
                @include buttons;

            }


        }

    

    

    
   

</style>