const nextImageHandler = function () {
  const { activePhotoIdx, photos } = this.state;
  if (activePhotoIdx !== photos.length - 1) {
    this.setState({
      activePhotoIdx: activePhotoIdx + 1,
    });
  }
};

const prevImageHandler = function () {
  const { activePhotoIdx } = this.state;
  if (activePhotoIdx !== 0) {
    this.setState({
      activePhotoIdx: activePhotoIdx - 1,
    });
  }
};

const showGalleryModalHandler = function () {
  const { showGalleryModal } = this.state;
  this.setState({
    showGalleryModal: !showGalleryModal,
    showReviewModal: false,
  });
};

const showReviewModalHandler = function () {
  const { showReviewModal } = this.state;
  this.setState({
    showReviewModal: !showReviewModal,
    showGalleryModal: false,
  });
};

const closeModal = function() {
  this.setState({
    showReviewModal: false,
    showGalleryModal: false,
  });
};

const handleImageSliderClick = function (e) {
  let { target } = e;
  if (target.tagName === 'BUTTON') {
    [target] = target.childNodes;
  }
  if (target.tagName === 'SPAN' || target.getAttribute('alt') === 'View All') {
    this.showGalleryModalHandler();
  } else if (target.tagName === 'DIV') {
    this.showReviewModalHandler();
  } else {
    const alt = target.getAttribute('alt');
    if (alt === 'Previous') {
      this.prevImageHandler();
    } else if (alt === 'Next') {
      this.nextImageHandler();
    }
  }
};


const handlers = {};
handlers.nextImageHandler = nextImageHandler;
handlers.prevImageHandler = prevImageHandler;
handlers.showGalleryModalHandler = showGalleryModalHandler;
handlers.showReviewModalHandler = showReviewModalHandler;
handlers.handleImageSliderClick = handleImageSliderClick;
handlers.closeModal = closeModal;

export default handlers;
