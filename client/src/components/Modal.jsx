import React from 'react';
import GalleryModalCSS from '../style/GalleryModal.css';
import ModalHeader from './ModalHeader';
import GalleryModalPicture from './GalleryModalPicture';

// eslint-disable-next-line object-curly-newline
const GalleryModal = ({ name, location, photos, updateGalleryDisplay }) => (
  <>
    <div className={GalleryModalCSS.modalBackground}>
      <div className={GalleryModalCSS.modalContent}>
        <ModalHeader name={name} location={location} updateGalleryDisplay={updateGalleryDisplay} />
        <div className={GalleryModalCSS.modalGallery}>
          {photos.map((photo, index) => <GalleryModalPicture photo={photo} key={index} />)}
        </div>
      </div>
    </div>
  </>
);

export default GalleryModal;
