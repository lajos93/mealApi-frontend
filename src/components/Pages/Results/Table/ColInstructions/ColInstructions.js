import ArrowDown from "../../../../UI/Icons/ArrowDown/ArrowDown";
import PropTypes from "prop-types";

const ColInstructions = (props) => {
  return (
    <td
      className={
        "show-expand " +
        (props.isInstructionsExpanded ? "sub-section-show" : "sub-section-hide")
      }
    >
      <div
        data-testid="tableInstructions"
        className={
          "instructions-container " +
          (props.isInstructionsExpanded
            ? "sub-section-show"
            : "sub-section-hide")
        }
      >
        {props.instructions &&
          props.expandedInstructions(props.isInstructionsExpanded)}
        <div
          className={
            (props.isInstructionsExpanded ? "to-close " : "") + "arrow-down"
          }
        >
          <ArrowDown
            isTableExpanded={props.isInstructionsExpandedHandle}
            className={props.isInstructionsExpanded ? "to-close " : ""}
          />
        </div>
      </div>
    </td>
  );
};

ColInstructions.propTypes = {
  isInstructionsExpanded: PropTypes.bool,
  instructions: PropTypes.string,
  expandedInstructions: PropTypes.func,
  isInstructionsExpandedHandle: PropTypes.any,
};

export default ColInstructions;
