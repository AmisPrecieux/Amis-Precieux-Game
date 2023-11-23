<template>
    <div class="puzzle" id="puzzle">
      <div v-show="playing"><Board ref="board" /></div>
      <div v-show="!playing"><OptionsPane ref="optionsPane" @gameStart="start" /></div>
      
      </div>
  </template>
  
  <script>
  import Board from '../components/Board.vue'
  import OptionsPane from '../components/OptionsPane.vue'
  
  export default {
    name: 'puzzle',
    components: {
      Board,
      OptionsPane
    },
  
    data () {
      return {
        playing: false
      }
    },
  
    methods: {
      start (...args) {
        this.playing = true
        this.$refs.board.start(...args)
      }
    }
  }
  </script>
  
  <style>
  .puzzle {
    text-align: center;
    margin-top: 50px;
  }


</style>
  