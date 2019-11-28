export interface ITodo {
  _id: string;
  task: string;
  isComplete: boolean;
  created_date: string;
  data: (data: any) => any;
}

export interface ITodoState {
  todos: ITodo[];
}

export interface IError {
  msg: string;
  status: number;
}

export enum ITodosActionTypes {
  GETTODO = "@@todos/GETTODO",
  CREATETODO = "@@todos/REATETODO",
  UPDATETODO = "@@todos/UPDATETODO:",
  REMOVETODO = "@@todos/REMOVETODO",
  TODOERROR = "@@todos/POST_ERROR",
  GETTODOS = "@@todos/GETTODOS"
}

export interface IReduxBaseAction {
  type: ITodosActionTypes;
}
export interface IGetTodosAction extends IReduxBaseAction {
  type: typeof ITodosActionTypes.GETTODOS;
  payload: ITodo[];
}

export interface IGetTodoAction extends IReduxBaseAction {
  type: typeof ITodosActionTypes.GETTODO;
  payload: ITodo;
}
export interface ICreateTodoAction extends IReduxBaseAction {
  type: typeof ITodosActionTypes.CREATETODO;
  payload: ITodo;
}

export interface IUpdateTodoAction extends IReduxBaseAction {
  type: typeof ITodosActionTypes.UPDATETODO;
  payload: ITodo;
}

export interface IRemoveTodoAction extends IReduxBaseAction {
  type: typeof ITodosActionTypes.REMOVETODO;
  payload: ITodo;
}

export interface ITodoErrorAction extends IReduxBaseAction {
  type: typeof ITodosActionTypes.TODOERROR;
  payload: IError;
}

export type ITodoActionTypes =
  | IGetTodosAction
  | IGetTodoAction
  | ICreateTodoAction
  | IUpdateTodoAction
  | IRemoveTodoAction
  | ITodoErrorAction;

export type AppActions = ITodoActionTypes;
