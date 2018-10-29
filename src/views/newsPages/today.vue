<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import cheerio from 'cheerio'
  import getUrl from '@/getUrl'
  export default {
    components:{
      Header,
    },
    data() {
      return{
        content: '',
        params: {
          url: ''
        }
      }
    },
    methods: {
      getData() {
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        day = day >= 10 ? day + "" : "0" + day;
        month = month >= 10 ? month + "" : "0" + month;
        this.params.url = getUrl(month, day)
        this.$axios.get('/proxy/proxy.do', this.params).then(res => {
          console.log(res);
          var $ = cheerio.load(res);
          this.content = $('.p1_02').html();
        })

      }
    },
    created() {
      this.getData()
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
  }
  /deep/ p{
    line-height: 2;
    font-size: 14px;
    padding: 10px;
  }
}
</style>
