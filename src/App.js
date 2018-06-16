import React from 'react';
import Controls from './Components/Controls';
import GameField from './Components/GameField';
import { getLeftCellByRow, getRigthCellByRow } from './helpers';

const DEFAULT_CELL = false;
const DEFAULT_STRING = new Array(15).fill(DEFAULT_CELL);
const getDefaultStringInstance = () => DEFAULT_STRING.slice();
const DEFAULT_FIELD = new Array(15).fill(null).map(getDefaultStringInstance);

export default class App extends React.PureComponent {
  state = {
    running: false,
    field: DEFAULT_FIELD,
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevState.running && this.state.running) {
      this.stepTimer = setInterval(() => this.handleStep(), 250);
    }
    if (prevState.running && !this.state.running) {
      clearInterval(this.stepTimer);
    }
  }

  handleGameStart = () => this.setState({ running: true })

  handleReset = () => this.setState({
    running: false,
  })

  handleNextGen = () => {
    this.handleChangeGeneration('next');
    this.handleStep();
    console.log('handleNextGen');
  }

  handlePrevGen = () => {
    this.handleChangeGeneration('prev');
    console.log('handlePrevGen');
  }

  handleChangeGeneration = (direction) => {
    this.setState(prevState => ({
      generation: direction === 'next' ? prevState.direction + 1 : prevState.direction - 1,
    }));
  }

  handleCellClick = (rowIndex, cellIndex) => {
    const field = this.state.field.slice();

    field[rowIndex][cellIndex] = !this.state.field[rowIndex][cellIndex];

    this.setState({ field });
  }

  handleStep = () => {
    const { field } = this.state;

    const newField = field.map((row, rowIndex) => {
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

    this.setState({ field: newField });
  }


  getLeftCellByRow = (row, cellIndex) => (typeof row[cellIndex - 1] === 'undefined' ? row[row.length - 1] : row[cellIndex - 1]);
  getRigthCellByRow = (row, cellIndex) => (typeof row[cellIndex + 1] === 'undefined' ? row[0] : row[cellIndex + 1]);

  render = () => {
    const { field } = this.state;

    return (
      <div id="main-wrapper">
      <Controls
          handleGameStart={this.handleGameStart}
          handleReset={this.handleReset}
          handleNextGen={this.handleNextGen}
          handlePrevGen={this.handlePrevGen}
      />
      <GameField field={field} handleCellClick={this.handleCellClick}/>
      </div>
    );
  }
}
