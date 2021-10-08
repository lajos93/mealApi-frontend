import "./Logo.scss";

import logo from "../../../img/logo-small.png";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Logo = (props) => {
  return (
    <Link to={props.to}>
      <img className="logo" src={logo} alt="" />
    </Link>
  );
};

Logo.propTypes = {
  to: PropTypes.string,
};

export default Logo;
