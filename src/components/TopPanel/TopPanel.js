import React from 'react';
import './TopPanel.css';

const TopPanel = () => {
  return (
    <div>
      <ul className="pagination pagination-lg">
        <li className="page-item active">
          <span className="page-link" href="#">Разминка</span>
        </li>
        <li className="page-item">
          <span className="page-link" href="#">Воробьиные</span>
        </li>
        <li className="page-item">
          <span className="page-link" href="#">Лесные птицы</span>
        </li>
        <li className="page-item">
          <span className="page-link" href="#">Певчие птицы</span>
        </li>
        <li className="page-item">
          <span className="page-link" href="#">Хищные птицы</span>
        </li>
        <li className="page-item">
          <span className="page-link" href="#">Морские птицы</span>
        </li>
      </ul>
    </div>
  );
}

export default TopPanel;
