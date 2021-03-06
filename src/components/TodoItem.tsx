import * as React from 'react';
import { Todo } from '../models/Todo';

interface TodoItemProps {
  todo: Todo;
  onUpdate(todo: Todo): void;
  onDelete(todo: Todo): void;
}
interface TodoItemState {
  checked: boolean;
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      checked: props.todo.completed,
    };
  }
  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const { checked } = e.currentTarget;
    const { todo, onUpdate } = this.props;
    
    this.setState({ checked });

    onUpdate({
      ...todo,
      completed: checked,
    })
  }
  handleClick() {
    const { onDelete, todo } = this.props;
    onDelete(todo);
  }
  render() {
    const { todo } = this.props;
    const { checked } = this.state;
    return (
      <div>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={this.handleChange}
          readOnly></input>
        <span style={{textDecoration: checked ? 'line-through' : ''}}>{todo.title}</span>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default TodoItem;