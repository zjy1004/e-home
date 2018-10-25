<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div class="item" v-for="(item, index) in listData" :key="index">
      <div class="item-wrap">
        <div class="top">
          <div class="img-wrap"><img :src="item.header" alt=""></div>
          <div class="center">
            <div class="nickname">{{item.username}}</div>
            <div class="time"><i class="iconfont icon-shijian"></i><span>{{item.currentTime}}</span><i class="iconfont icon-gonggao"></i><span>公开</span></div>
          </div>
          <div class="right"><img src="../../../static/imgs/党员互动icon.png"></div>
        </div>
        <div class="middle">{{item.content}}</div>
        <div @click="handleReply(item.forumId)" class="bottom flr clearfix"><i class="iconfont icon-xiaoxi1"></i><span>回复</span></div>
      </div>
    </div>
    <div class="add" @click="handleAdd" v-show="isShow"><img src="../../../static/imgs/发布btn.png"></div>
    <div class="issue-wrap" v-show="!isShow">
      <textarea name="" id="textarea" cols="50" rows="7" v-model="issue.content"></textarea>
      <div class="btn-wrap">
        <div @click="handleIssue" class="btn-issue">发布</div>
        <div class="btn-cancel" @click="handleCancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from '@/components/Header'
  export default {
    name: "index",
    components: {
      Header
    },
    data() {
      return{
        isShow: true,
        params: {
          type: 0,
          page: 1,
          rows: 10,
          cates: 0
        },
        listData: [],
        issue: {
          content: ''
        }

      }
    },
    methods:{
        getForum() {
          this.$axios.get('/forum/forumList.do?', this.params).then(res => {
            if (res.code == 1) {
             this.listData = res.rows
            }
          })
        },
      handleReply() {

      },
      handleAdd() {
          this.isShow = false
      },
      handleCancel() {
          this.isShow = true
      },
      handleIssue() {
          this.$axios.post('/forum/saveForum.do', this.issue).then(res => {
            if (res.code === 1) {
              this.issue.content = res.data.content;
              this.isShow = true;
              this.getForum()
            }
          })
      }
    },
    created() {
      this.getForum()
    }
  }
</script>

<style scoped lang="scss">
.item{
  width: 100%;
  height: 2.83rem;
  border-bottom: 10px solid #efeff4;
  .item-wrap{
    color: #444;
    padding: 16px;
  }
  .top{
    height: 0.92rem;
    display: flex;
    .img-wrap{
      height: 0.667rem;
      width: 0.667rem;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .right{
      width: 1.32rem;
      height: 0.52rem;
      margin-left: 60px;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
      }
  }
 .top .center{
    width: 3.45rem;
    height: 0.8rem;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 0;

    .nickname{
      font-size: 18px;
      color: #333;
      line-height: 20px;
    }
    .time{
      font-size: 12px;
      line-height: 20px;
      color: #444;
    }
    /deep/ i{
      font-size: 12px;
      margin-right: 2px;
    }
  }
  .middle{
    font-size: 16px;
    padding: 10px 0;
  }
  .bottom{
    width: 1.3rem;
    font-size: 14px;
    text-align: right;
    line-height: 21.5px;
    height: 21.5px;
    /deep/ i{
      font-size: 18px;
      margin-right: 5px;
    }
  }
}
  .add{
    width: 1.2rem;
    height: 1.2rem;
    position: fixed;
    right: 10px;
    bottom: 50px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .issue-wrap{
    width: 100%;
    height: 3.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f1f1f1;
    text-align: center;
    z-index: 998;
    textarea{
      outline-color: #fff;
      margin: 10px 0;
    }
    .btn-wrap{
      width: 6.536rem;
      height: 0.6rem;
      margin: 0 auto;
      display: flex;
      margin-top: -5px;
      justify-content: space-between;
      .btn-issue{
        border-radius: 4px;
        border: 1px solid transparent;
        font-size: 12px;
        line-height: 26px;
        text-align: center;
        background: #ef473a;
        color: #fff;
      }
      .btn-cancel{
        border-radius: 4px;
        border: 1px solid transparent;
        font-size: 12px;
        line-height: 26px;
        text-align: center;
        background: #fff;
      }

    }
  }
</style>
