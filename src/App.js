import React from 'react';
import './App.css';
import illustrationPng from './image.png';

function App() {
  return (
    <section className="coming-soon" aria-label="Coming Soon">
      <div className="coming-soon__inner">
        <div className="coming-soon__illustration" aria-hidden="true">
          <img className="illustration" src={illustrationPng} alt="" />
        </div>

        <div className="coming-soon__text">
          <h1 className="coming-soon__headline">COMING SOON</h1>
          <div className="coming-soon__subhead" aria-label="Stay tuned">
            STAY TUNED
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
