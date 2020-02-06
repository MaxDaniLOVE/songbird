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
    const { birdData } = this.props;
    let newState;
    if (birdData.id === id) {
      newState = true
    } else {
      newState = false
    }
    this.setState({
      isRight: newState
    })
  }
  render() {
    const { name, id, onSelectBird } = this.props;
    const { isRight } = this.state;
    let newClassName;
    if (isRight) {
      newClassName = 'list-group-item bird-list-item right';
    } else {
      newClassName = 'list-group-item bird-list-item wrong';
    }
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
