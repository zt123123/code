<template>
  <el-row :gutter="20">
    <el-col :span="8" v-for="(item, index) in articleList" :key="index">
      <el-card :body-style="{ padding: '0px' }">
        <div class="imgBox">
          <img :src="item.imgSrc" class="image">
        </div>
        <div style="padding: 14px;">
          <span>{{item.summary}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">查看详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loading: true,
        currentDate: new Date().toLocaleString(),
        articleList: []
      };
    },
    mounted(){
      this.getArticle()
    },
    methods: {
      getArticle(){
        axios.post('http://localhost:8080/api/getArticle').then((res) => {
//          console.log(res)
          this.articleList = res.data
          this.loading = false
        })
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .imgBox {
    max-height: 100px;
    overflow: hidden;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
