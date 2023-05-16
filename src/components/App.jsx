// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends React.Component {
  state = {
    isShowModal: false,
    searchText: ''
  }
  
  handleSearch = (searchText) => {
    this.setState({searchText})
  }

  render() {
    return (
      <div>
        <Searchbar handleSearch={this.handleSearch} />
        <ImageGallery searchText={this.state.searchText} />
        <Button />        
      </div>
    );
  }
}

