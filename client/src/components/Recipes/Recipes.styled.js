import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    padding: 0 1rem;
    gap: 1rem;
`

export const HeaderImg = styled.img`
    width: 100%;
    padding: 5rem .3rem 2rem .3rem;
`

export const FiltersIcon = styled.img`
    width: 25px;
    height: 25px;
`

export const ButtonFilters = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100px;
    padding: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: .3rem;
    font-weight: bold;
    font-size: 1rem;
`