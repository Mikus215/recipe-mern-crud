import React, { useEffect, useState } from 'react'
import { StyledHeader, StyledLinkContainer, StyledDivUnderline, StyledFontAwesomeIcon } from './Header.styled';
import Nav from './Nav/Nav';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import underlineFood from '../../img/underline-food.png'

const Header = () => {

    const [showNav, setShowMobile] = useState(false)
    const widthScreen = window.innerWidth;

    const showNavMobile = () => {
        if(widthScreen > 576) return;
        setShowMobile(prevState => !prevState)
    }

    useEffect(() => {
        if(widthScreen > 576) setShowMobile(false)
        else setShowMobile(true)
    },[widthScreen])

    return ( 
        <>
       <StyledHeader>
            <StyledLinkContainer to={'/'}>
                <span> FOOD </span> 
                <StyledDivUnderline>
                    <img src={underlineFood} alt="" />
                </StyledDivUnderline>
            </StyledLinkContainer>
            <StyledFontAwesomeIcon icon={faBars} size="2x" onClick={showNavMobile}></StyledFontAwesomeIcon>
            <Nav showNav={showNav} showNavMobile={showNavMobile}/>
        </StyledHeader>
        </>
     );
}
 
export default Header;