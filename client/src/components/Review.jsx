import React from 'react';
import ReviewCSS from '../style/Review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
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

  checkForReview() {
    const { photos, activePhotoIdx } = this.props;
    const activePhoto = photos[activePhotoIdx];

    let {review_title, review_description, review_helpful_score} = activePhoto;
    if (review_title === "null") {
      review_title = null;
    }
    if (review_description === "null") {
      review_description = null;
    }

    return [review_title, review_description, review_helpful_score];
  }

  render() {
    const [user, firstLetter] = this.setUsernameAndLetter();
    const [review_title, review_description, review_helpful_score] = this.checkForReview();

    return (
      <div className={ReviewCSS.container}>
        <div className={ReviewCSS.emblem}><span className={ReviewCSS.emblemLetter}>{firstLetter}</span></div>
        <div className={ReviewCSS.username}>{user}</div>
        {review_title ? <div className={ReviewCSS.title}>{review_title}</div> : <div />}
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

// link: "image-jknepp-yAJYEZ3S2KY.jpg"
// alt: "provident nulla et"
// user: "Management"
// user_contributions: null
// date_created: "2010-01-17T08:00:00.000Z"
// review_title: "et et laborum"
// review_description: "null"
// review_stars: null
// review_helpful_score: 8