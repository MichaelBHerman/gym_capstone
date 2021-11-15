import React from 'react';
import './profile.css';
import eimage3 from './images/nightmare_deadlift.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = () => toast("You have successfully registered!");
  
    



function EventsSchedule () {
    return(
        <div>
       
      
        <div class="wrapper">
            
    <div class="left">
    <h4>NIGHTMARE ON DEADLIFT STREET</h4>
        <img src={eimage3} 
        alt="user" width='80%'/>
        
        
    </div>
    <div class="right">
        <div class="info">
            <h3>NIGHTMARE ON DEADLIFT STREET</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>About</h4>
                    <p>Join us for APF's annual deadlifting competition at IronGround Gym!</p>
                 </div>
                 <div class="data">
                   <h4>Event Details</h4>
                    <ul>
                        <li>11-22-21 at 5pm</li>
                        <li>2 Hour Duration</li>
                        <li>Max Registration of 50</li>
                    </ul>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Available Sessions</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Weight Groups</h4>
                    <p>150-175 lbs    <button type='submit' onClick={notify}>REGISTER</button></p>
                    <p>176-200 lbs   <button type='submit'>REGISTER</button></p>
                    <p>201-225 lbs    <button type='submit'>REGISTER</button></p>
                    <p>226-250 lbs    <button type='submit'>REGISTER</button></p>
                    <p>250 +++ lbs   <button type='submit'>REGISTER</button></p>
                 </div>
                 <div class="data">
                 {/* place more available sessions here */}
              </div>
            </div>
        </div>
      
        
    </div>
</div>
            
           
        </div>
       
        
    )
}
export default EventsSchedule;