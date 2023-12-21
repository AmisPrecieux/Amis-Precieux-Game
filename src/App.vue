<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar">
      <nav>
        <RouterLink to="/">Amis Précieux</RouterLink>
        <RouterLink to="/gamelink">Link game</RouterLink>
        <RouterLink to="/puzzle">Puzzle</RouterLink>
        <RouterLink to="/soundAssociation">Sound Association</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  width: 100%;
  overflow: hidden;
}

.navbar a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
