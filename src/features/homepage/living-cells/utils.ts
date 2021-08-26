export const getNeighboursAliveCount = (neighbours: Array<0 | 1>, isAlive: 0 | 1) => (
  neighbours.reduce((result, neighbour) => result + neighbour, 0) - isAlive
);

export const getNextCellState = (isAlive: 0 | 1, neighboursAliveCount: number) => {
  if (isAlive && neighboursAliveCount < 2) {
    return 0;
  } else if (isAlive && (neighboursAliveCount === 2 || neighboursAliveCount === 3)) {
    return 1;
  } else if (isAlive && neighboursAliveCount > 3) {
    return 0;
  } else if (!isAlive && neighboursAliveCount === 3) {
    return 1;
  } else {
    return isAlive;
  }
};
