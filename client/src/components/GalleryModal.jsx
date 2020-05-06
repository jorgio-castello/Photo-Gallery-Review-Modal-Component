import React from 'react';
import GalleryModalCSS from '../style/GalleryModal.css';
import GalleryModalPicture from './GalleryModalPicture';

// eslint-disable-next-line object-curly-newline
const GalleryModal = ({ name, location, photos, updateGalleryDisplay }) => (
  <>
    <div className={GalleryModalCSS.modalBackground}>
      <div className={GalleryModalCSS.modalContent}>
        <div className={GalleryModalCSS.modalHeader}>
          Photos of
          {' '}
          {name}
          {' '}
          from
          {' '}
          {location}
          <button
            type="button"
            className={GalleryModalCSS.exit}
            onClick={updateGalleryDisplay}
          >
            <img
              alt="Close"
              src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/cross-icon.png"
              height="20px"
              className={GalleryModalCSS.exitButton}
            />
          </button>
        </div>
        <div className={GalleryModalCSS.modalGallery}>
          {photos.map((photo, index) => <GalleryModalPicture photo={photo} key={index} />)}
        </div>
      </div>
    </div>
  </>
);

export default GalleryModal;
