import * as React from 'react';

import TodoList from '../components/TodoList'
import TodoFilters from '../components/TodoFilters'


class TodoListPage extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
        <TodoFilters />
      </div>
    )
  }
}

export default TodoListPage