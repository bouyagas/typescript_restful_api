import * as ReduxThunk from "redux-thunk";
import * as Redux from "redux";
import axios, { AxiosResponse } from "axios";
import {
  IGetTodosAction,
  ITodoErrorAction,
  ITodosActionTypes,
  ITodo,
  ITodoState,
  AppActions
} from "./todo.types";
import { AppState } from "../index";

export class TodoActions {
  public getTodos = (): ReduxThunk.ThunkAction<
    Promise<IGetTodosAction>,
    ITodoState,
    ITodoErrorAction,
    IGetTodosAction
  > => async (
    dispatch: Redux.Dispatch<AppActions>,
    getState: () => AppState
  ): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.get<ITodo[]>(
        "https://typescriptrestfulapi.online/api/todos"
      );
      console.log(response);

      if (response.status === 200) {
        dispatch({
          type: ITodosActionTypes.GETTODOS,
          payload: response.data.data
        });
      }
    } catch (error) {
      dispatch({
        type: ITodosActionTypes.TODOERROR,
        payload: { msg: error.res.data, status: error.res.status }
      });
    }
  };
}

const newTodoActions = (): TodoActions => {
  return new TodoActions();
};

export const initialTodoActions = newTodoActions();
