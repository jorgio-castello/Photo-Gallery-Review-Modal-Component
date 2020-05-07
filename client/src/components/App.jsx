import React from 'react';
import ImageSlider from './ImageSlider';
import Modal from './Modal';

// Helper Functions
import fetchTripAdvisorData from '../helpers/fetchTripAdvisorData';
import preloadImages from '../helpers/preloadImages';

// Event Handlers
import eventHandlers from '../helpers/handlers';
// Destructure Specific Handlers
const { nextImageHandler, prevImageHandler, showGalleryModalHandler, handleImageSliderClick } = eventHandlers;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {},
      activePhotoIdx: 0,
      photos: [{ link: '' }],
      showGalleryModal: false,
    };
    this.nextImageHandler = nextImageHandler.bind(this);
    this.prevImageHandler = prevImageHandler.bind(this);
    this.showGalleryModalHandler = showGalleryModalHandler.bind(this);
    this.handleImageSliderClick = handleImageSliderClick.bind(this);
    this.preloadImages = preloadImages;
    this.fetchTripAdvisorData = fetchTripAdvisorData;
  }

  componentDidMount() {
    this.fetchTripAdvisorData((err, data) => {
      if (err) {
        throw new Error(err);
      } else {
        const { activity, photos } = data;
        this.preloadImages(photos);
        this.setState({
          activePhotoIdx: 0,
          photos,
          activity,
        });
      }
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
          // prevImageHandler={this.prevImageHandler}
          // nextImageHandler={this.nextImageHandler}
          // showGalleryModalHandler={this.showGalleryModalHandler}
          handleImageSliderClick={this.handleImageSliderClick}
        />
        {showGalleryModal ? (
          <Modal
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
