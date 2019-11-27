import React from 'react';
import { Waypoint } from 'react-waypoint';
import { onEnterPosition } from '../../../helpers/onEnterPosition';

const ScrollIntoView = ({ children, returnFunc }) => {
  const positionEntered = ({ currentPosition, previousPosition }) => {
    return onEnterPosition(currentPosition, previousPosition, returnFunc(true));
  };

  return <Waypoint onEnter={positionEntered}>{children}</Waypoint>;
};
export default ScrollIntoView;
