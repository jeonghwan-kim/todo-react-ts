import * as React from "react";
import { connect } from "react-redux";

import { Todo, Filter } from './models'
import * as api from "./api";
import { addTodo, toggleTodo } from './actions';
import { StoreState } from "./reducers";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

interface AppProps {
  todos: Todo[];
  addTodo(todo: Todo): void;
  toggleTodo(todo: Todo): void;
}

interface AppState {
  todos: Todo[];
  filter: Filter;
}

class App extends React.PureComponent<AppProps, AppState> { 
  constructor(props: AppProps) {
    super(props)

    this.state = {
      todos: [],
      filter: Filter.All,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const todos = await api.fetchTodos()
    this.setState({
      todos
    });
  }

  filterTodos(): Todo[] {
    const { todos, filter } = this.state;

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

  deleteTodo = ({ id }: Todo) => {
    api.deleteTodo(id)
    this.fetchData();
  }

  handleChageFilter = (filter: Filter) => {
    this.setState({
      filter
    })
  }

  render() {
    const { todos, addTodo, toggleTodo } = this.props;

    return (
      <div>
        <h1>Todo</h1>
        <TodoForm 
          onSubmit={addTodo} />
        <TodoList 
          todos={todos} 
          onUpdate={toggleTodo} 
          onDelete={this.deleteTodo} />
        <TodoFilters 
          onChange={this.handleChageFilter} />
      </div>
    )
  } 
}

const mapStateToProps = (state: StoreState) => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
