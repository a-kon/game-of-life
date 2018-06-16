import React from 'react';
import RowProps from '../helpers';
import Cell from './Cell';

const Row = ({ row, rowIndex, handleCellClick }) => (
  <div className="game-field__row">
    {row.map((status, j) => (
      <Cell
        key={`${rowIndex}_${j}`}
        status={status}
        cellIndex={j} rowIndex={rowIndex}
        handleCellClick={handleCellClick}
      />
    ))}
  </div>
);

Row.propTypes = RowProps;

export default Row;
