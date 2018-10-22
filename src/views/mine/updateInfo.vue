<template>
    <div>
      <div style="height: 45px">
        <div class="header fixT">
          <div class="header-wrap">
            <div >
              <div class="img-wrap" @click="goBack">
                <img src="../../../static/imgs/back_btn.png">
              </div>
            </div>
            <div class="title-wrap">
              <h1>修改个人信息</h1>
            </div>
            <div class="login-wrap" @click="handleSave">
              保存
            </div >
          </div>
        </div>
      </div>
      <div class="list-item">
        <div class="title-wrap">头像</div>
        <div class="input-wrap" style="height: 28px; width: 28px;"><img style="width: 100%; height: 100%; display: block" :src="userData.header"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">姓名</div>
        <div class="input-wrap"><input type="text" name="username" v-model="userData.username"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">身份证</div>
        <div class="input-wrap"><input type="text" name="idCard" v-model="userData.idCard"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">家庭住址</div>
        <div class="input-wrap"><input type="text" name="hometown" v-model="userData.hometown"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">工作地址</div>
        <div class="input-wrap"><input type="text" name="address" v-model="userData.address"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">民族</div>
        <div class="input-wrap"><input type="text" name="nation" v-model="userData.nation"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">微信号</div>
        <div class="input-wrap"><input type="text" name="wxNum" v-model="userData.wxNum"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">qq号</div>
        <div class="input-wrap"><input type="text" name="qqNum" v-model="userData.qqNum"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">性别</div>
        <div class="radio">
          <input type="radio" name="sex" value="1" v-model="userData.sex">男
          <input type="radio" name="sex" value="2" v-model="userData.sex">女
        </div>
      </div>
      <div class="list-item">
        <div class="title-wrap">最高学历</div>
        <div class="input-wrap"><input type="text" name="education" v-model="userData.education"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">职称</div>
        <div class="input-wrap"><input type="text" name="jobRank" v-model="userData.jobRank"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">薪资水平</div>
        <div class="input-wrap"><input type="text" name="salary" v-model="userData.salary"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">入党时间</div>
        <div class="input-wrap"><input type="date" name="joinPartyTime" v-model="userData.joinPartyTime"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">党费最后缴纳时间</div>
        <div class="input-wrap"><input type="date" name="lastPayTime" v-model="userData.lastPayTime"></div>
      </div>
      <div class="list-item">
        <div class="title-wrap">当前身份</div>
        <div class="input-wrap">
          <select class="select" name="partyStatus" v-model="userData.partyStatus">
            <option value="2">党员</option>
            <option value="1">预备党员</option>
            <option value="0">积极分子</option>
          </select>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: "updateInfo",
    components: {

    },
    data() {
      return {
        userData:{},
      }
    },

    methods: {
      getUserInfo() {
        this.$axios.get('/user/userInfo.do').then(res => {
          console.log(res.data);
          if (res.code == 1) {
            this.userData = res.data
          }
        })
      },
      goBack() {
        this.$router.go(-1);
      },
      handleSave() {
        this.$router.push('/info')
      },
    },
    created() {
      this.getUserInfo()
    }
  }
</script>

<style scoped lang="scss">
  .header {
    height: 45px;
    width: 100%;
    background-color: #c50206;
    .header-wrap{
      height: 45px;
      margin: 0 5px;
      display: flex;
      text-align: center;
      position: relative;
      .img-wrap{
        height: 43px;
        line-height: 43px;
        width: 35px;
        position: relative;
        img{
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      .title-wrap{
        height: 43px;
        line-height: 43px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        h1{
          font-weight: 500;
          color: #fff;
          font-size: 18px;
        }
      }
      .login-wrap{
        width: 50px;
        font-size: 17px;
        color: #fff;
        font-weight: 300;
        text-align: center;
        position: absolute;
        right: 0;
        top: 10px;
      }
    }
  }
  .list-item{
    margin: 0 auto;
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    .title-wrap{
      font-size: 16px;
      color: #444;
      margin-left: 11px;
    }
    .radio{
      font-size: 14px;
      margin-right: 11px;
    }
    .input-wrap{
      margin-right: 11px;
      input{
        background:none;
        outline:none;
        border:0;
        width: 100%;
        height: 0.68rem;
        display: block;
        line-height: 0.68rem;
        font-size: 14px;
        color: #111;
        font-weight: 400;
        text-align: right;
      }
      select{
        outline:none;
        border:0;
        width: 100%;
        height: 0.68rem;
        display: block;
        line-height: 16px;
        font-size: 14px;
        color: #111;
        font-weight: 400;
      }
    }
  }

</style>
