<template>
  <div>
    <h1>Page d'administration</h1>
    <div>
    <form @submit.prevent="uploadImage">
      <input type="file" ref="fileInput" @change="handleFileChange" />
      <button type="submit">Upload Image</button>
    </form>
  </div>  </div>
</template>

<script>
import { useAuthStore } from '@/stores/store.js';
export default {
  name: 'AdminPanel',
  methods: {
    handleFileChange() {
      // Récupérer le fichier sélectionné
      this.selectedFile = this.$refs.fileInput.files[0];
    },

    async fetchGameId(gameName) {
            try {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTczNTI2ZDQwNDg2MDk5ZjAyMzc2YzEiLCJtYWlsIjoic3RyaW5nQHN0cmluZy5jb20iLCJpYXQiOjE3MDIwNTY2NDYsImV4cCI6MTcwMjA2MDI0Nn0.jZBSB6LqOPK4htUFU09OhxdKchs-qLO2Prkng-GFBRs";
                const response = await fetch(`http://localhost:3000/name/${gameName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('la', gameId);

                const gameId = response.data.id;
                // Utilisez l'ID du jeu ici
            } catch (error) {
                console.error('Error fetching game ID:', error);
            }
        },

    async uploadImage() {
      // Vérifier si un fichier a été sélectionné
      if (!this.selectedFile) {
        console.error('No file selected');
        console.log('No file selected');
        return;
      }

      // Utiliser FormData pour envoyer le fichier
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      // Utiliser Fetch pour envoyer la requête au serveur
      try {
        const authStore = useAuthStore();
        // const token = authStore.authToken();
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTczNTI2ZDQwNDg2MDk5ZjAyMzc2YzEiLCJtYWlsIjoic3RyaW5nQHN0cmluZy5jb20iLCJpYXQiOjE3MDIwNTY2NDYsImV4cCI6MTcwMjA2MDI0Nn0.jZBSB6LqOPK4htUFU09OhxdKchs-qLO2Prkng-GFBRs";
        const gameId = await this.fetchGameId('Puzzle');
        console.log('Game ID:', gameId);
        await fetch(`/image1/${gameId}`, {
          method: 'PUT',
          body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Image uploaded successfully');
        // Réinitialiser l'input de fichier après l'upload
        this.$refs.fileInput.value = '';
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },
  },
  data() {
    return {
      selectedFile: null,
    };
  },
}
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques à votre page d'administration */
</style>
