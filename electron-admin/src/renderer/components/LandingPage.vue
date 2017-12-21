<template>
    <el-container>
        <el-header>
            <top-nav></top-nav>
        </el-header>
        <el-container>
            <el-aside>
                <tree-menu></tree-menu>
            </el-aside>
            <el-main>
                <div class="breadcrumb-wrapper">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="search-area">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="dialogVisible = true">添加表单</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div>
                    <el-dialog
                            title="提示"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域">
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="活动时间">
                                <el-col :span="11">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                    style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col class="line" :span="2">-</el-col>
                                <el-col :span="11">
                                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                                                    style="width: 100%;"></el-time-picker>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="即时配送">
                                <el-switch v-model="form.delivery"></el-switch>
                            </el-form-item>
                            <el-form-item label="活动性质">
                                <el-checkbox-group v-model="form.type">
                                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="特殊资源">
                                <el-radio-group v-model="form.resource">
                                    <el-radio label="线上品牌商赞助"></el-radio>
                                    <el-radio label="线下场地免费"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="活动形式">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                    </el-dialog>
                </div>
                <my-table></my-table>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                </el-pagination>
            </el-main>
        </el-container>
        <div class="footer">
            <el-footer>
                <p class="copyright">2017CopyRight&copy;版权</p>
            </el-footer>
        </div>
    </el-container>
</template>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .el-dialog {
        width: 60% !important;
    }

    .el-header {
        padding: 0;
    }

    .breadcrumb-wrapper {
        background-color: #eee;
        padding: 20px 15px;
    }

    .search-area {
        padding-top: 20px;
    }

    .footer {
        background-color: #000;
        width: 100%;
        color: #fff;
        height: 40px;
        line-height: 40px;
        position: fixed;
        left: 0;
        bottom: 0;
        text-align: center;
    }

    .copyright {
        margin: 0;
        text-align: center;
    }
</style>

<script>
    import SystemInformation from './LandingPage/SystemInformation'
    import TreeMenu from './Menu/MenuTree'
    import MyTable from './MyTable/MyTable'
    import TopNav from './Nav/TopNav'
    export default {
        name: 'landing-page',
        components: {
            SystemInformation, TreeMenu, MyTable, TopNav
        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                formInline: {
                    user: '',
                    region: ''
                },
                dialogVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$alert('这是一段内容', '标题名称', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            },
            addForm(){

            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            }
        }
    };
</script>
