<template>
  <div class="left-nav">
    <ul>
      <li @click="collector">
        <i class="icon iconfont icon-wodezichan"></i>
        <div>
          <router-link to="">收银</router-link>
        </div>
      </li>
      <li @click="shop">
        <i class="icon iconfont icon-dianpu"></i>
        <div>
          <router-link to="">店铺</router-link>
        </div>
      </li>
      <li @click="goods">
        <i class="icon iconfont icon-hanbao"></i>
        <div>
          <router-link to="">商品</router-link>
        </div>
      </li>
      <li @click="member">
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>
          <router-link to="">会员</router-link>
        </div>
      </li>
      <li @click="count">
        <i class="icon iconfont icon-paixing"></i>
        <div>
          <router-link to="">统计</router-link>
        </div>
      </li>
      <li @click="settings">
        <i class="icon iconfont icon-31shezhi"></i>
        <div>
          <router-link to="">设置</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {}
    },
    mounted () {

    },
    methods: {
      collector () {
        this.$router.push('/')
      },
      shop () {
        this.$router.push('/shop')
      },
      goods () {
        this.$router.push('/goods')
      },
      member () {
        this.$router.push('/member')
      },
      count () {
        this.$router.push('/count')
      },
      settings () {
        this.$router.push('/settings')
      }
    }
  }
</script>


<style scoped>
  .left-nav {
    color: #fff;
    font-size: 10px;
    height: -webkit-calc(100% - 60px);
    height: calc(100% - 60px);
    background-color: #324157;
    float: left;
    width: 5%;
  }

  .left-nav a {
    color: #fff;
    text-decoration: none;
  }

  .iconfont {
    font-size: 24px;
  }

  .left-nav ul {
    padding: 0px;
    margin: 0px;
  }

  .left-nav li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #465A79;
    padding: 10px;
    cursor: pointer;
  }
</style>
