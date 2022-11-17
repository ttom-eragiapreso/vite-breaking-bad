
<script>
import TitleComponentVue from './components/TitleComponent.vue';
import CardComponentVue from './components/CardComponent.vue';
import SearchComponentVue from './components/SearchComponent.vue';
import CardContainerVue from './components/CardContainer.vue';
import axios from 'axios';
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
      apiUrl: 'https://www.breakingbadapi.com/api/characters'
    }
  },

  methods: {
    callApi(url){
      axios.get(url)
      .then( response => {
        console.log(response.data)
      })
      .catch( error => {
        console.log(error)
      })
    }
  },

  mounted(){
    this.callApi(this.apiUrl)
  }
}
</script>

<template>
  <div class="container">
    <TitleComponentVue/>
    <SearchComponentVue/>
    <CardContainerVue/>
  </div>

</template>

<style lang="scss">
@use './styles/general.scss' as *;


</style>