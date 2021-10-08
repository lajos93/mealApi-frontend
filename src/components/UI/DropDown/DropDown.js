import { useState } from "react";
import "./DropDown.scss";

import PropTypes from "prop-types";

const DropDown = (props) => {
  const [isHovered, setIshovered] = useState(false);
  const [selectedTaxonomy, setSelectedTaxonomy] = useState("sname");

  const onMouseOverHandle = () => {
    setIshovered(!isHovered);
    props.onMouseOverHandle(!isHovered);
  };

  const setSelectedFieldHandle = (index) => {
    setSelectedTaxonomy(fields[index]);
    props.setSelectedField(fields[index]);
  };

  const fields = ["sname", "ccategory", "imain-ingredient"];

  const formatString = (string) => {
    string = string.substring(1);
    string = string.replace("-", " ").toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);

    return string;
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={onMouseOverHandle}
      onMouseLeave={onMouseOverHandle}
    >
      {" "}
      <div className="button-container">
        <button
          className={"btn dropdown-toggle" + (isHovered ? " show" : "")}
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search by {formatString(selectedTaxonomy)}
        </button>
      </div>
      <ul
        className={"dropdown-menu" + (isHovered ? " show" : "")}
        aria-labelledby="dropdownMenuButton1"
      >
        {fields.map((item, i) => (
          <li
            key={i}
            className="dropdown-item"
            href="#"
            onClick={() => setSelectedFieldHandle(i)}
          >
            {formatString(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

DropDown.propTypes = {
  onMouseOverHandle: PropTypes.func.isRequired,
  setSelectedField: PropTypes.func.isRequired,
};

export default DropDown;
