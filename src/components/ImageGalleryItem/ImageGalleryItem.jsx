import { useState } from 'react';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

import { ImageGalleryItemEl } from './ImageGalleryItem.syled';

const ImageGalleryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { largeImageURL, webformatURL, tags } = item;
  return (
    
    <ImageGalleryItemEl>

      {showModal && (
        <Modal close={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}

      <img onClick={toggleModal} src={webformatURL} alt={tags} />
    </ImageGalleryItemEl>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
