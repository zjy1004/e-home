<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div class="content" v-html="htmlData"></div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import cheerio from 'cheerio'
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
          var $ = cheerio.load(res);
          let html = $('.p1_02').html();
          console.log(html);
          this.htmlData = html
        })
      }
    },
    created() {
      this.getHtml()
    }
  }
</script>

<style scoped lang="scss">
.content{
  width: 95%;
  margin: 20px auto;
  /deep/ h1{
    font-size: 24px;
    font-weight: 500;
    color: #000;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  /deep/ h2{
    font-size: 20px;
    font-weight: 500;
    color: #000;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  /deep/ p{
    line-height: 2;
    font-size: 14px;
  }
}
</style>
