import React from 'react';
import aboutimage from './images/inside.jpg'
import facebook from './images/facebook_footer.png';
import instagram from './images/instagram_footer.png';
import twitter from './images/twitter_footer.png';

function About() {
    return(
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='image of the inside of ironground gym'/>
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, excepturi iure. Ea amet voluptatem voluptas animi? Quia, aut molestias doloribus, ut minus ducimus sed nobis maxime voluptatibus in cum eos!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis autem pariatur quis, optio aliquid facilis velit voluptate odit maiores assumenda nulla quidem, amet nemo quam laborum repellendus voluptatibus expedita.</p>
            {/* </div>
            <div className='footer-images'> */}
                <img src={facebook} width="100px" alt='facebook logo'/>
                <img src={instagram} width="100px"alt='instagram logo'/>
                <img src={twitter} width="100px" alt='twitter logo'/>
            </div>
        </div>
    )
}

export default About;