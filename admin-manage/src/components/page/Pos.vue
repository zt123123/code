<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col class="left-nav" id="order-list" :span='7'>
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border show-summary style="width: 100%">
                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column label="操作" width="100">
                  <template scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="div-btn">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span="17" v-loading.fullscreen.lock="fullscreenLoading">
          <div>
            <div class="often-goods">
              <div class="title">常用商品</div>
              <div class="often-goods-list">
                <ul>
                  <li v-for="item in oftenGoods">
                    <span>{{item.goodsName}}</span>
                    <span class="o-price">￥{{item.price}}</span>
                  </li>
                </ul>
              </div>
            </div>

            <goods></goods>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import goods from '@/components/common/goods'
  import page from '@/components/common/page'
  export default {
    name: 'hello',
    created () {
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
        .then(response => {
          console.log(response)
          this.oftenGoods = response.data
          this.fullscreenLoading = false
        })
        .catch(error => {
          console.log(error)
          this.fullscreenLoading = false
          alert('网络错误，不能访问')
        })
    },
    mounted () {
      let height = document.body.clientHeight
      let orderList = document.querySelector('#order-list')
      orderList.style.height = (height - 60) + 'px'
    },
    data () {
      return {
        msg: 'pos',
        fullscreenLoading: true,
        oftenGoods: [],
        tableData: [
          {
            goodsName: '可口可乐',
            price: 8,
            count: 1
          },
          {
            goodsName: '香辣鸡腿堡',
            price: 15,
            count: 1
          },
          {
            goodsName: '爱心薯条',
            price: 8,
            count: 1
          },
          {
            goodsName: '甜筒',
            price: 8,
            count: 1
          }]
      }
    },
    methods: {},
    components: {goods, page}
  }
</script>


<style scoped>
  .div-btn {
    margin-top: 10px;
  }

  .left-nav {
    box-shadow: 1px 0 10px #ccc;
    background-color: #F9FAFC;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
  }

  .o-price {
    color: #58B7FF;
  }
</style>
