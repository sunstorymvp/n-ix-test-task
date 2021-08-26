const isCellOut = (array: Array<0 | 1>, rowLength: number, cellIndex: number, rowStartIndex: number) => {
  const isLeftOut = cellIndex === rowStartIndex - 1;
  const isRightOut = cellIndex === rowStartIndex + rowLength;
  const isBeforeStart = cellIndex < 0;
  const isAfterEnd = cellIndex >= array.length;

  return isRightOut || isLeftOut || isBeforeStart || isAfterEnd;
};

const getCellValue = (array: Array<0 | 1>, rowLength: number, cellIndex: number, rowStartIndex: number) => (
  isCellOut(array, rowLength, cellIndex, rowStartIndex) ? 0 : array[cellIndex]
);

export default getCellValue;
