import React, { Component } from 'react';
import './GuessBirdBlock.scss';

export default class GuessBirdBlock extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    if (prevProps.isGuessed !== this.props.isGuessed) {
      this.updateInfo()
    }
  }
  
  componentDidMount() {
    this.updateInfo()
  }  

  updateInfo() {
    const { birdData, isGuessed } = this.props;
    const { audio, image, name } = birdData;
    this.setState({
      audio,
      image,
      name,
      isGuessed
    })
  }

  render() {
    
    const { isGuessed, audio, image, name} = this.state;
    let birdsName, birdsImage;
    if (!isGuessed) {
      birdsName = '*******'
      birdsImage = "https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg"
    } else {
      birdsName = name
      birdsImage = image
    }
    return (
      <div className="jumbotron guessing-bird-block">
        <img
        className="guessing-bird-image"
        src={birdsImage}
        alt="bird_image"/>
        <div className="guessing-bird-info">
          <h3 className="display-3">{birdsName}</h3>
          <audio controls>
            <source src={audio}/>
          </audio>
        </div>
      </div>
    );
  }
}
