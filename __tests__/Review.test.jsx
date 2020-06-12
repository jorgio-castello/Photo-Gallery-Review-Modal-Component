import React from 'react';
import { shallow } from 'enzyme';

import ReviewModal from '../client/src/components/ReviewModal';
import Review from '../client/src/components/ReviewModal/childComponents/Review';
import ReviewSlider from '../client/src/components/ReviewModal/childComponents/ReviewSlider';
import StarsAndDescription from '../client/src/components/ReviewModal/childComponents/subComponents/StarsAndDescription';
import ExampleActivityData from '../ExampleActivityData';

describe('Review Unit Tests', () => {
  test('should render ReviewSlider on handleReadReview click', () => {
    // activePhotoIdx needs to be on a photosIdx that has a review in order for this test to work
    const wrapper = shallow(<ReviewModal photos={ExampleActivityData.photos} activePhotoIdx={5} />);
    expect(wrapper.find(Review)).toHaveLength(1);
    expect(wrapper.find(Review).shallow().find(StarsAndDescription)).toHaveLength(1);

    wrapper.find(Review).shallow().find(StarsAndDescription).shallow().find('button').simulate('click');
    expect(wrapper.find(ReviewSlider)).toHaveLength(1);
  });
});