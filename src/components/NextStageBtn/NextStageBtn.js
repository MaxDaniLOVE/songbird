import React from 'react';

const NextStageBtn = ({onNextBtnClick, isGuessed}) => {
  return (
    <button
      type="button"
      className="btn btn-primary next-btn"
      onClick={onNextBtnClick}
      disabled={!isGuessed}
    >
      Next
    </button>
  );
}

export default NextStageBtn;
