import { useState } from "react";
import { useHistory } from "react-router";
import SharedService from "../../Services/Shared/SharedService";
import "./AddNewField.scss";
import MainForm from "./MainForm/MainForm";
import SideForm from "./SideForm/SideForm";

const AddNewField = () => {
  const sharedService = SharedService;

  // Name
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = sharedService.hasAllowedChars(
    enteredName,
    /^[a-zA-Z ]*$/
  );
  const enteredNameIsEmpty = enteredName.trim() === "";

  const nameDataHandler = (val) => {
    // setName(val);
    setEnteredName(val);
  };

  const nameDataBlurHandler = (val) => {
    setEnteredNameTouched(val);
  };

  // Instructions
  const [enteredInstruction, setInstructions] = useState("");
  const [enteredInstructionsTouched, setInstructionsTouched] = useState(false);
  const enteredInstructionsIsValid = sharedService.hasAllowedChars(
    enteredInstruction,
    /^[A-Za-z0-9 \n]*$/
  );
  const enteredInstructionsIsEmpty = enteredInstruction.trim() === "";

  const textDataHandler = (val) => {
    setInstructions(val);
  };

  const textDataBlurHandler = (val) => {
    setInstructionsTouched(val);
  };

  // Image
  const [imageURL, setImageURL] = useState(
    sharedService.getEmptyImagePlaceholder()
  );

  const imageDataHandler = (val) => {
    setImageURL(val);
  };

  // Ingredients
  const [listData, setListData] = useState([]);

  const [enteredIngredient, setIngredientName] = useState("");
  const [enteredIngredientTouched, setIngredientTouched] = useState(false);
  const enteredIngredientIsValid = sharedService.hasAllowedChars(
    enteredIngredient,
    /^[a-zA-Z]*$/
  );
  const enteredIngredientIsEmpty = enteredIngredient.trim() === "";

  const listDataHandler = (val) => {
    setListData(val);
  };

  const ingredientItemHandler = (val) => {
    setIngredientName(val);
  };

  const ingredientItemBlurHandler = (val) => {
    setIngredientTouched(val);
  };

  // Form
  let formIsValid = false;

  if (
    enteredNameIsValid &&
    !enteredNameIsEmpty &&
    enteredInstructionsIsValid &&
    !enteredInstructionsIsEmpty &&
    enteredIngredientIsValid &&
    !enteredIngredientIsEmpty
  ) {
    formIsValid = true;
  }

  const history = useHistory();

  const formSubmitHandle = () => {
    setEnteredNameTouched(true);
    setInstructionsTouched(true);
    setIngredientTouched(true);

    if (!formIsValid) return;

    const data = {
      name: enteredName,
      imgURL: imageURL,
      ingredients: listData,
      instructions: enteredInstruction,
    };

    history.push({
      pathname: "/",
      state: {
        data: data,
      },
    });
  };

  return (
    <div className="row">
      <div className="col-2 "></div>
      <div className="col-8 mt-3 p-0">
        <div className="row">
          <div className="col-8">
            <div className="form-container mt-3 mb-3 d-flex vertical-align-center">
              <MainForm
                formSubmit={formSubmitHandle}
                name={nameDataHandler}
                nameTouched={nameDataBlurHandler}
                nameIsInValid={() =>
                  sharedService.fieldIsInValid(
                    enteredNameIsEmpty,
                    enteredNameTouched,
                    enteredNameIsValid
                  )
                }
                instructions={textDataHandler}
                instructionsTouched={textDataBlurHandler}
                instructionsIsValid={() =>
                  sharedService.fieldIsInValid(
                    enteredInstructionsIsEmpty,
                    enteredInstructionsTouched,
                    enteredInstructionsIsValid
                  )
                }
                formIsValid={formIsValid}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-container mt-3 mb-3 ">
              <SideForm type={"file"} data={imageDataHandler} />
            </div>
            <div className="form-container mt-3 mb-3 ">
              <SideForm
                text={"Add ingredient"}
                type={"list"}
                data={listDataHandler}
                ingredientItem={ingredientItemHandler}
                ingredientSetItem={enteredIngredient}
                ingredientsTouched={ingredientItemBlurHandler}
                ingredientIsInValid={() =>
                  sharedService.fieldIsInValid(
                    enteredIngredientIsEmpty,
                    enteredIngredientTouched,
                    enteredIngredientIsValid
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewField;
