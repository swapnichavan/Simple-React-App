import React from 'react';

const CookingSteps=(props)=>{
  return(
      <div>
      <h2 className="text-center">Cooking Instructions</h2>
      {
        props.steps.map((step,index)=>
          <ul className="list-group" key={index}>
            <li className="list-group-item">{step}</li>
          </ul>
        )
      }
      </div>
    );
}

export default CookingSteps;