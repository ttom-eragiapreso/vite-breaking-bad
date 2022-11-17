
<script>
import CardComponentVue from './CardComponent.vue';
import {store} from '../data/store'
export default {
  name: 'CardContainer',
  components:{
    CardComponentVue
  },
  data(){
    return {
      store
    }
  }
}
</script>

<template>
  
<div class="search-length d-flex align-items-center px-3 fs-3">Risultati trovati: {{store.searchLength}}</div>

<div class="container">Card Container

<CardComponentVue/>

</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


.search-length {
  background-color: #21252a;
  color: white;
  height: 50px;
}

</style>