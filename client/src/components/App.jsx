import React from 'react';

// Data
import ExampleActivityData from '../../../ExampleActivityData';

// Helper Functions
import preloadImages from '../helpers/preloadImages';
import handlers from '../helpers/handlers';

// CSS
import ImageSliderCSS from '../style/ImageSlider.css';

// Event Handlers
const { nextImageHandler, prevImageHandler } = handlers;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePhotoIdx: 0,
      photos: ExampleActivityData.photos,
    };
    this.nextImageHandler = nextImageHandler.bind(this);
    this.prevImageHandler = prevImageHandler.bind(this);
  }

  componentDidMount() {
    const { photos } = ExampleActivityData;
    preloadImages(photos);

    this.setState({
      activePhotoIdx: 0,
      photos,
    });
  }

  render() {
    const { photos, activePhotoIdx } = this.state;
    const { link, alt } = photos[activePhotoIdx];
    const imageStyle = {
      backgroundImage: `url(https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${link})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };

    return (
      <div style={imageStyle} className={ImageSliderCSS.container} aria-label={alt}>
        <span
          onClick={this.prevImageHandler}
          className={ImageSliderCSS.prev_button}
        >
          Prev
        </span>
        <span
          onClick={this.nextImageHandler}
          className={ImageSliderCSS.next_button}
        >
          Next
        </span>
        <span className={ImageSliderCSS.view_all_button}>
          View All Photos (
          {photos.length}
          )
        </span>
      </div>
    );
  }
}

export default App;
