import React, { Component } from 'react';
import './MainBlock.scss';

export default class MainBlock extends Component {
  state = {
    birdsList: [],
    displayedBird: null,
  }

  componentDidMount() {
    this.updateInfo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.displayedBird !== this.props.displayedBird) {
      this.updateInfo();
      setTimeout(() => {
        this.refs.audio.pause(); // stops audio and update source when recieve new props
        this.refs.audio.load();
      }, 0);
    }
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
    const { onSelectBird } = this.props;
    const list = birdsList.map(({name, id}) => {
      return <li
        key={id}
        className="list-group-item bird-list-item"
        onClick={() => onSelectBird(id)}
        >
          {name}
        </li>
    })
    let birdBlock;
    if (!displayedBird) {
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
        <button type="button" className="btn btn-primary next-btn">Next</button>
      </div>
    );
  }
}
