<template>
  <div class="goods-type" v-loading.fullscreen.lock="fullscreenLoading">

    <el-tabs>
      <el-tab-pane label="全部">
        <div>
          <ul class='cookList'>
            <li v-for="goods in type0Goods">
              <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
              <div class="name-price">
                <div class="foodName">{{goods.goodsName}}</div>
                <div class="foodPrice">￥{{goods.price}}元</div>
              </div>
            </li>
            <li v-for="goods in type1Goods">
              <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
              <div class="name-price">
                <div class="foodName">{{goods.goodsName}}</div>
                <div class="foodPrice">￥{{goods.price}}元</div>
              </div>
            </li>
            <li v-for="goods in type2Goods">
              <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
              <div class="name-price">
                <div class="foodName">{{goods.goodsName}}</div>
                <div class="foodPrice">￥{{goods.price}}元</div>
              </div>
            </li>
            <li v-for="goods in type3Goods">
              <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
              <div class="name-price">
                <div class="foodName">{{goods.goodsName}}</div>
                <div class="foodPrice">￥{{goods.price}}元</div>
              </div>
            </li>
          </ul>
          <page class="page"></page>
        </div>
      </el-tab-pane>
      <el-tab-pane label="汉堡">
        <div>
          <ul class='cookList'>
            <li v-for="goods in type0Goods">
              <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
              <div class="name-price">
                <div class="foodName">{{goods.goodsName}}</div>
                <div class="foodPrice">￥{{goods.price}}元</div>
              </div>
            </li>
          </ul>
          <page class="page"></page>
        </div>
      </el-tab-pane>
      <el-tab-pane label="小食">
        <ul class='cookList'>
          <li v-for="goods in type1Goods">
            <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
            <div class="name-price">
              <div class="foodName">{{goods.goodsName}}</div>
              <div class="foodPrice">￥{{goods.price}}元</div>
            </div>
          </li>
        </ul>
        <page class="page"></page>
      </el-tab-pane>
      <el-tab-pane label="饮料">
        <ul class='cookList'>
          <li v-for="goods in type2Goods">
            <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
            <div class="name-price">
              <div class="foodName">{{goods.goodsName}}</div>
              <div class="foodPrice">￥{{goods.price}}元</div>
            </div>
          </li>
        </ul>
        <page class="page"></page>
      </el-tab-pane>
      <el-tab-pane label="套餐">
        <ul class='cookList'>
          <li v-for="goods in type3Goods">
            <div class="foodImg"><img :src="goods.goodsImg" width="100%"></div>
            <div class="name-price">
              <div class="foodName">{{goods.goodsName}}</div>
              <div class="foodPrice">￥{{goods.price}}元</div>
            </div>
          </li>
        </ul>
        <page class="page"></page>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import axios from 'axios'
  import page from '@/components/common/page'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'goods',
        fullscreenLoading: true,
        type0Goods: [],
        type1Goods: [],
        type2Goods: [],
        type3Goods: []
      }
    },
    created () {
      axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response => {
//          console.log(this.oftenGoods = response.data)

          this.type0Goods = response.data[0]
          this.type1Goods = response.data[1]
          this.type2Goods = response.data[2]
          this.type3Goods = response.data[3]
          setTimeout(() => {
            this.fullscreenLoading = false
          }, 1000)
        })
        .catch(error => {
          console.log(error)
          this.fullscreenLoading = false
          alert('网络错误，不能访问')
        })
    },
    methods: {
      handleClick: () => {
        alert('111111111')
      }
    },
    components: {page}
  }
</script>


<style scoped>
  .goods-type {
    clear: both;
  }

  .cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;

  }

  .cookList {
    text-align: left;
    overflow: hidden;
  }

  .cookList li span {
    display: block;
    float: left;
  }

  .foodImg {
    width: 40%;
  }

  .foodImg, .name-price {
    vertical-align: top;
    display: inline-block;
  }

  .foodName {
    white-space: nowrap;
    text-align: left;
    font-size: 18px;
    padding-left: 10px;
    color: brown;

  }

  .foodPrice {
    text-align: left;
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
  }

  @media screen and (max-width: 1400px) {
    .foodName {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1250px) {
    .foodName {
      font-size: 14px;
    }

    .cookList li {
      width: 30%;
    }
  }
</style>
