import React from 'react'
import { FiltersContainer, ClearButton } from './Filters.styled';
import FormFilters from './FormFilters/FormFilter';

const Filters = ({ showFilters }) => {
    return (
        <FiltersContainer showFilters={showFilters}>
            <h3>Filters</h3>
            <FormFilters />
        </FiltersContainer>
    );
}

export default Filters;