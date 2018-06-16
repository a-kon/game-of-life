import React from 'react';
import Controls from './Components/Controls';
import GameField from './Components/GameField';
import { getNextStepField, checkIsFieldEmpty } from './Logic/FieldCalcs';
import defaultField from './Logic/Presets';

const DEFAULT_FIELD = defaultField;

export default class App extends React.PureComponent {
  state = {
    isRunning: false,
    generation: 0,
    field: DEFAULT_FIELD,
    fieldHistory: [DEFAULT_FIELD],
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (!prevState.isRunning && this.state.isRunning) {
      this.stepTimer = setInterval(() => this.handleNextGen(), 250);
    }
    if (prevState.isRunning && !this.state.isRunning) {
      clearInterval(this.stepTimer);
    }
  }

  handleGameStart = () => this.setState({ isRunning: true })

  handleGameStop = () => this.setState({ isRunning: false })

  handleNextGenClick = () => {
    this.handleGameStop();
    this.handleNextGen();
  }

  handleNextGen = () => {
    this.handleChangeGeneration('next');
  }

  handlePrevGen = () => {
    this.handleChangeGeneration('prev');
  }

  handleChangeGeneration(direction) {
    const newField = getNextStepField(this.state.field);

    if (checkIsFieldEmpty(newField)) {
      return this.handleGameStop();
    }

    if (direction === 'next') {
      this.setState(({ generation, fieldHistory, field }) => ({
        generation: generation + 1,
        field: newField,
        fieldHistory: fieldHistory.slice(0, generation).concat([field]),
      }));

      return;
    }

    if (this.state.generation - 1 < 0) return;

    return this.setState(prevState => ({
      isRunning: false,
      generation: prevState.generation - 1,
      field: prevState.fieldHistory[prevState.generation - 1],
    }));
  }

  handleCellClick = (rowIndex, cellIndex) => {
    const field = this.state.field.slice();

    field[rowIndex][cellIndex] = !this.state.field[rowIndex][cellIndex];

    this.setState({ field });
  }

  render = () => {
    const { field, isRunning, generation } = this.state;

    return (
      <div id="main-wrapper">
      <Controls
        hasNoPast={generation <= 0}
        isRunning={isRunning}
        handleGameStart={this.handleGameStart}
        handleGameStop={this.handleGameStop}
        handleNextGen={this.handleNextGenClick}
        handlePrevGen={this.handlePrevGen}
      />
      <GameField field={field} handleCellClick={this.handleCellClick}/>
      </div>
    );
  }
}
