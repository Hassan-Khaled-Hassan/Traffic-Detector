import axios from 'axios';

const BaseURL = axios.create({
  baseURL: "https://graduation-project-fdvx.onrender.com",
  //baseURL: "http://localhost:3000/",
});
export default BaseURL;