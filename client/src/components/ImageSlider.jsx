import React from 'react';
import PropTypes from 'prop-types';

import ImageSliderCSS from '../style/ImageSlider.css';

// Import AWS S3 Links
import awsS3Links from '../../../AmazonS3Links';
// Destrcture awsS3Links
const { arrowIcon, cameraIcon } = awsS3Links;

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    // Destructure props event handlers
    const { handleImageSliderClick } = this.props;
    this.handleImageSliderClick = handleImageSliderClick.bind(this);
  }

  handleClick(e) {
    this.handleImageSliderClick(e);
  }

  render() {
    // Destructure props static data
    const { backgroundImage, imageCount } = this.props;

    return (
      // * Accessibility features to implemenet: ability to focus Image Click with tab keypress *
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      <div // Clickable div that features a background image for the current picture
        role="button"
        style={backgroundImage}
        className={ImageSliderCSS.container}
        aria-label="Click to View Image Modal"
        onClick={this.handleClick}
        onKeyPress={() => {}}
      >
        <div className={ImageSliderCSS.prev_button}>
          <button // Button that includes an arrow icon img to go to the previous image
            type="button"
            className={ImageSliderCSS.slider_button}
            onClick={this.handleClick}
          >
            <img
              className={ImageSliderCSS.directional_arrow_left}
              src={arrowIcon}
              alt="Previous"
            />
          </button>
        </div>

        <div className={ImageSliderCSS.slider_button_container}>
          <button // Button that includes an arrow icon img to go to the next image
            type="button"
            className={ImageSliderCSS.slider_button}
            onClick={this.handleClick}
          >
            <img
              className={ImageSliderCSS.directional_arrow_right}
              src={arrowIcon}
              alt="Next"
            />
          </button>
        </div>

        <button // Button that allows a user to view the Gallery Modal for all of the images
          className={ImageSliderCSS.view_all_button}
          type="button"
          onClick={this.handleClick}
        >
          <img
            className={ImageSliderCSS.view_all_img}
            src={cameraIcon}
            alt="View Gallery"
          />
          <span
            className={ImageSliderCSS.img_count}
          >
            View All Photos (
            {imageCount}
            )
          </span>
        </button>
      </div>
    );
  }
}

ImageSlider.defaultProps = {
  handleImageSliderClick: () => {},
  backgroundImage: {},
  imageCount: 0,
};

ImageSlider.propTypes = {
  handleImageSliderClick: PropTypes.func,
  backgroundImage: PropTypes.objectOf(PropTypes.any),
  imageCount: PropTypes.number,
};
export default ImageSlider;
