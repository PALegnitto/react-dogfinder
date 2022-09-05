import { NavLink } from "react-router-dom";
import "./Nav.css";


/** Nav component
 *
 * Props:
 * - dog: [{dog, ...}]
 *
 * dynamically renders link for all dog names, with img
 */
function Nav({ dogs }) {

  return (
    <ul className ="NavBar">
      {
        dogs.map(d => (
          <li key={d.name}>
            <NavLink
              to={`/dogs/${d.src}`} >
              {/* <img src={`../${d.src}.jpg`} alt={d.name} /> */}
              {d.name}
            </NavLink>
          </li>
        ))
      }
    </ul>

  );
}

export default Nav;