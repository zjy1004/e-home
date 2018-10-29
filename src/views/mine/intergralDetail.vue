<template>
  <div>
    <Header>{{this.$route.name}}</Header>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "intergralDetail",
    components: {
      Header
    },
    data() {
      return {
        intergralData: [],
        params: {
          page: 1,
          rows: 10
        }
      }
    },
    methods: {
      getData() {
        this.$axios.get('/integral/integralList.do?', this.params).then(res => {
          if (res.code == 200) {
            this.intergralData = res.rows
          }
        })
      }
    },
    created() {
      this.getData()
    },
  }
</script>

<style scoped lang="scss">

</style>
