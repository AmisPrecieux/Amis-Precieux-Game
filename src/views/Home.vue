<template>
  <div class="home">
    <div class="row">
      <div class="column">
        <div class="game-info" v-if="currentItem" :key="currentItem._id">
          <h1 class="game-title">{{ currentItem.Name }}</h1>
          <h2 style="font-weight: bold">
            Difficulté :
            <template v-for="star in 5" :key="star">
              <img
                :src="
                  star <= currentItem.Difficulty ? '/images/StarFull.jpg' : '/images/StarEmpty.jpg'
                "
                class="star"
              />
            </template>
          </h2>
          <p>{{ currentItem.Description }}</p>
        </div>
      </div>
      <div class="column">
        <div class="carousel third-outer">
          <a @click="prevItem" class="carousel-button">
            <img src="/images/ArrowL.png" alt="Previous" />
          </a>
        </div>
        <div class="carousel third-inner">
          <div v-if="currentItem" :key="currentItem._id">
            <img
              class="game-image"
              v-if="currentItem"
              :src="currentItem.image1"
              :alt="currentItem.Name"
            />
            <RouterLink :to="'/' + currentItem.slug">
              <button class="button">Jouer</button>
            </RouterLink>
          </div>
        </div>
        <div class="carousel third-outer
        +
        ">
          <a @click="nextItem" class="carousel-button">
            <img src="/images/ArrowR.png" alt="Next" />
          </a>
        </div>
      </div>
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
      data: [
      ],
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
    }
  },
  mounted() {
    axios
      .get('https://api.amisprecieux.fr/api/game')
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

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
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
.row:after {
  content: '';
  display: table;
  clear: both;
}

.carousel {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.game-image {
  max-width: 100%;
  border-radius: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
  background-color: #285986;
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
