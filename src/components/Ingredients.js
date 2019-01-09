import React from 'react';

const Ingredients=(props)=>{
  return(
    <div>
    <h2 className="text-center">Ingredients</h2>
    {
      props.ingredientsList.map((list,index)=>
        <ul className="list-group" key={index}>
        <li className="list-group-item">{list.name} {list.amount} {list.measurement}</li>
        </ul>
      )
    }
    </div>
    );
}

export default Ingredients;