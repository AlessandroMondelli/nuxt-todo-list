<template>
  <div class="list container">
    <ul class="todo-list">
        <li class="todo-el" v-for="todoEl in listData" :key="todoEl.id" @click="deleteTodo(todoEl.id)"><span class="todo-id">{{ todoEl.id }}.</span>{{ todoEl.content }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
    methods: {
        deleteTodo( todoId ) {
            this.deleteItemList( todoId );
        },
        ...mapMutations([ 'deleteItemList' ])
    },
    computed: {
        ...mapState([
            'listData'
        ])
    }
}
</script>

<style scoped>
    .todo-list {
        max-height: 60vh;
        overflow-y: auto;
    }

    .todo-list .todo-el {
        transition: all 0.2s ease;
    }

    .todo-list .todo-el:not(:last-child) {
        margin-bottom: 1rem;
    }

    .todo-list .todo-el:hover {
        cursor: pointer;
        color: rgb(189, 64, 64)
    }

    .todo-list li .todo-id {
        margin-right: 0.3rem;
    }
</style>