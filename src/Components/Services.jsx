import React from 'react';
import Servicesbox from './Servicesbox';
import fimage1 from './images/1.svg';
import fimage2 from './images/2.svg';
import fimage3 from './images/3.svg';
import fimage4 from './images/4.svg';


function Services() {
    return(
        <div id='features'>
            <h1>SERVICES</h1>
            <div className='a-container'>
                <Servicesbox image={fimage1} title="Strength" />
                <Servicesbox image={fimage2} title="Cardio" />
                <Servicesbox image={fimage3} title="Power" />
                <Servicesbox image={fimage4} title="Sport" />
            </div>
        </div>
    )
}

export default Services;