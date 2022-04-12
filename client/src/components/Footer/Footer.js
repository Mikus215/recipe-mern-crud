import React from 'react'
import { FooterStyled } from './Footer.styled';

const getYear = () => {
    return new Date().getFullYear();
}

const Footer = () => {
    return (
        <>
            <FooterStyled>
                <p> &copy; {getYear()} Mikołaj Marszałek</p>
            </FooterStyled>
        </>
    );
}

export default Footer;