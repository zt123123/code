<template>
  <div class="main">
    <carousel></carousel>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="categary">
      <ul>
        <li>
          <a href=""><span></span><span>私人FM</span></a>
        </li>
        <li>
          <a href=""><span></span><span>每日推荐</span></a>
        </li>
        <li>
          <a href=""><span></span><span>歌单</span></a>
        </li>
        <li>
          <a href=""><span></span><span>排行榜</span></a>
        </li>
      </ul>
    </div>
    <section class="suggest">
      <h3><span>推荐歌单</span><span></span></h3>
      <ul class="album clearfix">
        <li><img src="../assets/icon_33.png"/>
          <p>「想在秋天和你一起做的事情」</p>
        </li>
        <li><img src="../assets/icon_35.png"/>
          <p>引擎里的速度人生</p>
        </li>
        <li><img src="../assets/icon_37.png"/>
          <p>将回忆酿成烈酒入喉 从此不再挽留不</p>
        </li>
      </ul>
      <ul class="album clearfix">
        <li><img src="../assets/icon_33.png"/>
          <p>「想在秋天和你一起做的事情」</p>
        </li>
        <li><img src="../assets/icon_35.png"/>
          <p>引擎里的速度人生</p>
        </li>
        <li><img src="../assets/icon_37.png"/>
          <p>将回忆酿成烈酒入喉 从此不再挽留不</p>
        </li>
      </ul>
    </section>

    <section class="latest">
      <h3><span>最新音乐</span><span></span></h3>
      <ul class="album clearfix">
        <li><img src="../assets/icon_33.png"/>
          <p>「想在秋天和你一起做的事情」</p>
        </li>
        <li><img src="../assets/icon_35.png"/>
          <p>引擎里的速度人生</p>
        </li>
        <li><img src="../assets/icon_37.png"/>
          <p>将回忆酿成烈酒入喉 从此不再挽留不</p>
        </li>
      </ul>
      <ul class="album clearfix">
        <li><img src="../assets/icon_33.png"/>
          <p>「想在秋天和你一起做的事情」</p>
        </li>
        <li><img src="../assets/icon_35.png"/>
          <p>引擎里的速度人生</p>
        </li>
        <li><img src="../assets/icon_37.png"/>
          <p>将回忆酿成烈酒入喉 从此不再挽留不</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Carousel from '@/components/Carousel'
  export default {
    name: 'music',
    data () {
      return {
        msg: '111111'
      }
    },
    methods: {

    },
    components: {
      Carousel
    }
  }
</script>


<style scoped lang="less">
  .main {
    position: absolute;
    top: (1.18333333rem + 1.8rem + 0.7rem * 2);
    left: 0;
    right: 0;
    bottom: 0rem;
    overflow: scroll;
    .categary {
      position: relative;
      text-align: center;
      padding: .76666667rem 0 0.48333333rem;
      font-size: 0;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        background-color: #dadcdd;
      }
      li {
        width: 4.5rem;
        height: 3.8rem;
        line-height: 3.8rem;
        font-size: .56666667rem;
        display: inline-block;
        a {
          color: #303131;
          display: block;
          height: 3.8rem;
          span {
            display: block;
            background: no-repeat center center;
            background-size: contain;
            text-align: center;
            &:nth-of-type(1) {
              height: 2.4rem;
              background-image: url('../assets/icon_21.png');
            }
            &:nth-of-type(2) {
              height: 1.4rem;
              line-height: 1.4rem;
            }
          }
        }
        &:nth-of-type(2) {
          span:nth-of-type(1) {
            background-image: url('../assets/icon_23.png');
          }
        }
        &:nth-of-type(3) {
          span:nth-of-type(1) {
            background-image: url('../assets/icon_25.png');
          }
        }
        &:nth-of-type(4) {
          span:nth-of-type(1) {
            background-image: url('../assets/icon_27.png');
          }
        }
      }
    }
    .suggest,
    .latest {
      margin-top: 1.16666666rem;
      h3 {
        height: 0.76666666rem;
        position: relative;
        font-size: 0;
        &::before {
          content: '';
          position: absolute;
          vertical-align: top;
          top: 0;
          left: 0;
          background-color: #d33a31;
          width: 0.1rem;
          height: 0.76666666rem;
        }
        span {
          vertical-align: top;
          &:nth-of-type(1) {
            font-size: 0.76666666rem;
            padding-left: 0.26666666rem;
            padding-right: 0.38333333rem;
          }
          &:nth-of-type(2) {
            display: inline-block;
            background: url(../assets/icon_39.png) no-repeat center center;
            background-size: contain;
            width: 0.4rem;
            height: 0.76666666rem;
          }
        }
      }
      .album {
        margin: 0.76666666rem 0;
        li {
          float: left;
          width: 6rem;
          font-size: 0.55rem;
          padding-right: 0.1rem;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          &:nth-of-type(3) {
            padding-right: 0;
          }
          img {
            width: 100%;
          }
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            padding: 0.43333333rem 0 0 0.31666666rem;
          }
        }
      }
    }
  }
</style>
