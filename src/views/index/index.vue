<template>
    <div class="index">
      <!--Header start-->
      <div class="header-wrap fixT">
        <router-link to="/">
          <div class="img-wrap">
          </div>
        </router-link>
        <router-link to="/login">
          <div class="login-wrap" v-show="isShow">
            登陆
          </div>
        </router-link>
      </div>
      <!--Header end-->
      <div style="height: 45px;"></div>
      <!-- Swiper start -->
      <Slider :toSliderData="sliderData"></Slider>
      <!-- Swiper end -->

      <!-- Main Menu Start -->
      <div class="main-menu">
        <div class="row">
          <router-link to="/neweyes" class="menu-item">
            <div>
              <img src="../../../static/imgs/icon_01.png" >
            </div>
            <div class="menu-title">
              信工新闻眼
            </div>
          </router-link>
          <router-link to="/life" class="menu-item">
            <div >
              <img src="../../../static/imgs/icon_02.png" >
            </div>
            <div class="menu-title">
              掌上组织生活
            </div>
          </router-link>
          <router-link :to="userInfo.username ? '/interaction' : '/login'" class="menu-item">
            <div >
              <img src="../../../static/imgs/icon_03.png" >
            </div>
            <div class="menu-title">
              党员云互动
            </div>
          </router-link>
        </div>
        <div class="row">
          <router-link to="/oneclick" class="menu-item">
            <div >
              <img src="../../../static/imgs/icon_04.png" >
            </div>
            <div class="menu-title">
              党建一点通
            </div>
          </router-link>
          <router-link to="/showid" class="menu-item">
            <div >
              <img src="../../../static/imgs/icon_05.png" >
            </div>
            <div class="menu-title">
              党员亮身份
            </div>
          </router-link>
          <router-link to="/today" class="menu-item">
            <div >
              <img src="../../../static/imgs/icon_06.png" >
            </div>
            <div class="menu-title">
             党史上的今天
            </div>
          </router-link>
        </div>

      </div>
      <!-- Main Menu End -->
      <div class="banner">
      </div>
      <!-- foote-menu start -->
      <div class="footer-menu">
        <div class="menu-left"></div>
        <div class="menu-right">
          <div class="row">
            <router-link to="/anytimestudy"></router-link>
            <router-link to="/anytimephoto"></router-link>
          </div>
          <div class="row">
            <router-link to="/system"></router-link>
            <router-link to="/activity"></router-link>
          </div>
        </div>
      </div>
      <!-- foote-menu start -->
      <div style="height: 50px;"></div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Slider from '@/components/Slider'
  import Footer from '@/components/Footer'
  import {mapState} from 'vuex'
  export default {
    components: {
      Slider,
      Footer
    },
    computed: {
      ...mapState(['userInfo'])
    },
    data() {
      return {
        sliderData: [],
        isShow: true,
      }
    },

    name: "index",
    methods: {
      getSwipers() {
        this.$axios.get('/carousel/carouselList.do').then(res => {
          if (res.code == 1 ) {
            this.sliderData = res.rows
          }
        })
      },
      getUserInfo() {
        let name = this.$store.state.userInfo.username;
        if (name) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      }
    },
    created () {
      this.getUserInfo();
      this.getSwipers()
    }
  }
</script>

<style scoped lang="scss">
 .index{
    .header-wrap{
      height: 45px;
      width: 100%;
      background-color: #c50206;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .img-wrap{
        margin-left: 5px;
        height: 40px;
        width: 140px;
        background: url("../../../static/imgs/logo.png") no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
      }
      .login-wrap{
        margin-right: 2px;
        margin-bottom: -4px;
        width: 50px;
        font-size: 17px;
        color: #fff;
        font-weight: 300;
        text-align: center;
      }
    }
   .main-menu{
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     background: url("../../../static/imgs/bt_bg.png") no-repeat;
     -webkit-background-size: 100%;
     background-size: 100%;
     height: 3.94rem;
      a{
        color: #666;
        font-size: 12px;
      }
      .row{
        display: flex;
        .menu-item{
          flex: 1;
          text-align: center;
        }
        img{
          width: 1rem;

        }
      }
   }

   .banner{
     background: url("../../../static/imgs/banner01.png") no-repeat;
     -webkit-background-size: 100%;
     background-size: 100%;
     height: 90px;
   }
   .footer-menu{
     display: flex;
     justify-content: space-around;
     background: url("../../../static/imgs/tese.png") no-repeat;
     -webkit-background-size: 100%;
     background-size: 100%;
     height: 3.3rem;
      .menu-left{
        flex: 1;
      }
     .menu-right{
       flex: 2;
       .row{
          height: 50%;
          display: flex;
         a{
           flex: 1;
           height: 100%;
         }
       }
     }
   }
 }

</style>
