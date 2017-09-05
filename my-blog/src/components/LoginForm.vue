<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="age">
      <el-input v-model.number="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from 'axios'
  import store from '../store/store'
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        username: '',
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('/api/login', {
              'username': this.ruleForm2.pass,
              'password': this.ruleForm2.age
            }).then((res) => {
              console.log(res.data)
              if (res.data.errorcode == 0) {
                this.ruleForm2.pass = ''
                this.ruleForm2.age = ''
                this.$message({
                  message: `欢迎回来，${res.data.username}`,
                  type: 'success'
                });
                this.$emit('closeDialog', [false, res.data.username, true])
//                this.$store.commit('closeDialog');
              } else {
                this.$message({
                  message: res.data.errordesc,
                  type: 'error'
                });
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      openDialog(){
        this.$store.commit('openDialog')
      },
      closeDialog(){
        this.$store.commit('closeDialog')
      }
    },
    store,
    computed: mapState(['count'])
  }
</script>
