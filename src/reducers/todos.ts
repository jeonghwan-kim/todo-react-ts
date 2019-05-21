import { Todo } from "../models";
import { CommandAction } from "../actions";
import { ADD_TODO, TOGGLE_TODO } from "../actions/types";

const initialState: Todo[] = [
  {id: 1, title: 'todo 1', completed: false},
  {id: 2, title: 'todo 2', completed: true},
  {id: 3, title: 'todo 3', completed: true},
]

const todos = (state = initialState, action: CommandAction) => {
  switch(action.type) {
    case ADD_TODO: 
      return [
        ...state,
        {
          id: Date.now(),
          ...action.payload
        }
      ]
    case TOGGLE_TODO: 
      const { payload } = action;
      return state.map(todo => {
        return todo.id === payload.id ? payload : todo;
      })
    default: 
      return [...state]
  }
}

export default todos;
