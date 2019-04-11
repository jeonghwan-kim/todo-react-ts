import * as React from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Todo } from '../models/Todo'

interface AppProps {

}

interface AppState {
  todos: Todo[];
}

class App extends React.Component<AppProps, AppState> { 
  constructor(props: AppProps) {
    super(props)

    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.state = {
      todos: [
        {id: 1, title: '할일 1', completed: false},
        {id: 2, title: '할일 2', completed: true},
      ]
    };
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
  render() {
    const { todos } = this.state; 
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm onSubmit={(todo: Todo) => this.addTodo(todo)}/>
        <TodoList 
          todos={todos} 
          onUpdate={this.updateTodo} 
          onDelete={this.deleteTodo}/>
      </div>
    )
  } 
}

export default App;
