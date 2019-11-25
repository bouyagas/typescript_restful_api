import React from "react";

interface Props {
  todo: {
    _id: string | number | undefined;
    task: string;
    isComplete: boolean;
  };
}

const TodoItems: React.FC<Props> = ({ todo }): React.ReactElement => {
  const { task, isComplete } = todo;
  return (
    <React.Fragment>
      <p>{task}</p>
      {isComplete}
    </React.Fragment>
  );
};

export default TodoItems;
