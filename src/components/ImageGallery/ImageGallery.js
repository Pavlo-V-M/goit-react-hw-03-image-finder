// import React, { Component } from 'react';
// import {getSearchElements} from '../../api/api'

// class ImageGallery extends Component {
//   state = {
//     images: []
//   };

//   componentDidMount() {
//     const data = getSearchElements()
//     data.then(res => console.log(res))
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.searchText !== this.props.searchText) {
//       getSearchElements(this.props.searchText).then((data) =>
//         this.setState({images: data})
//       )
//     }
//   }

//   render() {
//     return (
//       this.state.images.length > 0 && (
//         <ul className="gallery">
//           {this.state.images.map((el) => (
//             <li key={el.id}>
//               {el.id}
//             </li>
//           ))}
//         </ul>
//       )
//     )
//   }
// }

// export default ImageGallery;

// ------------------------------------------------------

import React, { Component } from 'react';
import { getSearchElements } from '../../api/api';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    images: []
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchText !== this.props.searchText && this.props.searchText) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    getSearchElements(this.props.searchText).then((data) =>
      this.setState({ images: data.hits })
    );
  };

  render() {
    const { images } = this.state;

    return (
      images.length > 0 && (
        <ul className="ImageGallery">
          {images.map((image) => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ul>
      )
    );
  }
}

export default ImageGallery;
