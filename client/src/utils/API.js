import axios from "axios";

export default {
  getPeople: function(query) {
    return axios.get("/api/people", { params: { search: query } });
  },
  getMovies: function(query) {
    return axios.get("/api/movies", { params: { search: query } });
  }
};
