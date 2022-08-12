/* This is a reducer that holds the state. We can add
many actions to handle state*/

function taskList(state = ['clean a room'], action) {
    switch(action.type) {
        case "ADD_TASK":
            return [...state, action.payload]
        case "REMOVE_LAST_TASK":
            return state.slice(0, -1)
        default:
            return state
    };
};

export default taskList;