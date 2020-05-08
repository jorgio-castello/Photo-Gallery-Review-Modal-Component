import React from 'react';
import ReviewModalCSS from '../style/ReviewModal.css';

const ReviewModal = ({photos, activePhotoIdx}) => {
  const activePhoto = photos[activePhotoIdx];

  return (
    <div className={ReviewModalCSS.container}>
      <div className={ReviewModalCSS.leftContainer}>
        <div className={ReviewModalCSS.prev_button}>
          <button
            type="button"
            className={ReviewModalCSS.slider_button}
            // onClick={this.handleClick}
          >
            <img className={ReviewModalCSS.directional_arrow_left} src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/angle-arrow-down.png" alt="Previous" />
          </button>
        </div>
      </div>
      <img
        className={ReviewModalCSS.image}
        alt={activePhoto.alt}
        src={`https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${activePhoto.link}`}
      />
      <div className={ReviewModalCSS.rightContainer}>
        <div className={ReviewModalCSS.next_button}>
          <button
            type="button"
            className={ReviewModalCSS.slider_button}
            // onClick={this.handleClick}
          >
            <img className={ReviewModalCSS.directional_arrow_right} src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/angle-arrow-down.png" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
