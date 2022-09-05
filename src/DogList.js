/** Render a list of all dogs and their info
 *
 * - Props:
 * - dogs: [{dog,...}]
 *
 * App -> DogList
 */
function DogList({ dogs }) {
  return (
    <section>
      {dogs.map(dog => (
      <ul key={dog.name}>
        <li><img src={`../${dog.src}.jpg`} alt={dog.name} /></li>
        <li>name: {dog.name}</li>
        <li>age: {dog.age}</li>
        <li>facts: {dog.facts}</li>
      </ul>
    ))}
    </section>
  );
}

export default DogList;