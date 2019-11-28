import * as Redux from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reduxLogger from "redux-logger";
import * as ReduxDevtools from "redux-devtools-extension";
import { initialTodoReducer } from "./todos/todo.reducers";
import { AppActions } from "./todos/todo.types";

export class Store {
  constructor() {
    this.configureStore();
  }
  public rootReducer = Redux.combineReducers({
    todos: initialTodoReducer.todoReducers
  });

  private initialState: object = {};

  public configureStore = (): Redux.Store<AppState> => {
    const middlewares = [
      thunk as ThunkMiddleware<AppState, AppActions>,
      reduxLogger
    ];
    const middleWareEnhancer = Redux.applyMiddleware(...middlewares);

    return Redux.createStore(
      this.rootReducer,
      this.initialState,
      ReduxDevtools.composeWithDevTools(middleWareEnhancer)
    );
  };
}

const newStore = (): Store => {
  return new Store();
};

export const initialStore = newStore();
export type AppState = ReturnType<typeof initialStore.rootReducer>;
