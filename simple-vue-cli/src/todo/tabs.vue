<template>
  <div class="tabs">
    <span class="left">{{unFinishedLength}} items left</span>
    <span class="tab-item">
      <span @click="toggleFilter(state)" :class="[filter===state?'active':'']" :key="state" v-for="state in states">{{state}}</span>
    </span>
    <span class="clearAll" @click="clearAll">清除</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  computed: {
    unFinishedLength() {
      return (this.todos.filter(todo => !todo.completed)).length;
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  methods: {
    clearAll() {
      this.$emit('clearAll')
    },
    toggleFilter(state) {
      this.$emit('toggle',state)
    }
  }
};
</script>

<style lang="less" scoped>
.tabs {
  margin: 10px;
}
.clearAll {
  color: #fff;
  background-color: #f00;
}
.tab-item span {
  margin: 5px;
  padding: 5px;
  border: 1px solid #ed3c00;
}
.tab-item span.active {
  border-radius: 5px;
  background-color: #ed3c00;
  color: #fff;
}
</style>


