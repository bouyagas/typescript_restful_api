import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { ITodoState, ITodo, AppActions } from "../../store/todos/todo.types";
import {
  initialTodoActions,
  TodoActions
} from "../../store/todos/todo.actions";

import { ITodos } from "./TodoList";

export interface IAppProps {
  todos: ITodo[];
  initialTodoActions: TodoActions;
}

class TodoTest extends React.Component<IAppProps> {
  componentDidMount(): void {
    this.props.initialTodoActions.getTodos();
  }

  public render(): React.ReactElement {
    return (
      <React.Fragment>
        <h1>cool</h1>
        {this.props.todos.map((todo: ITodos) => (
          <div key={todo._id}>
            <h4>{todo.task}</h4>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: ITodoState) => ({
  todos: state.todos
});

const mapDispatchToProps = (_dispatch: Redux.Dispatch<AppActions>) => ({
  initialTodoActions
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoTest);
