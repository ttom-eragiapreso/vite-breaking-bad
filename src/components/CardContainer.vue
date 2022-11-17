
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

<div class="container p-3">


  <div class="row row-cols-5">
    <CardComponentVue
    v-for="(character, index) in store.apiResponse"
    :key="index"
    :img="character.img"
    :name="character.name"
    :category="character.category"
    :status="character.status"
    />
  </div>

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