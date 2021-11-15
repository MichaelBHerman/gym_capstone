import React from 'react';
import './profile.css';
import timage2 from './images/trainer17.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Your Training Session is Scheduled!");

function Profile () {
    return(
        <div>
       
      
        <div class="wrapper">
            
    <div class="left">
    <h4>Schedule a session with Jacob!</h4>
        <img src={timage2} 
        alt="user" width='80%'/>
        
        
    </div>
    <div class="right">
        <div class="info">
            <h3>JACOB WHITE</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>About</h4>
                    <p>Jacob is a professional certified trainer that specializes in training for sport-specific activities and strength conditioning.</p>
                 </div>
                 <div class="data">
                   <h4>Areas of Focus</h4>
                    <ul>
                        <li>Boxing/MMA</li>
                        <li>Football</li>
                        <li>Strength Conditioning</li>
                    </ul>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Available Sessions</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Available Sessions</h4>
                    <p>11/17/21 at 6pm. (1 Hour)    <button type='submit' onClick={notify}>SCHEDULE</button></p>
                    <p>11/18/21 at 7pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
                    <p>11/19/21 at 4pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
                    <p>11/20/21 at 6pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
                    <p>11/21/21 at 7pm. (1 Hour)    <button type='submit'>SCHEDULE</button></p>
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
export default Profile;