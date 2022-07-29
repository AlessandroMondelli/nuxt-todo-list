export const state = () => ({
    listData: []
});

export const mutations = {
    addItemList( state, todoContent ) {
        let todoIndex = state.listData.length + 1;
        let newTodo = {
            id: todoIndex,
            content: todoContent
        }

        state.listData.push(newTodo);
    },
    deleteItemList( state, id ) {
        let itemIndex = state.listData.findIndex( el => el.id == id );

        state.listData.splice( itemIndex, 1 );
    }
}