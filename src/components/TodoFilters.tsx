import * as React from 'react';
import { Filter } from '../models/Filter';

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

class TodoFiler extends React.Component<TodoFilterProps> {
  constructor(props: TodoFilterProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(filter: Filter) {
    const { onChange } = this.props;
    onChange(filter)
  }
  render() {
    return (
      <ul>{
        filterTextList.map(item => (
          <li key={item.value}>
            <a 
              href="" 
              onClick={(e) => {
                e.preventDefault();
                this.handleClick(item.value);
              }}
            >{item.text}</a>
          </li>
        ))
      }</ul>
    )
  }
}

export default TodoFiler ;
