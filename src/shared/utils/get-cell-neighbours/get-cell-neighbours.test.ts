import getCellNeighbours from './get-cell-neighbours';

const array: Array<0 | 1> = [
  0, 1, 0, 1,
  1, 0, 1, 0,
  0, 0, 1, 1,
  1, 1, 0, 0,
];

test('it returns closest neighbours', () => {
  const result = getCellNeighbours(array, 4, 10);

  expect(result).toStrictEqual([
    0, 1, 0,
    0, 1, 1,
    1, 0, 0,
  ]);
});

test('it handles missing neighbours: top left', () => {
  const result = getCellNeighbours(array, 4, 0);

  expect(result).toStrictEqual([
    0, 0, 0,
    0, 0, 1,
    0, 1, 0,
  ]);
});

test('it handles missing neighbours: top right', () => {
  const result = getCellNeighbours(array, 4, 3);

  expect(result).toStrictEqual([
    0, 0, 0,
    0, 1, 0,
    1, 0, 0,
  ]);
});

test('it handles missing neighbours: bottom left', () => {
  const result = getCellNeighbours(array, 4, 12);

  expect(result).toStrictEqual([
    0, 0, 0,
    0, 1, 1,
    0, 0, 0,
  ]);
});

test('it handles missing neighbours: bottom right', () => {
  const result = getCellNeighbours(array, 4, 15);

  expect(result).toStrictEqual([
    1, 1, 0,
    0, 0, 0,
    0, 0, 0,
  ]);
});

test('it does not mutate array', () => {
  expect(array).toStrictEqual([
    0, 1, 0, 1,
    1, 0, 1, 0,
    0, 0, 1, 1,
    1, 1, 0, 0,
  ]);
});
