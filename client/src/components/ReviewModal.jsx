import React from 'react';
import ReviewModalCSS from '../style/ReviewModal.css';

const ReviewModal = ({photos, activePhotoIdx}) => {
  const activePhoto = photos[activePhotoIdx];

  return (
    <div className={ReviewModalCSS.container}>
      <img
        className={ReviewModalCSS.image}
        alt={activePhoto.alt}
        src={`https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${activePhoto.link}`}
      />
    </div>
  );
};

export default ReviewModal;
