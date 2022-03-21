import React from 'react';
import Home from "./Home";
import { Route, Switch} from 'react-router-dom';
import Menu from './Menu';

const App = () => {
  return (
    <>
    <Switch>
    <Route path="/"> <Home /></Route>
    <Route path="/menu"> <Menu /></Route>
   </Switch>  
   
    </>
  );
};

export default App;