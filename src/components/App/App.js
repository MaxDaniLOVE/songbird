import React, { Component } from 'react';
import Header from '../Header'
import TopPanel from '../TopPanel';
import GuessBirdBlock from '../GuessBirdBlock';
import MainBlock from '../MainBlock';
import birdsData from '../../services/birdsData';
import randomBird from '../../utils/randomBird';
import NextStageBtn from '../NextStageBtn';

import './App.css';

export default class App extends Component{
  state = {
    score: 0,
    counter: 0,
    displayedBird: null,
    birdsData: birdsData[0],
    randomBird: randomBird(),
    isGuessed: false
  }

  onSelectBird = (id) => {
    this.setState(({ birdsData, randomBird }) =>{
      const idx = birdsData.findIndex((el) => el.id === id);
      const randomBirdId = birdsData[randomBird].id;
      const displayedBird = birdsData[idx];
      if (displayedBird.id === randomBirdId) {
        return {
          displayedBird,
          isGuessed: true
        }
      } else {
        return {
          displayedBird
        }
      }
    })
  }

  onNextBtnClick = () => {
    this.setState(({counter}) => {
      const newCounter = counter + 1;
      const newBirdsData = birdsData[newCounter]
      return {
        birdsData: newBirdsData,
        randomBird: randomBird(),
        isGuessed: false,
        counter: newCounter
      }
    })
  }

  render() {
    const { score, birdsData, displayedBird, isGuessed, randomBird } = this.state
    return (
      <div className="container">
        <Header score={score}/>
        <TopPanel />
        <GuessBirdBlock isGuessed={isGuessed} birdData={birdsData[randomBird]}/>
        <MainBlock
          onSelectBird={this.onSelectBird}
          birdsList={birdsData}
          displayedBird={displayedBird}
          onNextBtnClick={this.onNextBtnClick}
        />
        <NextStageBtn isGuessed={isGuessed} onNextBtnClick={this.onNextBtnClick}/>
      </div>
    );
  }
};
