import React from 'react';
import ExampleActivityData from '../../../ExampleActivityData';
import style from '../style/main.css';

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

    return (
      <img src={`https://trip-advisor-photo-gallery.s3-us-west-1.amazonaws.com/${link}`} alt={alt} />
    );
  }
}

export default App;
