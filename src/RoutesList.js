import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList"
import DogDetails from "./DogDetails";

/** List of routes
 *
 * Props:
 * - dogs [{dog, ...}]
*/
function RoutesList({ dogs }) {
  return (
    <Routes>
      <Route path="/" element={<DogList dogs={ dogs }/>} />
      <Route path="/dogs/:name" element={<DogDetails dogs={ dogs }/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;