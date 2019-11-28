import mongoose, { Document } from "mongoose";
const Schema = mongoose.Schema;

export interface ITodo extends Document {
  name: string;
  isComplete: boolean;
}

const TodoSchema: mongoose.Schema<ITodo> = new Schema({
  task: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

export const Todo: mongoose.Model<ITodo, {}> = mongoose.model<ITodo>(
  "todos",
  TodoSchema
);
