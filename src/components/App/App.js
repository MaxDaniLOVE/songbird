import React, { Component } from 'react';
import Header from '../Header'
import TopPanel from '../TopPanel';
import GuessBirdBlock from '../GuessBirdBlock';
import MainBlock from '../MainBlock';
import birdsData from '../../services/birdsData';
import randomBird from '../../utils/randomBird';
import NextStageBtn from '../NextStageBtn';
import MainPage from '../MainPage';
import './App.css';

export default class App extends Component{
  initialState = {
    score: 0,
    scoreCounter: 0,
    counter: 0,
    displayedBird: {},
    birdsData: birdsData[0],
    randomBird: randomBird(),
    isGuessed: false
  }
  state = {...this.initialState}

  onSelectBird = (id) => {
    this.setState(({ birdsData, randomBird, score, scoreCounter }) =>{
      const idx = birdsData.findIndex((el) => el.id === id);
      const randomBirdId = birdsData[randomBird].id;
      const displayedBird = birdsData[idx];
      const newScoreCounter = scoreCounter + 1;
      const newScore = score + (6 - newScoreCounter);
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
    this.setState(({counter}) => {
      const newCounter = counter + 1;
      if (newCounter === 6) {
        this.setState({
          ...this.initialState,
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

  render() {
    const { score, birdsData, displayedBird, isGuessed, randomBird, counter } = this.state;
    return (
      <div className="container">
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
      </div>
    );
  }
};
