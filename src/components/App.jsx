import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export class App extends React.Component {
  state = {
    isShowModal: false,
    searchText: '',
    selectedImage: '',
  };

  handleSearch = (searchText) => {
    this.setState({ searchText })
  };

  toggleModal = (image) => {
    this.setState((prevState) => ({
      isShowModal: !prevState.isShowModal,
      selectedImage: image,
    }));
  };

  closeModal = () => {
    this.setState({
      isShowModal: false,
      // selectedImage: '',
    });
  };

  render() {
    const { isShowModal, selectedImage } = this.state;
    return (
      <div className="appRenderWrap">
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchText={this.state.searchText} toggleModal={this.toggleModal} />
        {isShowModal && (
          <Modal image={selectedImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

