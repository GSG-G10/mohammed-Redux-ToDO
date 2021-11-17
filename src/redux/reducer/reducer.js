const initState = {
    todos: [],
    text: "",
    selected: undefined
};

const setPersit = todos =>
    window.localStorage.setItem("todos2", JSON.stringify(todos));

export const addTodo = (state = initState, action) => {

    switch (action.type) {

        case "PERSIST_TODOS":
            const todos = JSON.parse(window.localStorage.getItem("todos2"));
            return { ...state, todos: todos ? todos : [] };

        case "ADD_TODO":
            const todos2 = state.todos.concat(action.payload);
            window.localStorage.setItem("todos2", JSON.stringify(todos2));
            return { ...state, todos: todos2, text: "" };

        case "DELETE_TODO":
            const todo3 = state.todos.filter((todo, i) => i !== action.payload);
            setPersit(todo3);
            return {
                ...state,
                todos: todo3
            };

        default:
            return state;
    }
};
