<template>
  <footer class="footer">
    <span class="todo-count"
      ><strong>{{ activeTodos.length }}</strong> item left</span
    >
    <ul class="filters">
      <li>
        <a @click="setFilter('all')" :class="{ selected: filter === 'all' }"
          >All</a
        >
      </li>
      <li>
        <a
          @click="setFilter('active')"
          :class="{ selected: filter === 'active' }"
          >Active</a
        >
      </li>
      <li>
        <a
          @click="setFilter('completed')"
          :class="{ selected: filter === 'completed' }"
          >Completed</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clearCompleted">
      Clear completed ({{ completedTodos.length }})
    </button>
  </footer>
</template>

<script>
export default {
  name: "TodoInfo",
  props: {
    todos: {
      type: Array,
      required: true,
    },
    filter: {
      type: String,
      required: true,
    },
  },
  computed: {
    activeTodos() {
      return this.todos.filter((todo) => !todo.isDone);
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.isDone);
    },
  },
  methods: {
    setFilter(filter) {
      this.$emit("set-filter", filter);
    },
    clearCompleted() {
      this.$emit("clear-completed");
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
  float: left;
  text-align: left;
}

.todo-count strong {
  font-weight: 300;
}

.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
}

.filters li {
  display: inline;
  cursor: pointer;
}

.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

.clear-completed,
html .clear-completed:active {
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
}

.clear-completed:hover {
  text-decoration: underline;
}

.info {
  margin: 65px auto 0;
  color: #4d4d4d;
  font-size: 11px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}

.info p {
  line-height: 1;
}

.info a {
  color: inherit;
  text-decoration: none;
  font-weight: 400;
}

.info a:hover {
  text-decoration: underline;
}
</style>
