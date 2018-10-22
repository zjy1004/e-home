<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div v-html="htmlData"></div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components:{
      Header,
    },
    data() {
      return{
        htmlData: ''
      }
    },
    methods: {
      getHtml() {
        this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70508%2Findex.html').then(res => {
          // var cheerio = require('cheerio');
          // var $ = cheerio.load(res.data);
          // let html = $('.p1_02').html();
          // this.htmlData = html
        })
      }
    },
    created() {
      this.getHtml()
    }
  }
</script>

<style scoped>

</style>
