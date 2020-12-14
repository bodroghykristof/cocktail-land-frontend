import React from 'react';
import './scrollable.css';
import ScrollContainer from './ScrollContainer';
import ScrollContent from './ScrollContent';
import ScrollArrow from './ScrollArrow';

export default function ScrollableBoi() {
  return (
    <div className='outer'>
      <ScrollArrow direction='left' text='left' />
      <ScrollContainer>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
        <ScrollContent>1</ScrollContent>
      </ScrollContainer>
      <ScrollArrow direction='right' text='right' />
    </div>
  );
}
