<template>
  <form @submit="signup">
    <label for="mail">Username:</label>
    <input type="text" id="mail" v-model="mail" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password" required>
    
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
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
      fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mail: this.mail,
          password: this.password
        })
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    }
  }
};
</script>
