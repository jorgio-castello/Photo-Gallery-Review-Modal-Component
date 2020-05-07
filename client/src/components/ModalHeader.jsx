import React from 'react';
import ModalHeaderCSS from '../style/ModalHeader.css';

const ModalHeader = (props) => (
  <div className={ModalHeaderCSS.modalHeader}>
    Photos of
    {' '}
    {props.name}
    {' '}
    from
    {' '}
    {props.location}
    <button
      type="button"
      className={ModalHeaderCSS.exit}
      onClick={props.updateGalleryDisplay}
    >
      <img
        alt="Close"
        src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/cross-icon.png"
        height="20px"
        className={ModalHeaderCSS.exitButton}
      />
    </button>
  </div>
);

export default ModalHeader;
