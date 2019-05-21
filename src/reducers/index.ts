import { combineReducers } from "redux";

import { Todo } from "../models";
import todos from "./todos";

export interface StoreState {
  todos: Todo[];
}

export default combineReducers({
  todos,
})