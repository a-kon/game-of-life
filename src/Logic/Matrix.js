export default class Matrix {
  constructor(width = 15, height) {
    const DEFAULT_CELL = 0;
    const DEFAULT_STRING = Array.from({ length: width }, (() => DEFAULT_CELL));
    const getDefaultStringInstance = () => DEFAULT_STRING.slice();

    this.array = Array.from({ length: height || width }, getDefaultStringInstance);
  }

  fill = (rowsToFill, cellsToFill) => {
    cellsToFill.forEach((cellIndexes, arrayIndex) => {
      const rowIndex = rowsToFill[arrayIndex];

      cellIndexes.forEach((cellIndex) => {
        this.array[rowIndex][cellIndex] = 1;
      });
    });

    return this;
  };

  getArray = () => this.array;
}

