<template>
  <div>
    <Header>{{this.$route.name}}</Header>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header,
    },
  }
</script>

<style scoped>

</style>
