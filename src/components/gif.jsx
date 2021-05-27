import React, { Component } from 'react';

class Gif extends Component {
  handleClick = event => {
    this.props.selectGifFunction(this.props.id)
  }

  render = () => {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} className="gif" onClick={this.handleClick}></img>
    )
  }
}

export default Gif;