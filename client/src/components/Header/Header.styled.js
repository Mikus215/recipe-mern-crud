import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-size: 1.2rem;
    color: black;
    position: fixed;
    padding: 1rem;
    width: 100%;
    a{
        color: black;
    }
    @media(min-width: 500px){
        position: static;
    }
`
export const StyledLinkContainer = styled(Link)`
    position: relative;
    
`
export const StyledDivUnderline = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    z-index: 1000;
    position: relative;
    @media(min-width: 576px){
        display: none;
    }
`