<template>
    <div class="todo-add-form-wrap">
        <div class="todo-add-form">
            <form @submit.prevent="submitForm">
                <label for="todo-content">
                    Inserisci elemento alla lista
                    <input id="todo-content" name="todo-content" type="text" v-model="todoEl" />
                    <button class="todo-add-save" type="submit">Salva elemento</button>
                </label>
            </form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            todoEl: '',
        }
    },
    methods: {
        submitForm() {
            this.addItemList( this.todoEl );

            this.todoEl = '';
        },
        ...mapMutations([ 'addItemList' ])
    }
}
</script>

<style scoped>
    .todo-add-form-wrap {
        position: fixed;
        width: 100vw;
        height: 100vh;
    }

    .todo-add-form {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50% );
        width: 35%;
        background-color: #FFF;
        border: 1px solid black;
        padding: 2rem;
    }

    .todo-add-form input {
        border: 1px solid black;
        border-radius: 24px;
        margin: 0 1rem;
        padding: 0 1rem;
    }    

    .todo-add-save {
        margin-top: 1rem;
        padding: 0.2rem 0.5rem;
        border-radius: 25px;
        background-color: rgb(100, 6, 100);
        color: #FFF;
    }
</style>