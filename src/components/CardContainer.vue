
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
  


<div class="em-container p-3 bg-light">
  <div class="search-length d-flex align-items-center p-3 fs-3 mb-4">Risultati trovati: {{store.searchLength}}</div>
  <div class="container-fluid">

    <div class="row row-cols-6 gap-3 d-flex justify-content-center">
    <CardComponentVue
    v-for="character in store.apiResponse"
    :key="character.char_id"
    :img="character.img"
    :name="character.name"
    :category="character.category"
    :status="character.status"
    />
  </div>

  </div>
  
</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-container {
  width: 85%;
  margin: 0 auto;
}

.search-length {
  background-color: #21252a;
  color: white;
  height: 50px;
}

</style>