import React, { Component } from 'react';

class SearchForm extends Component {
  handleClick = event => {
    this.props.searchFunction(event.target.value)
  }

  render = () => {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleClick}
      />
    )
  }
}

export default SearchForm;