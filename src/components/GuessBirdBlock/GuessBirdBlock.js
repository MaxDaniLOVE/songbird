import React from 'react';
import './GuessBirdBlock.css';

const GuessBirdBlock = () => {
  return (
    <div class="jumbotron guessing-bird-block">
      <img src="https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg" alt="bird_image"/>
      <div>
        <h1 class="display-3">***</h1>
        <audio controls/>
      </div>
    </div>
  );
}

export default GuessBirdBlock;
