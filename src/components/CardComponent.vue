
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
  
<div class="em-card col"
v-if="name != undefined"
>

  <div class="img-container w-100">
    <img :src="img" :alt="name">
  </div>
  <h2 class="text-center">{{name}}</h2>
  <h2 class="text-center text-muted fs-4">{{category}}</h2>
  <h2 class="text-center text-muted fs-4">{{status}}</h2>

</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

.em-card {
  background-color: $primary-bg-color;
  padding: 12px;
}

.img-container {
  padding: 10px;
}

</style>