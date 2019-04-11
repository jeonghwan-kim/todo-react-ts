import * as React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../models/Todo'

interface TodoListProps {
  todos: Todo[];
}

const TodoList = (props: TodoListProps) => {
  const { todos } = props;
  return <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoItem todo={todo} />
      </li>
    ))}
  </ul>
}
  
export default TodoList;