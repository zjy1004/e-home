<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div class="banner">
      <div class="score">66.8</div>
    </div>
    <router-link to="/intergralDetail" class="detail">
      <div class="detail-item">
        <div class="img-left" style="background: url('../../../static/imgs/量化积分icon.png') no-repeat"></div>
        <div class="item-title">积分明细</div>
        <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
      </div>
    </router-link>
    <div class="rule" style="background: #eeeeee;">
      <div class="title">积分规则</div>
      <div class="icon"><img src="../../../static/imgs/wenhao.png" alt=""></div>
    </div>
    <div class="rule-list">
      <div class="title">登陆APP</div>
      <div class="icon">5</div>
    </div>
    <div class="rule-list">
      <div class="title">完善个人信息</div>
      <div class="icon">2</div>
    </div>
    <div class="rule-list">
      <div class="title">查看积分</div>
      <div class="icon">1</div>
    </div>
    <div class="rule-list">
      <div class="title">按时缴纳党费</div>
      <div class="icon">10</div>
    </div>
    <div class="rule-list">
      <div class="title">查看通知</div>
      <div class="icon">2</div>
    </div>
    <div class="rule-list">
      <div class="title">了解学院工作状态</div>
      <div class="icon">5</div>
    </div>
    <div class="rule-list">
      <div class="title">上交思想汇报经审核通过</div>
      <div class="icon">5</div>
    </div>
    <div class="rule-list">
      <div class="title">主动学习相关文件</div>
      <div class="icon">10</div>
    </div>
    <div class="rule-list">
      <div class="title">认真撰写心得总结并上交，经审核通过</div>
      <div class="icon">5</div>
    </div>
    <div class="rule-list">
      <div class="title">提交个人总结，并参与评议</div>
      <div class="icon">2</div>
    </div>
    <div class="rule-list">
      <div class="title">积极参与互动</div>
      <div class="icon">5</div>
    </div>
    <div class="rule-list">
      <div class="title">学习党建知识</div>
      <div class="icon">5</div>
    </div>
    <div class="rule-list">
      <div class="title">学习党史</div>
      <div class="icon">10</div>
    </div>
    <div class="rule-list">
      <div class="title">创先争优事迹</div>
      <div class="icon">10</div>
    </div>
    <div class="rule-list">
      <div class="title">学党章，学习近平总书记系列讲话</div>
      <div class="icon">10</div>
    </div>
    <div class="rule-list">
      <div class="title">用镜头记录两学一做过程中令人感动的人和事</div>
      <div class="icon">3</div>
    </div>
    <div class="rule-list">
      <div class="title">关注并积极参与特色活动</div>
      <div class="icon">5</div>
    </div>
    <div class="rule-list">
      <div class="title">制度化、常态化建设</div>
      <div class="icon">5</div>
    </div>

    <div style="height: 45px;">
      <div class="fixB" style="height: 45px; width: 100%; background: #efeff4">

      </div>
    </div>

  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "intergral",
    components: {
      Header
    },
  }
</script>

<style scoped lang="scss">
.banner{
  width: 100%;
  height: 2.9rem;
  background: url("../../../static/imgs/jifen.png") no-repeat;
  background-size: 100%;
  -webkit-background-size: 100%;
  margin-top: -1px;
  position: relative;
  .score{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #fff;
  }
}
.detail{
  width: 100%;
  .detail-item{
    width: 100%;
    height: 54px;
    border-bottom: 1.5px solid #e5e5e5;
    border-top: 1.5px solid #e5e5e5;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 5px;
    .img-left{
      height:32px;
      width: 32px;
      margin-left: 10px;
      margin-right: 10px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
    }
    .item-title{
      font-size: 16px;
      color: #666;
    }
    .img-right{
      height: 13px;
      width: 8px;
      position: absolute;
      right: 20px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
    }
  }
}
  .rule{
    width: 100%;
    height: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title{
      font-size: 14px;
      color: #444;
      margin-left: 11px;

    }
    .icon{
      width: 0.36rem;
      height: 0.36rem;
      margin-right: 10px;
      img{
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
.rule-list{
  width: 100%;
  height: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid #eee;
  .title{
    font-size: 14px;
    color: #999;
    margin-left: 11px;
  }
  .icon{
    text-align: right;
    width: 0.36rem;
    height: 0.36rem;
    margin-right: 15px;
    color: red;
    font-size: 14px;
  }
}
</style>
