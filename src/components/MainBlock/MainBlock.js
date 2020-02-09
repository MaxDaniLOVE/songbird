import React, { Component } from 'react';
import MainBlockItem from '../MainBlockItem';
import './MainBlock.scss';

export default class MainBlock extends Component {
  state = {
    birdsList: [],
    displayedBird: {},
  }

  componentDidMount() {
    this.updateInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.birdsList[0].name !== this.props.birdsList[0].name || 
      prevProps.displayedBird !== this.props.displayedBird) {
      this.updateInfo();
    }
  }

  componentWillUnmount() {
    this.refs.audio.pause();
    this.refs.audio.load();
  }

  updateInfo() {
    const { birdsList, displayedBird} = this.props;
    this.setState({
      birdsList,
      displayedBird,
    });
  }

  render() {
    const { birdsList, displayedBird} = this.state;
    const { onSelectBird, birdData, isGuessed } = this.props;
    const list = birdsList.map(({name, id}) => {
     return <MainBlockItem
              birdData={birdData}
              key={id}
              name={name}
              id={id}
              onSelectBird={onSelectBird}
              isGuessed={isGuessed}/>
    })
    let birdBlock;
    if (!Object.keys(displayedBird).length) { //check if displayedBird obj is empty
      birdBlock = <h3 className="select-bird">Выберите птицу из списка слева</h3>
    } else {
      const { audio, description, image, name, species } = displayedBird
      birdBlock = <React.Fragment>
                    <div className="card-header">{species}</div>
                    <div className="card-container">
                      <img
                        className="selected-bird_image"
                        src={image}
                        alt="bird_image"/>
                      <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{description}</p>
                        <audio controls ref="audio" className="birds-voice">
                          <source src={audio}/>
                        </audio>
                      </div>
                    </div>
                  </React.Fragment>
    }
    return (
      <div className="main-block">
        <div className="main-block-container">
          <ul className="list-group bird-list">
            {list}
          </ul>
          <div className="card mb-3 bird-card">
            {birdBlock}
          </div>
        </div>
      </div>
    );
  }
}
