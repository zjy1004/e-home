<template>
    <div class="slider clearfix">
      <mt-swipe>
        <mt-swipe-item v-for="(item, index) in toSliderData" :key="index">
          <router-link :to="{path: '/newsContent/'+item.url}">
            <div class="img-wrap">
              <img :src="item.imgUrl">
            </div>
            <div class="title-wrap">
              <span class="img-title">{{item.title}}</span>
            </div>
          </router-link>
      </mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
  import {Swipe, SwipeItem} from 'mint-ui'
  import 'mint-ui/lib/style.css'

  export default {
    name: "Slider",
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem
    },
    props: {
      toSliderData: {
        type: Array,
      }
    },
    data() {
      return {

      }
    },
    methods:{
      // handleContent(url) {
      //   console.log(url);
      //   this.$router.push(`/newsContent/${url}`)
      // }
    },
    }
</script>

<style scoped lang="scss">
.slider{
  width: 100%;
  height: 3.86rem;
  margin-top: -1px;
  .img-wrap{
    width: 100%;
    height: 3.86rem;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .title-wrap{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .4);
  }
  .img-title{
    display: block;
    padding: 5px 3px;
    color: #fff;
    font-size: 12px;
  }

}
</style>
