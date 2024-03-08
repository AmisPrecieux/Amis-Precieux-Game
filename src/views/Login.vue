<template>
    <div>
        <form @submit.prevent="login">
            <h1>Connexion</h1>
            <label for="email">Email:</label>
            <input type="string" id="email" v-model="email" required>
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { checkLogin } from '../methods';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('https://api.amisprecieux.fr/api/auth/signin', {
                    mail: this.email,
                    password: this.password
                });
                const token = response.data;
                sessionStorage.setItem('token', token.access_token); // Enregistrer le token dans le sessionStorage
                console.log("vous êtes connecté");
                this.$router.push('/adminPanel'); // Redirect to adminPanel
                this.$forceUpdate();
                console.log(token);
                this.checkToken(); // Appel de la méthode pour vérifier si le token est enregistré
            } catch (error) {
                console.error(error);
            }
        },
        async checkToken() {
            const token = sessionStorage.getItem('token');
            if (token) {
                checkLogin()
                console.log("Le token est enregistré");
                } else {
                console.log("Le token n'est pas enregistré");
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    margin-bottom: 10px;
}

input {
    padding: 10px;
    margin-bottom: 10px;
    width: 200px;
}

button {
    padding: 10px 20px;
    background-color: #d2edd3;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>
../features/methods