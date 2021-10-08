import { useState } from "react";
import PropTypes from "prop-types";

const ImageUpload = (props) => {
  const [imageURL, setImageURL] = useState();

  const imageChangeHandler = (e) => {
    e.preventDefault();

    const imageLocation = URL.createObjectURL(e.target.files[0]);
    if (imageLocation) {
      setImageURL(imageLocation);
      props.data(imageLocation);
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="Image" className="form-label">
        Image
      </label>
      {imageURL && (
        <div className="image-container d-flex justify-content-center">
          <img src={imageURL} alt="" />
        </div>
      )}
      <input
        type="file"
        className="form-control"
        placeholder="The meal's name"
        onChange={imageChangeHandler}
      />
    </div>
  );
};

ImageUpload.propTypes = {
  data: PropTypes.func,
};

export default ImageUpload;
