<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div class="list">
      <div class="list-item">
        <div style="font-size: 16px; ">请选择支付方式</div>
      </div>
    </div>
    <div class="list">
      <div class="list-item" @click="handleWx">
        <div class="img-left"><img src="../../../static/imgs/wx.png" alt=""></div>
        <div class="item-title">微信</div>
        <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
      </div>
    </div>
    <div class="list">
      <div class="list-item" @click="handleZfb">
        <div class="img-left"><img src="../../../static/imgs/zfb.png" alt=""></div>
        <div class="item-title">支付宝</div>
        <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
      </div>
    </div>
    <div class="pay-wrap" v-show="isShow" @click="handleIn">
      <div class="center-wrap">
          <div class="title-wrap">微信支付</div>
          <div class="img-wrap"><img src="../../../static/imgs/alipay.png"></div>
      </div>
    </div>
    <div class="pay-wrap" v-show="isShow2" @click="handleIn">
      <div class="center-wrap">
        <div class="title-wrap">支付宝支付</div>
        <div class="img-wrap"><img src="../../../static/imgs/alipay.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "pay",
    components: {Header},
    data() {
      return{
        isShow: false,
        isShow2: false
      }
    },
    methods: {
      handleWx() {
        this.isShow = true
      },
      handleZfb() {
        this.isShow2 = true
      },
      handleIn() {
        this.isShow = false
        this.isShow2 = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .list{
    width: 100%;
    .list-item{
      width: 100%;
      height: 1.2rem;
      border-bottom: 1.5px solid #e5e5e5;
      display: flex;
      align-items: center;
      position: relative;
      .img-left{
        height: 0.8rem;
        width: 0.8rem;
        margin-left: 10px;
        margin-right: 10px;
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .item-title{
        font-size: 18px;
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

    .pay-wrap{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.6);
      z-index: 998;

      .center-wrap{
        width: 6rem;
        height: 6.8rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .title-wrap{
          width: 100%;
          height: 0.8rem;
          font-size: 20px;
          line-height: 2;
          text-align: center;
          color: #222;
          background: #fff;
        }
        .img-wrap{
          width: 100%;
          height: 6rem;
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
    }


</style>
