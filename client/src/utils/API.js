import axios from "axios";

export default {
  getResults: function(query) {
    return axios.get("/api/results", { params: { search: query } });
  }
};
