<template>
  <div class="container">
    <h1>Page d'administration</h1>
    <div>
      <form @submit.prevent="uploadImage(1)">
        <h3>Puzzle</h3>
        <input type="file" ref="fileInput1" @change="handleFileChange(1)" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
    <div>
      <form @submit.prevent="uploadImage(2)">
        <h3>Image GameLink 1</h3>
        <input type="file" ref="fileInput2" @change="handleFileChange(2)" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
    <div>
      <form @submit.prevent="uploadImage(3)">
        <h3>Image GameLink 2</h3>
        <input type="file" ref="fileInput3" @change="handleFileChange(3)" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
    <div>
      <form @submit.prevent="uploadImage(4)">
        <h3>Image GameLink 3</h3>
        <input type="file" ref="fileInput4" @change="handleFileChange(4)" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
    <div>
      <form @submit.prevent="uploadImage(5)">
        <h3>Image GameLink 4</h3>
        <input type="file" ref="fileInput5" @change="handleFileChange(5)" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
    <button @click="logout">Déconnexion</button>

    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AdminPanel',
  mounted() {
   this.checkLogin();
  },

  methods: {
    handleFileChange(GameNumber) {
      if (GameNumber == 1) {
        this.selectedFile = this.$refs.fileInput1.files[0];
      }
      if (GameNumber == 2) {
        this.selectedFile = this.$refs.fileInput2.files[0];
      }
      if (GameNumber == 3) {
        this.selectedFile = this.$refs.fileInput3.files[0];
      }
      if (GameNumber == 4) {
        this.selectedFile = this.$refs.fileInput4.files[0];
      }
      if (GameNumber == 5) {
        this.selectedFile = this.$refs.fileInput5.files[0];
      }

    },
    logout() {
      sessionStorage.removeItem('token');
      this.$forceUpdate();
      this.$router.push('/loginAdmin');
    },
    checkLogin() {
      const token = sessionStorage.getItem('token');
      if (!token) {
        this.$router.push('/loginAdmin');
      }
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

    async uploadImage(GameNumber) {
      // Vérifier si un fichier a été sélectionné
      console.log(this.selectedFile, GameNumber);
      if (!this.selectedFile) {
        alert('Veuillez sélectionner un fichier');
        this.$refs.fileInput1.value = '';
        this.$refs.fileInput2.value = '';
        this.$refs.fileInput3.value = '';
        this.$refs.fileInput4.value = '';
        this.$refs.fileInput5.value = '';
        console.error('No file selected');
        return;
      }
      // Vérifier si le format du fichier est en PNG
      if (this.selectedFile.type !== 'image/png') {
        alert('Veuillez sélectionner un fichier au format PNG');
        this.$refs.fileInput1.value = '';
        this.$refs.fileInput2.value = '';
        this.$refs.fileInput3.value = '';
        this.$refs.fileInput4.value = '';
        this.$refs.fileInput5.value = '';
        console.error('Invalid file format');
        return;
      }

      // Utiliser FormData pour envoyer le fichier
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      // Utiliser Fetch pour envoyer la requête au serveur
      try {
        const token = sessionStorage.getItem('token');
        // const gameId = await this.fetchGameId('Puzzle 6 pièces');
        if (GameNumber == 1) {
          const gameId = "6578b0ccc125f56f10261eb5";
        }
        else {

        }
        await fetch(`http://localhost:3000/api/game/image${GameNumber}/${gameId}`, {
          method: 'PUT',
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert('l\'image a été téléchargée avec succès');
        // Réinitialiser l'input de fichier après l'upload
        this.$refs.fileInput1.value = '';
        this.$refs.fileInput2.value = '';
        this.$refs.fileInput3.value = '';
        this.$refs.fileInput4.value = '';
        this.$refs.fileInput5.value = '';
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
  watch: {
    $route() {
      this.checkLogin();
    },
    immediate: true
  },
  data() {
    return {
      selectedFile: null,
    };
  },
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  margin-bottom: 20px;
}

input[type="file"] {
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: #d2edd3;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

input[type="file"] {
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #d2edd3;
}
.Icon{
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
