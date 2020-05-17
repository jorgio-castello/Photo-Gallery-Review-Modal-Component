import React from 'react';
import PropTypes from 'prop-types';
import ReviewCSS from '../../../../style/Review.css';

const ReviewFooter = ({ helpfulScore }) => (
  <div className={ReviewCSS.footer}>
    <div className={ReviewCSS.footerContent}>
      <button
        type="button"
        className={ReviewCSS.helpfulScore}
      >
        Helpful (
        {helpfulScore}
        )
      </button>
      <div className={ReviewCSS.footerActions} />
    </div>
  </div>
);

ReviewFooter.defaultProps = {};

ReviewFooter.propTypes = {};

export default ReviewFooter;