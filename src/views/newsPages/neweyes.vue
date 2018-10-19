<template>
    <div>
      <Header>{{this.$route.name}}</Header>
      <NewsList></NewsList>
    </div>
</template>

<script>
  import Header from '@/components/Header'
  import NewsList from '@/components/NewsList'
  export default {
    components:{
      Header,
      NewsList
    },
  }
</script>

<style scoped>

</style>
