import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';
import Trainers from './Components/Trainers';


function App() {
  return (
   <div className ='App'>
     <Navbar/>
     <Header/>
     <Services/>
     <Trainers/>
   </div>
  );
}

export default App;
