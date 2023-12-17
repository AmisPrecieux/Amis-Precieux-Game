<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login">
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
                const response = await axios.post('http://localhost:3000/api/auth/signin', {
                    mail: this.email,
                    password: this.password
                });
                const token = response.data;
                console.log(token.access_token);
                sessionStorage.setItem('token', token.access_token); // Enregistrer le token dans le sessionStorage
                console.log("vous êtes connecté");
                this.checkToken(); // Appel de la méthode pour vérifier si le token est enregistré
            } catch (error) {
                console.error(error);
            }
        },
        async checkToken() {
            const token = sessionStorage.getItem('token');
            if (token) {
                console.log("Le token est enregistré");
                } else {
                console.log("Le token n'est pas enregistré");
            }
        }
    }
}
</script>

<style scoped>
/* Ajoutez ici votre CSS personnalisé pour la page de connexion */
</style>



