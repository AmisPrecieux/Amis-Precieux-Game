
<template>
    <div class="sound-association">
        <h1>Quelle animal fait ce son ?</h1>
        <audio ref="audioPlayer" :src="audioSrc"></audio>
        <button @click="playAudio" class="play-audio-button">Jouer le son</button>
        <table class="animals-container">
            <td v-for="(animal, index) in animals" :key="index" class="animal-container">
                <img :src="animal.image" @click="checkAnswer(animal)" class="animal-image">
            </td>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animals: [
                { name: 'baleine', image: '/src/assets/baleine.jpg', sound: '/src/assets/baleine.mp3' },
                { name: 'dauphin', image: '/src/assets/dauphin.jpg', sound: '/src/assets/dauphin.mp3' },
                { name: 'phoque', image: '/src/assets/phoque.jpg', sound: '/src/assets/phoque.mp3' }
            ],
            currentAnimal: null
        }
    },
    computed: {
        audioSrc() {
            return this.currentAnimal ? this.currentAnimal.sound : null
        }
    },
    methods: {
        playAudio() {
            this.$refs.audioPlayer.play()
        },
        checkAnswer(animal) {
            if (animal === this.currentAnimal) {
                alert('Correct!')
            } else {
                alert('Incorrect!')
            }
        },
        getRandomAnimal() {
            const index = Math.floor(Math.random() * this.animals.length)
            return this.animals[index]
        }
    },
    mounted() {
        this.currentAnimal = this.getRandomAnimal()
    }
}
</script>

<style scoped>
.sound-association {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.animal-container {
    margin: 20px;
}

.animal-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.animal-image:hover {
    transform: scale(1.1);
    border-color: #000;
}

.play-audio-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.play-audio-button:hover {
    background-color: #3e8e41;
}

.animals-container {
    justify-content: center;
}

</style>
