import React from 'react';
import ExampleActivityData from '../../../ExampleActivityData';
import ImageSliderCSS from '../style/ImageSlider.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePhotoIdx: 0,
      photos: ExampleActivityData.photos,
    };
    this.nextImageHandler = this.nextImageHandler.bind(this);
    this.prevImageHandler = this.prevImageHandler.bind(this);
  }

  componentDidMount() {
    const { photos } = ExampleActivityData;
    this.setState({
      activePhotoIdx: 0,
      photos,
    });
  }

  nextImageHandler() {
    const { activePhotoIdx, photos } = this.state;
    if (activePhotoIdx !== photos.length - 1) {
      this.setState({
        activePhotoIdx: activePhotoIdx + 1,
      });
    }
  }

  prevImageHandler() {
    const { activePhotoIdx } = this.state;
    if (activePhotoIdx !== 0) {
      this.setState({
        activePhotoIdx: activePhotoIdx - 1,
      });
    }
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
