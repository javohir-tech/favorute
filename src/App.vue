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
      <Pagination :pageNumbers="pageNumbers" :page="page" @togglePage="togglePage" @toggleButton="toggleButton" />
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
import Pagination from './Components/Pagination.vue';
export default {
  components: {
    AppInfo,
    SearchPanel,
    MovieLIst,
    Pagination,
    MovieAddForm
  },
  data() {
    return {
      movies: [],
      search: "",
      filter: "allMovies",
      loading: false,
      limit: 10,
      page: 1,
      pageNumbers: 0,
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
    async AddMovie(newMovie) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newMovie)
      // console.log(response)
      this.movies.push(response.data)
    },
    toggleHandle({ id, prop }) {
      this.movies = this.movies.map(movie => {
        if (movie.id == id) {
          return { ...movie, [prop]: !movie[prop] }
        }
        return movie
      })
    },
    async onDeleteToggle(id) {
      const response =  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      console.log(response)
      this.movies = this.movies.filter(item => item.id !== id)
    },
    searchMovie(newSearch) {
      this.search = newSearch
    },
    onFilmsFilter(filterType) {
      this.filter = filterType
    },
    async FetchMovies() {
      this.loading = true
      try {
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _limit: this.limit,
              _page: this.page
            }
          })
          const newData = response.data.map((item) => {
            return {
              name: item.title,
              viewers: item.id * 10,
              favorute: false,
              like: false,
              id: item.id
            }
          })
          this.pageNumbers = Math.ceil(response.headers['x-total-count'] / 10)
          this.movies = newData
          this.loading = false
        }, 3000)
      } catch (error) {
        alert(error)
      }
    },
    togglePage(page) {
      this.page = page
    },
    toggleButton(button) {
      if (button === "next" && this.page != this.pageNumbers) {
        this.page++
      } else if (button === "back" && this.page != 1) {
        this.page--
      }
    }
  },
  mounted() {
    this.FetchMovies()
  },
  watch: {
    page() {
      this.FetchMovies()
    }
  }
}
</script>
<style></style>