<template>
  <div class="list container">
    <ul class="todo-list">
        <li class="todo-el" v-for="todoEl in todoData" :key="todoEl.id"><span class="todo-id">{{ todoEl.id }}.</span>{{ todoEl.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props: [ 'todoData' ],
}
</script>

<style scoped>
    .todo-list {
        max-height: 60vh;
        overflow-y: auto;
    }

    .todo-list .todo-el:not(:last-child) {
        margin-bottom: 1rem;
    }

    .todo-list li .todo-id {
        margin-right: 0.3rem;
    }
</style>