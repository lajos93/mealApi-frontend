import axios from "axios";

const HttpService = {
  fetchData(selectedTaxonomy, keypress) {
    const url = `http://localhost:3001/api/meals/${selectedTaxonomy}/${keypress}`;
    return axios.get(url);
  },
};

export default HttpService;
