import { Fragment, useEffect, useRef, useState } from "react";
import SimpleButton from "../../../../UI/Buttons/SimpleButton/SimpleButton";
import RemoveItem from "../../../../UI/Icons/RemoveItem/RemoveItem";
import PropTypes from "prop-types";

const Ingredient = (props) => {
  const inputIngredient = useRef(null);
  const [ingredientList, setIngredientList] = useState([]);
  const [showItemRemoveButton, setShowItemRemoveButton] = useState(false);
  const [showItemRemoveButtonIndex, setShowItemRemoveButtonIndex] = useState(0);

  const textChangeHandler = (e) => {
    e.preventDefault();
    props.ingredientsTouched(true);
    props.ingredientItem(e.target.value);
  };

  const textChangeBlurHandler = (e) => {
    props.ingredientsTouched(true);
  };

  useEffect(() => {
    props.data(ingredientList);
  }, [props, ingredientList]);

  const listChangeHandler = (e) => {
    e.preventDefault();

    if (inputIngredient.current.value && !props.ingredientIsInValid()[0]) {
      setIngredientList((prevArray) => [...prevArray, props.ingredientSetItem]);
      inputIngredient.current.value = "";
    }
  };

  useEffect(() => {
    if (ingredientList < 1) {
      setShowItemRemoveButton(false);
    }
  }, [ingredientList]);

  const listShowItemRemoveContainerShow = () => {
    setShowItemRemoveButton(true);
  };

  const listShowItemRemoveContainerHide = () => {
    setShowItemRemoveButton(false);
  };

  const listShowItemRemove = (index) => {
    setShowItemRemoveButtonIndex(index);
  };

  const removeListItem = (index) => {
    setIngredientList(
      ingredientList.filter(function (item, i) {
        return i !== index;
      })
    );
  };
  return (
    <Fragment>
      <div className="mb-3">
        <label htmlFor="Ingredient" className="form-label">
          Ingredient
        </label>
        {ingredientList.length !== 0 && (
          <div
            className="list-container"
            onMouseEnter={listShowItemRemoveContainerShow}
            onMouseLeave={listShowItemRemoveContainerHide}
          >
            <ul>
              {ingredientList.map((item, i) => (
                <li
                  onMouseEnter={() => listShowItemRemove(i)}
                  onMouseLeave={() => listShowItemRemove(i)}
                  key={i}
                >
                  {item}
                  <span
                    onClick={() => removeListItem(i)}
                    className={
                      (showItemRemoveButtonIndex === i && showItemRemoveButton
                        ? "show "
                        : "hide ") + "remove-item"
                    }
                  >
                    <RemoveItem />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <input
          ref={inputIngredient}
          type="text"
          className={
            "form-control" +
            (props.ingredientIsInValid()[0] ? " is-invalid" : "")
          }
          placeholder="eg.: Water"
          onChange={textChangeHandler}
          onBlur={textChangeBlurHandler}
        />
      </div>
      {props.ingredientIsInValid()[0] && (
        <p className="error-text text-danger">
          {props.ingredientIsInValid()[1]}
        </p>
      )}
      {props.text && (
        <SimpleButton text={props.text} onClick={listChangeHandler} />
      )}
    </Fragment>
  );
};

Ingredient.propTypes = {
  ingredientsTouched: PropTypes.func,
  ingredientItem: PropTypes.func,
  data: PropTypes.func,
  text: PropTypes.string,
  ingredientSetItem: PropTypes.string,
  ingredientIsInValid: PropTypes.func,
};

export default Ingredient;
