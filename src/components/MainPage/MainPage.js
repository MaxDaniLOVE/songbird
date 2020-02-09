import React from 'react';

import Header from '../Header';
import TopPanel from '../TopPanel';
import GuessBirdBlock from '../GuessBirdBlock';
import MainBlock from '../MainBlock';
import NextStageBtn from '../NextStageBtn';

const MainPage = ({
  score,
  counter,
  isGuessed,
  birdData,
  onSelectBird,
  birdsList,
  displayedBird,
  onNextBtnClick
}) => {
  return(
    <React.Fragment>
      <Header score={score}/>
      <TopPanel counter={counter}/>
      <GuessBirdBlock
        isGuessed={isGuessed}
        birdData={birdData}
      />
      <MainBlock
        onSelectBird={onSelectBird}
        birdsList={birdsList}
        displayedBird={displayedBird}
        onNextBtnClick={onNextBtnClick}
        birdData={birdData}
        isGuessed={isGuessed}
      />
      <NextStageBtn
        isGuessed={isGuessed}
        onNextBtnClick={onNextBtnClick}
      />
    </React.Fragment>
  )
}

export default MainPage;