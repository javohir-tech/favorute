<template >
    <div>
        <div>
            <input v-model="search" @input="searchMovie"  type="text" class="form-control py-3 px-4" placeholder="Qidirish">
        </div>
        <FilterPanel :filter="filter" @filmsFilter="onFilmsFilter"/>
    </div>
</template>
<script>
import FilterPanel from './FilterPanel.vue';

export default {
    components:{
        FilterPanel
    },
    data(){
        return {
            search: ""
        }
    },
    methods:{
        searchMovie(){
            this.$emit('searchMovie' , this.search)
        },
        onFilmsFilter(filterType){
            this.$emit('filmsFilter', filterType)
        }
    },
    props:{
        filter:{
            type:String
        }
    }
}
</script>
<style >
    
</style>