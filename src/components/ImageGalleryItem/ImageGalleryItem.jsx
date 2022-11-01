import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <GalleryItem onClick={toggleModal}>
        <Image src={webformatURL} alt={tags} />
      </GalleryItem>
      {showModal && (
        <Modal largeImageURL={largeImageURL} alt={tags} onClose={toggleModal} />
      )}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
