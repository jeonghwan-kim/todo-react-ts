import { Todo } from "../models";

let db = [
  {id: 2, title: '할일 2', completed: false},
  {id: 1, title: '할일 1', completed: true},
]

export const fetchTodos = async () => {
  return db;
}

export const addTodo = async (todo: Todo) => {
  db = [todo, ...db]
}

export const updateTodo = async (todo: Todo) => {
  db = db.map(t => t.id === todo.id ? todo : t);
}

export const deleteTodo = async (id: number) => {
  db = db.filter(t => t.id !== id)
}
