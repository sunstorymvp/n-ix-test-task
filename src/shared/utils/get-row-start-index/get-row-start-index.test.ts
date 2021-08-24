import getRowStartIndex from './get-row-start-index';

test('it returns index of first element in a row', () => {
  expect(getRowStartIndex(50, 125)).toStrictEqual(100);
  expect(getRowStartIndex(50, 50)).toStrictEqual(50);
  expect(getRowStartIndex(50, 49)).toStrictEqual(0);
  expect(getRowStartIndex(50, 0)).toStrictEqual(0);
});
