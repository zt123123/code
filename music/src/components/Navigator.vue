<template>
  <div>
    <sidemenu :show="isshow"></sidemenu>
    <div class="fixtop">
      <header class="clearfix">
        <div class="menu fl" @click="$store.commit('isshow')"></div>
        <ul class="fl">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="serach fr"></div>
      </header>
      <ul class="tab">
        <router-link to="/music" tag="li">音乐</router-link>
        <router-link to="/video" tag="li">视频</router-link>
        <router-link to="/radio" tag="li">电台</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import Sidemenu from '@/components/Sidemenu'
  export default {
    name: 'nav',
    data () {
      return {
        msg: '111111',
        isshow: false,
      }
    },
    store,
    methods: {},
    components: {
      Sidemenu
    }
  }
</script>


<style scoped lang="less">
  .fixtop {
    position: absolute;
    top: 0;
    left: 0;
    header {
      height: 1.18333333rem;
      line-height: 1.18333333rem;
      background-color: #d33a31;
      padding: .7rem;
      .menu {
        width: 1.05rem;
        height: 1.18333333rem;
        background: url(../assets/icon_03.png) no-repeat center center;
        background-size: cover;
      }
      ul {
        margin-left: 3.8rem;
        li {
          display: inline-block;
          width: 1.23333333rem;
          height: 1.18333333rem;
          margin-right: 1.7rem;
          background: no-repeat center center;
          background-size: contain;
          &:nth-of-type(1) {
            background-image: url(../assets/icon_05.png);
          }
          &:nth-of-type(2) {
            background-image: url(../assets/icon_07.png);
          }
          &:nth-of-type(3) {
            margin-right: 0;
            background-image: url(../assets/icon_09.png);
          }
        }
      }
      .serach {
        width: 1rem;
        height: 1.18333333rem;
        background: url('../assets/icon_11.png') no-repeat center center;
        background-size: contain;
      }
    }
    .tab {
      height: 1.8rem;
      text-align: center;
      font-size: 0;
      padding: 0 1rem;
      li {
        font-size: .66666667rem;
        width: 16 / 3rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: center;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        &.router-link-active {
          color: #d33a31;
          border-bottom: .1rem solid #d33a31;
        }
      }
    }
  }
</style>
