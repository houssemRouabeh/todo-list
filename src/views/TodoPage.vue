<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <form @submit.prevent="addTodo">
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          v-model="newTodo"
        />
      </form>
    </header>
    <TodoList
      :todos="filteredTodos"
      @on-done="onDone"
      @on-delete="onDelete"
      @update-title="updateTask"
    />
    <TodoInfo
      :todos="todos"
      :filter="filter"
      @set-filter="setFilter"
      @clear-completed="clearCompleted"
    />
  </section>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import TodoInfo from "../components/TodoInfo.vue";

export default {
  name: "TodoPage",
  components: {
    TodoList,
    TodoInfo,
  },
  data() {
    return {
      newTodo: "",
      todos: [],
      filter: "all",
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "completed") {
        return this.todos.filter((todo) => todo.isDone);
      } else if (this.filter === "active") {
        return this.todos.filter((todo) => !todo.isDone);
      } else {
        return this.todos;
      }
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        const newId =
          this.todos.length > 0
            ? Math.max(...this.todos.map((todo) => todo.id)) + 1
            : 1;
        this.todos.push({
          id: newId,
          title: this.newTodo,
          isDone: false,
        });
        this.newTodo = "";
      }
    },
    onDone(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    onDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    updateTask(id, newTitle) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle;
      }
    },
    setFilter(filter) {
      this.filter = filter;
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.isDone);
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #111111;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

:focus {
  outline: 0;
}

.hidden {
  display: none;
}

.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.4);
}

.todoapp h1 {
  position: absolute;
  top: -200px;
  width: 100%;
  font-size: 80px;
  font-weight: 200;
  text-align: center;
  color: #b83f45;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .toggle-all,
  .todo-list li .toggle {
    background: none;
  }

  .todo-list li .toggle {
    height: 40px;
  }
}

@media (max-width: 430px) {
  .footer {
    height: 50px;
  }

  .filters {
    bottom: 10px;
  }
}
</style>
