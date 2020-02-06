import React from 'react';

const NextStageBtn = ({onNextBtnClick, isGuessed}) => {
  let btnClassname;
  if (isGuessed) {
    return (
      <button
        type="button"
        className="btn btn-primary next-btn"
        onClick={onNextBtnClick}
        >Next
        </button>
    );
  } else {
    return (
      <button
        type="button"
        className="btn btn-primary next-btn disabled"
        disabled
        >Next
        </button>
    );
  }
}

export default NextStageBtn;
