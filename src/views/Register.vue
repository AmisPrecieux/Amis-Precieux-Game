<template>
  <form @submit="signup" class="register-form">
    <h1>Inscription</h1>
    <label for="mail">Email</label>
    <input type="text" id="mail" v-model="mail" required>

    <label for="password">Mot de passe</label>
    <input type="password" id="password" v-model="password" required>

    <button type="submit">Inscription</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mail: '',
      password: ''
    };
  },
  methods: {
    signup() {
      // Make a POST request to the signup route
      axios.post('http://localhost:3000/api/auth/signup', {
        mail: this.mail,
        password: this.password
      })
        .then(response => {
          // Handle the response data
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  margin-bottom: 20px;
  width: 300px;
}

button {
  padding: 10px 20px;
  background-color: #d2edd3;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  background-color: #d2edd3;
}
</style>
