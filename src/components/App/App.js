import React, { Component } from 'react';
import Header from '../Header'
import TopPanel from '../TopPanel';
import GuessBirdBlock from '../GuessBirdBlock';
import MainBlock from '../MainBlock';
import birdsData from '../../services/birdsData';

import './App.css';

export default class App extends Component{
  state = {
    score: 0,
    counter: 0,
    displayedBird: null,
    birdsData: birdsData[0]
  }

  onSelectBird = (id) => {
    this.setState(({ birdsData }) =>{
      const idx = birdsData.findIndex((el) => el.id === id)
      const displayedBird = birdsData[idx]
      return {
        displayedBird
      }
    })
  }

  render() {
    const { score, birdsData, displayedBird } = this.state
    return (
      <div className="container">
        <Header score={score}/>
        <TopPanel />
        <GuessBirdBlock />
        <MainBlock
          onSelectBird={this.onSelectBird}
          birdsList={birdsData}
          displayedBird={displayedBird}
        />
      </div>
    );
  }
};
