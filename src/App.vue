<template>
  <div id="app">
    <top-nav class="topNav"></top-nav>
    <!--<loading></loading>-->
    <left-nav></left-nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'
  //  import loading from '@/components/common/Loading'
  import topNav from '@/components/common/topNav'
  export default {
    name: 'app',
    mounted () {
    },
    data () {
      return {}
    },
    components: {leftNav, topNav}
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .main {
    float: left;
    width: 95%;
    background-color: #EFF2F7;
    height: -webkit-calc(100% - 60px);
    height: calc(100% - 60px);
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .topNav {
    box-shadow: 2px 0 3px rgba(0, 0, 0, .5);
  }

</style>
