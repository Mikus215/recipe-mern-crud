import React, { useEffect, useState } from 'react'
import Recipe from './Recipe/Recipe'
import {useDispatch, useSelector} from 'react-redux'
import {getRecipes} from '../../actions/recipesActions'
import { StyledContainer, HeaderImg, ButtonFilters, FiltersIcon } from './Recipes.styled'
import headerImg from '../../img/header-img-our-recipes.png'
import Filters from '../Filters/Filters'
import showFiltersIcon from '../../img/show-filter.png'

const Recpies = () => {

    const dispatch = useDispatch()
    const [showFilters, setShowFilters] = useState(false)

    const recipes = useSelector(state => state.recipes)

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    return (
        <>
            <HeaderImg src={headerImg} alt=""></HeaderImg>
            <ButtonFilters onClick={() => setShowFilters(!showFilters)}>
                Show or Hide Filters <FiltersIcon src={showFiltersIcon} alt=""></FiltersIcon>
            </ButtonFilters>
            <StyledContainer showFilters={showFilters}>
                <Filters showFilters={showFilters} />
                {recipes.map(recipe => (
                    <Recipe {...recipe} key={recipe._id} id={recipe._id} />
                ))}
            </StyledContainer>
        </>
     );
}
 
export default Recpies;