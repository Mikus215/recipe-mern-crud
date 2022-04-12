import styled from "styled-components";

export const StyledNav = styled.nav`
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    font-size: 1.4rem;
    font-weight: bold;
    top: 0;
    left: 0;
    transition: transform cubic-bezier(0.39, 0.575, 0.565, 1) .3s;
    transform: ${props => props.isMobile ? 'translateY(-100%)' : 'translateY(0)'};
    @media(max-width: 576px){
        background-color: orange;
    }
    @media(min-width: 576px){
        height: 100%;
        width: 100%;
        background-color: none;
        position: static;
        width: 500px;
        margin: 0 .6rem;
        top: auto;
        left: auto;
    }
`
export const StyledUl = styled.ul`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    flex-direction: column;
    @media(min-width: 576px){
        position: static;
        flex-direction: row;
        justify-content: space-between;
        top: auto;
        left: auto;
        transform: translate(0%,0%);
    }
    `
export const StyledLi = styled.li`
    margin: 1rem 0rem;
    padding: .3rem;
    a{
        color: black;
    }
    button{
        background: none;
        border: none;
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
    }
    @media(min-width: 500px){
        margin: 0;
        padding: 0;
    }
`