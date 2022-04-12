import React, { useState } from 'react'
import InputFilters from './InputFilters/InputFilters';
import {useDispatch} from 'react-redux'
import { getRecipesFilters } from '../../../actions/recipesActions';
import { SubmitButtonFilters } from './FormFilter.styled';

const FormFilters = () => {

   const dispatch = useDispatch()
   const [typeFood, setTypeFood] = useState("");

   const handleFilters = e => {
      e.preventDefault()
      if(typeFood === "") return;
      dispatch(getRecipesFilters(typeFood))
   }

   const handleChangeTypeFood = e => setTypeFood(e.target.value)

    return ( 
        <form onSubmit={handleFilters}>
           <InputFilters type={"All"} handleChangeTypeFood={handleChangeTypeFood}/>
           <InputFilters type={"Breakfast"} handleChangeTypeFood={handleChangeTypeFood}/>
           <InputFilters type={"Lunch"} handleChangeTypeFood={handleChangeTypeFood}/>
           <InputFilters type={"Dinner"} handleChangeTypeFood={handleChangeTypeFood}/>
           <InputFilters type={"Snacks"} handleChangeTypeFood={handleChangeTypeFood}/>
           <SubmitButtonFilters type="submit">Confirm</SubmitButtonFilters>
        </form>
     );
}
 
export default FormFilters;