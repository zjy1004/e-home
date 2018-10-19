<template>
  <div style="height: 45px">
    <div class="header fixT">
      <div class="header-wrap">
        <div >
          <div class="img-wrap" @click="goBack" v-show="isShow">
            <img src="../../static/imgs/back_btn.png">
          </div>
        </div>
        <div class="title-wrap">
          <h1><slot></slot></h1>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      getName() {
        let name = this.$route.name;
        if (name == "通知早知道") {
          this.isShow = false
        } else if (name == "我的党建") {
          this.isShow = false
        } else {
          this.isShow = true
        }
      },
    },
    created() {
      this.getName()
    },
    watch: {

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
      margin: 0 10px;
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
    }

  }

</style>
