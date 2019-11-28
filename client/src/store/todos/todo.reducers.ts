import { ITodoState, ITodoActionTypes, ITodosActionTypes } from "./todo.types";

class TodoReducers {
  private initialState: {} | ITodoState = {
    todos: [],
    loading: false
  };

  public todoReducers = (
    state = this.initialState,
    action: ITodoActionTypes
  ) => {
    switch (action.type) {
      case ITodosActionTypes.GETTODOS:
        return { ...state, todos: action.payload, loading: true };

      case ITodosActionTypes.GETTODO:
        return {};

      default:
        break;
    }
    return state;
  };
}

const newTodosReducer = (): TodoReducers => {
  return new TodoReducers();
};

export const initialTodoReducer = newTodosReducer();
