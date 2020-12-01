import { combineReducers } from "@reduxjs/toolkit";

import tasksReducers from "../components/taskList/TaskListSlice";

const rootReducer = combineReducers({
  tasksReducers,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
