import React from 'react';
import './scrollable.css';
import ScrollContainer from './ScrollContainer';

export default function ScrollableBoi() {
  let intervalUsed;

  const moveLeft = (e) => {
    intervalUsed = setInterval(
      () => (this.querySelector(ScrollContainer).scrollLeft -= 2),
      5
    );
  };

  const moveRight = (e) => {
    intervalUsed = setInterval(
      () => (this.querySelector(ScrollContainer).scrollLeft += 2),
      5
    );
  };

  const stopMoving = () => clearInterval(intervalUsed);

  return (
    <div className='outer'>
      <button onMouseOver={moveLeft} onMouseLeave={stopMoving}>
        Left
      </button>
      <ScrollContainer>
        <div className='item'>1</div>
        <div className='item'>2</div>
        <div className='item'>3</div>
        <div className='item'>4</div>
        <div className='item'>5</div>
        <div className='item'>1</div>
        <div className='item'>2</div>
        <div className='item'>3</div>
        <div className='item'>4</div>
        <div className='item'>5</div>
      </ScrollContainer>
      <button onMouseOver={moveRight} onMouseLeave={stopMoving}>
        Right
      </button>
    </div>
  );
}
