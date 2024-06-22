<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <TodoTask
        v-for="todo in todos"
        :key="todo.id"
        :title="todo.title"
        :done="todo.isDone"
        @on-done="onDone(todo.id)"
        @on-delete="onDelete(todo.id)"
        @update-title="(newTitle) => updateTitle(todo.id, newTitle)"
      />
    </ul>
  </section>
</template>

<script>
import TodoTask from "./TodoTask.vue";

export default {
  name: "TodoList",
  components: {
    TodoTask,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onDone(id) {
      this.$emit("on-done", id);
    },
    onDelete(id) {
      this.$emit("on-delete", id);
    },
    updateTitle(id, newTitle) {
      this.$emit("update-title", id, newTitle);
    },
  },
};
</script>

<style></style>
