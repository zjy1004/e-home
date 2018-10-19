<template>
    <div class="info">
      <Header>{{this.$route.name}}</Header>
      <!--<div style="height: 45px">-->
        <!--<div class="header fixT">-->
           <!--<div class="title-wrap">-->
            <!--<h1>通知早知道</h1>-->
           <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div>
        <div @click="handleContent(item.newsId)" v-for="item in listData" :key="item.id" class="info-item">
          <div class="img-wrap">
            <img src="../../../static/imgs/iconfont_gonggaotongzhi.png" alt="">
          </div>
          <div class="news-wrap">
            <div class="info-title">{{item.title}}</div>
            <div class="info-time">{{item.currentTime}}</div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
    export default {
    components: {
      Footer,
      Header
    },
    name: "index",
    data() {
      return {
        paramsData: {
          type: 2,
        },
        listData: [],
      }
     },
      methods: {
        getNewsList() {
          this.$axios.get('/news/newsList.do',this.paramsData).then(res => {
            if (res.code == 1) {

              this.listData = res.rows
            }
          })
        },
        handleContent(newsId) {
          this.$router.push(`/newsContent/${newsId}`)
        }
      },
      created() {
        this.getNewsList()
      }
    }
</script>

<style scoped lang="scss">
  .info{
    .info-item{
      width: 7.5rem;
      height: 97px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #e5e5e5;
      .img-wrap{
        width: 1.42rem;
        height: 1.52rem;
        position: relative;
        img{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-65%);
        }
      }

      .news-wrap{
        width: 5.68rem;
        height: 1.52rem;
        .info-title{
          font-size: 15px;
          color: #333;
          width: 5.48rem;
          height: 0.8rem;
          margin: 5px auto;
        }
        .info-time{
          margin: 6px auto;
          font-size: 11px;
          color: #666;
          width: 5.48rem;
          height: 0.4rem;
        }
      }
    }
  }

</style>
