import React from 'react';
import Trainersbox from './Trainersbox';
import timage1 from './images/trainer2.jpeg';
import timage2 from './images/trainer17.jpeg';
import timage3 from './images/trainer18.jpeg';
import timage4 from './images/trainer5.jpeg';



function Trainers() {
    return(
        <div id='features'>
            <h1>TRAINERS</h1>
            <div className='a-container'>
            <Trainersbox image={timage1} title="Julie" />
            <Trainersbox image={timage2} title="Jacob" />
            <Trainersbox image={timage3} title="Kayla" />
            <Trainersbox image={timage4} title="Alex" />
                
            </div>
        </div>
    )
}

export default Trainers;