import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider from '../client/src/components/ImageSlider';

describe('Unit Tests', () => {
  test('should render the ImageSlider component on the screen', () => {
    const wrapper = shallow(<ImageSlider />);
    expect(wrapper).toExist();
  });
});
