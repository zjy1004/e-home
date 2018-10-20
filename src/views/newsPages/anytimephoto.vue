<template>
  <div class="photo">
    <Header>{{this.$route.name}}</Header>
    <router-link :to="{path: '/newsContent/'+item.newsId}" v-for="item in listData" :key="item.id" class="item-wrap fll clearfix">
      <div class="item">
        <div class="img-wrap"><img :src="item.pic"></div>
        <div class="title-warp">{{item.title}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "anytimephoto",
    components: {
      Header,
    },
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
.item-wrap{
  width: 3.75rem;
  height: 3.4rem;
  display: block;
  .item{
    width: 3.1rem;
    height: 3.1rem;
    margin: 15px;
    .img-wrap{
      width: 100%;
      height: 2.34rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .title-warp{
      width: 100%;
      font-size: 13px;
      line-height: 1.5;
      color: #666;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;

    }
  }
}
</style>
