import * as React from 'react';
import { match, Redirect, RouteComponentProps } from 'react-router-dom';

import { Todo } from '../models/Todo'
import { Filter } from '../models/Filter'
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

interface FilterParam {
  filter: Filter;
}

interface AppProps {
  match: match<FilterParam>;
}

interface AppState {
  todos: Todo[];
}

class App extends React.Component<AppProps & RouteComponentProps, AppState> { 
  constructor(props: AppProps & RouteComponentProps) {
    super(props)

    this.state = {
      todos: [
        {id: 1, title: '할일 1', completed: false},
        {id: 2, title: '할일 2', completed: true},
      ],
    };
  }
  
  fetchTodos(): Todo[] {
    const { match } = this.props;
    const filter = match.params.filter;
    const { todos } = this.state;

    if ([Filter.Done, Filter.Todo].indexOf(filter) > -1) {
      return todos.filter(todo => {
        if (filter === Filter.Done) {
          return todo.completed
        } else {
          return !todo.completed
        }
      })
    }

    return todos;
  }
  
  addTodo = (todo: Todo) => {
    const { todos } = this.state;
    
    this.setState({
      todos: [
        todo,
        ...todos
      ]
    })
  }

  updateTodo = (todo: Todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(t => {
        return t.id === todo.id ? todo : t;
      })
    });
  }

  deleteTodo = ({ id }: Todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(t => t.id !== id)
    })
  }

  filterTodos = (filter: Filter) => {
    this.props.history.push(`/todos/${filter}`)
  }

  render() {
    const { match } = this.props; 
    const invalidUrl = ['all', 'todo', 'done'].indexOf(match.params.filter) == -1;
    if (invalidUrl) {
      return <Redirect to="/todos/all" />;
    }

    return (
      <div>
        <TodoList 
          todos={this.fetchTodos()} 
          onUpdate={this.updateTodo} 
          onDelete={this.deleteTodo}/>
        <hr />
        <TodoFilters onChange={this.filterTodos}/>
      </div>
    )
  } 
}

export default App;
