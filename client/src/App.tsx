import React from "react";
import Todo from "./components/Todo/TodoList";
import "./App.css";

interface IProps {}

const App: React.FC<IProps> = (): React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
      </header>
    </div>
  );
};

export default App;
