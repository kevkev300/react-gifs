import React, { Component } from 'react';
import Gif from './gif';

const GifList = props => {
  console.log(props.gifIds)
  return (
    <div className="gif-list">
      {
        props.gifs.map(gif =>
          <Gif id={gif.id} key={gif.id} selectGifFunction={props.selectGifFunction}/>
        )
      }
    </div>
  )
  }


export default GifList;