import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';
import Trainers from './Components/Trainers';
import Form from './Components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Events from './Components/Events';
import Login from './Components/Login';
import Profile from './Components/Profile';
import TrainerSchedule from './Components/TrainerSchedule'

function App() {
  return (
   <div className ='App'>
    <Router>
     <Navbar/>

     <Switch>
     
     <Route exact path='/' component={Header} />
     <Route path = '/services' component={Services} />
     <Route path='/trainers' component={Trainers} />
     <Route path='/about' component={About} />
     <Route path='/register' component={Form} />
     <Route path='/contact' component={Contact} />
     <Route path='/events' component={Events} />
     <Route path='/login' component={Login} />
     <Route path='/profile' component={Profile} />
     <Route path='/trainersched' component={TrainerSchedule} />
     

    
     </Switch>
    </Router>
   </div>
  );
}

export default App;
