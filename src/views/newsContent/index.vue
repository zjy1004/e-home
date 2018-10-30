<template>
    <div>
      <Header>{{title}}</Header>
      <div class="content-wrap">
        <div class="title">
          <h3>{{contentData.title}}</h3>
        </div>
        <div class="content" v-html="contentData.content">
          {{contentData.content}}
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "index",
    components: {
      Header,
    },
    data() {
      return {
        contentData: {
        },
        title: '',
        type: ''
      }
    },
    methods: {
      getContent() {
        let id = this.$route.params.id;
        this.$axios.get(`/news/newsContent.do?newsId=${id}`).then(res => {
          if (res.code == 1) {
            console.log(res.data)
            this.contentData = res.data;
            this.type = res.data.type;
            this.getType()
          }
        })
      },
      getType() {
        switch (this.type) {
          case 0:
            this.title = '信工新闻眼';
            break;
          case 1:
            this.title = '特色活动';
            break;
          case 2:
            this.title = '通知早知道';
            break;
          case 3:
            this.title = '党建一点通';
            break;
          case 4:
            this.title = '制度建设';
            break;
          case 5:
            this.title = '党员亮身份';
            break;
          case 6:
            this.title = '随时随地学';
            break;
          case 7:
            this.title = '随时随地拍';
            break;
          case 8:
            this.title = '政治学习';
            break;
          default:
            break;
        }
      },
    },
    created() {
      this.getContent()
    },
  }
</script>

<style scoped lang="scss">
.content-wrap{
  margin: 10px 10px;

  .title{
    h3{
      font-size: 24px;
      font-weight: 400;
      color: #000;
      margin-bottom: 10px;
      line-height: 1.2;
    }
  }

  /deep/ img{
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
  /deep/ p {
    line-height: 2;
    font-size: 12px;
    margin: 0 0 10px;
  }
  /deep/ h4{
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.2;

  }
  /deep/ h2{
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.2;

  }
}
</style>
