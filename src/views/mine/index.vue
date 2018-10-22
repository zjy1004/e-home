<template>
    <div class="mine">
      <Header>{{this.$route.name}}</Header>
      <div>
        <div v-if="!userInfo.username">
          <div class="avatar-wrap">
            <div class="img-wrap">
              <img src="../.././../static/imgs/bt_bg.png" alt="">
            </div>
            <router-link to="/login" class="title-wrap">
              <div class="title">你还未登陆,请登陆</div>
            </router-link>
          </div>
          <div class="list">
            <router-link to="/login">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/个人信息.png') no-repeat"></div>
                <div class="item-title">个人信息</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
            <router-link to="/login">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/量化积分icon.png') no-repeat"></div>
                <div class="item-title">个人量化积分</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
            <router-link to="/login">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/修改密码icon.png') no-repeat"></div>
                <div class="item-title">修改密码</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
            <router-link to="/login">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/个人信息.png') no-repeat"></div>
                <div class="item-title">党费缴纳</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
          </div>
        </div>
        <div v-else>
          <div class="avatar-wrap">
            <div class="img-wrap">
              <img :src="userInfo.header" alt="">
            </div>
            <router-link to="/information" class="title-wrap">
              <div class="title">{{userInfo.username}}</div>
            </router-link>
          </div>
          <div class="list">
            <router-link to="/info" @click="handleInfo">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/个人信息.png') no-repeat"></div>
                <div class="item-title">个人信息</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
            <router-link to="/intergral">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/量化积分icon.png') no-repeat"></div>
                <div class="item-title">个人量化积分</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
            <router-link to="/changePwd">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/修改密码icon.png') no-repeat"></div>
                <div class="item-title">修改密码</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
            <router-link to="/pay">
              <div class="list-item">
                <div class="img-left" style="background: url('../../../static/imgs/个人信息.png') no-repeat"></div>
                <div class="item-title">党费缴纳</div>
                <div class="img-right" style="background: url('../../../static/imgs/形状-7-拷贝-5.png') no-repeat"></div>
              </div>
            </router-link>
          </div>
          <div class="logout-wrap">
            <button @click="handleLogout" class="logot-btn">退出登陆</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import Header from '@/components/Header'
  import {mapState} from 'vuex'
    export default {
      components: {
        Footer,
        Header
     },
      name: "index",
      computed: {
        ...mapState(['userInfo'])
      },
      methods: {
        handleLogout() {
          let userInfo = {
            username: '',
            header: '',
          };
          let token = '';
          this.$store.commit('CHANGE_userInfo', userInfo);
          this.$store.commit('CHANGE_token', token);
          this.$router.push('/login')
        },
        handleInfo() {
        }
      }
    }
</script>

<style scoped lang="scss">

  .mine{

    .avatar-wrap{
      height: 140px;
      width: 100%;
      background-color: #c50206;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -1px;
      .img-wrap{
        width: 63px;
        height: 63px;
        margin-top: 35px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .title-wrap{
        .title{
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          font-weight: 300;
        }
      }
    }

    .list{
      width: 100%;
      .list-item{
        width: 100%;
        height: 54px;
        border-bottom: 1.5px solid #e5e5e5;
        display: flex;
        align-items: center;
        position: relative;
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
    .logout-wrap{
      width: 95%;
      height: 0.95rem;
      margin: 40px auto;
      .logot-btn{
        width: 100%;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        height: 0.95rem;
        background-color: #e3574f;
        border: 1px solid #ff0;
        border-radius: 4px;
      }
    }
  }

</style>
