import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let idNum = 0;

export interface Task {
  id: number;
  content: string;
  status: boolean;
  list: string;
}

export type InitialStateType = {
  tasks: Task[];
  lists: string[];
  currentList: string;
};

const initialState: InitialStateType = {
  lists: ["All", "list A", "list B"],
  tasks: [
    { id: 0, content: "Test task 1", list: "list A", status: true },
    { id: 1, content: "Test task 2", list: "list A", status: false },
    { id: 2, content: "Test task 3", list: "list B", status: false },
    { id: 3, content: "Test task 4", list: "list B", status: false },
  ],
  currentList: "All",
};

const taskListSlice = createSlice({
  name: "TaskLists",
  initialState,
  reducers: {
    addTask: (
      state,
      {
        payload: { content, list },
      }: PayloadAction<Pick<Task, "content" | "list">>
    ) => {
      const newTask: Task = {
        content,
        list,
        status: false,
        id: idNum++,
      };
      state.tasks.unshift(newTask);
    },
    editTask: (
      state,
      { payload }: PayloadAction<Pick<Task, "id" | "content">>
    ) => {
      let taskToEdit = state.tasks.find((task) => task.id === payload.id);
      if (taskToEdit) {
        taskToEdit.content = payload.content;
      }
    },
    deleteTask: (state, { payload }: PayloadAction<Pick<Task, "id">>) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };
    },
    addNewList: (state, { payload }: PayloadAction<{ newList: string }>) => {
      state.lists.push(payload.newList);
      state.currentList = payload.newList;
    },
    deleteList: (
      state,
      { payload: { listToDelete } }: PayloadAction<{ listToDelete: string }>
    ) => {
      return {
        ...state,
        lists: state.lists.filter((list) => list !== listToDelete),
        tasks: state.tasks.filter((task) => task.list !== listToDelete),
        currentList: "All",
      };
    },
    toggleTaskStatus: (state, { payload }: PayloadAction<Pick<Task, "id">>) => {
      let taskToToggle = state.tasks.find((task) => task.id === payload.id);
      if (taskToToggle) {
        taskToToggle.status = !taskToToggle.status;
      }
    },
    setCurrentList: (
      state,
      { payload }: PayloadAction<{ listName: string }>
    ) => {
      state.currentList = payload.listName;
    },
  },
});

export default taskListSlice.reducer;
export const {
  addTask,
  editTask,
  toggleTaskStatus,
  deleteTask,
  addNewList,
  deleteList,
  setCurrentList,
} = taskListSlice.actions;
