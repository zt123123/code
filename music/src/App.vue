<template>
  <div id="app">
    <navigator></navigator>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-link to="/lyric" tag="div">
      <control></control>
    </router-link>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import Navigator from '@/components/Navigator'
  import Control from '@/components/Control'
  import Lyric from '@/components/Lyric'
  export default {
    name: 'app',
    data(){
      return {
//        showlyric: this.$store.state.showlyric
      }
    },
    store,
    components: {
      Lyric,
      Navigator,
      Control
    }
  }
</script>

<style>
  body,
  p,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  video,
  audio {
    margin: 0;
    padding: 0;
  }

  body * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
  }

  a,
  button,
  input {
    -webkit-appearance: none;
    border: none;
  }

  input {
    outline: none;
  }

  img {
    border: none;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .clearfix:after {
    content: '';
    display: table;
    clear: both;
  }

  .fade-enter-active,
  .fade-leave-active {
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  html {
    height: 100%;
  }

  body {
    position: relative;
    height: 100%;
    background-color: #f2f4f5;
    font-family: arial, helvetica, sans-serif;
  }
</style>
