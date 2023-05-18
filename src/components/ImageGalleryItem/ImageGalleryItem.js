import React from 'react';

const ImageGalleryItem = (props) => {
  const { images, onImageClick } = props;
  return images.map(image => (
    <li className="ImageGalleryItem" key={image.id} >
      <img className="ImageGalleryItem-image" src={image.webformatURL} alt={image.tags} onClick={() => onImageClick(image.largeImageURL)} />
    </li>));
}

export default ImageGalleryItem;