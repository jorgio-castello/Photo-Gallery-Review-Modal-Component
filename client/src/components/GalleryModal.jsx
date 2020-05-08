import React from 'react';
import GalleryModalPicture from './GalleryModalPicture';
import GalleryModalCSS from '../style/GalleryModal.css';

const GalleryModal = ({ photos, showReviewModal }) => (
  <div className={GalleryModalCSS.modalGallery}>
    {photos.map((photo, index) => <GalleryModalPicture photo={photo} showReviewModal={showReviewModal} key={index} id={index} />)}
  </div>
);

export default GalleryModal;
