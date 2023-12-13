<template>
    <div>
        <h1>Inscription</h1>
        <form @submit.prevent="signup">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" v-model="password" required>
            <button type="submit">S'inscrire</button>
        </form>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async signup() {
            if (!this.email || !this.password) {
                return alert("Vous devez renseigner l'email et le mot de passe");
            }

            try {
                const response = await fetch("http://localhost:3000/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                    
                });

                if (response.ok) {
                    alert("Compte créé");
                }
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(`ate : ${errorText}`);
                    console.log(response);
                    console.log(response.text());
                }
                else {
                    console.log(response);
                    throw new Error("Erreur lors de la création du compte");
                }
            } catch (error) {
                alert(error);
            }
        }
    }
};
</script>
 