<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  body{

  }
* {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.fll{
  float: left;
}
.flr{
  float: right;
}
.clearfix {
  &::after{
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
  }
 }
.fixT{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
}
.fixB{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
}
input::-webkit-input-placeholder {
  color:#fff;
  padding-left: 10px;
}
h1{
  margin: 0;
}
</style>
