import ArrowDown from "../../../../UI/Icons/ArrowDown/ArrowDown";
import PropTypes from "prop-types";

const ColIngredient = (props) => {
  return (
    <td
      className={
        "show-expand " +
        (props.isIngredientsExpanded ? "sub-section-show" : "sub-section-hide")
      }
    >
      <div
        data-testid="tableIngredients"
        className={
          "ingredients-container-compact " +
          (props.isIngredientsExpanded
            ? "sub-section-show"
            : "sub-section-hide")
        }
      >
        {props.ingredients &&
          props.expandedIngredients(props.isIngredientsExpanded)}
        <div
          className={
            (props.isIngredientsExpanded ? "to-close " : "") + "arrow-down"
          }
        >
          <ArrowDown
            dataTestid="expandIngredients"
            isTableExpanded={props.isIngredientsExpandedHandle}
            className={props.isIngredientsExpanded ? "to-close" : ""}
          />
        </div>
      </div>
    </td>
  );
};

ColIngredient.propTypes = {
  isIngredientsExpanded: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  expandedIngredients: PropTypes.func,
  isIngredientsExpandedHandle: PropTypes.any,
};

export default ColIngredient;
