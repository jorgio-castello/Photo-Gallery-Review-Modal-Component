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
  });
};

const handlers = {};
handlers.nextImageHandler = nextImageHandler;
handlers.prevImageHandler = prevImageHandler;
handlers.showGalleryModalHandler = showGalleryModalHandler;

export default handlers;
