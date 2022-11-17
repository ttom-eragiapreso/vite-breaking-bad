
<script>
import CardComponentVue from './CardComponent.vue';
export default {
  name: 'CardContainer',
  components:{
    CardComponentVue
  }
}
</script>

<template>
  
<div class="container">Card Container

<CardComponentVue/>

</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


</style>