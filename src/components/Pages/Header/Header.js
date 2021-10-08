import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router";
import HttpService from "../../Services/Http/HttpService";
import SharedService from "../../Services/Shared/SharedService";
import SimpleButton from "../../UI/Buttons/SimpleButton/SimpleButton";
import Logo from "../../UI/Logo/Logo";
import SearchBar from "../../UI/SearchBar/SearchBar";
import "./Header.scss";

import PropTypes from "prop-types";

const Header = (props) => {
  const httpService = HttpService;
  const sharedService = SharedService;

  // Field validation
  const [enteredSearchWord, setEnteredSearchWord] = useState("");
  const [enteredSearchWordTouched, setEnteredSearchWordTouched] =
    useState(false);
  const enteredSearchWordIsValid = sharedService.hasAllowedChars(
    enteredSearchWord,
    /^[a-zA-Z ]*$/
  );
  const enteredSearchWordIsEmpty = enteredSearchWord.trim() === "";

  const [selectedTaxonomy, setSelectedTaxonomy] = useState("sname");

  const selectedTaxonomyHandle = (val) => {
    setSelectedTaxonomy(val);
  };

  const keyPressHandle = (val) => {
    setEnteredSearchWord(val);
  };

  const keyPressHandleTouched = (val) => {
    setEnteredSearchWordTouched(val);
  };

  const location = useLocation();
  const history = useHistory();

  // Form
  let formIsReady = false;

  if (enteredSearchWordIsValid && !enteredSearchWordIsEmpty) formIsReady = true;

  const formSubmitHandle = () => {
    setEnteredSearchWordTouched(true);

    if (!formIsReady) {
      return;
    }

    httpService.fetchData(selectedTaxonomy, enteredSearchWord).then((res) => {
      props.resultsData(res.data);
      if (location.pathname !== "/") {
        history.push("/");
      }
    });
  };
  return (
    <Fragment>
      <div className="row search-bar-container">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Logo to={"/"} />
        </div>
        <div className="col-4 ">
          <SearchBar
            selectedTaxonomy={selectedTaxonomyHandle}
            onChange={keyPressHandle}
            onChangeTouched={keyPressHandleTouched}
            fieldIsInValid={() =>
              sharedService.fieldIsInValid(
                enteredSearchWordIsEmpty,
                enteredSearchWordTouched,
                enteredSearchWordIsValid
              )
            }
            formSubmit={formSubmitHandle}
          />
        </div>
        <div className="col-4 col-add-meal ">
          <SimpleButton text={"Add meal"} to={"/add-meal"} />
        </div>
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  resultsData: PropTypes.func,
};

export default Header;
