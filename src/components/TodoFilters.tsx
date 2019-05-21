import * as React from 'react';
import { Filter } from '../models';

const filterTextList = [
  {
    value: Filter.All,
    text: 'All'
  }, {
    value: Filter.Todo,
    text: 'Todo'
  }, {
    value: Filter.Done,
    text: 'Done'
  }
];

interface TodoFilterProps {
  onChange(filter: Filter): void;
}

const TodoFiler: React.FC<TodoFilterProps> = props => {
  const { onChange } = props;
  const handleClick = (filter: Filter) => {
    onChange(filter)
  }

  return (
    <ul>{
      filterTextList.map(item => (
        <li key={item.value}>
          <a 
            href="" 
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.value);
            }}
          >{item.text}</a>
        </li>
      ))
    }</ul>
  )
}

export default TodoFiler;
