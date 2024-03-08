<template>
  <div class="home">
    <div class="row">
      <div>
        <div class="game-info" v-if="currentItem" :key="currentItem._id">
          <h1 class="game-title">{{ currentItem.name }}</h1>
          <div style="white-space: nowrap">
            <h2 style="font-weight: bold">Difficulté :</h2>
            <template v-for="star in 5" :key="star">
              <img
                :src="
                  star <= currentItem.difficulty ? '/images/StarFull.jpg' : '/images/StarEmpty.jpg'
                "
                class="star"
              />
            </template>
          </div>
          <p>{{ currentItem.description }}</p>
        </div>
      </div>
      <div class="carousel">
        <div>
          <a @click="prevItem">
            <img src="/images/ArrowL.png" alt="Previous" />
          </a>
        </div>
        <div>
          <div v-if="currentItem" :key="currentItem._id">
            <img
              class="game-image"
              v-if="currentItem"
              :src="currentItem.image1"
              :alt="currentItem.name"
            />
            <button class="button" @click="openPopup()">Jouer</button>
          </div>
        </div>
        <div>
          <a @click="nextItem">
            <img src="/images/ArrowR.png" alt="Next" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="popup" id="popup">
    <div class="popup-content" v-if="currentItem" :key="currentItem._id">
      <button @click="closePopup()">Retour</button>
      <h1>Objectif</h1>
      <h2 style="font-weight: bold">
        Difficulté :
        <template v-for="star in 5" :key="star">
          <img
            :src="star <= currentItem.difficulty ? '/images/StarFull.jpg' : '/images/StarEmpty.jpg'"
            class="star"
          />
        </template>
      </h2>
      <p>{{ currentItem.instructions }}</p>
      <RouterLink :to="'/' + currentItem.slug">
        <button class="button">Commencer</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      data: [],
      currentItemIndex: 0
    }
  },
  computed: {
    currentItem() {
      return this.data[this.currentItemIndex]
    }
  },
  methods: {
    prevItem() {
      this.currentItemIndex = (this.currentItemIndex - 1 + this.data.length) % this.data.length
    },
    nextItem() {
      this.currentItemIndex = (this.currentItemIndex + 1) % this.data.length
    },
    openPopup() {
      var popup = document.getElementById('popup')
      popup.style.display = 'block'
    },
    closePopup() {
      var popup = document.getElementById('popup')
      popup.style.display = 'none'
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/game')
      .then((response) => {
        this.data = response.data
        console.log(this.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
</script>

<style>
.home {
  text-align: center;
  margin-top: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  font-family: 'Noto Sans', sans-serif;
}

.popup {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #3d3d3d80;
  backdrop-filter: blur(5px);
}

.game-title {
  font-size: 76px;
  font-weight: bold;
  font-family: Bobby Jones Soft;
}

.third-outer {
  display: grid !important;
  grid-template-columns: auto auto auto;
  float: left;
  width: 20%;
  padding: 10px;
}

.third-inner {
  display: grid !important;
  grid-template-columns: auto auto auto;
  float: left;
  width: 60%;
  padding: 10px;
}

/* Clear floats after the columns */
.row {
  grid-template-columns: 2fr 3fr;
  display: grid;
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
}

.carousel {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
    float: left;
    width: 100%;
    padding: 10px;
    margin: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
}

.game-image {
  max-width: 100%;
}

.carousel-button {
  max-width: 10vh;
  max-height: 5vh;
  position: absolute;
  margin-top: 130px;
  cursor: pointer;
  vertical-align: middle;
  margin-right: auto;
  margin-left: auto;
}

a {
  text-decoration: none;
  vertical-align: middle;
}

a:hover {
  text-decoration: none;
}

.carousel-button > img {
  max-width: 10vh;
  margin: 0 20px;
  cursor: pointer;
}

.star {
  color: yellow;
}

.game-info {
  margin: 0 20px;
  text-align: left;
  padding: 20px;
}

.button {
  background-color: #3b3b3b;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 25px;
  margin-top: 10px;
}
</style>
