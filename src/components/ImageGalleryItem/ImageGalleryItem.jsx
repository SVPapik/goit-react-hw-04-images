import { Component } from 'react';
import Modal from 'components/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} />
        </GalleryItem>
        {this.state.showModal && (
          <Modal url={largeImageURL} alt={tags} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
