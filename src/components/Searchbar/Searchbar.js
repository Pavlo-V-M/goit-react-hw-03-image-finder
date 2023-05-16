
import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    inputValue: ''
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.inputValue)
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
};

export default Searchbar;
