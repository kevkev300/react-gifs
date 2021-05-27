import React, { Component } from 'react';
import SearchForm from './search_form';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedGifId: 'Zk9mW5OmXTz9e',
      gifs: []
    }
  }

  search = query => {
    const giphy = require('giphy-api')('cnP5PJ9v9PfuzGJ3s4pPtgyRdaUpBfcC')
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifs = res.data.map(gif => gif)
      this.setState({
        gifs: gifs
      });
    });
  }

  selectGif = gifId => {
    this.setState({
      selectedGifId: gifId
    })
  }

  render = () => {
    return(
      <div>
        <div className='left-scene'>
          <div className='form-search'>
            <SearchForm searchFunction={this.search} />
          </div>
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
