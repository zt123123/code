<template>
  <div id="app">
    <fix-header :title="title" :showBack="showBack"></fix-header>
    <div class="scroll-view">
      <transition :name="viewTransition">
        <router-view class="router-view"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { Loading, cookie } from "vux";
import { mapState } from "vuex";
import FixHeader from "./components/layout/FixHeader";
import { setTimeout } from "timers";
import matchTitle from "./public/common";
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    cookie.set("token", "123", {
      expires: 1
    });
  },
  components: {
    Loading,
    FixHeader
  },
  computed: {
    ...mapState({
      direction: state => state.vux.direction,
      isLoading: state => state.vux.Loading
    }),
    title() {
      const path = this.$route.path;
      return this.matchTitle(path);
    },
    showBack() {
      if (this.$route.path !== "/") return true;
    },
    viewTransition() {
      if (!this.direction) return "";
      return "vux-pop-" + (this.direction === "forward" ? "in" : "out");
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
.scroll-view {
  background-image: linear-gradient(90deg, #822726 20%, #8e2627, #8e2627 80%);
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  top: 46px;
  bottom: 0;
  overflow: scroll;
}
.router-view {
  width: 100%;
  top: 46px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
