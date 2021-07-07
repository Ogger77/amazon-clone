import axios from "axios";

const instance = axios.create({
  // The API cloud function
  baseURL: "https://us-central1-clone-a7cff.cloudfunctions.net/api",
  // dev http://localhost:5001/clone-a7cff/us-central1/api
});

export default instance;
