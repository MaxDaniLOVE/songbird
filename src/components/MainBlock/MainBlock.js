import React from 'react';
import './MainBlock.css';

const MainBlock = () => {
  return (
    <div className="main-block">
      <div className="main-block-container">
        <ul className="list-group bird-list">
          <li className="list-group-item bird-list-item right">test</li>
          <li className="list-group-item bird-list-item wrong">test</li>
          <li className="list-group-item bird-list-item">test</li>
          <li className="list-group-item bird-list-item">test</li>
          <li className="list-group-item bird-list-item">test</li>
        </ul>
        <div className="card mb-3 bird-card">
          <div className="card-header">Название на латыни</div>
          <div className="card-container">
            <img
              src="https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg"
              alt="bird_image"/>
            <div className="card-body">
              <h4 className="card-title">Птица</h4>
              <p className="card-text">Описание</p>
              <audio controls/>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary next-btn">Next</button>
    </div>
  );
}

export default MainBlock;
