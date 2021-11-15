import React from 'react';
import './profile.css';

function Profile () {
    return(
        <div>
       
           
            <div class="wrapper">
    <div class="left">
        {/* <img src="https://i.imgur.com/cMy8V5j.png" 
        alt="user" width="100"> */}
        <h4>Welcome, MikeH!</h4>
        
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>mike@gmail.com</p>
                 </div>
                 <div class="data">
                   <h4>Membership Payment</h4>
                    <p>$29.95 on 12/15/2021</p>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Your Scheduled Sessions</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Events</h4>
                    <p>You currently have no registered events.</p>
                 </div>
                 <div class="data">
                   <h4>Training</h4>
                    <p>You currently have no training sessions scheduled.</p>
              </div>
            </div>
        </div>
      
        
    </div>
</div>
            
           
        </div>
       
        
    )
}
export default Profile;