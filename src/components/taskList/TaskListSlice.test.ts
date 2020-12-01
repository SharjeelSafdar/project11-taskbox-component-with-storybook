import taskListReducer, {
  addTask,
  editTask,
  InitialStateType,
  addNewList,
  deleteTask,
  deleteList,
  toggleTaskStatus,
} from "./TaskListSlice";

describe("Tests for TaskList Reducer", () => {
  test("Adding a new list works correctly", () => {
    expect(
      taskListReducer(
        { lists: [], tasks: [] },
        {
          type: addNewList.type,
          payload: {
            newList: "list A",
          },
        }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A"],
      tasks: [],
    });

    expect(
      taskListReducer(
        { lists: ["list A"], tasks: [] },
        {
          type: addNewList.type,
          payload: {
            newList: "list B",
          },
        }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A", "list B"],
      tasks: [],
    });
  });

  test("Adding a new task works correctly", () => {
    expect(
      taskListReducer(
        { tasks: [], lists: ["list A"] },
        {
          type: addTask.type,
          payload: {
            content: "Test task 1",
            list: "list A",
          },
        }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A"],
      tasks: [
        {
          id: 0,
          content: "Test task 1",
          status: false,
          list: "list A",
        },
      ],
    });

    expect(
      taskListReducer(
        {
          tasks: [
            {
              id: 0,
              content: "Test task 1",
              status: false,
              list: "list A",
            },
          ],
          lists: ["list A"],
        },
        {
          type: addTask.type,
          payload: {
            content: "Test task 2",
            list: "list A",
          },
        }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A"],
      tasks: [
        {
          id: 1,
          content: "Test task 2",
          status: false,
          list: "list A",
        },
        {
          id: 0,
          content: "Test task 1",
          status: false,
          list: "list A",
        },
      ],
    });

    expect(
      taskListReducer(
        {
          tasks: [
            {
              id: 1,
              content: "Test task 2",
              status: false,
              list: "list A",
            },
            {
              id: 0,
              content: "Test task 1",
              status: false,
              list: "list A",
            },
          ],
          lists: ["list A"],
        },
        {
          type: addTask.type,
          payload: {
            content: "Test task 3",
            list: "list A",
          },
        }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A"],
      tasks: [
        {
          id: 2,
          content: "Test task 3",
          status: false,
          list: "list A",
        },
        {
          id: 1,
          content: "Test task 2",
          status: false,
          list: "list A",
        },
        {
          id: 0,
          content: "Test task 1",
          status: false,
          list: "list A",
        },
      ],
    });
  });

  test("Editing a task works correctly", () => {
    expect(
      taskListReducer(
        {
          lists: ["list A", "list B"],
          tasks: [
            { id: 0, content: "Test task 1", list: "list A", status: false },
            { id: 1, content: "Test task 2", list: "list A", status: false },
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: editTask.type, payload: { id: 1, content: "Not test task 2" } }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A", "list B"],
      tasks: [
        { id: 0, content: "Test task 1", list: "list A", status: false },
        { id: 1, content: "Not test task 2", list: "list A", status: false },
        { id: 2, content: "Test task 3", list: "list B", status: false },
        { id: 3, content: "Test task 4", list: "list B", status: false },
      ],
    });

    expect(
      taskListReducer(
        {
          lists: ["list A", "list B"],
          tasks: [
            { id: 0, content: "Test task 1", list: "list A", status: false },
            { id: 1, content: "Test task 2", list: "list A", status: false },
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: editTask.type, payload: { id: 2, content: "Not test task 3" } }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A", "list B"],
      tasks: [
        { id: 0, content: "Test task 1", list: "list A", status: false },
        { id: 1, content: "Test task 2", list: "list A", status: false },
        { id: 2, content: "Not test task 3", list: "list B", status: false },
        { id: 3, content: "Test task 4", list: "list B", status: false },
      ],
    });
  });

  test("Deleting a task works correctly", () => {
    expect(
      taskListReducer(
        {
          lists: ["list A", "list B"],
          tasks: [
            { id: 0, content: "Test task 1", list: "list A", status: false },
            { id: 1, content: "Test task 2", list: "list A", status: false },
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: deleteTask.type, payload: { id: 1 } }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A", "list B"],
      tasks: [
        { id: 0, content: "Test task 1", list: "list A", status: false },
        { id: 2, content: "Test task 3", list: "list B", status: false },
        { id: 3, content: "Test task 4", list: "list B", status: false },
      ],
    });

    expect(
      taskListReducer(
        {
          lists: ["list A", "list B"],
          tasks: [
            { id: 0, content: "Test task 1", list: "list A", status: false },
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: deleteTask.type, payload: { id: 2 } }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A", "list B"],
      tasks: [
        { id: 0, content: "Test task 1", list: "list A", status: false },
        { id: 3, content: "Test task 4", list: "list B", status: false },
      ],
    });
  });

  test("Deleting a list and its tasks works correctly", () => {
    expect(
      taskListReducer(
        {
          lists: ["list A", "list B"],
          tasks: [
            { id: 0, content: "Test task 1", list: "list A", status: false },
            { id: 1, content: "Test task 2", list: "list A", status: false },
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: deleteList.type, payload: { listToDelete: "list A" } }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list B"],
      tasks: [
        { id: 2, content: "Test task 3", list: "list B", status: false },
        { id: 3, content: "Test task 4", list: "list B", status: false },
      ],
    });

    expect(
      taskListReducer(
        {
          lists: ["list B"],
          tasks: [
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: deleteList.type, payload: { listToDelete: "list B" } }
      )
    ).toMatchObject<InitialStateType>({
      lists: [],
      tasks: [],
    });
  });

  test("Toggling task status works correctly", () => {
    expect(
      taskListReducer(
        {
          lists: ["list A", "list B"],
          tasks: [
            { id: 0, content: "Test task 1", list: "list A", status: false },
            { id: 1, content: "Test task 2", list: "list A", status: false },
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: toggleTaskStatus.type, payload: { id: 0 } }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A", "list B"],
      tasks: [
        { id: 0, content: "Test task 1", list: "list A", status: true },
        { id: 1, content: "Test task 2", list: "list A", status: false },
        { id: 2, content: "Test task 3", list: "list B", status: false },
        { id: 3, content: "Test task 4", list: "list B", status: false },
      ],
    });

    expect(
      taskListReducer(
        {
          lists: ["list A", "list B"],
          tasks: [
            { id: 0, content: "Test task 1", list: "list A", status: true },
            { id: 1, content: "Test task 2", list: "list A", status: false },
            { id: 2, content: "Test task 3", list: "list B", status: false },
            { id: 3, content: "Test task 4", list: "list B", status: false },
          ],
        },
        { type: toggleTaskStatus.type, payload: { id: 3 } }
      )
    ).toMatchObject<InitialStateType>({
      lists: ["list A", "list B"],
      tasks: [
        { id: 0, content: "Test task 1", list: "list A", status: true },
        { id: 1, content: "Test task 2", list: "list A", status: false },
        { id: 2, content: "Test task 3", list: "list B", status: false },
        { id: 3, content: "Test task 4", list: "list B", status: true },
      ],
    });
  });
});
