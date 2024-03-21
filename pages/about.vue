<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto aperiam necessitatibus ab in amet
            quibusdam sequi minima iure facilis?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto aperiam necessitatibus ab in amet
            quibusdam sequi minima iure facilis?
        </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/EUR')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>