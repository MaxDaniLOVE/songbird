import React, { Component } from 'react';
import Header from '../Header'
import TopPanel from '../TopPanel';
import GuessBirdBlock from '../GuessBirdBlock';
import './App.css';

export default class App extends Component{
  state = {
    score: 0,
  }
  render() {
    const { score } = this.state
    return (
      <div className="container">
        <Header score={score}/>
        <TopPanel />
        <GuessBirdBlock />
      </div>
    );
  }
};
