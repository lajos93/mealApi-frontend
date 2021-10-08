import "./MainForm.scss";
import PropTypes from "prop-types";

import SimpleButton from "../../../UI/Buttons/SimpleButton/SimpleButton";

const MainForm = (props) => {
  const nameInputChangeHandler = (e) => {
    const rawVal = e.target.value;
    const formattedVal = rawVal.charAt(0).toUpperCase() + rawVal.slice(1);
    props.name(formattedVal);
  };

  const nameInputBlurHandler = () => {
    props.nameTouched(true);
  };

  const instructionsInputChangeHandler = (e) => {
    props.instructions(e.target.value);
  };

  const instructionsInputBlurHandler = () => {
    props.instructionsTouched(true);
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();
    props.formSubmit();
  };
  return (
    <form className="row w-100" onSubmit={formSubmitHandle}>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className={
            "form-control" + (props.nameIsInValid()[0] ? " is-invalid" : "")
          }
          placeholder="The meal's name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {props.nameIsInValid()[0] && (
        <p className="error-text text-danger">{props.nameIsInValid()[1]}</p>
      )}

      <div className="mb-3">
        <label htmlFor="Instructions" className="form-label">
          Instructions
        </label>
        <textarea
          type="text"
          className={
            "form-control" +
            (props.instructionsIsValid()[0] ? " is-invalid" : "")
          }
          placeholder="Instructions to make the food"
          rows="4"
          onChange={instructionsInputChangeHandler}
          onBlur={instructionsInputBlurHandler}
        ></textarea>
      </div>
      {props.instructionsIsValid()[0] && (
        <p className="error-text text-danger">
          {props.instructionsIsValid()[1]}
        </p>
      )}

      <div className="form-group">
        <SimpleButton text={"Add to database"} type={"submit"} />
      </div>
    </form>
  );
};

MainForm.propTypes = {
  name: PropTypes.func,
  nameTouched: PropTypes.func,
  instructions: PropTypes.func,
  instructionsTouched: PropTypes.func,
  formSubmit: PropTypes.func,
  nameIsInValid: PropTypes.func,
  instructionsIsValid: PropTypes.func,
};

export default MainForm;
