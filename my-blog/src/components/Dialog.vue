<template>
  <el-dialog :show-close="false" title="收货地址" size="tiny" :visible.sync="dialogFormVisible">
    <tabs></tabs>
  </el-dialog>
</template>

<script>
  import Tabs from '@/components/Tabs'
  import store from '../store/store'
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'dialog',
    data(){
      return {
//        dialogFormVisible: false,
      }
    },
    store,
    computed: mapState(['dialogFormVisible']),
    mounted(){

    },
    methods: {},
    components: {
      Tabs
    }
  }
</script>

<style>

</style>
