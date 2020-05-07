import React from 'react';
import ModalCSS from '../style/Modal.css';
import ModalHeader from './ModalHeader';
import GalleryModal from './GalleryModal';
import ReviewModal from './ReviewModal';

// eslint-disable-next-line object-curly-newline
const Modal = ({ name, location, photos, updateGalleryDisplay, shouldShowGalleryModal }) => (
  <>
    <div className={ModalCSS.modalBackground}>
      <div className={ModalCSS.modalContent}>
        <ModalHeader name={name} location={location} updateGalleryDisplay={updateGalleryDisplay} />
        {shouldShowGalleryModal
          ? <GalleryModal photos={photos} />
          : <ReviewModal photos={photos} />}
      </div>
    </div>
  </>
);

export default Modal;
