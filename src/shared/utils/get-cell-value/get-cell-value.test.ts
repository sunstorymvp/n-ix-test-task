import getCellValue from './get-cell-value';

const array: Array<0 | 1> = [
  0, 1, 0, 1,
  1, 0, 1, 0,
  0, 0, 1, 1,
  1, 1, 0, 0,
];

test('it returns cell value by cell index', () => {
  expect(getCellValue(array, 4, 3, 0)).toStrictEqual(1);
  expect(getCellValue(array, 4, 6, 4)).toStrictEqual(1);
  expect(getCellValue(array, 4, 7, 4)).toStrictEqual(0);
  expect(getCellValue(array, 4, 14, 12)).toStrictEqual(0);
});
