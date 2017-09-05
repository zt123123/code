<template>
  <div class="block">
    <el-carousel :interval='2000'>
      <el-carousel-item v-for="item in picList" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        picList: [
          '../static/1.jpg',
          '../static/2.jpg',
          '../static/3.jpg',
          '../static/4.jpg'
        ]
      };
    },
    mounted(){
    },
    methods: {}
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .block img{
    width: 100%;
  }

</style>
