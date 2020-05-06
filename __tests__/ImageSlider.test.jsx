import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App';
import ImageSlider from '../client/src/components/ImageSlider';

describe('Unit Tests', () => {
  test('should render the ImageSlider component on the screen', () => {
    const wrapper = shallow(<ImageSlider />);
    expect(wrapper).toExist();
  });

  test('should increment the current photo when the "Next" button is pressed', () => {
    const AppWrapper = mount(<App />);
    const instance = AppWrapper.instance();

    expect(instance.state.activePhotoIdx).toBe(0);

    AppWrapper.find('button img[alt="Next"]').simulate('click');
    expect(instance.state.activePhotoIdx).toBe(1);
  });

  test('should decrement the current photo when the "Previous" button is pressed', () => {
    const AppWrapper = mount(<App />);
    const instance = AppWrapper.instance();

    expect(instance.state.activePhotoIdx).toBe(0);

    AppWrapper.find('button img[alt="Next"]').simulate('click');
    AppWrapper.find('button img[alt="Previous"]').simulate('click');
    expect(instance.state.activePhotoIdx).toBe(0);
  });

  test('should update showGalleryModalState when View All button is pressed', () => {
    const AppWrapper = mount(<App />);
    const instance = AppWrapper.instance();

    expect(instance.state.showGalleryModal).toBe(false);

    AppWrapper.find('button img[alt="View All"]').simulate('click');
    expect(instance.state.showGalleryModal).toBe(true);
  });
});
