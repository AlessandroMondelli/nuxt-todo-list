<template>
  <div class="main">
    <Jumbotron />
    <List :todoData="todoData"  />
    <addTodo :todoData="todoData" />
  </div>
</template>

<script>
import { listData } from '@/assets/data/listData.js';

export default {
    data() {
        return {
            todoData: listData,
        };
    },
}
</script>
