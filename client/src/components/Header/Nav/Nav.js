import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { StyledNav, StyledUl, StyledLi } from './Nav.styled';
import { logoutUser } from '../../../actions/userActions';

const Nav = ({ showNav, showNavMobile }) => {

    const dispatch = useDispatch();
    const navigation = useNavigate();
    const user = useSelector(state => state.user)
    const userRefresh = localStorage.getItem('user')

    return ( 
        <StyledNav isMobile={showNav}>
            <StyledUl onClick={showNavMobile}>
                <StyledLi>
                    <Link to={'/recipes'}>Recipes</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={'/createRecipes'}>Share Your Recipes</Link>
                </StyledLi>
                <StyledLi>
                    {userRefresh === null && user.authData === null ? 
                        (<Link to={'/register'}>Register</Link>) : 
                        (<button onClick={() => dispatch(logoutUser(navigation))}>Logout</button>)
                    }
                </StyledLi>
            </StyledUl>
        </StyledNav>
     );
}
 
export default Nav;