import React from 'react';
import ReviewCSS from '../style/Review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={ReviewCSS.container}>Hello World</div>
    );
  }
}

export default Review;
