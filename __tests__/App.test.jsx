import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App';
import ExampleActivityData from '../ExampleActivityData';

describe('Unit Tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve(ExampleActivityData));
  });

  test('should render the app component on the screen', async () => {
    const wrapper = await shallow(<App />);
    expect(wrapper).toExist();
  });

  test('should fetch images when the component mounts', async () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchTripAdvisorData');
    instance.componentDidMount();
    expect(instance.fetchTripAdvisorData).toHaveBeenCalledTimes(1);
  });
});
