import * as React from 'react';
import { Todo } from '../models/Todo';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
  const { todo } = props;
  return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly></input>
      <span style={{textDecoration: todo.completed ? 'line-through' : ''}}>{todo.title}</span>
      <button>X</button>
    </div>
  );
}

export default TodoItem;