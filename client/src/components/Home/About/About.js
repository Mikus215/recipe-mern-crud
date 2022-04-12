import React from 'react'
import chief from '../../../img/chief.png'
import { AboutContainer, ImgChief, AboutText} from './About.styled';

const About = () => {
    return (
        <AboutContainer>
            <ImgChief>
                <img src={chief} alt="" />
            </ImgChief>
            <AboutText>
                <h1>From the people to the people</h1>
                <p>
                    This site was created for people to share their best recipes. 
                </p>
                <p>
                    To enrich our kitchens with family recipes.
                </p>
            </AboutText>
        </AboutContainer>
    );
}

export default About;