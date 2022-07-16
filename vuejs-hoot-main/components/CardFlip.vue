<template>
    <div class="flip-container" :class="{ 'flipped': flipped}" @click="flipCard()">
        <div class="card-container">
            <div class="card back">
                <img class="contents" src="https://i.imgur.com/pfr8bB3.png" />
            </div>
            <div class="card front">
                <!-- CARD COMPONENT HERE -->          
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        card: {
            type: Object,
            default () {
                return {
                    rarity: 'none',
                    igmURL: ''
                }
            }
        }
    },
    data() {
        return {
            flipped: false
        }
    },
    methods: {
        flipCard(){
            this.flipped = true
        }
    }
    
})
</script>

<style scoped>
.flip-container {
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    -o-perspective: 1000px;
    perspective: 1000px;
    min-height: 120px;
    cursor: pointer;
}
.back,
.front {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -o-transition: 0.6s;
    -o-transform-style: preserve-3d;
    -ms-transition: 0.6s;
    -ms-transform-style: preserve-3d;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
    width: 100%;
}
.front {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    position: absolute;
}

.flip-container.flipped .front {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
.flip-container.flipped .back {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.card {
    display: flex;
    justify-content: center;
    border-radius: 12px;
    box-shadow: #252525 0 4px 12px;
}

.contents {
    width: 100%;
    border-radius: 12px;
}
</style>