<template>
<div>
    <input v-model="txt" autofocus placeholder="做什么？" type="text" @keyup.enter="add" />
    <item  
    :key="todo.id"
    v-for="todo in filterTodos"
    @del='deleteTodo' 
    :todo="todo" />
    <tabs @clearAll='clearAll' @toggle='toggleFilter' :todos='todos' :filter="filter"></tabs>
</div>
</template>
<script>
import Tabs from "./tabs.vue";
import Item from "./item.vue";
export default {
  components: {
    Item,
    Tabs
  },
  data() {
    return {
      txt: "",
      todos: [],
      filter: "all"
    };
  },
  computed: {
    filterTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  },
  methods: {
    add() {
      if (this.txt !== "") {
        this.todos.unshift({
          id: this.todos.length,
          completed: false,
          content: this.txt.trim()
        });
      }
      this.txt = "";
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAll() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    deleteTodo(id) {
      // console.log(id);

      // alert("delete");
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    }
  }
};
</script>
