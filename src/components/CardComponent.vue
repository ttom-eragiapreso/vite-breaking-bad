
<script>
export default {
  name: 'CardComponent',
  props: {
    img: String,
    name: String, 
    category: String,
    status: String
  }
}
</script>

<template>
  
<div class="em-card col">

  <div class="img-container">
    <img :src="img" :alt="name">
  </div>
  <h2>{{name}}</h2>
  <h2>{{category}}</h2>
  <h2>{{status}}</h2>

</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;



</style>