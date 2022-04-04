import axios from "axios";

const API = axios.create({
  baseURL: "https://safe-meadow-76300.herokuapp.com",
});

export default API;
