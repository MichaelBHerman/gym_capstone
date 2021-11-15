import React from 'react';
import './profile.css';
import timage2 from './images/trainer17.jpeg';

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
                    <p>Jacob is a professional certified trainer that specializes in training for sport-specific activities.</p>
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
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div class="data">
                   <h4>Training With Jacob</h4>
                    <p>11/17/21 at 6pm. (1 Hour)</p>
              </div>
            </div>
        </div>
      
        
    </div>
</div>
            
           
        </div>
       
        
    )
}
export default Profile;