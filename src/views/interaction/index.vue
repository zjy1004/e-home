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
        <div class="bottom"><span @click="handleReply(item.forumId)"><i class="iconfont icon-xiaoxi1"></i>回复</span></div>
      </div>
    </div>
    <div style="height:3.21rem;" v-show="!isShow"></div>
    <div class="issue-wrap" v-show="!isShow">
        <textarea name="" id="textarea" v-model="issue.content"></textarea>
        <div class="btn-wrap">
          <div @click="handleIssue" class="btn-issue">发布</div>
          <div @click="handleCancel" class="btn-cancel">取消</div>
        </div>
    </div>
    <div class="add" @click="handleAdd" v-show="isShow"><img src="../../../static/imgs/发布btn.png"></div>
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
<style>
  /*html{*/
    /*height: 100%;*/
    /*overflow: hidden;*/
  /*}*/
  /*body{*/
    /*height: 100%;*/
    /*overflow: hidden;*/
  /*}*/

</style>

<style scoped lang="scss">
.item{
  width: 100%;
  height: auto;
  box-sizing: border-box;
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
    font-size: 14px;
    height: 21.5px;
    line-height: 21.5px;
    text-align: right;
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
    height:3.21rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f1f1f1;
    padding: 10px;
    box-sizing: border-box;
    z-index: 9999;
    textarea{
      outline-color: #fff;
      color: #111;
      width: 100%;
      height: 100px;
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
    }


    .btn-wrap{
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      .btn-issue{
        padding: 1px 3px;
        border-radius: 4px;
        border: 1px solid transparent;
        font-size: 12px;
        line-height: 26px;
        width: 28px;
        height: 30px;
        text-align: center;
        background: #ef473a;
        color: #fff;
      }
      .btn-cancel{
        padding: 1px 3px;
        border-radius: 4px;
        border: 1px solid transparent;
        font-size: 12px;
        line-height: 26px;
        width: 28px;
        height: 30px;
        color: #444;
        text-align: center;
        background: #f8f8f8;;
      }
    }
  }
</style>
