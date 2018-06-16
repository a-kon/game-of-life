import React from 'react';
import CellProps from '../helpers';

export const Cell = ({ status, rowIndex, cellIndex, handleCellClick }) => (
  <div
    className={`cell ${status ? 'life' : 'empty'}`}
    onClick={() => handleCellClick(rowIndex, cellIndex)}
    role="presentational"
  />
);

Cell.propTypes = CellProps;

export default Cell;
