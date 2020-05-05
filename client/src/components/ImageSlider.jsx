/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import ImageSliderCSS from '../style/ImageSlider.css';

const ImageSlider = ({ backgroundImage, alt, count, prevImageHandler, nextImageHandler, showGalleryModalHandler }) => (
  <div style={backgroundImage} className={ImageSliderCSS.container} aria-label={alt}>
    <div className={ImageSliderCSS.prev_button}>
      <button
        type="button"
        className={ImageSliderCSS.slider_button}
        onClick={prevImageHandler}
      >
        <img className={ImageSliderCSS.directional_arrow_left} src="/client/dist/assets/angle-arrow-down.png" alt="Previous" />
      </button>
    </div>

    <div className={ImageSliderCSS.slider_button_container}>
      <button
        type="button"
        className={ImageSliderCSS.slider_button}
        onClick={nextImageHandler}
      >
        <img className={ImageSliderCSS.directional_arrow_right} src="/client/dist/assets/angle-arrow-down.png" alt="Next" />
      </button>
    </div>

    <div className={ImageSliderCSS.view_all_button}>
      <button
        type="button"
        className={ImageSliderCSS.img_count}
        onClick={showGalleryModalHandler}
      >
        View All Photos (
        {count}
        )
      </button>
    </div>
  </div>
);

export default ImageSlider;
