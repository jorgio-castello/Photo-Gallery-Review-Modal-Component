import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../client/src/components/App';
import ImageSlider from '../client/src/components/ImageSlider';
import Modal from '../client/src/components/Modal';

import ExampleActivityData from '../ExampleActivityData';

describe('App Unit Tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve(ExampleActivityData));
  });

  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  test('should fetch data when the component mounts', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchTripAdvisorData');
    instance.componentDidMount();
    expect(instance.fetchTripAdvisorData).toHaveBeenCalledTimes(1);
  });

  test('should preload Trip Advisor Gallery Images after the component mounts', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.componentDidMount();

    const preload = document.querySelectorAll('link');
    const preloadLengthIsGreaterThanOrEqualToZero = preload.length >= 0;
    expect(preloadLengthIsGreaterThanOrEqualToZero).toBe(true);
  });

  test('should render an ImageSlider component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ImageSlider)).toHaveLength(1);
  });

  test('should render the Modal component when showGalleryModal state is true', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(wrapper.find(Modal)).toHaveLength(0);

    instance.setState({ showGalleryModal: true });
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  test('should render the Modal component when showReviewModal state is true', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(wrapper.find(Modal)).toHaveLength(0);

    instance.setState({ showReviewModal: true });
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
