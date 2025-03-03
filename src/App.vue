<template>
  <div class="container">
    <div class="content">
      <AppInfo :allMovies="movies.length" :likedMovies="movies.filter(item => item.like === true).length" />
      <SearchPanel :filter="filter" @searchMovie="searchMovie" @filmsFilter="onFilmsFilter" />
      <MovieLIst @toggleHandle="toggleHandle" @deleteToggle="onDeleteToggle" :movies="filterMovie" />
      <MovieAddForm @addMovie="AddMovie" />
    </div>
  </div>
</template>

<script>
import AppInfo from './Components/AppInfo.vue'
import MovieAddForm from './Components/MovieAddForm.vue';
import MovieLIst from './Components/MovieLIst.vue';
import SearchPanel from './Components/SearchPanel.vue'
export default {
  components: {
    AppInfo,
    SearchPanel,
    MovieLIst,
    MovieAddForm
  },
  data() {
    return {
      movies: [
        {
          name: "Taxtlar O'yini",
          viewers: 1234,
          like: false,
          favorute: false,
          id: 1
        },
        {
          name: "Titanlar Hujumi",
          viewers: 12934,
          like: true,
          favorute: true,
          id: 2
        }
      ],
      search: "",
      filter: "allMovies"
    }
  },
  computed: {
    filterMovie() {
      return this.movies
        .filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
        .filter(item => {
          if (this.filter === "sevimli") {
            return item.like === true
          } else if (this.filter === "mashhur") {
            return item.favorute === true
          }
          return true 
        })
    }
  },
  methods: {
    AddMovie(newMovie) {
      this.movies.push(newMovie)
    },
    toggleHandle({ id, prop }) {
      this.movies = this.movies.map(movie => {
        if (movie.id == id) {
         return  {...movie , [prop] : !movie[prop]}
        }
        return movie
      })
    },
    onDeleteToggle(id) {
      this.movies = this.movies.filter(item => item.id !== id)
    },
    searchMovie(newSearch) {
      this.search = newSearch
    },
    onFilmsFilter(filterType) {
      this.filter = filterType
    }
  }
}
</script>
<style></style>