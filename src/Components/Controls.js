import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  handleGameStart,
  handleGameStop,
  handleNextGen,
  handlePrevGen,
  isRunning,
  hasNoPast,
}) => (
  <div className="controls">
    {
      !isRunning
      ? <button className="play" onClick={handleGameStart}>play</button>
      : <button className="reset" onClick={handleGameStop}>stop</button>
    }
    <div className="generations">
      <h4>generations</h4>
      <div>
        <button className="prev" disabled={hasNoPast} onClick={handlePrevGen}>prev</button>
        <button className="next" onClick={handleNextGen}>next</button>
      </div>
    </div>
  </div>
);

Controls.propTypes = {
  handleGameStart: PropTypes.func.isRequired,
  handleGameStop: PropTypes.func.isRequired,
  handleNextGen: PropTypes.func.isRequired,
  handlePrevGen: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  hasNoPast: PropTypes.bool.isRequired,
};

export default Controls;
