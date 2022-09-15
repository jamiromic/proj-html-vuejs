<template>
    <div class="container_move_with_ease">
        <div class="green_dark_box">
            <div class="move_with_ease_box">
                <span class="subtitle">we remove the headache from moving</span>
                <h2 class="title">move with ease</h2>
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus veniam incidunt perferendis
                    amet quisquam assumenda ipsam praesentium at! Modi corporis possimus magnam minus sunt eaque.
                    
                </p>
                <a href="#">get a free quote now</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MoveWithEaseComponent",
    }
</script>

<style lang="scss" scoped>
    @import '../styles/mixins.scss';

    .container_move_with_ease {
        height: 990px;
        background-image: url('../assets/avada-movers-movewithease-background-new.jpg');
        background-size: cover;
        position: relative;

        .green_dark_box {
            background-color: #5AA511;
            width: 800px;
            height: 550px;
            margin: 0 auto;
            position: absolute;
            right: 450px;
            top: 220px;

            .move_with_ease_box {
                color: white;
                background-color: #6ABF17;
                @include flex_center_column;
                margin: 1rem;
                height: 518px;
                gap: 3rem;
                
                

                .subtitle {
                    text-transform: uppercase;
                    font-weight: 700;

                }
                
                .title {
                    font-size: 3rem;
                    text-transform: capitalize;
                    border-bottom: 0.10px solid rgba(255, 255, 255, 0.5);
                    padding-bottom: 1rem;
                    margin-top: -2rem;
                    


                }

                .text {
                    font-size: 1.25rem;
                    padding: 0rem 3rem ;
                    line-height: 2.5rem;
                    text-align: center;

                }

                a {
                    @include buttons;
                   

                }
                
            }
        
        }
    }

</style>