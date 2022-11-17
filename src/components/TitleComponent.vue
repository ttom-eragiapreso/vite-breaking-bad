
<script>
export default {
  name: 'TitleComponent',
  props: {
    title: String
  }
}
</script>

<template>
  
  <h1 class="text-center py-5">{{title}}</h1>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;


</style>