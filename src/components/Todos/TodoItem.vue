<template>
  <div :class="['todo-item', { completed: todo.completed }]">
    <h3 class="todo-title">{{ todo.title }}</h3>
    <p class="todo-description">{{ todo.description }}</p>
    
    <div class="todo-meta">
      <span :class="['priority', todo.priority]">{{ todo.priority }}</span>
      <span class="due-date">
        {{ formattedDate }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['todo'])

const formattedDate = computed(() =>
  props.todo.dueDate ? new Date(props.todo.dueDate).toLocaleDateString() : 'No date'
)
</script>

<style scoped>
.todo-item {
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background-color: #ffffff;
}

.todo-item.completed {
  background-color: #d1fae5; /* light green */
}

.todo-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.todo-description {
  font-size: 13px;
  color: #6b7280; /* gray-500 */
  margin: 4px 0 0 0;
}

.todo-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 8px;
}

.priority.high {
  color: #dc2626; /* red-600 */
}

.priority.medium {
  color: #ca8a04; /* yellow-600 */
}

.priority.low {
  color: #16a34a; /* green-600 */
}
</style>
