import React from 'react';
import Eventsbox from './Eventsbox';
import eimage1 from './images/USA_POWERLIFTING.png';
import eimage2 from './images/conquer_charity.jpg';
import eimage3 from './images/nightmare_deadlift.jpg';
import eimage4 from './images/holiday_havoc.png';



function Events() {
    return(
        <div id='events-features'>
            <h1>UPCOMING EVENTS AT IRONGROUND</h1>
            {/* <h4>Check out some of our upcoming events held at IronGround Gym. Utah's Premier Powerlifting Venue!</h4> */}
            <div className='a-container'>
            <Eventsbox image={eimage1} title="APF"/>
            <Eventsbox image={eimage2} title="Conquer" />
            <Eventsbox image={eimage3} title="Nightmare" />
            <Eventsbox image={eimage4} title="Havoc" />
                
            </div>
        </div>
    )
}

export default Events;