<template>
    <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

        <div style="float: right;">
            <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
            <div class="avatar"></div>
        </div>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .item {
        margin-right: 30px;
    }

    .item sup {
        top: 18px !important;
    }

    .avatar {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
        padding: 5px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: url("https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9b62ad59.jpg") no-repeat center center;
        background-size: contain;
        background-clip: content-box;
        overflow: hidden;
    }
</style>