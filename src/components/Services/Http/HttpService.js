import axios from "axios";

const HttpService = {
  fetchData(selectedTaxonomy, keypress) {
    const url = `https://mealapi-backend.herokuapp.com/api/meals/${selectedTaxonomy}/${keypress}`;
    return axios.get(url);
  },

  postData(selectedTaxonomy, searchWord, mealDataObj) {
    const url = `https://mealapi-backend.herokuapp.com/api/meals/${selectedTaxonomy}`;
    const parsedDataObj = JSON.parse(mealDataObj);
    const body = {
      searchWord: searchWord,
      mealData: parsedDataObj,
    };

    return axios.post(url, body);
  },
};

export default HttpService;
