
import axios from "axios";

 async function getDogs() {
  let response = await axios.get("localhost:5001/dogs");

  return response.data;
  }

//  const dogs = await getDogs();

 export default dogs;