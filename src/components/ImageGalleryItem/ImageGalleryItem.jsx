import { Component } from 'react';
import Modal from 'components/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} />
        </GalleryItem>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
