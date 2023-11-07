<template>
  <form id="optionsForm" @submit.prevent="start">
    <img :src="image" v-if="image">
    <div>
      <button v-if="image">Start</button>
    </div>
  </form>
</template>

<script>
import image from "../assets/Baleine_Puzzle.jpg"

export default {
  data () {
    return {
      image: image,
      size: {
        horizontal: 3,
        vertical: 3
      }
    }
  },

  methods: {
     /**
     * Start the game by emitting the event.
     */
    start () {
      this.$emit('gameStart', {
        image: this.image,
        size: this.size
      })
    },

    /**
     * Reset the options.
     */
    reset () {
      this.image = null
      document.querySelector('#optionsForm').reset()
    }
  }
}
</script>

<style scoped>
img {
  border: 1px solid #ccc;
  margin-bottom: 8px;
  max-width: 400px;
  max-height: 400px;
  min-width: 200px;
  min-height: 200px;
}


button {
  -webkit-appearance: none;
  padding: 6px 12px;
  background: #1ca76a;
  color: #fff;
  border-radius: 3px;
  border: 0;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
}

</style>
