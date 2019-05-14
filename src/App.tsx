import * as React from "react";
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import { Todo } from './models/Todo'
import { Filter } from './models/Filter'

interface AppProps {

}

interface AppState {
  todos: Todo[];
  filter: Filter;
}

const defaultState = {
  todos: [
    {id: 1, title: '할일 1', completed: false},
    {id: 2, title: '할일 2', completed: true},
  ],
  filter: Filter.All,
}

class App extends React.Component<AppProps, AppState> { 
  constructor(props: AppProps) {
    super(props)
    this.state = { ...defaultState }
  }
  fetchTodos(): Todo[] {
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
  addTodo = (todo: Todo) => {
    const { todos } = this.state;
    
    this.setState({
      todos: [
        todo,
        ...todos
      ]
    })
  };
  updateTodo = (todo: Todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(t => {
        return t.id === todo.id ? todo : t;
      })
    });
  };
  deleteTodo = ({ id }: Todo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(t => t.id !== id)
    })
  };
  filterTodos = (filter: Filter) => {
    this.setState({
      filter
    })
  }
  render() {
    return (
      <div>
        <Header />
        <TodoForm onSubmit={(todo: Todo) => this.addTodo(todo)}/>
        <TodoList 
          todos={this.fetchTodos()} 
          onUpdate={this.updateTodo} 
          onDelete={this.deleteTodo}/>
        <TodoFilters onChange={this.filterTodos}/>
      </div>
    )
  } 
}

export default App;
