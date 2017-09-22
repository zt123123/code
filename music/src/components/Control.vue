<template>
  <div class="fixbottom clearfix" @click="jump">
    <div class="left fl">
      <img class="fl" src="../assets/icon_41.png" alt=""/>
      <div class="music fl">
        <h3 class="name">风的季节</h3>
        <div class="lyric">亮晶的眼泪</div>
      </div>
    </div>
    <div class="right fr">
      <span :class="{ play: !isplay, pause: isplay }" @click.prevent="playmusic"></span>
      <span class="playlist"></span>
    </div>
    <audio id="audio" :src="src" controls="controls" class="controls"></audio>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import axios from 'axios'
  export default {
    name: 'Control',
    data () {
      return {
        isplay: false,
        src: '',
        url1: 'https://bird.ioliu.cn/v1',
        url2: 'https://bird.ioliu.cn/netease/song?id=',
        userfav: 'https://music.163.com/weapi/user/playlist?csrf_token=08f50851745238b1b4a4265e8b5c02de',
        newUrl: 'https://music.163.com/weapi/personalized/newsong?csrf_token=87246db47676f2c5016fafabc673af3c'
      }
    },
    created: function () {
      this.getmusic();
      this.getnew();
    },
    store,
    methods: {
      jump: function (event) {
        this.$store.commit('isshowlyric');
      },
      getmusic: function () {
        var _this = this;
        axios.post(this.url1, {
          url: 'http://music.163.com/api/search/get/',
          s: '浮夸',
          limit: 10,
          type: 1
        })
          .then(function (response) {
            console.log(response);
            var musicid = response.data.result.songs[0].id;
            _this.url2 += '' + musicid;
            return _this.url2;
          })
          .then(function (data) {
            _this.putsource(data);
            _this.getlyric(data);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getnew: function () {
        var _this = this;
        axios.get('/data.json')
          .then(function (response) {
            console.log(response.data.result);
          })
          .catch(function (error) {
            console.log(error);
          });

      },
      putsource: function (data) {
        var audio = document.querySelector("#audio");
        var _this = this;
        axios.get(data)
          .then(function (response) {
            _this.src = response.data.data.mp3.url;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      playmusic: function () {
        this.isplay = !this.isplay;
        var audio = document.querySelector("#audio");
        if (this.isplay) {
          if (audio.readyState == 4) {
            audio.play();
          }
        } else {
          audio.pause();
        }
      },
      getlyric: function (data) {

        var id = data.substr(data.indexOf('id') + 3);
        var url = 'https://music.163.com/api/song/lyric?id=' + id + '&lv=-1&kv=-1&tv=-1';
        var _this = this;
        axios.get('https://bird.ioliu.cn/v1?url=https://music.163.com/api/song/lyric?id=66282&lv=-1&kv=-1&tv=-1').then(function (response) {
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
    }
  }
</script>


<style scoped lang="less">
  .fixbottom {
    background: rgba(255, 255, 255, .9);
    height: 2.45rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.3rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .left {
      img {
        width: 1.85rem;
        height: 1.85rem;
        margin-right: 0.3rem;
      }
      .music {
        height: 1.85rem;
        h3 {
          margin: 0.16666666rem 0;
          font-size: 0.6rem;
        }
        .lyric {
          font-size: 0.55rem;
          color: #7f7f7f;
        }
      }
    }
    .right {
      span {
        width: 1.85rem;
        height: 1.85rem;
        display: inline-block;
        background: no-repeat center center;
        background-size: contain;
      }
      .play {
        background-image: url(../assets/icon_43.png);
        margin-right: 0.3rem;
      }
      .pause {
        background-image: url(../assets/icon_44.png);
        margin-right: 0.3rem;
      }
      .playlist {
        background-image: url(../assets/icon_45.png);
        margin-left: 0.23333333rem;
      }
    }
    .controls {
      display: none;
      visibility: hidden;
      height: 0;
    }
  }
</style>
