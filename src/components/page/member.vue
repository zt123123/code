<template>
  <div style="padding: 10px;">
    <div style="margin-bottom: 10px;">
      <el-row>
        <el-col :span='5'>
          <el-input
            placeholder="搜索"
            icon="search">
          </el-input>
        </el-col>
        <el-col :span='5'>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span='7'>
          <div class="block">
            <el-date-picker type="date"
                            placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span='7'>
          <el-button style="float: right;" type="primary" icon="plus">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column prop="opt" label="操作">
        <template scope="scope">
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">增加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <page></page>
  </div>
</template>

<script>
  import page from '@/components/common/page'
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            opt: '查看'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            opt: '查看'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
    components: {page}
  }
</script>

<style>
  .el-table tr {
    text-align: left;
  }
</style>
