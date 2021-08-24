import { times } from 'ramda';

import getCellValue from 'shared/utils/get-cell-value';
import getRowStartIndex from 'shared/utils/get-row-start-index';

const getCellNeighbours = (array: Array<0 | 1>, rowLength: number, targetCellIndex: number) => {
  const topCellIndex = targetCellIndex - rowLength;
  const bottomCellIndex = targetCellIndex + rowLength;
  const targetRowStartIndex = getRowStartIndex(rowLength, targetCellIndex);
  const topRowStartIndex = getRowStartIndex(rowLength, topCellIndex);
  const bottomRowStartIndex = getRowStartIndex(rowLength, bottomCellIndex);

  return times((index) => {
    switch (index) {
      case 0: return getCellValue(array, rowLength, topCellIndex - 1, topRowStartIndex);
      case 1: return getCellValue(array, rowLength, topCellIndex, topRowStartIndex);
      case 2: return getCellValue(array, rowLength, topCellIndex + 1, topRowStartIndex);
      case 3: return getCellValue(array, rowLength, targetCellIndex - 1, targetRowStartIndex);
      case 4: return getCellValue(array, rowLength, targetCellIndex, targetRowStartIndex);
      case 5: return getCellValue(array, rowLength, targetCellIndex + 1, targetRowStartIndex);
      case 6: return getCellValue(array, rowLength, bottomCellIndex - 1, bottomRowStartIndex);
      case 7: return getCellValue(array, rowLength, bottomCellIndex, bottomRowStartIndex);
      case 8: return getCellValue(array, rowLength, bottomCellIndex + 1, bottomRowStartIndex);
    }
  }, 9);
};

export default getCellNeighbours;
