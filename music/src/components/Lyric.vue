<template>
  <div class="lyricpanel">
    <div class="header">
      <div class="top clearfix">
        <div @click="back" class="back fl"></div>
        <div class="musicinfo fl">
          <h3>浮夸</h3>
          <div class="artist">
            黄伟文/陈奕迅
          </div>
        </div>
        <div class="share fr"></div>
      </div>
      <div class="bottom clearfix">
        <div class="volumeicon fl"></div>
        <input class="volume fl" type="range" name="" id="" value="50" min="0" max="100"/>
      </div>
    </div>
    <div class="lyric">
      <p v-for="lyric in lyric">{{lyric}}</p>
    </div>
    <div class="footer">
      <div class="duration">
        <span class="nowtime">01:06</span>
        <input type="range" value="50" min="0" max="100"/>
        <span class="totaltime">04:06</span>
      </div>
      <div class="control clearfix">
        <div class="playmode"></div>
        <div class="prev"></div>
        <div class="play"></div>
        <div class="next"></div>
        <div class="history"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default {
    name: 'lyric',
    data () {
      return {
        msg: '111111',
        isplay: false,
        lyric: '',
        lyricurl: 'https://bird.ioliu.cn/v1?url=https://music.163.com/api/song/lyric?id=66282&lv=-1&kv=-1&tv=-1'
      }
    },
    store,
    created: function () {
      this.getlyric();
    },
    methods: {
      handleClick: () => {
        alert('111111111')
      },
      getlyric: function (data) {
        var _this = this;
        axios.get(this.lyricurl).then(function (response) {
          var aa = (response.data.lrc.lyric).split('\n');
          var arr1 = [];
          aa.map(function (val) {
            arr1.push(val.substr(val.indexOf(']') + 1));
          })
          _this.lyric = arr1;

        })
          .catch(function (error) {
            console.log(error);
          })
      },
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>


<style scoped lang="less">
  .header {
    background-color: #60474f;
    position: absolute;
    z-index: 999999;
    width: 100%;
    left: 0;
    top: 0;
    padding: 0 0.7rem 0 0.9rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 3.55rem;
    .top {
      height: 2.58333333rem;
      .back {
        width: 1rem;
        height: 2.58333333rem;
        background: url(../assets/icon2_01.png) no-repeat center center;
        background-size: contain;
      }
      .musicinfo {
        margin-top: 0.46666666rem;
        margin-left: 0.68333333rem;
        h3 {
          font-size: 0.78333333rem;
          color: #fff;
        }
        .artist {
          font-size: 0.61666666rem;
          color: #a19297;
        }
      }
      .share {
        width: 1rem;
        height: 2.58333333rem;
        background: url(../assets/icon2_02.png) no-repeat center center;
        background-size: contain;
      }
    }
    .bottom {
      height: 0.96666666rem;
      line-height: 0.96666666rem;
      .volumeicon {
        margin-right: 0.76666666rem;
        height: 0.96666666rem;
        width: 1rem;
        background: url(../assets/icon2_03.png) no-repeat center center;
        background-size: contain;
      }
      .volume {
        display: block;
        margin-top: 0.43333333rem;
        width: 13.66666666rem;
        background-color: #7a626a;
        border-radius: 0.05rem;
        height: 0.1rem;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: default;
        height: 0.4rem;
        width: 0.4rem;
        border-radius: 0.2rem;
        background-color: #fff;
      }
    }
  }

  .lyric {
    background-color: #60474f;
    position: absolute;
    top: 3.55rem;
    bottom: 6rem;
    left: 0;
    right: 0;
    font-size: 0.76666666rem;
    text-align: center;
    overflow: scroll;
    color: #b5a7ab;
    p {
      line-height: 2.15rem;
    }
  }

  .active {
    color: #fff;
  }

  .footer {
    width: 100%;
    position: absolute;
    z-index: 22;
    bottom: 0;
    left: 0;
    height: 6rem;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#60474f), to(#3a2a2f));
    background-image: linear-gradient(#60474f, #3a2a2f);
    .duration {
      text-align: center;
      padding-top: 0.98333333rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 2.4rem;

      span {
        vertical-align: top;
        width: 2.41666666rem;
        color: #c0bbbc;
        font-size: 0.35rem;
      }
      input {
        -webkit-transform: translateY(150%);
        transform: translateY(150%);
        vertical-align: top;
        width: 18rem - 2.41666666rem*2;
        height: 0.1rem;
      }
      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: default;
        height: 0.7rem;
        width: 0.7rem;
        border-radius: 0.35rem;
        background-color: #fff;
      }
    }
    .control {
      height: 3.6rem;
      div {
        float: left;
        width: 3.6rem;
        height: 2.3rem;
        background: no-repeat center center;
        background-size: contain;
      }
      .playmode {
        background-image: url(../assets/icon2_07.png);
      }
      .prev {
        background-image: url(../assets/icon2_04.png);
      }
      .play {
        background-image: url(../assets/icon2_05.png);
      }
      .next {
        background-image: url(../assets/icon2_06.png);
      }
      .history {
        background-image: url(../assets/icon2_08.png);
      }
    }
  }
</style>
