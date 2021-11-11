import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';
import Trainers from './Components/Trainers';
import Form from './Components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
   <div className ='App'>
    <Router>
     <Navbar/>

     <Switch>
     
     <Route exact path='/' component={Header} />
     <Route path = '/services' component={Services} />
     <Route path='/trainers' component={Trainers} />
    
     <Route path='/register' component={Form} />
    
     </Switch>
    </Router>
   </div>
  );
}

export default App;
