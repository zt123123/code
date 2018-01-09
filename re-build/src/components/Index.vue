<template>
  <div>
    <von-header theme="dark">
      <button class="button button-icon ion-navicon" slot="right" @click="show"></button>
      <span slot="title">标题文字</span>
    </von-header>
    <div style="padding-top: 44px;">
      <cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        routes: {
          0: "/",
          1: "/about",
          2: "/list",
          3: "/",
          4: "/",
          5: "/",
          6: "/",
        },
        msg: 'Hello! Vonic.',
        entrances: [
          '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
          '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
          '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>'
        ]
      }
    },
    methods: {
      onCellClick(e) {
        $router.forward(this.routes[e])
      },
      show() {
        // $dialog.show("confirm", {
        //   theme: "ios",
        //   type: "confirm"
        // })

        $sidebar._init("11").toggle()
      }
    }
  }
</script>
<style>
  h2 {
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    color: #888;
  }

  .page.has-navbar .page-content {
    padding-top: 100px;
  }
</style>
