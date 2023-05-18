import React, { Component } from 'react';

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModalOnClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div className="Overlay" onClick={this.closeModalOnClick}>
        <div className="Modal">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;