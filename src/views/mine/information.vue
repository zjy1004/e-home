<template>
    <div>
      <Header>{{this.$route.name}}</Header>
      个人信息
    </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "information",
    components: {
        Header,
    },
    data() {
      return {
        userData:{

        },
      }
    },
    methods: {
      getUserInfo() {
        this.$axios.get('/user/userInfo.do').then(res => {
          console.log(res.data)
        })
      }
    },
    created() {
      this.getUserInfo()
    }
  }
</script>

<style scoped>

</style>
