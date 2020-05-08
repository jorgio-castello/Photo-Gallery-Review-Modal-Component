import React from 'react';
import ReviewCSS from '../style/Review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { activePhoto } = this.props;
    console.log(activePhoto);

    return (
      <div className={ReviewCSS.container}>
        <div className={ReviewCSS.emblem}></div>
        <div className={ReviewCSS.username}></div>
      </div>
    );
  }
}

export default Review;
