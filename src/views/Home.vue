<template>
    <div>
        <button @click="$router.push({ path: '/game-link' })">GameLink</button>
        <button @click="$router.push({ path: '/puzzle' })">Puzzle</button>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>
