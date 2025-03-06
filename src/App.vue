<template>
  <div class="container">
    <div class="content">
      <!-- <SuccessButton @click="FetchMovies">click</SuccessButton> -->
      <AppInfo :allMovies="movies.length" :likedMovies="movies.filter(item => item.like === true).length" />
      <SearchPanel :filter="filter" @searchMovie="searchMovie" @filmsFilter="onFilmsFilter" />
      <div v-if="!movies.length && !loading">
        <h3 class="text-center text-danger">Kinolar Yo'q</h3>
      </div>
      <div v-else-if="loading">
        <h3 class="text-center text-success">Loading...</h3>
      </div>
      <MovieLIst v-else="" @toggleHandle="toggleHandle" @deleteToggle="onDeleteToggle" :movies="filterMovie" />
      <MovieAddForm @addMovie="AddMovie" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      movies: [],
      search: "",
      filter: "allMovies",
      loading: false
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
          return { ...movie, [prop]: !movie[prop] }
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
    },
    async FetchMovies() {
      this.loading= true
      try {
        setTimeout(async() => {
          const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          const newData = data.map((item) => {
            return {
              name: item.title,
              viewers: item.id * 10,
              favorute: false,
              like: false,
              id: item.id
            }
          })
          this.movies = newData
          this.loading = false
        } , 3000)
      } catch (error) {
        alert(error)
      }
    },
  },
  mounted() {
    this.FetchMovies()
  }
}
</script>
<style></style>