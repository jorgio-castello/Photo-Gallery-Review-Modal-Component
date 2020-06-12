import React from 'react';
import { shallow } from 'enzyme';

import GalleryModal from '../client/src/components/GalleryModal';
import GalleryModalPicture from '../client/src/components/GalleryModal/childComponents/GalleryModalPicture';
import ExampleActivityData from '../ExampleActivityData';

describe('Gallery Modal Unit Tests', () => {
  test('Gallery Modal should render with more than 0 Gallery Picture Modal components', () => {
    const wrapper = shallow(<GalleryModal photos={ExampleActivityData.photos} />);
    expect(wrapper.find(GalleryModalPicture).length).toBeGreaterThan(0);
  });
});
