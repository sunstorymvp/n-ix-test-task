const getRowStartIndex = (rowLength: number, cellIndex: number) => (
  Math.floor(cellIndex / rowLength) * rowLength
);

export default getRowStartIndex;
