<template>
  <div class="sidemenu" :class="{'showside':$store.state.count}">
    <div class="menuitem"></div>
    <div class="overlay" @click="$store.commit('isshow')"></div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  export default {
    name: 'sidemenu',
    mounted: function () {

    },
    data () {
      return {
        msg: '111111',
      }
    },
    store,
    props: ['show'],
    methods: {}
  }
</script>


<style scoped lang="less">
  .sidemenu {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    div {
      height: 100%;
      float: left;
    }
    .menuitem {
      width: 14.8rem;
      height: 100%;
      background-color: #fff;
    }
    .overlay {
      width: 3.2rem;
    }
  }

  .showside {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
</style>
