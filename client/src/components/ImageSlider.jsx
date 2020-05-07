/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import ImageSliderCSS from '../style/ImageSlider.css';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleImageSliderClick(e);
  }

  render() {
    return (
      <div
        style={this.props.backgroundImage}
        className={ImageSliderCSS.container}
        aria-label={this.props.alt}
        onClick={this.handleClick}
      >
        <div className={ImageSliderCSS.prev_button}>
          <button
            type="button"
            className={ImageSliderCSS.slider_button}
            onClick={this.handleClick}
          >
            <img className={ImageSliderCSS.directional_arrow_left} src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/angle-arrow-down.png" alt="Previous" />
          </button>
        </div>

        <div className={ImageSliderCSS.slider_button_container}>
          <button
            type="button"
            className={ImageSliderCSS.slider_button}
            onClick={this.handleClick}
          >
            <img className={ImageSliderCSS.directional_arrow_right} src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/angle-arrow-down.png" alt="Next" />
          </button>
        </div>

        <button
          className={ImageSliderCSS.view_all_button}
          type="button"
          onClick={this.handleClick}
        >
          <img className={ImageSliderCSS.view_all_img} src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/photo-camera.png" alt="View All" />
          <span
            className={ImageSliderCSS.img_count}
          >
            View All Photos (
            {this.props.count}
            )
          </span>
        </button>
      </div>
    );
  }
};

export default ImageSlider;
