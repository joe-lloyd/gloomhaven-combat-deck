const transformOffset = (isLastCard: boolean) => {
  if (isLastCard) {
    return  {
      xOffset: -100,
      yOffset: 68,
    }
  }
  return {
    xOffset: 100,
    yOffset: -68,
  }
}

export default transformOffset;
