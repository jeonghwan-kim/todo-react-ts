import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header'
import TodoListPage from '../pages/TodoList';
import TodoFormPage  from '../pages/TodoForm';

const Root: React.FC = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Route path="/" exact component={() => <Redirect to="/todos/all" />} />
      <Route path="/todo/add" exact component={TodoFormPage} />
      <Route path="/todos/:filter" exact component={TodoListPage} />
    </BrowserRouter>
  </div>
)

export default Root;
