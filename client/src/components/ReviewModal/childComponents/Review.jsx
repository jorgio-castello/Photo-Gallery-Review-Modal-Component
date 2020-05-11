import React from 'react';
import ReviewCSS from '../../../style/Review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReview: false,
    };
    this.handleReadReviewClick = this.handleReadReviewClick.bind(this);
  }

  setUsernameAndLetter() {
    const { photos, activePhotoIdx } = this.props;
    const activePhoto = photos[activePhotoIdx];

    const { user } = activePhoto;
    let firstLetter = '';
    if (user) {
      firstLetter = user.slice(0, 1);
    }

    return [user, firstLetter];
  }

  handleReadReviewClick() {
    const { showReview } = this.state;
    this.setState({
      showReview: !showReview,
    });
  }


  checkForReview() {
    const { photos, activePhotoIdx } = this.props;
    const activePhoto = photos[activePhotoIdx];

    let {review_title, review_description, review_helpful_score, review_stars} = activePhoto;
    if (review_title === "null") {
      review_title = null;
    }
    if (review_description === "null") {
      review_description = null;
    }

    return [review_title, review_description, review_helpful_score, review_stars];
  }

  render() {
    const [user, firstLetter] = this.setUsernameAndLetter();
    const [review_title, review_description, review_helpful_score, review_stars] = this.checkForReview();
    const { showReview } = this.state;

    return (
      <div className={ReviewCSS.container}>
        <div className={ReviewCSS.emblem}><span className={ReviewCSS.emblemLetter}>{firstLetter}</span></div>
        <div className={ReviewCSS.username}>{user}</div>
        {review_title && !review_description ? <div className={ReviewCSS.title}>{review_title}</div> : <div />}
        {review_description
          ? (
            <>
              <div className={ReviewCSS.starsAndDescriptionContainer}>
                <div className={ReviewCSS.starsContainer}>
                  <div className={ReviewCSS.star} />
                  <div className={ReviewCSS.star} />
                  <div className={ReviewCSS.star} />
                  <div className={ReviewCSS.star} />
                  <div className={ReviewCSS.star} />
                </div>
                <div className={ReviewCSS.descriptionShort}>
                  {`${review_description.slice(0, 150)}...`}
                </div>
              </div>
              <button onClick={this.handleReadReviewClick} className={ReviewCSS.readReviewButton} type="button">Read Review</button>
            </>
          )
          : <div />}
        {review_helpful_score
          ? (
            <div className={ReviewCSS.footer}>
              <div className={ReviewCSS.footerContent}>
                <button
                  type="button"
                  className={ReviewCSS.helpfulScore}
                >
                  {/* <img className={ReviewCSS.thumbs_up} alt="Thumbs Up" src="https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/Icons/hands.png" /> */}
                  Helpful (
                    {review_helpful_score}
                  )
                </button>
                <div className={ReviewCSS.footerContentRight}>
                  <button type="button" className={ReviewCSS.saveTrip}>SaveTrip</button>
                  <button type="button" className={ReviewCSS.reportPhoto}>ReportPhoto</button>
                </div>
                <div className={ReviewCSS.footerActions} />
              </div>
            </div>
          )
          : <div />}
      </div>
    );
  }
}

export default Review;
