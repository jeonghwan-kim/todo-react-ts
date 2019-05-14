import * as React from 'react';

import { Todo } from '../../models/Todo';
import Checkbox from './Checkbox';
import Title from './Title';
import RemoveButton from './RemoveButton';

interface TodoItemProps {
  todo: Todo;
  onUpdate(todo: Todo): void;
  onDelete(todo: Todo): void;
}


const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo, onUpdate, onDelete } = props;

  return (
    <div>
      <Checkbox 
        checked={todo.completed} 
        handleCheck={(checked: boolean) => {
          onUpdate({
            ...todo,
            completed: checked,
          })
        }} />
      <Title 
        checked={todo.completed} 
        text={todo.title} />
      <RemoveButton 
        handleClick={() => {
          onDelete(todo);
        }} />
    </div>
  );
}

export default TodoItem;