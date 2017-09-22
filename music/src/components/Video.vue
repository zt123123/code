<template>
  <div class="main">
    <div class="video" v-for="item in [0,0,0,0]">
      <div v-if="showplaybtn" class="playbtn"></div>
      <video @click="playvideo" id="video" poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1506571643&di=16040683e4db602e7838e009a0eb963b&imgtype=jpg&er=1&src=http%3A%2F%2Fposterposse.com%2Fwp-content%2Fuploads%2F2015%2F09%2FGR.jpg">
        <source src="../assets/myvideo.mp4" type="video/mp4"></source>
      </video>
      <div class="comment clearfix">
        <p class="fl">宠物只是你生活的一部分，但你却是它生活的全部</p>
        <div class="operation fl">
          <div class="like">
            <span>7</span>
          </div>
          <div class="message">
            <span>2</span>
          </div>
          <div class="more"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'video',
    data () {
      return {
        msg: '111111',
        showplaybtn: true,
      }
    },
    methods: {
      handleClick: () => {
        alert('111111111')
      },
      playvideo: function () {
        var video = document.getElementById('video');
        this.showplaybtn = !this.showplaybtn;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
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
    .video {
      width: 100%;
      height: 13.75rem;
      position: relative;
      .playbtn {
        position: absolute;
        width: 2.3rem;
        height: 2.3rem;
        background: url(../assets/playbtn_03.png) center center;
        background-size: contain;
        left: 50%;
        top: 10.11666666rem / 2;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      video {
        display: block;
        height: 10.11666666rem;
      }
    }

    .comment {
      margin-top: 0.66666666rem;
      box-sizing: border-box;
      padding: 0 0.53333333rem;
      p {
        line-height: 1.05rem;
        width: 9.7rem;
        font-size: 0.71666666rem;
      }
      .operation {
        margin-top: 0.08333333rem;
        margin-left: 0.93333333rem;
        color: #919293;
        font-size: 0.36666666rem;
        div {
          width: 0.88333333rem;
          height: 0.88333333rem;
          background: no-repeat center center;
          background-size: contain;
          display: inline-block;
          vertical-align: top;
          text-align: center;
          span {
            display: inline-block;
            margin-top: 0.88333333rem + 0.33333333rem;
          }
        }
        .like {
          background-image: url(../assets/opt_03.png);
        }
        .message {
          margin-left: 1.4rem;
          background-image: url(../assets/opt_05.png);
        }
        .more {
          margin-top: 0.33333333rem;
          margin-left: 1.4rem;
          background-image: url(../assets/opt_07.png);
        }
      }
    }
  }
</style>
