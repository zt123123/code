<template>
  <div class="block">
    <el-row type="flex" class="row-bg" justify="end">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <span v-if="showName">
          <el-menu-item index="3">{{username}}</el-menu-item>
          <el-menu-item index="4" @click='logout'>登出</el-menu-item>
        </span>
        <span v-else>
          <el-menu-item index="5" @click='openDialog("login")'>登陆</el-menu-item>
          <el-menu-item index="6" @click='openDialog("register")'>注册</el-menu-item>
        </span>
      </el-menu>
      <div style="height: 60px;line-height: 60px;padding: 0 10px;">
        <img src="../assets/logo.png" alt="" width="30" style="vertical-align: middle;">
      </div>
    </el-row>
    <el-dialog title="欢迎来到我的博客" size="tiny" :visible.sync="dialogFormVisible">
      <tabs v-on:closeDialog2="close" :formdata="formdata"></tabs>
    </el-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import Dialogs from '@/components/Dialog'
  import Tabs from '@/components/Tabs'
  import store from '../store/store'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'navheader',
    data () {
      return {
        showName: false,
        activeIndex: '1',
        dialogFormVisible: false,
        msg: '111111',
        formdata: 'login',
        username: ''
      }
    },
    mounted(){
      this.checkLogin();
    },
    methods: {
      close(param){
        this.showName = param[2];
        this.username = param[1];
        this.dialogFormVisible = param[0];
        console.log('i am nav:' + param[0] + '-----' + param[1]);
        console.log('i am nav:' + this.showName);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      checkLogin(){
        axios.post('/api/checkLogin').then((res) => {
          if (res.data.errorcode == 1) {
            this.showName = true
            this.username = res.data.username
            console.log(res.data.username)
          }
        })
      },
      login(){
        alert(123)
      },
      logout(){
        axios.post('/api/logout').then((res) => {
          this.username = '';
          this.showName = false;
          console.log(res.data);
          console.log(this.username);
        })
      },
      openDialog(type){
        this.dialogFormVisible = true;
        this.formdata = type;
      }
    },
    components: {
      Dialogs,
      Tabs
    },
    store
  }
</script>


<style scoped>
  .block {
    background-color: #324157;
  }
</style>
