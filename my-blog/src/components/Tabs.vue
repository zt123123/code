<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-on:closeDialog="close" label="用户登陆" name="login">
      <login-form v-on:closeDialog="close"></login-form>
    </el-tab-pane>
    <el-tab-pane v-on:closeDialog="close" label="注册用户" name="register">
      <registe-form v-on:closeDialog="close"></registe-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  import LoginForm from '@/components/LoginForm'
  import RegisteForm from '@/components/RegisteForm'
  import store from '../store/store'
  import {mapState, mapMutations} from 'vuex'
  export default {
    props: ['formdata'],
    created(){
      console.log(this.$props.formdata)
    },
    data() {
      return {
        activeName: this.$props.formdata
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      close(param){
        console.log('i am tabs:'+param[0]+'-----'+param[1])
        this.$emit('closeDialog2', param)
      }
    },
    components: {
      LoginForm,
      RegisteForm
    },

    store
  };
</script>
