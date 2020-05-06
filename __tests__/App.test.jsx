import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

describe('Unit Tests', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  test('should preload images in the browser when the component mounts', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'preloadImages');
    instance.componentDidMount();
    expect(instance.preloadImages).toHaveBeenCalledTimes(1);
  });
});
