import * as React from "react";

import { Todo, Filter } from './models'
import * as api from "./api";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

interface AppProps {

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

  addTodo = async (todo: Todo) => {
    await api.addTodo(todo);
    this.fetchData();
  }

  updateTodo = async (todo: Todo) => {
    await api.updateTodo(todo);
    this.fetchData();
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
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm 
          onSubmit={this.addTodo} />
        <TodoList 
          todos={this.filterTodos()} 
          onUpdate={this.updateTodo} 
          onDelete={this.deleteTodo} />
        <TodoFilters 
          onChange={this.handleChageFilter} />
      </div>
    )
  } 
}

export default App;
