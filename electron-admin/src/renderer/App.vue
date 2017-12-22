<template>
    <div id="app">
        <el-container>
            <el-header>
                <top-nav></top-nav>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-openeds="['1']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">
                                    <router-link tag="li" to="/user/table">表格</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-2">
                                    <router-link tag="li" to="/user/chart">统计图</router-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>数据分析</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="2-1">
                                    <router-link tag="li" to="/authority/index">管理</router-link>
                                </el-menu-item>
                                <el-menu-item index="2-2">
                                    <router-link tag="li" to="/authority/card">表格</router-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>权限设置</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="3-1">
                                    <router-link tag="li" to="/analyse/add">管理</router-link>
                                </el-menu-item>
                                <el-menu-item index="3-2">
                                    <router-link tag="li" to="/analyse/form">管理</router-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>

                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Nav from "./components/Menu/MenuTree.vue"
    import TopNav from "./components/Nav/TopNav.vue"
    export default {
        name: 'my-project',
        components: {Nav, TopNav}
    }
</script>

<style>
    /* CSS */
</style>
