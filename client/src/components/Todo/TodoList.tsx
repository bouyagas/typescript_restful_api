import React from "react";
import TodoItems from "./TodoItems";
import axios, { AxiosResponse } from "axios";

interface Props {}
export interface ITodos {
  _id: string | number | undefined;
  task: string;
  isComplete: boolean;
}
const TodoList: React.FC<Props> = (): React.ReactElement => {
  const [todos, setTodo] = React.useState<ITodos[]>([]);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async (): Promise<void> => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response: AxiosResponse = await axios.get<ITodos[]>(
        "https://typescriptrestfulapi.online/api/todos"
      );

      if (response.status === 200) {
        setTodo(response.data.data);
        console.log(response);
      }
    } catch (error) {
      setIsError(error);
    }
    setIsLoading(false);
  };

  const displayTodos: JSX.Element[] = todos.map((todo: ITodos) => (
    <TodoItems key={todo._id} todo={todo} />
  ));

  return (
    <React.Fragment>
      <h1>This is todos items</h1>
      {displayTodos}
    </React.Fragment>
  );
};

export default TodoList;
