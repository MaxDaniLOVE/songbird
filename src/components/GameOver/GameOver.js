import React from 'react';

const GameOver = ({score, onRefreshState}) => {
  const congrats = score === 30 
    ? 'Поздравляем! Вы удостоились звания главного петушка! Это многого стоит!'
    : 'Это неплохой результат но вам есть к чему стремиться!'
  if (score === 30) {
    
  } else {
    
  }
  return (
    <React.Fragment>
      <h3>{score}/30</h3>
      <h1>{congrats}</h1>
      <button
        type="button"
        className="btn btn-danger next-btn"
        onClick={onRefreshState}
      >
        Попробовать еще раз!
      </button>
    </React.Fragment>
    
  )
}

export default GameOver;