import React from 'react';
import { shallow } from 'enzyme';

import ReviewModal from '../client/src/components/ReviewModal';
import ReviewSlider from '../client/src/components/ReviewModal/childComponents/ReviewSlider';
import ExampleActivityData from '../ExampleActivityData';

describe('Review Modal Unit Tests', () => {
  test('Review Modal should default to having falsy showReviewSlider state after componentDidMount', () => {
    const wrapper = shallow(<ReviewModal photos={ExampleActivityData.photos} activePhotoIdx={0} />);
    const instance = wrapper.instance();

    instance.componentDidMount();
    expect(instance.state.showReviewSlider).toBe(false);
  });

  test('Review Modal should appropriately mount / unmount when invoked', () => {
    const componentDidMount = jest.fn();
    const componentWillUnmount = jest.fn();

    class ReviewModalTest extends ReviewModal {
      constructor(props) {
        super(props);

        this.componentDidMount = componentDidMount;
        this.componentWillUnmount = componentWillUnmount;
      }

      render() {
        return (<ReviewModal />);
      }
    }

    const wrapper = shallow(<ReviewModalTest />);

    expect(componentDidMount.mock.calls).toHaveLength(1);
    expect(componentWillUnmount.mock.calls).toHaveLength(0);

    wrapper.instance().componentWillUnmount();

    expect(componentDidMount.mock.calls).toHaveLength(1);
    expect(componentWillUnmount.mock.calls).toHaveLength(1);
  });
});
