<template>
  <div class="list">
    <li>
      <input @click="showLog" v-model="todo.completed" class="ck-box" type="checkbox" />
      <span>{{todo.content}}</span>
      <span @click="deleteTodo" class="close">x</span>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteTodo() {
      // alert("delete");
      this.$emit("del", this.todo.id);
    },
    showLog() {
      console.log(this.todo.completed);
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    position: relative;
    padding: 5px;
    border-bottom: 1px solid #eee;
    &:hover {
      cursor: pointer;
      background-color: #e3ed00;
    }
    &:hover .close {
      display: block;
    }
    .ck-box:checked + span {
      text-decoration: line-through;
      background-color: aqua;
    }
    .close {
      display: none;
      position: absolute;
      right: 10px;
      top: 5px;
      color: #fff;
      text-align: center;
      width: 10px;
      height: 10px;
      line-height: 10px;
      border-radius: 50%;
      background-color: #f00;
      padding: 5px;
    }
  }
}
</style>


