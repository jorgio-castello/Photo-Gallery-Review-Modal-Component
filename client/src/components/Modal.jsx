import React from 'react';
import PropTypes from 'prop-types';

import ModalCSS from '../style/Modal.css';
import ModalHeader from './ModalHeader';
import GalleryModal from './GalleryModal';
import ReviewModal from './ReviewModal';

const Modal = (
  {
    name, location, activePhotoIdx, photos, // Props related to activity / photo data
    shouldShowGalleryModal, // Boolean to show either gallery or review modal
    updateGalleryDisplay, handleImageSliderClick, showGalleryModal, showReviewModal, // Event funcs
  },
) => (
  <>
    <div className={ModalCSS.modalBackground}>
      <div className={ModalCSS.modalContent}>
        <ModalHeader
          name={name}
          location={location}
          updateGalleryDisplay={updateGalleryDisplay}
        />

        {shouldShowGalleryModal // Ternary test to show appropriate modal
          ? (
            <GalleryModal
              photos={photos}
              showReviewModal={showReviewModal}
            />
          )
          : (
            <ReviewModal
              photos={photos}
              activePhotoIdx={activePhotoIdx}
              handleImageSliderClick={handleImageSliderClick}
              showGalleryModal={showGalleryModal}
            />
          )}
      </div>
    </div>
  </>
);

Modal.defaultProps = {
  name: '',
  location: '',
  activePhotoIdx: 0,
  photos: [],
  updateGalleryDisplay: () => {},
  shouldShowGalleryModal: false,
  handleImageSliderClick: () => {},
  showGalleryModal: () => {},
  showReviewModal: () => {},
};

Modal.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  activePhotoIdx: PropTypes.number,
  photos: PropTypes.shape([]),
  updateGalleryDisplay: PropTypes.func,
  shouldShowGalleryModal: PropTypes.bool,
  handleImageSliderClick: PropTypes.func,
  showGalleryModal: PropTypes.func,
  showReviewModal: PropTypes.func,
};

export default Modal;
