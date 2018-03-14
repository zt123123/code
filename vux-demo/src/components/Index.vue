<template>
  <div class="container">
      <grid>
        <grid-item :key="item.name" :label="item.name" v-if="index%2==0" v-for="(item,index) in game">
          <img slot="icon" :src="item.src">
          <x-button class="round-btn" mini plain>启动</x-button>        
        </grid-item>
      </grid>
      <grid>
        <grid-item :key="item.name" :label="item.name" v-for="item in game">
          <img slot="icon" :src="item.src">
          <x-button class="round-btn" mini plain>启动</x-button>
        </grid-item>
      </grid>
    
      <swiper auto loop :interval='interval' :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>

      <panel :header="'牌友话题'" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>
</template>

<script>
import {
  XButton,
  Panel,
  Swiper,
  XHeader,
  Group,
  Cell,
  Grid,
  GridItem
} from "vux";

export default {
  components: {
    Panel,
    Swiper,
    XHeader,
    Group,
    Cell,
    Grid,
    GridItem,
    XButton
  },
  mounted() {
  },
  data() {
    return {
      interval: 1000,
      demo01_index: 0,
      demo01_list: [
        {
          url: "/detail",
          img: "https://static.vux.li/demo/1.jpg",
          title: "送你一朵fua"
        },
        {
          url: "/detail",
          img: "https://static.vux.li/demo/2.jpg",
          title: "送你一辆车"
        },
        {
          url: "/detail",
          img: "https://static.vux.li/demo/3.jpg",
          title: "送你一次旅行"
        }
      ],
      msg: "Hello World!",
      game: [
        {
          src: "http://wx.imi78.com/materiel/gameimg/102.png",
          name: "欢乐斗地主"
        },
        {
          src: "http://wx.imi78.com/materiel/gameimg/201.png",
          name: "徐州麻将"
        },
        {
          src: "http://wx.imi78.com/materiel/gameimg/203.png",
          name: "临沂麻将"
        }
      ],
      type: "1",
      list: [
        {
          src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题一",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/detail"
        },
        {
          src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "标题二",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/detail",
          meta: {
            source: "来源信息",
            date: "时间",
            other: "其他信息"
          }
        }
      ],
      footer: {
        title: "查看更多",
        url: "/detail"
      }
    };
  },
  methods: {
    demo01_onIndexChange(index) {
      this.demo01_index = index;
    },
    onImgError(item, $event) {}
  }
};
</script>

<style scoped>
.container {
  background-color: #fbf9fe;
}
.weui-grid {
  text-align: center;
}
.round-btn {
  border: 1px solid #979797;
  border-radius: 100px;
}
</style>
