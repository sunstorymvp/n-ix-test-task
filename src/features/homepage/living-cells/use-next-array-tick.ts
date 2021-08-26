import { useEffect, useState } from 'react';

import getCellNeighbours from 'shared/utils/get-cell-neighbours';

import { getNeighboursAliveCount, getNextCellState } from './utils';
import * as constants from './constants';

const useNextArrayTick = (initialArray: Array<0 | 1>, tick: number) => {
  const [array, setArray] = useState<Array<0 | 1>>(initialArray);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextArray = array.map((isAlive, index) => {
        const neighbours = getCellNeighbours(array, constants.ROW_LENGTH, index);
        const neighboursAliveCount = getNeighboursAliveCount(neighbours, isAlive);
        const nextCellState = getNextCellState(isAlive, neighboursAliveCount);

        return nextCellState;
      });

      setArray(nextArray);
    }, tick);

    return () => clearInterval(intervalId);
  }, [array, tick]);

  return array;
};

export default useNextArrayTick;
