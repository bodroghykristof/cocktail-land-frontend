import React from 'react';
import ScrollContainer from './ScrollContainer';
import ScrollContent from './ScrollContent';
import ScrollArrow from './ScrollArrow';

export default function DynamicScroller(props) {
  return (
    <div style={style}>
      <ScrollArrow direction='left' text='left' />
      <ScrollContainer>
        {props.children.map((element) => (
          <ScrollContent background={element.strDrinkThumb}>
            {element}
          </ScrollContent>
        ))}
      </ScrollContainer>
      <ScrollArrow direction='right' text='right' />
    </div>
  );
}

const style = {
  display: 'flex',
  alignContent: 'flex-end',
  // justifyContent: 'center',
};
