import React from 'react';
import './TopPanel.css';

const TopPanel = ({counter}) => {
  const stages = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы'
  ]
  const StageBlocks = stages.map((species, idx) => {
    const className = counter === idx ? 'page-item active' : 'page-item disabled';
    return (
      <li key={idx + 1} className={className}>
        <span className="page-link stage-name" href="#">{species}</span>
      </li>
    )
  })
  return (
    <div>
      <ul className="pagination pagination-lg">
        {StageBlocks}
      </ul>
    </div>
  );
}

export default TopPanel;
