import { Fragment, useState } from "react";
import { Route } from "react-router";
import "./App.scss";
import AddNewField from "./components/Pages/AddNewField/AddNewField";
import Header from "./components/Pages/Header/Header";

import Results from "./components/Pages/Results/Results";

const App = () => {
  const [searchResultsData, setSearchResultsData] = useState(null);

  const handleResults = (val) => {
    setSearchResultsData(val);
  };

  return (
    <Fragment>
      <Header resultsData={handleResults} />
      <div className="container-fluid mb-5">
        <Route exact path="/">
          <Results data={searchResultsData} />
        </Route>
        <Route exact path="/add-meal">
          <AddNewField />
        </Route>
      </div>
    </Fragment>
  );
};

export default App;
