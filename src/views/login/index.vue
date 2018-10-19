<template>
    <div class="login">
      <Header>{{this.$route.name}}</Header>
      <div class="img-wrap">
        <img src="../../../static/imgs/logo.png" alt="">
      </div>
      <div  class="login-box">
        <div class="input-wrap">
          <input type="text" id="idcard" placeholder="身份证号" v-model="formData.id_card">
        </div>
        <div class="input-wrap">
          <input type="password" id="password" placeholder="密码" v-model="formData.password">
        </div>
        <button @click="handleLogin" class="login-btn">登陆</button>
      </div>
    </div>
</template>

<script>
  import Header from '@/components/Header'
  import {MessageBox} from 'mint-ui'
  import {mapState} from 'vuex'
  export default {
    components: {
      Header,
    },
    name: "index",
    data() {
      return {
        formData: {
          id_card: '',
          password: ''
        }
      }
    },
    methods: {
      handleLogin() {
        this.$axios.post('/user/userLogin.do', this.formData).then(res => {
          if (res.code == 1) {
            this.formData = res.data;
            MessageBox('Info', '登陆成功');
            this.$store.commit('CHANGE_userInfo', res.data);
            this.$store.commit('CHANGE_token', res.token);
            this.$router.push('/mine')
          }
        })
      }
    },
    computed: {
      ...mapState(['userInfo'])
    }
  }
</script>

<style scoped lang="scss">
  .login{
    height: 100vh;
    background-color: #c50206;

    .img-wrap{
      height: 0.98rem;
      width: 4.06rem;
      margin: 25px auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .login-box{
      width: 80%;
      margin: 0 auto;
      text-align: center;

      .input-wrap{
        width: 100%;
        height: 0.8rem;
        margin-bottom: 14px;
        input{
          padding-left: 5px;
          font-size: 14px;
          width: 100%;
          height: 0.8rem;
          background-color: #c50206;
          border: 1px solid #ff0;
          border-radius: 5px;
          color: #fff;
        }
      }
      .login-btn{
        width: 100%;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        height: 0.8rem;
        background-color: #e3574f;
        border: 1px solid #ff0;
        border-radius: 5px;
      }
    }
}
</style>
