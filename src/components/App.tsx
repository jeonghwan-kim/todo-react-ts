import * as React from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';
import { Todo } from '../models/Todo'
import { Filter } from '../models/Filter'

interface AppProps {

}

interface AppState {
  todos: Todo[];
  filter: Filter;
}

class App extends React.Component<AppProps, AppState> { 
  constructor(props: AppProps) {
    super(props)

    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);

    this.state = {
      todos: [
        {id: 1, title: '할일 1', completed: false},
        {id: 2, title: '할일 2', completed: true},
      ],
      filter: Filter.All,
    };
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
  addTodo(todo: Todo) {
    const { todos } = this.state;
    
    this.setState({
      todos: [
        todo,
        ...todos
      ]
    })
  }
  updateTodo(todo: Todo) {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(t => {
        return t.id === todo.id ? todo : t;
      })
    });
  }
  deleteTodo({ id }: Todo) {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(t => t.id !== id)
    })
  }
  filterTodos(filter: Filter) {
    this.setState({
      filter
    })
  }
  render() {
    const { todos } = this.state; 
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm onSubmit={(todo: Todo) => this.addTodo(todo)}/>
        <hr />
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
