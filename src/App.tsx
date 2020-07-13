import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header';

import Search from './pages/Search';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>HOMEPAGE</div>
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
