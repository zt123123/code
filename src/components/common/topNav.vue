<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="#">订单管理</a></el-menu-item>
          <div class="drop-menu">
            <el-dropdown split-button type="primary">
              更多菜单
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>用户管理</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>个人设置</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="avatar"></div>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>


<style scoped>
  .drop-menu {
    margin-right: 10px;
    float: right;
  }

  .avatar {
    margin: 5px 10px;
    vertical-align: middle;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url(../../../static/avatar.jpg) no-repeat;
    background-size: cover;
    background-position: 0 -5px;
  }
</style>
