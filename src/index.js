import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/event/:eventId" component={App} />
      <Route exact={true} path="/artist/:artistId" component={App} />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>
);