import * as React from 'react';

import { Todo } from '../models';

interface TodoItemProps {
  todo: Todo;
  onUpdate(todo: Todo): void;
  onDelete(todo: Todo): void;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  const { todo } = props;

  const handleCheckCompleted = (e: React.FormEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    const { todo, onUpdate } = props;

    onUpdate({
      ...todo,
      completed: checked
    })
  }

  const handleClickDelete = () => {
    const { onDelete, todo } = props;
    onDelete(todo);
  }

  return (
    <div>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleCheckCompleted}
        readOnly></input>
      <span style={{
        textDecoration: todo.completed ? 'line-through' : ''
        }}>
        {todo.title}
      </span>
      <button onClick={handleClickDelete}>X</button>
    </div>
  );
}

export default TodoItem;