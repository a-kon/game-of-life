import React from 'react';
import { FieldProps } from '../helpers';
import Row from './Row';


const GameField = ({ field, handleCellClick }) => (
  <div className="game-field">
   {field.map((row, i) => (
    <Row
      key={`row_${i}`}
      row={row}
      rowIndex={i}
      handleCellClick={handleCellClick}
    />
   ))}
  </div>
);

GameField.propTypes = FieldProps;

export default GameField;
