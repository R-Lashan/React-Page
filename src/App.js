import React from 'react';
import Item from './components/item'
import About from './components/about'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const app = () => {
  return ( 
    <Router>
      <Switch>
        <Route path='/' exact component={Item}/>
        <Route path='/about' exact component={About}/>
      </Switch>
    </Router>
  );
}
 
export default app;