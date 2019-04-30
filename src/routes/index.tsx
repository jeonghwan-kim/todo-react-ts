import * as React from 'react';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import App from '../components/App'

const Root = () => (
  <BrowserRouter>
    <Route path="/" exact component={() => <Redirect to="/todos/all" />} />
    <Route path={`/todos/:filter`} exact component={App} />
  </BrowserRouter>
)

export default Root;
