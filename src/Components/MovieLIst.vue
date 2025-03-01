<template>
    <div>
        <ul style="list-style: none;">
            <MovieListItem v-for="movie in movies" :kino="movie" :key="movie.id"
                @toggleHandle="$emit('toggleHandle', $event)"
                @delete-toggle="$emit('deleteToggle', movie.id)" />
        </ul>
    </div>
</template>
<script>
import MovieListItem from './MovieListItem.vue';

export default {
    components: {
        MovieListItem
    },
    props: {
        movies: {
            type: Array,
            required: true
        }
    },

}
</script>
<style></style>