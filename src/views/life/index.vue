<template>
    <div>
      <Header>{{this.$route.name}}</Header>
      <div class="banner">
        <img src="../../../static/imgs/timg.jpg" alt="">
      </div>
      <div class="menu-wrap">
        <div class="row1">
          <router-link to="/" class="menu-item">
            <div class="img-wrap"><img src="../../../static/imgs/icon1.png" alt=""></div>
            <div class="title-wrap">政治学习</div>
          </router-link>
          <router-link to="/" class="menu-item">
            <div class="img-wrap"><img src="../../../static/imgs/icon2.png" alt=""></div>
            <div class="title-wrap">思想汇报</div>
          </router-link>
          <router-link to="/" class="menu-item">
            <div class="img-wrap"><img src="../../../static/imgs/icon3.png" alt=""></div>
            <div class="title-wrap">心得总结</div>
          </router-link>
        </div>
        <div class="row2">
          <router-link to="/" class="menu-item">
            <div class="img-wrap"><img src="../../../static/imgs/icon4.png" alt=""></div>
            <div class="title-wrap">民主评议</div>
          </router-link>
          <router-link to="/" class="menu-item">
            <div class="img-wrap" style="margin-top: 20px"><img src="../../../static/imgs/icon5.png" alt=""></div>
            <div class="title-wrap">流动党员找组织</div>
          </router-link>
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
    }
  }
</script>

<style scoped lang="scss">
.banner{
  width: 100%;
  height: 3.72rem;
  overflow: hidden;
  margin-top: -1px;
  img{
    width: 100%;
    height: 100%;
  }
}
.menu-wrap{
  margin-top: 5px;
  .row1{
    width: 100%;
    height: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .row2{
    width: 66.66666%;
    height: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .menu-item{
    display: flex;
    flex-direction: column;
    .img-wrap{
      width: 1.7rem;
      height: 1.7rem;
      margin-bottom: 5px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .title-wrap{
      width: 1.7rem;
      font-size: 14px;
      color: #666;
      text-align: center;
    }
  }
}


</style>
