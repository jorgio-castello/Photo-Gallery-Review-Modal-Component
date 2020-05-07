import React from 'react';
import ModalCSS from '../style/Modal.css';
import ModalHeader from './ModalHeader';
import GalleryModal from './GalleryModal';

// eslint-disable-next-line object-curly-newline
const Modal = ({ name, location, photos, updateGalleryDisplay }) => (
  <>
    <div className={ModalCSS.modalBackground}>
      <div className={ModalCSS.modalContent}>
        <ModalHeader name={name} location={location} updateGalleryDisplay={updateGalleryDisplay} />
        <GalleryModal photos={photos} />
      </div>
    </div>
  </>
);

export default Modal;
