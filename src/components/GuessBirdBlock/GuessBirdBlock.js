import React from 'react';
import './GuessBirdBlock.scss';

const GuessBirdBlock = () => {
  return (
    <div className="jumbotron guessing-bird-block">
      <img
      className="guessing-bird-image"
      src="https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg"
      alt="bird_image"/>
      <div className="guessing-bird-info">
        <h3 className="display-3">***</h3>
        <audio controls/>
      </div>
    </div>
  );
}

export default GuessBirdBlock;
