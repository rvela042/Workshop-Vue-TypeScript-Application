<template>
  <div class="container">
    <div>
      <van-row>
        <img class="logo" src="https://i.imgur.com/CIV2Yhq.png" />
      </van-row>

      <van-row>
        <div class="card-grid">
          <div v-for="(card, idx) in cards" class="card-flip" :key="idx">
            <CardFlip :card="card" />
          </div>
        </div>
      </van-row>

      <van-row>
        <van-button type="primary" @click="reloadPage">
          OPEN ANOTHER PACK
        </van-button>
      </van-row>

      <van-row>
        <a class="attribution" href="https://www.vecteezy.com/free-vector/origami">Origami Vectors by Vecteezy</a>
      </van-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  data() {
    return {
      cards: [
        {
          "rarityOrder": 0,
          "rarity": "common",
          "imgURL": "https://i.imgur.com/Ppl525s.png"
        },
        {
          "rarityOrder": 0,
          "rarity": "common",
          "imgURL": "https://i.imgur.com/lFmgnFj.png"
        },
        {
          "rarityOrder": 1,
          "rarity": "uncommon",
          "imgURL": "https://i.imgur.com/Xl5borx.png"
        },
        {
          "rarityOrder": 2,
          "rarity": "rare",
          "imgURL": "https://i.imgur.com/nfXbo4I.png"
        },
        {
          "rarityOrder": 3,
          "rarity": "ultra-rare",
          "imgURL": "https://i.imgur.com/CIV2Yhq.png"
        }
      ],
    }
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
})
</script>

<style>
.logo {
  height: 100px;
}

.card-grid {
  display: flex;
  justify-content: center;
  background: #22282e;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
  margin-bottom: 5%;
}

.card-flip {
  margin: 10px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background:#22282e;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.attribution {
  font-size: 10px;
  color:#6d6d6d;
}
</style>
