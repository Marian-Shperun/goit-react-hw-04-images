import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

import { ImageGalleryEl } from './ImageGallery.syled';

const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryEl>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ImageGalleryEl>
  );
};

export default ImageGallery;
ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
