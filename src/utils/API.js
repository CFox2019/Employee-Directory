import axios from "axios";

const API = {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api?results=25");
  }
}

export default API;
