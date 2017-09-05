<template>
  <div class="app">
    <nav-header></nav-header>
    <carousel></carousel>
    <el-row :gutter="20" class="full">
      <el-col :span="12">
        <card></card>
        <pager></pager>
      </el-col>
      <el-col :span="12">
        <table-list></table-list>
        <!--<pager></pager>-->
        <date-picker></date-picker>
        <tags></tags>
      </el-col>
    </el-row>

    <nav-footer></nav-footer>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import TableList from '@/components/Table'
  import Pager from '@/components/Pager'
  import Card from '@/components/Card'
  import Tags from '@/components/Tags'
  import Carousel from '@/components/Carousel'
  import DatePicker from '@/components/DatePicker'
  export default {
    name: 'app',
    data(){
      return {}
    },
    mounted(){

    },
    methods: {},
    components: {
      NavHeader,
      TableList,
      Pager,
      Card,
      Tags,
      Carousel,
      NavFooter,
      DatePicker
    }
  }
</script>

<style>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .full {
    margin: 10px 0 !important;
  }
</style>
