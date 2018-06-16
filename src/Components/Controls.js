import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  handleGameStart,
  handleReset,
  handleNextGen,
  handlePrevGen,
}) => (
  <div className="controls">
    <button className="play" onClick={handleGameStart}>play</button>
    <button className="reset" onClick={handleReset}>reset</button>
    <div className="generations">
      <h4>generations</h4>
      <div>
        <button className="next" onClick={handleNextGen}>next</button>
        <button className="prev" onClick={handlePrevGen}>prev</button>
      </div>
    </div>
  </div>
);

Controls.propTypes = {
  handleGameStart: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleNextGen: PropTypes.func.isRequired,
  handlePrevGen: PropTypes.func.isRequired,
};

export default Controls;
