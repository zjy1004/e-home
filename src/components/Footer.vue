<template>
    <div class="footer fixB">
      <router-link to="/" class="footer-item" :class="{active: $route.name === '首页'}">
          <i class="iconfont icon-dangwugongkai"></i>
        <div class="footer-title">首页</div>
      </router-link>
      <router-link to="/inform" class="footer-item" :class="{active: $route.name === '通知早知道'}">
        <i class="iconfont icon-xiaoxi"></i>
        <div class="footer-title">通知早知道</div>
      </router-link>
      <router-link to="/mine" class="footer-item" :class="{active: $route.name === '我的党建'}">
        <i class="iconfont icon-wode"></i>
        <div class="footer-title">我的党建</div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
  .footer{
    background-color: #fafbfe;
    display: flex;
    align-items: center;
    height: 0.9rem;
    .footer-item{
      font-size: 10px;
      padding-top: 3px;
      flex: 1;
      text-align: center;
      color: #aaaaaa;
      .iconfont{
        font-size: 23px;
      }
    }
    .active{
      border-top: 2px solid #c7000a;
      color: #c7000a;
    }
  }
</style>
