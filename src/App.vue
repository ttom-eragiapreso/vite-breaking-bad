
<script>
import TitleComponentVue from './components/TitleComponent.vue';
import CardComponentVue from './components/CardComponent.vue';
import SearchComponentVue from './components/SearchComponent.vue';
import CardContainerVue from './components/CardContainer.vue';
import axios from 'axios';
import {store} from '../src/data/store'
export default {
  name: 'App',
  components: {
    TitleComponentVue,
    CardComponentVue,
    SearchComponentVue,
    CardContainerVue
  },
  data(){
    return {
      apiUrl: 'https://www.breakingbadapi.com/api/characters',
      store
    }
  },

  methods: {
    callApi(url){
      axios.get(url)
      .then( response => {
         store.apiResponse = response.data
         store.searchLength = response.data.length
      })
      .catch( () => {
        console.log("Errore")
      })
    }
  },

  mounted(){
    this.callApi(this.apiUrl)
  }
}
</script>

<template>

    <TitleComponentVue title="Breaking Bad API"/>
    <SearchComponentVue/>
    <CardContainerVue/>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

body {
  background-color: $primary-bg-color;
  color: white;
}

</style>