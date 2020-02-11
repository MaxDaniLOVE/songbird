import React, { Component } from 'react';
import birdsData from '../../services/birdsData';
import randomBird from '../../utils/randomBird';
import MainPage from '../MainPage';
import GameOver from '../GameOver';
import './App.css';

export default class App extends Component{
  initialState = {
    score: 0,
    scoreCounter: 0,
    counter: 0,
    displayedBird: {},
    birdsData: birdsData[0],
    randomBird: randomBird(),
    isGuessed: false,
    isOver: false,
    finalScore: 0
  }
  state = {...this.initialState}

  onSelectBird = (id) => {
    this.setState(({ birdsData, randomBird, score, scoreCounter,isGuessed }) =>{
      const idx = birdsData.findIndex((el) => el.id === id);
      const randomBirdId = birdsData[randomBird].id;
      const displayedBird = birdsData[idx];
      const newScoreCounter = scoreCounter + 1;
      const newScore = score + (6 - newScoreCounter);
      if (isGuessed) {
        return {displayedBird}
      }
      if (displayedBird.id === randomBirdId) {
        return {
          scoreCounter: 0,
          displayedBird,
          isGuessed: true,
          score: newScore
        }
      } else {
        return {
          displayedBird,
          scoreCounter: newScoreCounter
        }
      }
    })
  }

  onNextBtnClick = () => {
    this.setState(({counter, score}) => {
      const newCounter = counter + 1;
      if (newCounter === 6) {
        this.setState({
          ...this.initialState,
          isOver: true,
          finalScore: score
        })
      } else {
        const newBirdsData = birdsData[newCounter]
        return {
          birdsData: newBirdsData,
          randomBird: randomBird(),
          isGuessed: false,
          counter: newCounter,
          displayedBird: {},
          scoreCounter: 0,
        }
      }
    })
  }

  onRefreshState = () => {
    this.setState({
      ...this.initialState,
    })
  }

  render() {
    const { score, birdsData, displayedBird, isGuessed, randomBird, counter, isOver, finalScore } = this.state;
    const displayedBlock = isOver ?
    <GameOver score={finalScore} onRefreshState={this.onRefreshState}/> : 
    <MainPage
      score={score}
      counter={counter} 
      isGuessed={isGuessed}
      birdData={birdsData[randomBird]}
      onSelectBird={this.onSelectBird}
      birdsList={birdsData}
      displayedBird={displayedBird}
      onNextBtnClick={this.onNextBtnClick}
    />
    return (
      <div className="container">
       {displayedBlock}
      </div>
    );
  }
};
