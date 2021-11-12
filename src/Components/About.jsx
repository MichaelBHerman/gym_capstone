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
                <p>At IronGround Gym, we believe real fitness is about more than getting on a treadmill and watching TV—it's about strengthening and conditioning your body and mind so you can get out there, explore the world, seek new adventures and be the person you were meant to be.</p><p>

Located in Murray, our facility is a huge loft space with natural light and seasoned equipment from years of hard work—kinda like the Russian cabin where Rocky trained compared to the pristine lab of Ivan Drago. Except here, you are your only competition.

Whether you’re new to fitness or an accomplished athlete, our coaches are highly trained and certified to help you set goals, teach proper form to prevent injury, and design training programs that include basic barbell exercises, olympic lifts, kettlebells, gymnastics, running, rowing, throwing, and a long list of bodyweight movements.</p><p>

Here, you’ll never feel lost, alone or confused about what exercises to do or how to do them. That’s because your IronGround membership includes a lot more than just a room full of equipment. Whether you’re looking for group classes or private training, we’ll take care of everything—just show up ready to move and let the transformation begin.</p>
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