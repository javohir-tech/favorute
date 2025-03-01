<template>
    <div>
        <div class="btn-group mt-4">
            <button @click="$emit('filmsFilter', 'allMovies')" class="btn"
                :class="[filter === 'allMovies' ? 'btn-success' : 'btn-outline-success']">
                Barcha Kinolar
            </button>
            <button @click="$emit('filmsFilter', 'sevimli')" class="btn"
                :class="[filter === 'sevimli' ? 'btn-success' : 'btn-outline-success']">
                Sevimli Kinolar
            </button>
            <button @click="$emit('filmsFilter', 'mashhur')" class="btn"
                :class="[filter === 'mashhur' ? 'btn-success' : 'btn-outline-success']">
                Mashhur Kinolar
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        filter: {
            type: String
        }
    }
}
</script>
<style></style>