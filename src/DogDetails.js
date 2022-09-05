import { useState } from "react";
import { useParams } from "react-router-dom";

/**Render details on one dog
 *
 * Props:
 * - dogs [{dog, ...}]
 *
 * State:
 * - [dog, setDog]: set dog as dog.name = params
 *
 * App -> DogList -> DogDetails
 */
function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter(dog => dog.src === name)[0];

  return (
    <section>
      {dog
        ?
        <ul key={dog.name}>
          <li><img src={`../${dog.src}.jpg`} alt={dog.name} /></li>
          <li>name: {dog.name}</li>
          <li>age: {dog.age}</li>
          <li>facts: {dog.facts}</li>
        </ul>
        :
        <p>is loading</p>
      }
    </section>
  );
}

export default DogDetails;