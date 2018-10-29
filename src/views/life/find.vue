<template>
  <div>
    <Header>{{this.$route.name}}</Header>
    <div class="map-wrap">
      <div id="bd"></div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    components: {
      Header,
    },
    data() {
      return {
        map: null
      }
    },
    methods: {
      initMap() {
        var mp = new BMap.Map('bd');
        mp.centerAndZoom(new BMap.Point(116.215759,40.221386), 5);
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(20, 60)});
        var marker1 = new BMap.Marker(new BMap.Point(116.215759,40.221386));
        var marker2 = new BMap.Marker(new BMap.Point(114.01277,33.016735));
        mp.addOverlay(marker1); //声明一个标记点
        mp.addOverlay(marker2); //声明一个标记点
        var label1 = new BMap.Label("信息工程学院学生流动党支部支部书记：高洋 电话：13526395586",{offset:new BMap.Size(20,-10)});//声明一个文字标注
        marker1.setLabel(label1);
        var label2 = new BMap.Label("信息工程学院学生党支部支部书记：杨鑫 电话：0396-2853187",{offset:new BMap.Size(20,-20)});//声明一个文字标注
        marker2.setLabel(label2);
        var label3 = new BMap.Label("信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032",{offset:new BMap.Size(20,0)});//声明一个文字标注
        marker2.setLabel(label3);
        var geolocationControl = new BMap.GeolocationControl();
        mp.addControl(geolocationControl);
        mp.addControl(top_right_navigation);
      }
    },
    created() {
      this.$nextTick(() => {
        this.initMap();
      })
    }
  }
</script>

<style scoped>
  .map-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  #bd {
    height: 100%;
    width: 100%;
  }
</style>
