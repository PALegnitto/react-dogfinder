import defaultDogs from "./api-calls";
import React from "react";
import { NavLink } from "react-router-dom";


function Nav({dogs = defaultDogs}){

  return (
    <ul>
      {dogs.map( d => (
    <li>
      <NavLink to={`/dogs/${d.name}`} >
      <img src={`${d.src}`} alt={`${d.name}`}/>
       {d.name}
      </NavLink>
    </li>
  ))
}
    </ul>
  );
}

export default Nav;