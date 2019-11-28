import { Request, Response } from "express";
import { ITodo, Todo } from "./todos.model";

interface ITodoController {
  (req: Request, res: Response): Promise<Response | any>;
}

export class TodoController {
  public getTodos: ITodoController = async (req, res) => {
    try {
      const getTodoDocs: ITodo[] = await Todo.find({})
        .sort({ created_date: -1 })
        .lean()
        .exec();

      return res
        .status(200)
        .json({ data: getTodoDocs, msg: "List of All Todos" });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };

  public getTodo: ITodoController = async (req, res) => {
    try {
      const getTodoDoc: ITodo = await Todo.findOne({
        _id: req.params.todoId
      })
        .lean()
        .exec();

      if (!getTodoDoc) {
        return res.status(400).end();
      }

      return res
        .status(200)
        .json({ data: getTodoDoc, msg: "List of Single Todo" });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };

  public createTodos: ITodoController = async (req, res) => {
    try {
      const createTodosDocs: ITodo = await Todo.create({ ...req.body });
      return res
        .status(201)
        .json({ data: createTodosDocs, msg: "You Created A Todo Item" });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };

  public updateTodo: ITodoController = async (req, res) => {
    try {
      const updateTodoDocs: ITodo | null = await Todo.findOneAndUpdate(
        {
          _id: req.params.todoId
        },
        req.body,
        { new: true }
      )
        .lean()
        .exec();
      if (!updateTodoDocs) {
        return res.status(400).end();
      }
      return res
        .status(200)
        .json({ data: updateTodoDocs, msg: "You Updated A Todo Item" });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };

  public removeTodo: ITodoController = async (req, res) => {
    try {
      const removeTodoDoc: ITodo | null = await Todo.findOneAndRemove({
        _id: req.params.todoId
      });

      if (!removeTodoDoc) {
        return res.status(400).end();
      }
      return res
        .status(200)
        .json({ data: removeTodoDoc, msg: "You Deleted A Todo Item" });
    } catch (e) {
      console.error(e);
      res.status(400).end();
    }
  };
}
