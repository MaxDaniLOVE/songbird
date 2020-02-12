import React from 'react';

const GameOver = ({score, onRefreshState}) => {
  const congrats = score === 30 
    ? 'Поздравляем! Вы удостоились звания главного петушка! Это многого стоит!'
    : 'Это неплохой результат, но вам есть к чему стремиться!'
  const btn = () => {
    if (score === 30 ) {
      return null;
    } else {
      return (
        <button
          type="button"
          className="btn btn-danger next-btn"
          onClick={onRefreshState}
        >
          Попробовать еще раз!
        </button>
      )
    }
  }
  return (
    <React.Fragment>
      <h3 style={{marginTop: '35%'}}>{score}/30</h3>
      <h1>{congrats}</h1>
      {btn()}
    </React.Fragment>
  )
}

export default GameOver;