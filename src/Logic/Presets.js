import Matrix from './Matrix';

class Presets extends Matrix {
  default = () => this.getArray();

  createGlider = () => {
    const rows = [6, 7, 8];
    const cells = [[7], [8], [6, 7, 8]];

    return this.fill(rows, cells).getArray();
  }

  createLWSS = () => {
    const rows = [2, 3, 4, 5];
    const cells = [[1, 4], [5], [1, 5], [2, 3, 4, 5]];

    return this.fill(rows, cells).getArray();
  }

  createPulsar = () => {
    const rows = [
      2,
      4,
      5,
      6,
      7,
      9,
      10,
      11,
      12,
      14,
    ];

    const cells = [
      [4, 5, 6, 10, 11, 12],
      [2, 7, 9, 14],
      [2, 7, 9, 14],
      [2, 7, 9, 14],
      [4, 5, 6, 10, 11, 12],
      [4, 5, 6, 10, 11, 12],
      [2, 7, 9, 14],
      [2, 7, 9, 14],
      [2, 7, 9, 14],
      [4, 5, 6, 10, 11, 12],
    ];

    return this.fill(rows, cells).getArray();
  }
}

export const glider = new Presets(15).createGlider();
export const lightweightSpaceship = new Presets(25, 10).createLWSS();
export const pulsar = new Presets(17).createPulsar();

export default new Matrix().getArray();
