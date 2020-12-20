import React from 'react';
import Header from './Header';
import 'materialize-css/dist/css/materialize.min.css';
import Body from './Body';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Dashbord from './Dashbord';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <Route exact path='/'>
          <Body />
        </Route>
        <Route path='/user/:name?'>
          <Dashbord />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
