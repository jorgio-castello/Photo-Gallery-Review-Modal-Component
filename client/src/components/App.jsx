import React from 'react';
import ImageSlider from './ImageSlider';
import Modal from './Modal';

// Helper Functions
import fetchTripAdvisorData from '../helpers/fetchTripAdvisorData';
import preloadImages from '../helpers/preloadImages';

// Event Handlers
import eventHandlers from '../helpers/handlers';
// Destructure Specific Handlers
const { nextImageHandler, prevImageHandler, showGalleryModalHandler, showReviewModalHandler, handleImageSliderClick, closeModal } = eventHandlers;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {},
      activePhotoIdx: 0,
      photos: [{ link: '' }],
      showGalleryModal: false,
      showReviewModal: false,
    };
    this.nextImageHandler = nextImageHandler.bind(this);
    this.prevImageHandler = prevImageHandler.bind(this);
    this.showGalleryModalHandler = showGalleryModalHandler.bind(this);
    this.showReviewModalHandler = showReviewModalHandler.bind(this);
    this.closeModal = closeModal.bind(this);
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
      activity, photos, activePhotoIdx, showGalleryModal, showReviewModal,
    } = this.state;

    const { link, alt } = photos[activePhotoIdx];
    const imageStyle = { backgroundImage: `url(https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${link})` };

    return (
      <>
        <ImageSlider
          backgroundImage={imageStyle}
          alt={alt}
          count={photos.length}
          handleImageSliderClick={this.handleImageSliderClick}
        />
        {showGalleryModal || showReviewModal ? (
          <Modal
            name={activity.name}
            location={activity.location}
            photos={photos}
            updateGalleryDisplay={this.closeModal}
          />
        ) : <div />}
      </>
    );
  }
}

export default App;
