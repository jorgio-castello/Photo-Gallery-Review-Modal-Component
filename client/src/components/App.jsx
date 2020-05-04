import React from 'react';
import ExampleActivityData from '../../../ExampleActivityData';
import ImageSliderCSS from '../style/ImageSlider.css';

const { activity, photos } = ExampleActivityData;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePhoto: {},
      photos: []
    };
  }

  componentDidMount() {
    this.setState({
      activePhoto: photos[0],
      photos,
    }, () => console.log(this.state));
  }

  render() {
    const { activePhoto: { link, alt } } = this.state;
    const imageStyle = {
      backgroundImage: `url(https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${link})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };

    return (
      <div style={imageStyle} className={ImageSliderCSS.container} aria-label={alt}>
        <span className={ImageSliderCSS.prev_button}>Prev</span>
        <span className={ImageSliderCSS.next_button}>Next</span>
        <span className={ImageSliderCSS.view_all_button}>
          View All Photos (
          {this.state.photos.length}
          )
        </span>
      </div>
    );
  }
}

export default App;
