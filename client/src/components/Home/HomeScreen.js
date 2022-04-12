import React from 'react';
import About from './About/About';
import TopFive from '../TopFive/TopFive'
import { StyledHome, GeneralTitle, RightCornerBoxImg, LeftCornerBoxImg, BestRecipesTitle } from './HomeScreen.styled';
import { Link } from 'react-router-dom';
import rightCornerBackground from '../../img/right-corner-background.png'
import mainImg from '../../img/main-img.png'
import dishRight from '../../img/dish-right.png'
import dishLeft from '../../img/dish-left.png'
import seasonings from '../../img/seasonings.png'
import greenLeft from '../../img/green-left.png'
import greenRight from '../../img/green-right.png'
import leftBackground from '../../img/left-background.png'

const HomeScreen = () => {
    return ( 
        <>
            <StyledHome>
                <RightCornerBoxImg>
                    <img src={rightCornerBackground} alt="" />
                    <img src={mainImg} alt="" />
                    <img src={dishRight} alt="" />
                    <img src={dishLeft} alt="" />
                    <img src={seasonings} alt="" />
                    <img src={greenLeft} alt="" />
                    <img src={greenRight} alt="" />
                </RightCornerBoxImg>
                <LeftCornerBoxImg>
                    <img src={leftBackground} alt="" />
                </LeftCornerBoxImg>
                <GeneralTitle>
                    <p>Share your best recipes,</p>
                    <p>with other people.</p>
                    <button>
                        <Link to={'/recipes'}>Search Recipes</Link>
                    </button>
                </GeneralTitle>
            </StyledHome>
            <BestRecipesTitle> Top 5 best recipes </BestRecipesTitle>
            
            <TopFive />

            <About />
        </>
     );
}
 
export default HomeScreen;