import PropTypes from 'prop-types';

export const CellProps = PropTypes.shape({
  status: PropTypes.bool.isRequired,
  rowIndex: PropTypes.number.isRequired,
  cellIndex: PropTypes.number.isRequired,
  handleCellClick: PropTypes.func.isRequired,
}).isRequired;

export const RowProps = PropTypes.shape({
  rowIndex: PropTypes.number.isRequired,
  handleCellClick: PropTypes.func.isRequired,
  row: PropTypes.arrayOf(CellProps),
}).isRequired;

export const FieldProps = PropTypes.shape({
  field: RowProps.isRequired,
  handleCellClick: PropTypes.func.isRequired,
}).isRequired;
