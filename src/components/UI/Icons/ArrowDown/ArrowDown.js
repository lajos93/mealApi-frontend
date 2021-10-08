import PropTypes from "prop-types";

const ArrowDown = (props) => {
  const buttonExpandHandle = () => {
    props.isTableExpanded();
  };
  return (
    <button
      data-testid={props.dataTestid}
      className={"btn btn-expand-table " + props.className}
      onClick={buttonExpandHandle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  );
};

ArrowDown.propTypes = {
  isTableExpanded: PropTypes.any,
  dataTestid: PropTypes.string,
  className: PropTypes.string,
};

export default ArrowDown;