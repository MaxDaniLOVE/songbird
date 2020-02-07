import React, { Component } from 'react';

export class MainBlockItem extends Component {
  state = {
    isRight: null,
  }
  componentDidUpdate(prevProps) {
    if (prevProps.birdData !== this.props.birdData) {
      this.setState({
        isRight: null,
      })
    }
  }
  
  changeColor(id) {
    const { birdData, isGuessed } = this.props;
    if (!isGuessed) {
      const newState = birdData.id === id ? true : false
      this.setState({
        isRight: newState
      })
    }    
  }
  render() {
    const { name, id, onSelectBird } = this.props; 
    const { isRight } = this.state;
    let newClassName = isRight
      ? 'list-group-item bird-list-item right' // set this className if it's right answer
      : 'list-group-item bird-list-item wrong' // set this className if it's wrong answer
    if (isRight == null) {
      newClassName = 'list-group-item bird-list-item';
    }
    return(
      <li
        className={newClassName}
        onClick={() => {
          onSelectBird(id);
          this.changeColor(id);
        }}
      >
        {name}
      </li>
    )
  }
}

export default MainBlockItem;
