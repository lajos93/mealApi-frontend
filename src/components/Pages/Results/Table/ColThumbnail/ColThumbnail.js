import PropTypes from "prop-types";

const ColThumbnail = (props) => {
  return (
    <td>
      <img data-testid="tableIMG" src={props.thumbnail} alt="" />
    </td>
  );
};

ColThumbnail.propTypes = {
  thumbnail: PropTypes.string,
};

export default ColThumbnail;
