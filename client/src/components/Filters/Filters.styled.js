import styled from 'styled-components'

export const FiltersContainer = styled.div`
    position: absolute;
    left: 0;
    transform: translateX(${props => props.showFilters ? '5%' : '-100%'});
    opacity: ${props => props.showFilters ? '1' : '0'};
    transition: transform .3s, opacity .3s;
    background: whitesmoke;
    width: 250px;
    z-index: 5;
    border-radius: 1rem;
    padding: 1rem;
`

export const ClearButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`