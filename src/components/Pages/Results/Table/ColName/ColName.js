import PropTypes from "prop-types";

const ColName = (props) => {
  return (
    <td valign="middle">
      <div data-testid="tableName">{props.name}</div>
    </td>
  );
};

ColName.propTypes = {
  name: PropTypes.string,
};

export default ColName;
