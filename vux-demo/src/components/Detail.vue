<template>
<div class='container'>

 <!-- 头像 -->
  <div class='avatar-box'>
    <div class='avatar'></div>
    <div class='nickname'>帮我({{nickName}})拆红包，一人一个</div>
  </div>


  <!-- 红包关 -->
  <div v-if='openStatus'>
    <div class='red-paper'></div>
    <div class='paper-desc'>可获得
      <span class='gold-font'>1-10元</span>红包</div>
    <div :class='["red-paper-btn",{"open":open}]' @click='openPaper'></div>
  </div>

  <!-- 红包开 -->
  <div v-if='!openStatus'>
    <div class='red-paper active'></div>
    <div class='success-tip'>
      <div class='txt cash'>帮拆成功!({{nickName}})共获得48.75元(可提现)</div>
      <div class='txt congratulation'>恭喜你获得帮拆奖励</div>
      <div>
        <span class='money'>2</span>元</div>
    </div>
    <div class='launch'>前往游戏领取现金</div>
  </div> 

  <!-- 邀请好友 -->
  <div class='invite'></div>
</div>
</template>

<script>
import { md5 } from "vux";
export default {
  data() {
    return {
      userInfo: {},
      nickName: "",
      imgSrc: "http://m.imi78.com/img/ddz_icon100.png",
      hasUserInfo: false,
      openStatus: true,
      open: false,
      btnSrc: "../assets/open.png",
      list: [
        {
          name: "111",
          src: "../assets/add.png"
        },
        {
          name: "222",
          src: "../assets/add.png"
        },
        {
          name: "333",
          src: "../assets/add.png"
        },
        {
          name: "444",
          src: "../assets/add.png"
        },
        {
          name: "555",
          src: "../assets/add.png"
        }
      ]
    };
  },
  created() {
    // this.post({
    //   url: "login",
    //   data: {
    //     username: "fdsfdsfds",
    //     pwd: md5("123456")
    //   },
    //   success: function(res) {
    //     console.log(res);
    //   }
    // });
  },
  mounted() {},
  methods: {
    showLayer() {
      this.$vux.alert.show({
        title: "123",
        content: "456"
      });
    },
    openPaper() {
      this.open = true;
      this.$vux.loading.show("加载中...");
      setTimeout(() => {
        this.$vux.loading.hide();
        this.openStatus = false;
      }, 2000);
    },

    onPullDownRefresh() {},

    onReachBottom() {}
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8f2726 url(../assets/bg.jpg) center 0 no-repeat;
  background-size: 7.5rem 13.48rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.avatar-box {
  width: 100%;
  position: absolute;
  top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  width: 1.48rem;
  height: 1.48rem;
  border-radius: 50%;
  border: 2px solid #fadc9c;
  background: transparent url("http://m.imi78.com/img/ddz_icon100.png") center
    center no-repeat;
  background-size: contain;
}

.nickname {
  position: relative;
  margin-top: 14px;
  background: #fadc9c;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 14px;
  text-align: center;
  color: #b93b24;
  white-space: nowrap;
}

.nickname::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  left: 50%;
  top: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #fadc9c transparent;
  transform: translate(-50%, -99%);
}

.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.red-paper {
  position: absolute;
  left: 50%;
  top: 3.8rem;
  transform: translateX(-50%);
  width: 5.78rem;
  height: 6.64rem;
  background: transparent url("../assets/redpaperbg.png") center center
    no-repeat;
  background-size: contain;
}

.red-paper.active {
  background: url("../assets/hongbao_on.png") center center no-repeat;
  background-size: contain;
}

.paper-desc {
  position: absolute;
  transform: translateX(-50%);
  top: 8.6rem;
  font-size: 0.43rem;
  color: #fff;
}

.red-paper-btn {
  position: absolute;
  left: 50%;
  top: 5.52rem;
  transform: translateX(-50%);
  width: 2.22rem;
  height: 2.22rem;
  background: url("../assets/openactive.png") center center no-repeat;
  background-size: contain;
  animation: scale 1s alternate linear infinite;
}

.success-tip {
  font-size: 0.28rem;
  width: 100%;
  position: absolute;
  left: 0;
  top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.success-tip .txt {
  margin-top: 0.2rem;
}

.cash {
  padding-bottom: 0.1rem;
  border-bottom: 1px dashed #fff;
}

.congratulation {
  font-size: 0.3rem;
  font-weight: bold;
}

.tip {
  position: absolute;
  bottom: 1.85rem;
  text-align: center;
  color: #fff;
  font-size: 0.5rem;
}

.money {
  font-size: 0.8rem;
}

.open {
  animation: turns 1s ease-in infinite;
}

@keyframes turns {
  from {
    transform: translateX(-50%) rotateY(0deg);
  }

  to {
    transform: translateX(-50%) rotateY(360deg);
  }
}

.launch {
  color: #e32b07;
  position: absolute;
  left: 50%;
  top: 8.3rem;
  border-radius: 0.08rem;
  padding: 0.1rem 0.2rem;
  transform: translateX(-50%);
  transform-origin: center center;
  background: #fadc9c;
  box-shadow: 0 0 10px 1px rgba(253, 236, 199, 0.5);
  animation: scale 0.8s alternate linear infinite;
}

@keyframes scale {
  from {
    transform: scale3d(1, 1, 1) translateX(-50%);
  }

  to {
    transform: scale3d(1.05, 1.05, 1.05) translateX(-50%);
  }
}

.gold-font {
  color: #dcc721;
  font-weight: bold;
}

.invite {
  position: absolute;
  background: url("../assets/invite.png") center center no-repeat;
  background-size: contain;
  width: 3.76rem;
  height: 0.96rem;
  top: 10.65rem;
}
</style>


