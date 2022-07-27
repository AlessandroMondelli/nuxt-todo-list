<template>
    <div class="todo-add-wrap">
        <div @click="openAddTodo()" class="todo-add-button"> {{ buttonChar }} </div>
        <AddForm class="todo-add-all-wrap" :class="formOpened" :todoData="todoData" />
    </div>
</template>

<script>
export default {
    props: [ 'todoData' ],
    data() {
        return {
            formOpened: 'no-active',
            buttonChar: '+'
        }
    },
    methods: {
        openAddTodo() {
            if( this.formOpened == 'no-active' ) {
                this.formOpened = 'active';
                this.buttonChar = '-';
            } else {
                this.formOpened = 'no-active';
                this.buttonChar = '+';
            }
        }
    }
}
</script>

<style scoped>
.todo-add-wrap {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
}

.todo-add-button {
    background-color: rgb(100, 6, 100);
    color: white;
    font-size: 32px;
    width: 3.5rem;
    text-align: center;
    padding: 5px;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.todo-add-button:hover {
    cursor: pointer;
    transform: scale(0.95);
}

.todo-add-all-wrap {
    transition: opacity 0.3s ease;
}

.todo-add-all-wrap.no-active {
    opacity: 0;
}

.todo-add-all-wrap.active {
    opacity: 1;
}
</style>