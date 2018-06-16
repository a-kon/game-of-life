export const getLeftCellByRow = (row, cellIndex) => (
  typeof row[cellIndex - 1] === 'undefined'
    ? row[row.length - 1]
    : row[cellIndex - 1]
);
export const getRigthCellByRow = (row, cellIndex) => (
  typeof row[cellIndex + 1] === 'undefined'
    ? row[0]
    : row[cellIndex + 1]
);

export const getNextStepField = field => field.map((row, rowIndex) => {
  const prevRow = field[rowIndex - 1] || field[field.length - 1];
  const nextRow = field[rowIndex + 1] || field[0];
  return row.map((cell, cellIndex) => {
    const neighbors = [
      getLeftCellByRow(prevRow, cellIndex), prevRow[cellIndex], getRigthCellByRow(prevRow, cellIndex),
      getLeftCellByRow(row, cellIndex), getRigthCellByRow(row, cellIndex),
      getLeftCellByRow(nextRow, cellIndex), nextRow[cellIndex], getRigthCellByRow(nextRow, cellIndex),
    ];

    const lifeVicinityCount = neighbors.filter(bool => bool).length;

    if (!cell) {
      return lifeVicinityCount === 3;
    }

    return lifeVicinityCount === 2 || lifeVicinityCount === 3;
  });
});

export const checkIsFieldEmpty = field => !field.some(row => row.some(cell => cell));
