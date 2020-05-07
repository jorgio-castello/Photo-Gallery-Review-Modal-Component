import React from 'react';
import GalleryModalPicture from './GalleryModalPicture';
import GalleryModalCSS from '../style/GalleryModal.css';

const GalleryModal = ({ photos }) => (
  <div className={GalleryModalCSS.modalGallery}>
    {photos.map((photo, index) => <GalleryModalPicture photo={photo} key={index} />)}
  </div>
);

export default GalleryModal;
