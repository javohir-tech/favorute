<template>
    <div>
        <ul style="list-style: none;">
            <MovieListItem v-for="movie in movies" :kino="movie" :key="movie.id"
                @favourite-toggle="$emit('onFavoruteToggle', movie.id)"
                @delete-toggle="$emit('deleteToggle', movie.id)" @like-toggle="$emit('likeToggle', movie.id)" />
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