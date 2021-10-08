import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import SearchIcon from "../Icons/SearchIcon/SearchIcon";
import "./SearchBar.scss";

import PropTypes from "prop-types";

const SearchBar = (props) => {
  const [isHovered, setIshovered] = useState(false);
  const onChildMouseOverHandle = (val) => {
    setIshovered(val);
  };

  const SetSelectedFieldHandle = (val) => {
    props.selectedTaxonomy(val);
  };

  const handleKeyPress = (e) => {
    props.onChange(e.target.value);
  };

  const handleKeyPressBlur = () => {
    props.onChangeTouched(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.formSubmit();
  };

  return (
    <div className="row">
      <form>
        <div
          className={
            "d-flex form-control" +
            (isHovered ? " border-bottom-left-0" : "") +
            (props.fieldIsInValid()[0] ? " is-invalid" : "")
          }
        >
          <DropDown
            onMouseOverHandle={onChildMouseOverHandle}
            setSelectedField={SetSelectedFieldHandle}
          />
          <div className="input-container d-flex w-100">
            <input
              data-testid="searchInput"
              className="form-control-inner"
              type="search"
              onChange={handleKeyPress}
              onBlur={handleKeyPressBlur}
            />
            {props.fieldIsInValid()[0] && (
              <p className="error-text text-danger position-absolute">
                {props.fieldIsInValid()[1]}
              </p>
            )}
          </div>
          <button
            data-testid="searchButton"
            className="btn btn-search"
            onClick={handleFormSubmit}
          >
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  selectedTaxonomy: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeTouched: PropTypes.func.isRequired,
  formSubmit: PropTypes.any,
  fieldIsInValid: PropTypes.func.isRequired,
};

export default SearchBar;
