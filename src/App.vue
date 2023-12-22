<template>
  <header>
    <div class="navbar">
      <nav>
        <RouterLink to="/">Amis Précieux</RouterLink>
        <a href="https://amisprecieux.fr">Boutique</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  data() {
    return {
      isLogin: false
    }
  },
  mounted() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      const token = sessionStorage.getItem('token')
      if (token) {
        this.isLogin = true
      }
    }
  },
  watch: {
    $route() {
      this.checkLogin()
    },
    immediate: true
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  overflow: hidden;
  position: fixed;
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
  background-color: #4caf50;
  color: white;
}
.Icon {
  width: 25px;
  height: 25px;
}

.logout {
  background-color: #d2edd3;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  right: 10px;
  float: right;
}
</style>
