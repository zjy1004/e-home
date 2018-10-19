<template>
  <div>
    <Header>{{this.$route.name}}</Header>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "pay",
    components: {
      Header
    },
  }
</script>

<style scoped>

</style>
