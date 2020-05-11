/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import GalleryModalPictureCSS from '../../../style/GalleryModalPicture.css';

const GalleryModalPicture = ({ photo, showReviewModal, id }) => (
  <div className={GalleryModalPictureCSS.container}>
    <img
      alt={photo.alt}
      src={`https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${photo.link}`}
      onClick={showReviewModal}
      id={id}
      className={GalleryModalPictureCSS.photoStyling}
    />
  </div>
);

export default GalleryModalPicture;
