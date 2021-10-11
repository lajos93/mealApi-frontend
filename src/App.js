import { Fragment, useState } from "react";
import { Route } from "react-router";
import "./App.scss";
import AddNewField from "./components/Pages/AddNewField/AddNewField";
import Header from "./components/Pages/Header/Header";

import Results from "./components/Pages/Results/Results";

const App = () => {
  const [searchResultsData, setSearchResultsData] = useState(null);
  const [selectedTaxonomy, setSelectedTaxonomy] = useState("name");
  const [enteredSearchWord, setEnteredSearchWord] = useState("");

  const handleResults = (val) => {
    setSearchResultsData(val);
  };

  const handleSelectedTaxonomy = (val) => {
    setSelectedTaxonomy(val);
  };

  const handleEnteredSearchWord = (val) => {
    setEnteredSearchWord(val);
  };

  return (
    <Fragment>
      <Header
        resultsData={handleResults}
        selectedTaxonomy={handleSelectedTaxonomy}
        enteredSearchWord={handleEnteredSearchWord}
      />
      <div className="container-fluid mb-5">
        <Route exact path="/">
          <Results searchData={searchResultsData} />
        </Route>
        <Route exact path="/add-meal">
          <AddNewField
            selectedTaxonomy={selectedTaxonomy}
            enteredSearchWord={enteredSearchWord}
            resultsData={handleResults}
          />
        </Route>
      </div>
    </Fragment>
  );
};

export default App;
