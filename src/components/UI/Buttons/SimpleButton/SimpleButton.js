import { Link } from "react-router-dom";
import "./SimpleButton.scss";

const SimpleButton = (props) => {
  let htmlEntity;
  if (props.to) {
    htmlEntity = (
      <Link to={props.to} className="btn btn-main">
        {props.text}
      </Link>
    );
  } else {
    htmlEntity = (
      <button
        className="btn btn-main"
        onClick={props.onClick}
        type={props.type}
      >
        {props.text}
      </button>
    );
  }

  return htmlEntity;
};

export default SimpleButton;
