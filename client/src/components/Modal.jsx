import React from 'react';
import ModalCSS from '../style/Modal.css';
import ModalHeader from './ModalHeader';
import GalleryModal from './GalleryModal';
import ReviewModal from './ReviewModal';

// eslint-disable-next-line object-curly-newline
const Modal = ({ name, location, activePhotoIdx, photos, updateGalleryDisplay, shouldShowGalleryModal, handleImageSliderClick, showGalleryModal, showReviewModal }) => (
  <>
    <div className={ModalCSS.modalBackground}>
      <div className={ModalCSS.modalContent}>
        <ModalHeader name={name} location={location} updateGalleryDisplay={updateGalleryDisplay} />
        {shouldShowGalleryModal
          ? <GalleryModal photos={photos} showReviewModal={showReviewModal} />
          : <ReviewModal photos={photos} activePhotoIdx={activePhotoIdx} handleImageSliderClick={handleImageSliderClick} showGalleryModal={showGalleryModal} />}
      </div>
    </div>
  </>
);

export default Modal;
