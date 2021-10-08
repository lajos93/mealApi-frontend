import axios from "axios";

const HttpService = {
  fetchData(selectedTaxonomy, keypress) {
    const formattedTaxonomyID = selectedTaxonomy.charAt(0);

    const url = `https://www.themealdb.com/api/json/v1/1/${
      selectedTaxonomy === "sname" ? "search" : "filter"
    }.php?${formattedTaxonomyID}=${keypress}`;

    return axios.get(url);
  },
};

export default HttpService;
