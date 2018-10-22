<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div class="log">
      <div class="img-wrap"><img src="../../../static/imgs/reviewing.png"></div>
    </div>
    <div class="text-wrap">正在审核中</div>
    <router-link to="/life" class="btn-wrap">
      <button>
        关闭
      </button>
    </router-link>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header,
    },
  }
</script>

<style scoped lang="scss">
  .log{
    width: 100%;
    margin-top: 50px;
    .img-wrap{
      width: 1.82rem;
      height: 1.82rem;
      margin: 0 auto;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .text-wrap{
    text-align: center;
    font-size: 14px;
    color: #666;
    width: 100%;
    margin-top: 10px;
  }
  .btn-wrap{
    width: 100%;
    height: 0.8rem;
    text-align: center;
    display: block;
    button{
      width: 60%;
      height: 40px;
      line-height: 40px;
      background: #c50206;
      font-size: 16px;
      color: #fff;
      border-radius: 10px;
      margin-top: 100px;
      border: 1px solid #c50206;

    }
  }

</style>
