import * as React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../models/Todo'

interface TodoListProps {
  todos: Todo[];
  onUpdate(todo: Todo): void;
  onDelete(todo: Todo): void;
}

const TodoList = (props: TodoListProps) => {
  const { todos, onUpdate, onDelete } = props;
  
  return <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoItem todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
      </li>
    ))}
  </ul>
}
  
export default TodoList;