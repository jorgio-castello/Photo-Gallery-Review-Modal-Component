import React from 'react';
import ImageSlider from './ImageSlider';

// Data
import ExampleActivityData from '../../../ExampleActivityData';
// Helper Functions
import preloadImages from '../helpers/preloadImages';
// Import Event Handlers
import eventHandlers from '../helpers/handlers';
// Destructure Specific Handlers
const { nextImageHandler, prevImageHandler } = eventHandlers;


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
    const imageStyle = { backgroundImage: `url(https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${link})` };

    return (
      <ImageSlider
        backgroundImage={imageStyle}
        alt={alt}
        count={photos.length}
        prevImageHandler={this.prevImageHandler}
        nextImageHandler={this.nextImageHandler}
      />
    );
  }
}

export default App;
