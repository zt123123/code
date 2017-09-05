<template>
  <div class="block">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="className"
        label="班级">
      </el-table-column>
      <el-table-column fixed="right" width="180" label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="修改数据"
      :visible.sync="dialogVisible"
      size="tiny">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="姓名">
          <el-input v-model="editData.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="editData.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="value">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="editData.className"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleUpdateData">修改</el-button>
  </span>
    </el-dialog>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totalPage"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'hello',
    data () {
      return {
        options: [{
          value: '男',
          label: '男'
        }, {
          value: '女',
          label: '女'
        }],
        value: '',
        tableData: [],
        totalPage: 0,
        pageSize: 10,
        currentPage: 1,
        dialogVisible: false,
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        editData: {},
        updateData: {}
      }
    },
    mounted(){
      this.getUser();
    },
    methods: {
      getUser(currentPage){
        axios.post('/api/getUser', {
          currentPage: currentPage ? currentPage : 1,
          pageSize: this.pageSize
        }).then((res) => {
          this.totalPage = res.data.total
          this.tableData = res.data.tableData
          this.tableData.map((val, key) => {
            this.tableData[key].gender = this.tableData[key].gender == true ? '男' : '女'
          })
        })
      },
      changePage(currentPage){
        this.currentPage = currentPage;
        this.getUser(currentPage)
      },
      handleUpdateData(){
        this.dialogVisible = false;
        this.updateData.gender = this.value;
        this.updateData = this.editData;
        axios.post('/api/updateUser', this.updateData).then((res) => {
          if (res.data.errorcode == 0) {
            this.$notify({
              title: '提示',
              message: res.data.errordesc,
              type: 'success'
            });

            this.getUser(this.currentPage)
          }
        })
      },
      handleEdit(index, row){
        this.dialogVisible = true
        this.editData = row
        this.value = this.editData.gender
      },
      handleDelete(index, row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          axios.post('/api/deleteUser', row).then((res) => {
            if (res.data.errorcode == 0) {
              this.$message({
                type: 'success',
                message: res.data.errordesc
              });
              this.getUser(this.currentPage)
            }
          })


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>


<style scoped>
  .block {
    margin: 10px auto;
    text-align: center;
  }
</style>
