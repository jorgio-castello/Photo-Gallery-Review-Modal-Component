import React from 'react';
import PropTypes from 'prop-types';

import ModalCSS from '../style/Modal.css';
import ModalHeader from './Partials/ModalHeader';
import GalleryModal from './GalleryModal/index';
import ReviewModal from './ReviewModal/index';

const Modal = (
  {
    name, location, activePhotoIdx, photos, // Props related to activity / photo data
    shouldShowGalleryModal, // Boolean to show either gallery or review modal
    closeModal, handleImageSliderClick, showGalleryModal, showReviewModal, // Event funcs
  },
) => (
  <>
    <div className={ModalCSS.modalBackground}>
      <div className={ModalCSS.modalContent}>
        <ModalHeader
          name={name}
          location={location}
          closeModal={closeModal}
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

Modal.defaultProps = {};

Modal.propTypes = {};

export default Modal;
