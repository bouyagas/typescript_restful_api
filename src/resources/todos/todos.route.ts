import { Application } from "express";
import { TodoController } from "./todos.controller";

export class TodoRoutes {
  public todoController: TodoController = new TodoController();
  public routes(server: Application): void {
    server
      .route("/api/todos")
      // GET endpoint
      .get(this.todoController.getTodos)
      // Create new todos
      .post(this.todoController.createTodos);

    server
      .route("/api/todos/:todoId")
      // get specific todo
      .get(this.todoController.getTodo)
      // Update a todo
      .put(this.todoController.updateTodo)
      // Delete a todo
      .delete(this.todoController.removeTodo);
  }
}
