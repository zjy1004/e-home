<template>
  <div>
    <Header>{{this.$route.name}}</Header>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "intergral",
    components: {
      Header
    },
  }
</script>

<style scoped>

</style>
