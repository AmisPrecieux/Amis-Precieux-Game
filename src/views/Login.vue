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
                // Gérer la réponse du serveur ici
                // console.log(token);
            } catch (error) {
                // console.log(token);
                console.error(error);
            }
        }
    }
};
</script>


<style scoped>
/* Ajoutez ici votre CSS personnalisé pour la page de connexion */
</style>
