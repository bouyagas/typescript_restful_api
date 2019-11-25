import React from "react";
import Todo from "./components/Todo/TodoList";
import "./App.css";

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
      </header>
    </div>
  );
};

export default App;
