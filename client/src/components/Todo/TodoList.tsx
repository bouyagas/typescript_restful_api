import React from "react";
import TodoItems from "./TodoItems";
interface Props {}

const TodoList: React.FC<Props> = (): React.ReactElement => {
  return (
    <React.Fragment>
      <TodoItems />
    </React.Fragment>
  );
};

export default TodoList;
