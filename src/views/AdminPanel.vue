<template>
  <div>
    <h1>Page d'administration</h1>
    <div>
      <form @submit.prevent="uploadImage">
        <input type="file" ref="fileInput" @change="handleFileChange" />
        <button type="submit">Upload Image</button>
      </form>
      <button @click="tets">test</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AdminPanel',
  methods: {
    handleFileChange() {
      // Récupérer le fichier sélectionné
      this.selectedFile = this.$refs.fileInput.files[0];
    },

    async fetchGameId(gameName) {
      try {
        console.log(gameName);
        const token = sessionStorage.getItem('token');
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
        const token = localStorage.getItem('token');
        const gameId = await this.fetchGameId('Puzzle 6 pièces');
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
    async tets() {
      const token = sessionStorage.getItem('token');
      console.log(JSON.stringify(token))
      await axios.get('http://localhost:3000/api/part/', {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            console.log('Erreur 400: Requête incorrecte');
          } else {
            console.log(error);
          }
        })
    }

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
