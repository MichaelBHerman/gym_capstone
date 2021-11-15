import React from 'react';
import Servicesbox from './Servicesbox';
import simage1 from './images/1.svg'
import simage2 from './images/2.svg'
import simage3 from './images/3.svg'
import simage4 from './images/4.svg'


function Services () {
    return(
        <div className='youtubewrapper'>
            <div className='youtubecontainer'>
<iframe width="1237" height="696" src="https://www.youtube.com/embed/V9-XQeq8HUQ" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div id='services-features'>
            <h1>IRONGROUND GYM</h1>
            
            <h4>Whatever you're training for... we have the means to help you achieve your goals!</h4>
            <div className='services-container'>
            <Servicesbox image={simage1} title="Power Lifting"/>
            <Servicesbox image={simage2} title="Endurance"/>
            <Servicesbox image={simage3} title="Body Building"/>
            <Servicesbox image={simage4} title="Sport Specific"/>
            
            
            
                
            </div>
        </div>
        </div>
        </div>
        
    )
}
export default Services;