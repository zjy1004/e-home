<template>
    <div class="newslist">
        <div @click="handleContent(item.newsId)" class="list-item"  v-for="item in listData" :key="item.id">
          <div class="img-wrap">
            <img :src="item.pic" alt="">
          </div>
          <div class="news-wrap">
            <div class="news-title">{{item.title}}</div>
            <div class="nes-bottom">
             <div class="time">
              {{item.currentTime}}
             </div>
              <div class="look">
                <i class="iconfont icon-eye"></i>
                <span style="margin-right: 5px">{{item.count}}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NewsList",
    data() {
      return {
        params: {
          type: '',
          page: 1,
          rows: 10
        },
        listData: []
      }
    },
    methods: {
      getNewsList() {
        this.$axios.get('/news/newsList.do',this.params).then(res => {
          if (res.code == 1) {
            this.listData = res.rows
          }
        })
      },
      handleContent(newsId) {
        this.$router.push(`/newsContent/${newsId}`)
      }
    },
    created () {
      this.params.type = this.$route.meta.type;
      this.getNewsList()
    },
  }
</script>

<style scoped lang="scss">
  .list-item{
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #e5e5e5;
    .img-wrap{
      width: 1.6rem;
      height: 1.6rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .news-wrap{
      width: 5.3rem;
      height: 1.6rem;
      .news-title{
        font-size: 16px;
        color: #333;
        width: 5.3rem;
        height: 1rem;
        line-height: 1.5;
        font-weight: 500;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .nes-bottom{
        width: 5.3rem;
        height: 0.3rem;
        padding-top: 15px;
        font-size: 10px;
        color: #666;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time{}
        .look{
          font-size: 10px;
        }
        .iconfont{
          padding-right: 5px;
          font-size: 14px;
        }
      }
    }
  }
</style>
