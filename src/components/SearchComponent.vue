
<script>
import {store} from '../data/store'
export default {
  name: 'SearchComponent',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  
  <div class="container">
    <div class="row">

      <select v-model="store.searchCategory"
      @change="$emit('newSearch')"
      name="category" 
      id="category" 
      class="p-3 mb-4 col-auto">
        <option value="">Select Category</option>
        <option value="Breaking Bad">Breaking Bad</option>
        <option value="Better Call Saul">Better Call Saul</option>
      </select>

    </div>
  
  </div>
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


</style>