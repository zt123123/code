<template>
  <div id="app">
    <div id="cover"></div>
     <my-header></my-header>
     <todo></todo>
     <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./todo/header.vue";
import MyFooter from "./todo/footer.jsx";
import Todo from "./todo/todo.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
    Todo
  },
  data() {
    return {
      text: "222222",
      p: 44444
    };
  },
  methods: {
    handleClick: function() {
      alert(132);
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  // background-color: #f00;
  border-radius: 50%;
}
</style>


