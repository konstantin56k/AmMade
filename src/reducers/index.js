// place to create all in ane reducer

import { combineReducers } from "redux";
import taskList from "./taskList";

const allReducers = combineReducers({
    taskList
});

export default allReducers;