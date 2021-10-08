import { useState } from "react";
import ColIngredient from "./ColIngredient/ColIngredient";
import ColInstructions from "./ColInstructions/ColInstructions";
import ColName from "./ColName/ColName";
import ColThumbnail from "./ColThumbnail/ColThumbnail";
import "./Table.scss";

import PropTypes from "prop-types";

const CustomTable = (props) => {
  const [isIngredientsExpanded, setIsIngredientsExpanded] = useState(false);
  const [isInstructionsExpanded, setIsInstructionsExpanded] = useState(false);

  const isIngredientsExpandedHandle = () => {
    setIsIngredientsExpanded(!isIngredientsExpanded);
  };

  const isInstructionsExpandedHandle = () => {
    setIsInstructionsExpanded(!isInstructionsExpanded);
  };

  const expandedIngredients = (isExpanded) => {
    if (isExpanded) {
      return props.ingredients.map((item, i) => <li key={i}>{item}</li>);
    } else {
      return props.ingredients
        .slice(0, 3)
        .map((item, i) => <li key={i}>{item}</li>);
    }
  };

  const expandedInstructions = (isExpanded) => {
    if (isExpanded) {
      return props.instructions;
    } else {
      return props.instructions.substring(0, 180) + "...";
    }
  };

  return (
    <tr
      style={{ zIndex: props.resultsLength - props.index }}
      className={"tr-container"}
    >
      <ColName name={props.name} />
      <ColThumbnail thumbnail={props.thumbnail} />

      {props.ingredients && (
        <ColIngredient
          expandedIngredients={expandedIngredients}
          isIngredientsExpanded={isIngredientsExpanded}
          isIngredientsExpandedHandle={isIngredientsExpandedHandle}
          ingredients={props.ingredients}
        />
      )}
      {!props.ingredients && <td></td>}

      {props.instructions && (
        <ColInstructions
          expandedInstructions={expandedInstructions}
          isInstructionsExpanded={isInstructionsExpanded}
          isInstructionsExpandedHandle={isInstructionsExpandedHandle}
          instructions={props.instructions}
        />
      )}
      {!props.instructions && <td></td>}
    </tr>
  );
};

CustomTable.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.string,
  resultsLength: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default CustomTable;
