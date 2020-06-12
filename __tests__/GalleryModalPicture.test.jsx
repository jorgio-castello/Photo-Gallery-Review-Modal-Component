import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../client/src/components/App';
import GalleryModal from '../client/src/components/GalleryModal';
import Modal from '../client/src/components/Modal';
import GalleryModalPicture from '../client/src/components/GalleryModal/childComponents/GalleryModalPicture';
import ExampleActivityData from '../ExampleActivityData';

describe('Gallery Modal Unit Tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve(ExampleActivityData));
  });

  test('Review Modal should render when GalleryModalPicture is clicked', () => {
    const wrapper = shallow(
      <App>
        <Modal>
          <GalleryModal>
            <GalleryModalPicture />
          </GalleryModal>
        </Modal>
      </App>
    );

    const instance = wrapper.instance();
    instance.setState({ showGalleryModal: true });

    const pictureWrapper = wrapper.find(Modal).shallow().find(GalleryModal).shallow().find(GalleryModalPicture).shallow();

    pictureWrapper.find('img').simulate('click');

    expect(instance.state.showGalleryModal).toBe(false);
    expect(instance.state.showReviewModal).toBe(true);
  });
});
