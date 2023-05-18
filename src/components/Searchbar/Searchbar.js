
import React, { Component } from 'react';
import { RotatingSquare } from 'react-loader-spinner';

class Searchbar extends Component {
  state = {
    inputValue: '',
    isLoading: false
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.setState({ isLoading: true });

    // Simulating a delay of 3 seconds
    setTimeout(() => {
      this.props.handleSearch(inputValue);
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { inputValue, isLoading } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button" disabled={!inputValue || isLoading}>
            {isLoading ? (
              <RotatingSquare color="#4fa94d" height={40} width={40} visible={true} />
            ) : (
              <span className="SearchForm-button-label">Search</span>
            )}
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={inputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

