// naming for actions and parameters

export function logInOrOut() {
    return {
        type: "LOG_IN_OR_OUT"
    };
};

export function addTask(task) {
    return {
        type: "ADD_TASK",
        payload: task
    };
};

export function removeLastTask() {
    return {
        type: "REMOVE_LAST_TASK"
    };
};