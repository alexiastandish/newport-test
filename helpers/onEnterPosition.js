const onEnterPosition = ({
  currentPosition,
  previousPosition,
  returnFunction
}) => {
  if (currentPosition === 'inside' && previousPosition !== 'inside') {
    return returnFunction;
  } else {
    return;
  }
};

export { onEnterPosition };
