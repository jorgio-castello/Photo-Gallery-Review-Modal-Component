import React from 'react';
import ImageSlider from './ImageSlider';
import GalleryModal from './GalleryModal';

// Data
import ExampleActivityData from '../../../ExampleActivityData';
// Helper Functions
import preloadImages from '../helpers/preloadImages';
// Import Event Handlers
import eventHandlers from '../helpers/handlers';
// Destructure Specific Handlers
const { nextImageHandler, prevImageHandler, showGalleryModalHandler } = eventHandlers;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {},
      activePhotoIdx: 0,
      photos: ExampleActivityData.photos,
      showGalleryModal: false,
    };
    this.nextImageHandler = nextImageHandler.bind(this);
    this.prevImageHandler = prevImageHandler.bind(this);
    this.showGalleryModalHandler = showGalleryModalHandler.bind(this);
    this.preloadImages = preloadImages;
  }

  componentDidMount() {
    const { activity, photos } = ExampleActivityData;
    this.preloadImages(photos);

    this.setState({
      activePhotoIdx: 0,
      photos,
      activity,
    });
  }

  render() {
    // Grabs the active picture for the ImageSlider component
    const {
      activity, photos, activePhotoIdx, showGalleryModal,
    } = this.state;

    const { link, alt } = photos[activePhotoIdx];
    const imageStyle = { backgroundImage: `url(https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${link})` };

    return (
      <>
        <ImageSlider
          backgroundImage={imageStyle}
          alt={alt}
          count={photos.length}
          prevImageHandler={this.prevImageHandler}
          nextImageHandler={this.nextImageHandler}
          showGalleryModalHandler={this.showGalleryModalHandler}
        />
        {showGalleryModal ? (
          <GalleryModal
            name={activity.name}
            location={activity.location}
            photos={photos}
            updateGalleryDisplay={this.showGalleryModalHandler}
          />
        ) : <div />}
      </>
    );
  }
}

export default App;
