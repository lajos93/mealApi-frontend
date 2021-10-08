import ImageUpload from "./ImageUpload.js/ImageUpload";
import Ingredient from "./Ingredients/Ingredient";
import PropTypes from "prop-types";

import "./SideForm.scss";

const SideForm = (props) => {
  let componentType;

  if (props.type === "file") {
    componentType = <ImageUpload type={props.type} data={props.data} />;
  } else {
    componentType = (
      <Ingredient
        text={props.text}
        type={props.type}
        data={props.data}
        ingredientItem={props.ingredientItem}
        ingredientSetItem={props.ingredientSetItem}
        ingredientsTouched={props.ingredientsTouched}
        ingredientIsInValid={props.ingredientIsInValid}
      />
    );
  }

  return (
    <form className="row">
      <div className="form-group">{componentType}</div>
    </form>
  );
};

SideForm.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  data: PropTypes.func,
  ingredientItem: PropTypes.func,
  ingredientSetItem: PropTypes.string,
  ingredientsTouched: PropTypes.func,
  ingredientIsInValid: PropTypes.func,
};

export default SideForm;
