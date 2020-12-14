import React from 'react';
import './scrollable.css';
import ScrollContainer from './ScrollContainer';
import ScrollContent from './ScrollContent';

export default function ScrollableBoi() {
  let intervalUsed;

  const moveLeft = (e) => {
    intervalUsed = setInterval(
      () =>
        (e.target.parentNode.querySelector(ScrollContainer).scrollLeft -= 2),
      5
    );
  };

  const moveRight = (e) => {
    intervalUsed = setInterval(
      () =>
        (e.target.parentNode.querySelector(ScrollContainer).scrollLeft += 2),
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
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        {/* <div className='item'>1</div>
        <div className='item'>2</div>
        <div className='item'>3</div>
        <div className='item'>4</div>
        <div className='item'>5</div>
        <div className='item'>1</div>
        <div className='item'>2</div>
        <div className='item'>3</div>
        <div className='item'>4</div>
        <div className='item'>5</div> */}
      </ScrollContainer>
      <button onMouseOver={moveRight} onMouseLeave={stopMoving}>
        Right
      </button>
    </div>
  );
}
