import React from 'react';
import Ingredients from './Ingredients';
import CookingSteps from './CookingSteps';


const Recipe=(props)=>{
  // console.log(props.recipeList)
  return(
    <div>
    	<h2 className="text-center">Recipe Name:{props.recipeList.name}</h2>
        <div className="d-flex flex-grow-1 justify-content-center">
        <div className="m-2">
          <Ingredients
          ingredientsList={props.recipeList.ingredients} />
        </div>
        <div className="m-2">
          <CookingSteps steps={props.recipeList.steps} />
        </div>
        </div>
    </div>
        )
}

export default Recipe;