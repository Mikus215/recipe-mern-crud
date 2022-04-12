import styled from 'styled-components'

export const TopFiveContainer = styled.div`
    margin: 2rem 1rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    @media(min-width: 1250px){
        align-items: stretch;
        flex-direction: row;
    }
`
