import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';
import Trainers from './Components/Trainers';
import Register from './Components/Register';

function App() {
  return (
   <div className ='App'>
     <Navbar/>
     <Header/>
     <Services/>
     <Trainers/>
    
     {/* <Register/> */}
    
     
   </div>
  );
}

export default App;
