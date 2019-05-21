import { 
  FETCH_TODOS_REQUEST, 
  FETCH_TODOS_SUCCESS, 
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  TOGGLE_TODO,
 } from "./types";
import { Todo } from "../models";

export const fetchTodos = () => ({
  type: FETCH_TODOS_REQUEST,
  payload: {},
});

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (todo: Todo) => ({
  type: TOGGLE_TODO,
  payload: todo,
});

export interface CommandAction {
  type: typeof ADD_TODO | typeof TOGGLE_TODO,
  payload: Todo;
}