import React from 'react';
import PropTypes from 'prop-types';

import ReviewModalCSS from '../../style/ReviewModal.css';
import Review from '../Review';

import awsS3Links from '../../../../AmazonS3Links';

const { arrowIcon, awsBaseUrl } = awsS3Links;

const ReviewModal = (
  {
    photos, activePhotoIdx, handleImageSliderClick, showGalleryModal,
  },
) => {
  const activePhoto = photos[activePhotoIdx];

  return (
    <div className={ReviewModalCSS.container}>
      <div className={ReviewModalCSS.leftContainer}>
        <div className={ReviewModalCSS.showGalleryContainer}>
          <button
            type="button"
            className={ReviewModalCSS.showGalleryButton}
            onClick={showGalleryModal}
          >
            Gallery
          </button>
        </div>
        <div className={ReviewModalCSS.prev_button}>
          <button
            type="button"
            className={ReviewModalCSS.slider_button}
            onClick={handleImageSliderClick}
          >
            <img
              className={ReviewModalCSS.directional_arrow_left}
              src={arrowIcon}
              alt="Previous"
            />
          </button>
        </div>
      </div>
      <img
        className={ReviewModalCSS.image}
        alt={activePhoto.alt}
        src={`${awsBaseUrl}/${activePhoto.link}`}
      />
      <div className={ReviewModalCSS.rightContainer}>
        <div className={ReviewModalCSS.showStatsContainer}>
          <span className={ReviewModalCSS.activityPhotoStats}>
            {Number(activePhotoIdx) + 1}
            {' '}
            of
            {' '}
            {photos.length}
          </span>
        </div>
        <div className={ReviewModalCSS.next_button}>
          <button
            type="button"
            className={ReviewModalCSS.slider_button}
            onClick={handleImageSliderClick}
          >
            <img
              className={ReviewModalCSS.directional_arrow_right}
              src={arrowIcon}
              alt="Next"
            />
          </button>
        </div>
      </div>
      <div className={ReviewModalCSS.reviewComponent}>
        <Review photos={photos} activePhotoIdx={activePhotoIdx} />
      </div>
    </div>
  );
};

ReviewModal.defaultProps = {
  photos: [],
  activePhotoIdx: 0,
  handleImageSliderClick: () => {},
  showGalleryModal: () => {},
};

ReviewModal.propTypes = {
  photos: PropTypes.shape([]),
  activePhotoIdx: PropTypes.number,
  handleImageSliderClick: PropTypes.func,
  showGalleryModal: PropTypes.func,
};

export default ReviewModal;
