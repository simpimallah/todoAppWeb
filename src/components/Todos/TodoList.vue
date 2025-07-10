<template>
  <div class="todo-list-container">
    <draggable
      v-model="todos"
      item-key="_id"
      class="todo-draggable"
      @end="onDragEnd"
    >
      <template #item="{ element }">
        <div class="todo-draggable-item">
          <TodoItem :todo="element" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue'
import { useTodoStore } from '../../store/todoStore'
import TodoItem from './TodoItem.vue'
import draggable from 'vuedraggable'

const todoStore = useTodoStore()

onMounted(() => {
  todoStore.fetchTodos()  // Fetch on load
})

// Two-way reactive list for vuedraggable
const todos = computed({
  get: () => todoStore.todos,
  set: (val) => todoStore.setTodos(val)  // Update the store when reordered
})

// Optional: Sync order after drag
function onDragEnd() {
  todoStore.saveTodoOrder()
}
</script>

<style scoped>
.todo-list-container {
  width: 100%;
}

.todo-draggable {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.todo-draggable-item {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.todo-draggable-item:active {
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
