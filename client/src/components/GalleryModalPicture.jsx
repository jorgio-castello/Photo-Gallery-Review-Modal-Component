import React from 'react';
import GalleryModalPictureCSS from '../style/GalleryModalPicture.css';

const GalleryModalPicture = ({ photo }) => (
  <div className={GalleryModalPictureCSS.container}>
    <img
      alt={photo.alt}
      src={`https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${photo.link}`}
      className={GalleryModalPictureCSS.photoStyling}
    />
  </div>
);

export default GalleryModalPicture;
