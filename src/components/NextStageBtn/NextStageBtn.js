import React from 'react';

const NextStageBtn = ({onNextBtnClick, isGuessed}) => {
  return (
    <button
      type="button"
      className="btn btn-danger next-btn"
      onClick={onNextBtnClick}
      disabled={!isGuessed}
    >
      Следующий уровень
    </button>
  );
}

export default NextStageBtn;
