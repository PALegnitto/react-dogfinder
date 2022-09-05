import './App.css';
import React, { useState } from "react";
import Nav from './Nav';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";

/** DogFinder App
 *
 * makes ajax call to db to get JSON data on dogs [{dog, ...}]
 * renders Nav, Routes and main component
 *
 * App -> {Nav, Routes}
 */
function App() {
  const [data, setData] = useState(null);


  async function getDogs() {
    const resp = await axios.get("http://localhost:5001/dogs");
    setData(resp.data);
  }

  !data && getDogs();

  return (
    <div className="App">
      {data
        ?
        <BrowserRouter>
          <Nav dogs={data} />
          <RoutesList dogs={data} />
        </BrowserRouter>
        :
        <p>loading</p>}
    </div>
  );
}

export default App;
